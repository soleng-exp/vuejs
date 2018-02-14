<template>
  <div>
    <div id="example-1">
      <button v-on:click="counter += 1">Add 1</button>
      <p>Le bouton ci-dessus a été cliqué {{ counter }} fois.</p>
    </div>
    <button v-on:click="warn('Le formulaire ne peut être soumis pour le moment.', $event)">
      Soumettre
    </button>
    <input v-model.number="age" type="number">
    <input v-model.trim="msg">

    <ul>
      <li
        is="todo"
        v-for="(todo, index) in todos"
        v-bind:key="todo.id"
        v-bind:todo="todo"
        v-on:remove="todos.splice(index, 1)"
      ></li>
    </ul>
    <input
      v-model="newTodoText"
      v-on:keyup.enter="addNewTodo"
      placeholder="Add a todo"
    >
  </div>
</template>

<script>
  import Todo from './Todo'

  export default {
    name: "Event",
    data() {
      return {
        msg: null,
        age: 0,
        counter: 0,
        todos: [
          {
            id: 1,
            text: 'Faire la vaisselle',
          },
          {
            id: 2,
            text: 'Sortir les poubelles',
          },
          {
            id: 3,
            text: 'Tondre la pelouse'
          }
        ],
        newTodoText:''
      }
    },
    components: {
      Todo,
    },
    methods: {
      warn: function (message, event) {
        // maintenant nous avons accès à l'évènement natif
        if (event) event.preventDefault()
        alert(message)
      },
      addNewTodo: function () {
        this.todos.push({
          id: this.nextTodoId++,
          text: this.newTodoText
        })
        this.newTodoText = ''
      }
    }
  }
</script>

<style scoped>

</style>
