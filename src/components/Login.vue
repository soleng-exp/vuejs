<template>
  <login-form
    v-bind:userLogin="userLog"
    v-bind:errors="errors"
    v-on:login="login"
    v-if="!isLogged()"></login-form>
</template>

<script>
  import loginForm from './form/Login'
  import Axios from '../../node_modules/axios/dist/axios.min'

  export default {
    name: "Login",
    data() {
      return {
        userLog: {
          username: '',
          password: ''
        },
        errors: [],
      }
    },
    components: {
      loginForm
    },
    methods: {
      isLogged: function () {
        console.log(this.$jwt)
        if (true === this.$jwt.hasToken()) {
          console.log(this.$jwt.decode());
          return true
        }

        return false
      },
      login: function () {
        console.log(this.userLog)
        const vm = this
        Axios.post(process.env.API_URL + "/login", this.userLog).then(r => {
          localStorage.setItem(vm.$jwt.options.keyName, r.data.token)
        })
          .catch(e => {
            console.log('vue')
            console.log(this.errors)
            this.errors.push('test')
            console.log(e)
          });
      }
    }
  }
</script>

<style scoped>

</style>
