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
    currency: String,
  },
  data() {
    return {
    };
  },
  computed: {
   ...mapGetters(['getTotal']) 
  }
}
</script>

<style scoped>
  .header {
    padding: 10px;
    background: #e5e5e5;
    margin: 0 auto;
  }
</style>


