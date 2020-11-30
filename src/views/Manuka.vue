<template>
  <div id="app">
    <div class="product">
      <product></product>
    </div>
  </div>
</template>

<script>
import Product from "@/components/product.vue";

export default {
  name: "app",
  components: {
    Product,
  },
};
</script>

<style  scoped>

</style>
