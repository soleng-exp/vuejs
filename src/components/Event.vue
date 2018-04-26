<template>
  <div style="padding: 1.5rem">
    <div class="card-columns">
      <div id="app-1" class="card p-3">
        <div class="card-body">
          <h5 class="card-title">v-on:click</h5>
          <div class="card-text">
            <button v-on:click="counter += 1" class="btn btn-primary">Add 1</button>
            <p>Le bouton ci-dessus a été cliqué {{ counter }} fois.</p>
          </div>
        </div>
      </div>
      <div id="app-2" class="card p-3">
        <div class="card-body">
          <h5 class="card-title">v-on:click</h5>
          <div class="card-text">
            <button v-on:click="warn('Le formulaire ne peut être soumis pour le moment.', $event)"
                    class="btn btn-primary">
              Soumettre
            </button>
            <input v-model.number="age" type="number" class="form-control">
            <input v-model.trim="msg" class="form-control">
          </div>
        </div>
      </div>
      <div id="app-3" class="card p-3">
        <div class="card-body">
          <h5 class="card-title">v-on: with components</h5>
          <div class="card-text">
            <ul class="list-group">
              <li
                is="todo"
                v-for="(todo, index) in todos"
                v-bind:key="todo.id"
                v-bind:todo="todo"
                v-on:remove="todos.splice(index, 1)"
                class="list-group-item"
              ></li>
            </ul>
            <input
              v-model="newTodoText"
              v-on:keyup.enter="addNewTodo"
              placeholder="Add a todo"
              class="form-control"
            >
          </div>
        </div>
      </div>
    </div>
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
        newTodoText: ''
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
