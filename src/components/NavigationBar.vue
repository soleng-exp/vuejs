<template>
  <nav id="navbar-main" class="navbar navbar-expand-lg navbar-light bg-primary">
    <a class="navbar-brand" href="#">
      <img src="../assets/logo.png" width="30" height="30" alt="">
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav  mr-auto">
        <li class="nav-item" v-for="route in routes">
          <router-link :to="route" class="nav-link" active-class="active" exact>
            {{ route.title }}
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {
    name: "NavigationBar",
    computed: {
      routes: function () {
        let routes = [];
        this.$router.options.routes.forEach(
          function (route) {
            if (route.hasOwnProperty('title')) {
              routes.push(route);
            }
          }
        );
        return routes;
      }
    }
  }
</script>

<style scoped>

</style>
