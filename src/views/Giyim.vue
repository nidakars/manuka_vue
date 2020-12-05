<template>
  <div id="app">
    <DropdownMenu></DropdownMenu>
    <Liste></Liste>
    <LeftMenu></LeftMenu>
    <ProductButton> </ProductButton>
  </div>
</template>
<script>
import DropdownMenu from "@/components/mainMenu.vue";
import LeftMenu from "@/components/leftMenu.vue";
import ProductButton from "@/components/ProductButtons/ProductButton.vue";
import Liste from "@/components/list.vue";

export default {
  name: "app",
  components: {
    DropdownMenu,
    LeftMenu,
    ProductButton,
    Liste,
  },
};
</script>

<style scoped>
.inner {
  float: left;
  width: 100%;
}

.left {
  padding-left: 0;
  box-sizing: border-box;
  display: block;
}

.right {
  max-width: 100%;

  display: block;
  border-bottom: 1px solid #e5e5e5;
  margin-bottom: 40px;
  margin-left: -10px;
  margin-right: -10px;
  clear: both;
  display: block;
}
</style>
