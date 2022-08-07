<template>
  <div class="header">
    <h3>Товаров в корзине на: {{ getTotal }} {{ currency }}</h3>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  
  name: 'Header',
  props: {
    cart: Array,
    required: true,
    default: {},

    currency: String,
  },
  data() {
    return {
      cartPrice: 0,
    };
  },
  computed: {
   ...mapGetters(['getTotal']) 
  }
  // watch: {
  //   cart(cart) {
  //     let val = 0;
  //     cart.forEach((item) => {
  //       val += item.price * item.amount;
  //     });
  //     this.cartPrice = val;
  //   },
  // },
}
</script>

<style scoped>
  .header {
    padding: 10px;
    background: #e5e5e5;
    margin: 0 auto;
  }
</style>


