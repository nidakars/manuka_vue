<template>
    <div id= "app">
      <div class="container" >
         <DropdownMenu></DropdownMenu>
         <slider></slider>
        
      </div>
     
      
    </div>
</template>
<script>

import DropdownMenu from '@/components/mainMenu.vue';
import slider from "@/components/slider.vue";


export default {
  name: "app",
  components: {
    DropdownMenu, 
    slider
  
  }
};




</script>

<style scoped>
.class{
  
  padding: 10px;
}
#app2 {
  padding-top: 70px;
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