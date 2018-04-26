<template>
  <div id="app">
    <navigation-bar></navigation-bar>
    <router-view/>
  </div>
</template>

<script>
  import NavigationBar from "./components/NavigationBar";

  const jquery = require('../node_modules/jquery/dist/jquery.min.js');
  const bootstrap = require('../node_modules/bootstrap/dist/js/bootstrap.min.js');

  export default {
    name: 'App',
    components: {
      NavigationBar
    }
  }
</script>

<style>
  @import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
  @import "../node_modules/material-design-iconic-font/dist/css/material-design-iconic-font.min.css";
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  #navbar-main {
    margin-top: 16px;
    margin-bottom: 16px;

  }

  .bg-primary {
    background-color: white!important;
  }
</style>
