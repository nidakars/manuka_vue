<template>
    <div id= "app">
      <div class="container" >
         <DropdownMenu></DropdownMenu>
         <div><Liste></Liste>
           <LeftMenu></LeftMenu>
           
         <ProductButton></ProductButton>
         </div>
      </div>
      
      
      

    </div>
</template>
<script>

import DropdownMenu from '@/components/mainMenu.vue';
import LeftMenu from "@/components/leftMenu.vue";
import ProductButton from "@/components/ProductButtons/ProductButton.vue"
import Liste from "@/components/list.vue";

export default {
  name: "app",
  components: {
    DropdownMenu,
    LeftMenu,
    ProductButton,
    Liste
  
  }
};
</script>

<style scoped>

</style>