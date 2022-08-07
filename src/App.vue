<template>
  <div id="app">
    <Header :currency="currency" class="header"></Header>
    <List :currency="currency"/>
    <Cart :currency="currency"/>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import List from './components/List.vue';
import Cart from './components/Cart.vue';

export default {
  name: 'App',
  data() {
    return {
      currency: 'VGTB',
    };
  },
  components: {
    Header,
    List,
    Cart,
  },
}
</script>

<style scoped>
body {
  padding: 0;
  box-sizing: border-box;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}

@media screen and(max-width: 420px) {
  /* body {
  margin: 0 !important;
  padding: 0;
  box-sizing: border-box;
} */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
  #app {
    width: 420px;
    display: flex;
  }
  .header {
    margin: 0 auto;
  }
}

@media screen and(min-width: 840px) {

}
</style>
