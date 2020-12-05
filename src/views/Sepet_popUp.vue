<template>
  <div id="app">
    <div class="container">
      <SepetPop></SepetPop>
      <Product></Product>
    </div>
    <div><h2>ayakkabı</h2></div>
  </div>
</template>
<script>
import SepetPop from "@/components/sepet_popup.vue";
import Product from "@/components/product.vue";

export default {
  name: "app",
  components: {
    SepetPop,
    Product,
  },
};
</script>

<style scoped>
.class {
  padding: 10px;
}
#app2 {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.container {
  position: relative;
}
</style>
