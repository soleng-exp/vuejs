// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueJWT from 'vuejs-jwt'
import Auth from "./services/auth";

Vue.use(VueJWT, {
  signKey: "secret"
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>',
  data: function() {
    return { user: {} };
  },
  computed: {
    auth: function() {
      return Auth;
    }
  },
  methods: {
    checkLocalStorage: function() {
      if (localStorage.user) {
        this.user = JSON.parse(localStorage.user);
        Vue.http.headers.common['Authorization'] = 'Bearer ' + this.user.api_token;
        Auth.authenticated = true;
      }
    },
    logout: function() {
      this.user = {};
      Auth.logout();
    }
  },
  created: function() {
    this.checkLocalStorage();
  }
})
