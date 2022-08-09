<template>
  <div class="product-list">
    <div class="card" v-for="(product,index) in products" :key="index" >
      <p class="card-title">{{ product.title }}</p>
      <img class="card-image" :src="product.image" alt="">
      <p class="card-price">Цена: {{ product.price }} {{ currency }}</p>

      <div>
        <input type="number" v-model="amount[index]">
        <span>кг</span>
      </div>
      <button @click="addToCart({product: product, amount: amount[index]})"> В корзину </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    currency: String,
  },
  data() {
    return {
      amount: []
    };
  },
  computed: {
    ...mapGetters(['products']),
  },
  methods: {
    addToCart(params) {
      this.$store.dispatch('addToCart', params);
      this.amount = [];
    }
  },
  created() {
    setInterval(() => {
    this.$store.dispatch('getProductsList');
    }, 2000)
  },
};
</script>

<style scoped> 

  .product-list {
    padding: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .card {
    display: inline-block;
    border: 1px solid #908888;
    border-radius: 5px;
    text-align: center;
    padding: 10px;
    box-sizing: border-box;
  }
  
  
  .card-image {
    width: 100%;
  }
  button {
    padding: 5px;
    margin: 5px;
  }
  @media screen and (max-width: 420px) {
    .card {
      width: 100%;
    }
  }

  @media screen and (min-width: 421px) and (max-width: 839px) {
  .card {
    width: 50%;
  }
  
  }
  @media screen and (min-width: 840px) {
  .card {
    width: 33.3%;
  }
  }
</style>
