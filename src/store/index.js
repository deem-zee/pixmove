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
    // изменение состояния списка продуктов
    setProductsList(state, data) {
      state.products = data
    },
    // изменение состояния коризны (добавление товара)
    addProductToCart(state, payload) {
      let product = payload.product.title;
      let amount = 0;
      if (Boolean(payload.amount) === false) {
        amount = 0;
      } else {
        amount = Number((payload.amount * payload.product.price).toFixed(2));
        state.cart.push({product, amount});
      }
    },
    // изменение цены от общего количества товара, 
    addAmountToProduct(state, payload) {
      let product = state.cart.find(item => item.product === payload.product.title);
      let amount = payload.amount;
      if(Boolean(amount) === false) {
        amount = 0;
      } else {
        product.amount = Number(product.amount) + Number(amount) * payload.product.price;
      }
      
    }
  },
  actions: {
    // получение списка товаров из удаленного репозитория
    async getProductsList(ctx, data) {
        let result = await api.getProductsList();
        ctx.commit("setProductsList", result);
    },
    // добавление товара в корзину, если данного товара еще не было в корзине, если товар уже есть в корзине, добавляется только количество
    addToCart(context, payload) {
      let cartItem = payload.product;
      let amount = payload.amount;
      if (context.state.cart.find(item => (item.product === cartItem.title))) {
        context.commit('addAmountToProduct', payload)
      } else {
        context.commit('addProductToCart', payload)
      }
      
    }
  },
  getters: {
    // получение списка всех товаров для отрисовки
    products (state) {
      return state.products;
    },
    // получение инвертированной корзины
    getCart (state) {
      let reversed = [];
      for(let item of state.cart) {
        reversed.push({product: item.product, amount: item.amount});
      }
      return reversed.reverse();
    },
    // получение стоимости всей корзины
    getTotal (state) {
       let cart = state.cart;
       let total = 0;
       for (let product of cart) {
        total += product.amount
       }
       return total.toFixed(2);
    }
  },
})
