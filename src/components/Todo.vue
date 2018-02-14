<template>
  <li>
    {{ todo.text }}
    <button v-on:click="remove" v-bind:class="classes" class="btn zmdi"></button>
  </li>
</template>

<script>
  export default {
    name: "todo-item",
    props: ['todo'],
    data() {
      return {
        baseClass: 'btn-danger zmdi-delete',
        confirmClass: 'btn-warning zmdi-info-outline',
        classes: '',
        askRemove: false
      }
    },
    created: function () {
      this.classes = this.baseClass
    },
    methods: {
      remove: function () {

        const invert = () => {
          this.askRemove = !this.askRemove
          if (this.classes === this.confirmClass) {
            this.classes = this.baseClass
          } else {
            this.classes = this.confirmClass
          }
        }
        if (this.askRemove) {
          this.$emit('remove')
        } else {
          invert()

          setTimeout(() => {
            invert()
          }, 10000);
        }
      }
    }
  }
</script>

<style scoped>

</style>
