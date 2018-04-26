<template>
  <form method="post" v-on:submit.prevent.stop="">
    <p v-model="errors" v-if="errors.length">
      <b>Please correct the following error(s):</b>
      <ul>
        <li v-for="error in errors">{{ error }}</li>
      </ul>
    </p>
    <div class="form-group">
      <input type="text" name="username" v-model="userLogin.username"/>
    </div>
    <div class="form-group">
      <input type="password" name="password" v-model="userLogin.password"/>
    </div>
    <button type="submit" @click.preventDefault="$emit('login')">Authentication</button>
  </form>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return  {
        errors: [],
      }
    },
    props: {
      userLogin: {
        username: String,
        password: String
      },
    }
  }
</script>

<style scoped>

</style>
