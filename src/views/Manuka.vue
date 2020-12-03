<template>
    <div id= "app">
      <div class="container" >
         <DropdownMenu></DropdownMenu>
         <div><Liste></Liste>
           
           <Product></Product>
         <BenzerUrunler></BenzerUrunler>
         </div>
      </div>
      
      
      

    </div>
</template>
<script>

import DropdownMenu from '@/components/mainMenu.vue';
import Liste from "@/components/list.vue";
import Product from "@/components/product.vue"
import BenzerUrunler from "@/components/benzer_urunler.vue"

export default {
  name: "app",
  components: {
    DropdownMenu,
    Liste,
    Product,
    BenzerUrunler
  
  }
};
</script>

<style scoped>

</style>