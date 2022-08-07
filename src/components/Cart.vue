<template>
  <div class="cart-list">
    <div v-for="item in cart" :key="item.product">
      {{ item.product }}: {{ item.amount }} {{currency}}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    currency: String
  },
  computed: {
      ...mapGetters(['cart'])
  },
};
</script>

<style scoped>

</style>
