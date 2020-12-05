<template>
  <div id="app">
    <div class="container">
      <DropdownMenu></DropdownMenu>
    </div>
  </div>
</template>
<script>
import DropdownMenu from "@/components/uye_giris.vue";

export default {
  name: "app",
  components: {
    DropdownMenu,
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
