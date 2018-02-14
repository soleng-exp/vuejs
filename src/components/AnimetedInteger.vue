<template>
  <span>{{ tweeningValue }}</span>
</template>

<script>
  import Tween from '../../node_modules/tween.js/src/Tween'

  export default {
    name: "animated-integer",
    props: {
      value: {
        type: Number,
        required: true
      }
    },
    data() {
      return {
        tweeningValue: 0
      }
    },
    watch: {
      value: function (newValue, oldValue) {
        this.tween(oldValue, newValue)
      }
    },
    mounted: function () {
      this.tween(0, this.value)
    },
    methods: {
      tween: function (startValue, endValue) {
        var vm = this

        function animate() {
          if (Tween.update()) {
            requestAnimationFrame(animate)
          }
        }

        console.log({tweeningValue: startValue})
        new Tween.Tween({tweeningValue: startValue})
          .to({tweeningValue: endValue}, 500)
          .onUpdate(function () {
            vm.tweeningValue = this.tweeningValue.toFixed(0)
          })
          .start()

        animate()
      }
    }
  }
</script>

<style scoped>

</style>
