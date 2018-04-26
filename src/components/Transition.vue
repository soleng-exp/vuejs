<template>
  <div style="padding: 1.5rem">
    <div class="card-columns">
      <div id="app-1" class="card p-3">
        <div class="card-body">
          <h5 class="card-title btn btn-primary" v-on:click="show = !show">Permuter</h5>
          <div class="card-text">
            <transition name="slide-fade">
              <p v-if="show">bonjour</p>
            </transition>
            <transition name="fade">
              <p v-if="show">bonjour</p>
            </transition>
            <transition name="bounce">
              <p v-if="show">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </transition>
            <transition
              name="custom-classes-transition"
              enter-active-class="animated tada"
              leave-active-class="animated bounceOutRight"
            >
              <p v-if="show">bonjour</p>
            </transition>
          </div>
        </div>
      </div>
      <div id="app-2" class="card p-3">
        <div class="card-body">
          <h5 class="card-title">counter animated</h5>
          <div class="card-text">
            <input v-model.number="number" type="number" step="20" class="form-control">
            <p>{{ animatedNumber }}</p>
          </div>
        </div>
      </div>
      <div id="app-3" class="card p-3">
        <div class="card-body">
          <h5 class="card-title">color trans</h5>
          <div class="card-text">
            <input
              v-model="colorQuery"
              v-on:keyup.enter="updateColor"
              placeholder="Entrer une couleur"
              class="form-control"
            >
            <button v-on:click="updateColor">Mettre à jour</button>
            <p>Aperçu :</p>
            <span
              v-bind:style="{ backgroundColor: tweenedCSSColor }"
              class="example-7-color-preview"
            ></span>
            <p>{{ tweenedCSSColor }}</p>
          </div>
        </div>
      </div>
      <div id="app-4" class="card p-3">
        <div class="card-body">
          <h5 class="card-title">input trans</h5>
          <div class="card-text">
            <input v-model.number="firstNumber" type="number" step="20" class="form-control"/> +
            <input v-model.number="secondNumber" type="number" step="20" class="form-control"/> =
            {{ result }}
            <p>
              <animated-integer v-bind:value="firstNumber"></animated-integer>
              +
              <animated-integer v-bind:value="secondNumber"></animated-integer>
              =
              <animated-integer v-bind:value="result"></animated-integer>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Tween from '../../node_modules/tween.js/src/Tween'
  import ColorJs from '../../node_modules/color-js/color'
  import AnimatedInteger from './AnimetedInteger'

  export default {
    name: "Transition-demo",
    data() {
      return {
        show: true,
        //
        number: 0,
        animatedNumber: 0,
        //
        colorQuery: '',
        color: {
          red: 0,
          green: 0,
          blue: 0,
          alpha: 1
        },
        tweenedColor: {},

        firstNumber: 20,
        secondNumber: 40
      }
    },
    components: {
      AnimatedInteger
    },
    created: function () {
      this.tweenedColor = Object.assign({}, this.color)
    },
    watch: {
      number: function (newValue, oldValue) {
        var vm = this

        function animate() {
          if (Tween.update()) {
            requestAnimationFrame(animate)
          }
        }

        new Tween.Tween({tweeningNumber: oldValue})
          .easing(Tween.Easing.Quadratic.Out)
          .to({tweeningNumber: newValue}, 500)
          .onUpdate(function () {
            vm.animatedNumber = this.tweeningNumber.toFixed(0)
          })
          .start()

        animate()
      },
      color: function () {
        function animate() {
          if (Tween.update()) {
            requestAnimationFrame(animate)
          }
        }

        new Tween.Tween(this.tweenedColor)
          .to(this.color, 750)
          .start()

        animate()
      }
    },
    computed: {
      tweenedCSSColor: function () {
        return new ColorJs({
          red: this.tweenedColor.red,
          green: this.tweenedColor.green,
          blue: this.tweenedColor.blue,
          alpha: this.tweenedColor.alpha
        }).toCSS()
      },
      result: function () {
        return this.firstNumber + this.secondNumber
      }
    },
    methods: {
      updateColor: function () {
        this.color = new ColorJs(this.colorQuery).toRGB()
        this.colorQuery = ''
      }
    }
  }
</script>

<style scoped>
  @import "../../node_modules/animate.css/animate.min.css";

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
  {
    opacity: 0;
  }

  .slide-fade-enter-active {
    transition: all .3s ease;
  }

  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */
  {
    transform: translateX(10px);
    opacity: 0;
  }

  .bounce-enter-active {
    animation: bounce-in .5s;
  }

  .bounce-leave-active {
    animation: bounce-in .5s reverse;
  }

  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }

  .example-7-color-preview {
    display: inline-block;
    width: 50px;
    height: 50px;
  }

</style>
