<template>
  <div id="app">
    <DropdownMenu></DropdownMenu>
    <div class="container">
      <LeftMenu></LeftMenu>
    </div>
  </div>
</template>
<script>
import DropdownMenu from "@/components/mainMenu.vue";
import LeftMenu from "@/components/sepet.vue";

export default {
  name: "app",
  components: {
    DropdownMenu,
    LeftMenu,
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
