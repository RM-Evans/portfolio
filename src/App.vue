<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
import NavBar from './components/NavBar.vue'
</script>

<template>
<NavBar/>
  <!-- <HelloWorld msg="Hello Vue 3 + Vite" /> -->
  <router-view></router-view>
</template>

<style>
*{
  text-decoration: none;
  margin: 0;
  padding: 0;
  
  /* box-sizing: border-box; */
}
#app {

  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  color: #202124;
  margin-top: 20px;
  
}
</style>
