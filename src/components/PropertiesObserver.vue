<template>
  <div id="app">
    <div id="app-2">
      <p v-bind:title="message">
        Hover your mouse over me for a few seconds
        to see my dynamically bound title!
      </p>
    </div>
    <div id="app-3">
      <span v-if="seen">Now you see me</span>
    </div>
    <div id="app-4">
      <ol>
        <li v-for="todo in todos">
          {{ todo.text }}
        </li>
      </ol>
    </div>
    <div id="app-5">
      <p>{{ message5 }}</p>
      <button v-on:click="reverseMessage">Reverse Message</button>
    </div>
    <div id="app-6">
      <p v-once>{{ message5 }}</p>
      <input v-once v-model="message5">
    </div>
    <div id="app-7">
      <ol>
        <todo
          v-for="item in groceryList"
          v-bind:todo="item"
          v-bind:key="item.id">
        </todo>
      </ol>
    </div>
    <p>Using mustaches: {{ rawHtml }}</p>
    <p>Using v-html directive: <span v-html="rawHtml"></span></p>

    <div id="watch-example">
      <p>
        Posez votre question (réponse par Oui ou Non) :
        <input v-model="question">
      </p>
      <p>{{ answer }}</p>
    </div>
  </div>

</template>

<script>
  import Todo from './Todo'
  import Lodash from '../../node_modules/lodash/lodash.min'
  import Axio from '../../node_modules/axios/dist/axios.min'

  export default {
    name: "PropertiesObserver",
    data() {
      return {
        message: 'You loaded this page on ' + new Date().toLocaleString(),
        seen: true,
        todos: [
          {text: 'Learn JavaScript'},
          {text: 'Learn Vue'},
          {text: 'Build something awesome'}
        ],
        message5: 'Hello Vue.js!',
        groceryList: [
          {id: 0, text: 'Légumes'},
          {id: 1, text: 'Fromage'},
          {id: 2, text: 'Tout ce que les humains sont supposés manger'}
        ],
        rawHtml: "<p style='text-decoration: underline;'>Raw Html</p>",
        question: '',
        answer: 'Je ne peux pas vous donner une réponse avant que vous ne posiez une question !'
      }
    },
    components: {
      Todo,
    },
    methods: {
      reverseMessage: function () {
        this.message5 = this.message5.split('').reverse().join('')
      },
      getAnswer:
        Lodash.debounce(
          function () {
            if (this.question.indexOf('?') === -1) {
              this.answer = "Les questions contiennent généralement un point d'interrogation. ;-)"
              return
            }
            this.answer = 'Je réfléchis...'
            const vm = this
            Axio.get('https://yesno.wtf/api')
              .then(function (response) {
                vm.answer = _.capitalize(response.data.answer)
              })
              .catch(function (error) {
                vm.answer = "Erreur ! Impossible d'accéder à l'API." + error
              })
          },
          500 //millisecond
        )
    },
    watch: {
      // à chaque fois que la question change, cette fonction s'exécutera
      question: function (newQuestion, oldQuestion) {
        this.answer = "J'attends que vous arrêtiez de taper..."
        this.getAnswer()
      }
    }
  }
</script>

<style scoped>

</style>
