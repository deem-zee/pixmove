<template>
  <div class="product-list">
    <div class="card" v-for="product in products" :key="product.id">
      <p class="card-title">{{ product.title }}</p>
      <img class="card-image" :src="product.image" alt="">
      <p class="card-price">Цена: {{ product.price }} {{ currency }}</p>

      <div>
        <input type="number" v-model="amount">
        <span>кг</span>
      </div>

      <button @click="addToCart({product: product, amount: amount})"> В корзину </button>
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
      amount: null,
    };
  },
  computed: {
    ...mapGetters(['products'])
  },
  methods: {
    addToCart(params) {
      this.$store.dispatch('addToCart', params);
      this.amount = null;
    }
  },
  created() {
    // вызов функции получения продуктов из store и обновление списка каждые 2 секунды
    setInterval(() => {
      this.$store.dispatch('getProductsList')
    }, 2000)
  },
};
</script>

<style scoped> 

@media screen and (max-width: 420px) {
  .product-list {
    padding: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    
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
}

  @media screen and (min-width: 421px) and (max-width: 839px) {
  .product-list {
    padding: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .card {
    display: inline-block;
    width: 45%;
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
  }
  @media screen and (min-width: 840px) {
  .product-list {
    padding: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;

  }
  .card {
    display: inline-block;
    width: 30%;
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
  }






</style>
