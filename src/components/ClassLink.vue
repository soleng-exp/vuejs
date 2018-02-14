<template>
  <div>
    <h2>v-bind:class</h2>
    <div v-bind:class="{ active: isActive }">
      <div v-bind:class="classObject">
        <p>
          _="classObject"
        </p>
      </div>
      <div v-bind:class="[activeClass, errorClass]">
        <p>
          _="[activeClass, errorClass]"
        </p>
      </div>
      <div v-bind:class="[isActive ? activeClass : '', errorClass]">
        <p>
          _="[isActive ? activeClass : '', errorClass]"
        </p>
      </div>
      <div v-bind:class="[{ active: isActive }, errorClass]">
        _="[{ active: isActive }, errorClass]
      </div>
    </div>
    <h2>v-bind:style</h2>
    <div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }">
      <p>
        _="{ color: activeColor, fontSize: fontSize + 'px' }"
      </p>
    </div>
    <div v-bind:style="styleObject">
      <p>
        _="styleObject"
      </p>
    </div>
    <div v-bind:style="[baseStyles, overridingStyles]">
      _="[baseStyles, overridingStyles]"
    </div>
    <div v-bind:style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }">
      <p>
        2.3.0+
      </p>
      <p>
        _="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }"
      </p>
    </div>
    <template v-if="loginType === 'username'">
      <label>Nom d'utilisateur</label>
      <input placeholder="Entrez votre nom d'utilisateur">
    </template>
    <template v-else>
      <label>Email</label>
      <input placeholder="Entrez votre adresse email">
    </template>
  </div>
</template>

<script>
  export default {
    name: "ClassLink",
    data() {
      return {
        loginType: 'username',
        isActive: true,
        activeClass: 'active',
        errorClass: 'text-danger',
        activeColor: 'red',
        fontSize: 20,
        styleObject: {
          color: 'red',
          fontSize: '13px'
        }
      }
    },
    computed: {
      classObject: function () {
        return {
          active: this.isActive && !this.error,
          'text-danger': this.error && this.error.type === 'fatal'
        }
      }
    }
  }
</script>

<style scoped>

</style>
