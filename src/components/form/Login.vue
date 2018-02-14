<template>
  <form method="post" v-on:submit.prevent.stop="">
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
