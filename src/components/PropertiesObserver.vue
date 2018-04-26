<template>
  <div id="app" style="padding: 1.5rem">
    <div class="card-columns">
      <div id="app-2" class="card p-3">
        <div class="card-body">
          <h5 class="card-title">Title:Hover</h5>
          <p class="card-text" v-bind:title="message">
            Hover your mouse over me for a few seconds
            to see my dynamically bound title!
          </p>
        </div>
      </div>
      <div id="app-3" class="card p-3">
        <h5 class="card-title">v-if</h5>
        <div class="card-body">
          <span v-if="seen">Now you see me</span>
        </div>
      </div>
      <div id="app-4" class="card p-3">
        <h5 class="card-title">v-for in</h5>
        <div class="card-body">
          <ol>
            <li v-for="todo in todos">
              {{ todo.text }}
            </li>
          </ol>
        </div>
      </div>
      <div id="app-5" class="card p-3">
        <h5 class="card-title">Reverse</h5>
        <div class="card-body">
          <p>{{ message5 }}</p>
          <button v-on:click="reverseMessage" class="btn btn-primary">Reverse</button>
        </div>
      </div>
      <div id="app-6" class="card p-3">
        <h5 class="card-title">v-once</h5>
        <div class="card-body">
          <p v-once>{{ message5 }}</p>
          <input v-once v-model="message5" class="form-control">
        </div>
      </div>
      <div id="app-7" class="card p-3">
        <h5 class="card-title">components</h5>
        <div class="card-body">
          <ol>
            <todo
              v-for="item in groceryList"
              v-bind:todo="item"
              v-bind:key="item.id">
            </todo>
          </ol>
        </div>
      </div>
      <div id="app-8" class="card p-3">
        <h5 class="card-title">RawHTML</h5>
        <div class="card-body">
          <p>Using mustaches: {{ rawHtml }}</p>
          <p>Using v-html directive: <span v-html="rawHtml"></span></p>
        </div>
      </div>
      <div id="watch-example" class="card p-3">
        <h5 class="card-title">Event Watch</h5>
        <div class="card-body">
          <p>
            Posez votre question (réponse par Oui ou Non) :
            <input v-model="question" class="form-control">
          </p>
          <p>{{ answer }}</p>
        </div>
      </div>
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
