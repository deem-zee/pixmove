<template>
  <div class="cart-list">
    <div v-for="item in spisok_dlya_rendera"><!-- спецификация рекомендует добавлять атрибут key в v-for-->
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cart: Array,
  },
  computed: {
    // название выбивается из общей стилистики, можно назвать listForRender
    // происходит изменение самой корзины, из-за этого отоборажение списка происходит неверно, инверсия спиcка после каждого нового добавленного товара.
    // для исправления надо создать новый массив, в который глубоким клонированием склонировать корзину и применять .reverse() уже к новому массиву
      spisok_dlya_rendera() {
          return this.cart.reverse();
          // предлагаемые изменения:
          // let reversed = [];
          // for(let item of this.cart) {
          //   reversed.push({amount: item.amount, price: item.price, title: item.title})
          // }
          // return reversed.reverse()
      },
  },
};
</script>

<style>

</style>
