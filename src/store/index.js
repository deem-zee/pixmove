import api from '../../api/products.js';
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    cart: []
  },
  mutations: {
    setProductsList(state, data) {
      state.products = data
    },

    addProductToCart(state, payload) {
      let product = payload.product.title;
      let amount = payload.amount * payload.product.price;
      state.cart.push({product, amount});
    },
    addAmountToProduct(state, payload) {
      let product = state.cart.find(item => item.product === payload.product.title);
      let amount = payload.amount;
      product.amount = Number(product.amount) + Number(amount) * payload.product.price;

    }
  },
  actions: {
    async getProductsList(ctx, data) {
        let result = await api.getProductsList();
        ctx.commit("setProductsList", result);
    },

    addToCart(context, payload) {
      let cartItem = payload.product;
      let amount = payload.amount;
      if (context.state.cart.find(item => (item.product === cartItem.title))) {
        console.log('true');
        context.commit('addAmountToProduct', payload)
      } else {
        context.commit('addProductToCart', payload)
      }
      
    }
  },
  getters: {
    products (state) {
      return state.products;
    },
    cart (state) {
      return state.cart.reverse();
    },
    getTotal (state) {
       let cart = state.cart;
       let total = 0;
       for (let product of cart) {
        total += product.amount
       }
       return total.toFixed(2);
    }
  },
  modules: {
  }
})
