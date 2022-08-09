<template>
  <div class="cart-list">
    <div v-for="(item, index) in getCart" :key="index">
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
