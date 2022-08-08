<template>
  <div class="cart-list">
    <div v-for="item in getCart" :key="item.product">
      <!-- {{ item.product }}: {{ item.amount }} {{currency}}
       -->
       {{item}}
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
      ...mapGetters(['getCart'])
  },
};
</script>

<style scoped>

</style>
