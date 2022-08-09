<template>
  <div class="product-list">
    <div class="card" v-for="product in products" :style="{width: cardsWidth + '%'}"> <!-- спецификация рекомендует добавлять атрибут key в v-for. В данном случае,
    этот атрибут может быть использован для определения принадлежности конкретного input  -->
      <p class="card-title">{{ product.title }}</p>
      <img class="card-image" :src="product.image" alt="">
      <p class="card-price">Цена: {{ product.price }} {{ currency }}</p>

      <div>
        <input type="number" ref="amount" :id="product.id">
        <span>кг</span>
      </div>

      <button @click="addToCart(product)"> В корзину </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currency: String,
  },
  data() {
    return {
      products: [],
    };
  },
  computed: {
    cardsWidth() {
      let width = window.innerWidth;
      let count = 1;
        if (width > '840px') {
        count = 3;
      } else if ((width > '420px' && width < '840px')) {
        count = 2;
      }

      // предлагаемые изменения(или переписать в медиазапросы):
      // if (width > 840) {
      //   count = 3;
      // } 
      // else if (width > 420 && width < 840) {
      //   count = 2;
      // }
      
      return 100 / count;
    },
  },
  methods: {
    // запрос на получение списка товаров идет каждую секунду вместо каждых 2 секунд по ТЗ
    startPricesMonitoring() {
      setInterval(this.getList, 1000);
    },
    async getList() {
      let data = await this.$store.dispatch('getProductsList');

      this.products = data;
    },
    addToCart(product) {
      let amount = this.$refs.amount.find((input) => input.id === product.id).value;

      let data = {
        amount,
        price: product.price,
        title: product.title,
      };
      this.$parent.cart.push(data);
      // после добавления товара в корзину не в поле инпута остается введенное количество товара
    },
  },
  created() {
    this.startPricesMonitoring();
  },
};
</script>

<style>
/* style  без scoped. при использовании scoped стили родительского компонента не будут оказывать влияние на дочерние элементы компонента, 
кроме root-элемента дочернего компонента  */ 
  .product-list {
    padding: 10px;
  }

  .card {
    display: inline-block;
    width: 100%;
    border: 1px solid #908888;
    border-radius: 5px;
    text-align: center;
    padding: 10px;
  }
  .card-image {
    width: 100%;
  }
  button {
    padding: 5px;
    margin: 5px;
  }

</style>
