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
    // изменение состояния корзины (добавление товара). можно сделать объединение количества продукта при повторном добавлении одинаковых продуктов в корзину,
    // для наглядности работы инверсии корзины оставлена вресия без объединения количества товара
    addProductToCart(state, payload) {
      let product = payload.product.title;
      let price = payload.product.price;
      let amount = payload.amount;
      state.cart.push({product, amount, price});
    },
  },
  actions: {
    // получение списка товаров из удаленного репозитория
    async getProductsList(ctx, data) {
        let result = await api.getProductsList();
        ctx.commit("setProductsList", result);
    },
    // добавление товара в корзину
    addToCart(context, payload) {
      if(payload.amount > 0) {
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
        reversed.push({product: item.product, amount: item.amount, price: item.price});
      }
      return reversed.reverse();
    },
    // получение стоимости всей корзины
    getTotal (state) {
       let cart = state.cart;
       let total = 0;
       for (let product of cart) {
        total += product.amount * product.price;
       }
       return total.toFixed(2);
    }
  },
})
