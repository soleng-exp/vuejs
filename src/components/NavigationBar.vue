<template>
  <nav class="nav  nav-pills">
    <li class="nav-item" v-for="route in routes">
      <router-link :to="route" class="nav-link" active-class="active" exact>
        {{ route.title }}
      </router-link>
    </li>
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
