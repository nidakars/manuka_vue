<template>
  <div id="app">
    <!--<div id="nav">
       <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> 
      <router-link to="/Manuka"><img src=".\assets\manuka-logo-yeni.png" ></router-link>
      <router-link to="/indirim">İNDİRİM</router-link>
      <router-link to="/yeni">YENİ</router-link>
      <router-link to="/giyim">GİYİM</router-link>
      <router-link to="/canta">ÇANTA</router-link>
      <router-link to="/aksesuar">AKSESUAR</router-link>
      <router-link to="/ayakkabi">AYAKKABI</router-link>
      <router-link to="/corap">ÇORAP</router-link> 
    </div>-->
    <router-view></router-view> 
  </div>
</template>

<style>
@import "./assets/styles/styles.css";
#app {
  font-family: Poppins, sans-serif !important;
  
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 0 30px;
}

#img {
  padding: 0 40px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
