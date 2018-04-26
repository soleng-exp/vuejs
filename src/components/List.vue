<template>
  <div id="app" style="padding: 1.5rem">
    <div class="card-columns">
      <div id="app-1" class="card p-3">
        <div class="card-body">
          <h5 class="card-title">v-for item in items</h5>
          <div class="card-text">
            <ul id="example-1" class="list-group">
              <li v-for="item in items" class="list-group-item">
                {{ item.message }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="app-2" class="card p-3">
        <div class="card-body">
          <h5 class="card-title">v-for (value, key, index) in object</h5>
          <div class="card-text">
            <div v-for="(value, key, index) in object" :key="key">
              {{ index }}. {{ key }}: {{ value }}
            </div>
          </div>
        </div>
      </div>
      <div id="app-3" class="card p-3">
        <div class="card-body">
          <h5 class="card-title">v-for item in func</h5>
          <div class="card-text">
            <li v-for="n in evenNumbers">{{ n }}</li>
            <li v-for="n in even(numbers)">{{ n }}</li>
          </div>
        </div>
      </div>
      <div id="app-4" class="card p-3">
        <div class="card-body">
          <h5 class="card-title">v-for item in items (tpl)</h5>
          <div class="card-text">
            <ul>
              <template v-for="item in items">
                <li>{{ item.message }}</li>
                <li class="divider">_</li>
              </template>
            </ul>
          </div>
        </div>
      </div>
      <div id="app-5" class="card p-3">
        <div class="card-body">
          <h5 class="card-title">v-for item in items && v-if item.isComplete</h5>
          <div class="card-text">
            <ul v-if="todos.length">
              <li v-for="todo in todos" v-if="!todo.isComplete">
                {{ todo }}
              </li>
            </ul>
            <p v-else>Plus de tâche !</p>
          </div>
        </div>
      </div>
      <div id="app-6" class="card p-3">
        <div class="card-body">
          <h5 class="card-title">binding components</h5>
          <div id="todo-list-example" class="card-text">
            <input
              v-model="todoExample.newTodoText"
              v-on:keyup.enter="addNewTodo"
              placeholder="Add a todo"
              class="form-control"
            >
            <ul>
              <li
                is="todo"
                v-for="(todo, index) in todoExample.todos"
                v-bind:key="todo.id"
                v-bind:todo="todo"
                v-on:remove="todoExample.todos.splice(index, 1)"
              ></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Todo from './Todo'

  export default {
    name: "List",
    data() {
      return {
        'todoExample': {
          newTodoText: '',
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
          nextTodoId: 4
        },
        todos: [
          {
            isComplete: true,
            message: 'task1'
          },
          {
            isComplete: false,
            message: 'task3'
          },
          {
            message: 'task2'
          }
        ],
        items: [
          {message: 'Foo'},
          {message: 'Bar'}
        ],
        object: {
          firstName: 'John',
          lastName: 'Doe',
          age: 30
        },
        numbers: [1, 2, 3, 4, 5]
      }
    },
    components: {
      Todo,
    },
    computed: {
      evenNumbers: function () {
        return this.numbers.filter(function (number) {
          return number % 2 === 0
        })
      }
    },
    methods: {
      even: function (numbers) {
        return numbers.filter(function (number) {
          return number % 2 === 0
        })
      },
      addNewTodo: function () {
        this.todoExample.todos.push({
          id: this.todoExample.nextTodoId++,
          text: this.todoExample.newTodoText
        })
        this.todoExample.newTodoText = ''
      }
    }
  }
</script>

<style scoped>

</style>
