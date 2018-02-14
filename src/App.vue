<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hr>
    <navigation-bar></navigation-bar>
    <hr>
    <router-view/>
  </div>
</template>

<script>
  import NavigationBar from "./components/NavigationBar";

  export default {
    name: 'App',
    components: {
      NavigationBar
    }
  }
</script>

<style>
  @import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
  @import "../node_modules/bootstrap-vue/dist/bootstrap-vue.min.css";
  @import "../node_modules/material-design-iconic-font/dist/css/material-design-iconic-font.min.css";
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
