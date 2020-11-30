<template>
    <div id= "app">
      <div class="container" >
          <DropdownMenu></DropdownMenu>
          <LeftMenu></LeftMenu>
      </div>
      <div><h2>yeni</h2></div>

    </div>
</template>
<script>

import DropdownMenu from '@/components/mainMenu.vue';
import LeftMenu from "@/components/leftMenu.vue";

export default {
  name: "app",
  components: {
    DropdownMenu,
    LeftMenu
  
  }
};
</script>


<style scoped>
.class{
  
  padding: 10px;
}
#app2 {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.container{
  position: relative;
}
</style>