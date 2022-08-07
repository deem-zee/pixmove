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
import { mapGetters, mapActions } from 'vuex'

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
    // cardsWidth() {
    //   let width = window.innerWidth;
    //   let count = 1;
    //   if (width > '840px') {
    //     count = 3;
    //   } else if ((width > '420px' && width < '840px')) {
    //     count = 2;
    //   }

    //   return 100 / count;
    // },

    ...mapGetters(['products'])
  },
  methods: {
    ...mapActions(["addToCart"]),
    // addToCart() {
    //   this.$store.dispatch('addToCart');
    //   this.amount = null;
    // }
  },
  created() {
    setInterval(() => {
      this.$store.dispatch('getProductsList')
    }, 2000)
  },
};
</script>

<style scoped> 


@media screen and (max-width: 420px) {
  .product-list {
    width: 420px;
    padding: 10px;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  }
  .card {
    width: 350px;
    
  }
}

@media screen and(min-width:840px) {
  .product-list {
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
    .card {
    /* display: inline-block; */
    width: 30%;
    border: 1px solid #908888;
    border-radius: 5px;
    text-align: center;
    padding: 10px;
    box-sizing: border-box;
  }
  .card-image {
    width: 30%;
  }
  button {
    padding: 5px;
    margin: 5px;
  }
}
  

</style>
