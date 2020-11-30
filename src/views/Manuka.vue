<template>
    <div id= "app">
      <div class="container" >
         <DropdownMenu></DropdownMenu>
         <div><Liste></Liste>
           
           <Product></Product>
         
         </div>
      </div>
      
      
      

    </div>
</template>
<script>

import DropdownMenu from '@/components/mainMenu.vue';
import Liste from "@/components/list.vue";
import Product from "@/components/product.vue"

export default {
  name: "app",
  components: {
    DropdownMenu,
    Liste,
    Product
  
  }
};
</script>

<style scoped>

</style>