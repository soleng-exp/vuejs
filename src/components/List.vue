<template>
  <div>
    <ul id="example-1" class="list-group">
      <li v-for="item in items" class="list-group-item">
        {{ item.message }}
      </li>
    </ul>
    <div v-for="(value, key, index) in object" :key="key">
      {{ index }}. {{ key }}: {{ value }}
    </div>

    <li v-for="n in evenNumbers">{{ n }}</li>
    <li v-for="n in even(numbers)">{{ n }}</li>
    <ul>
      <template v-for="item in items">
        <li>{{ item.message }}</li>
        <li class="divider">_</li>
      </template>
    </ul>
    <ul v-if="todos.length">
      <li v-for="todo in todos" v-if="!todo.isComplete">
        {{ todo }}
      </li>
    </ul>
    <p v-else>Plus de tâche !</p>
    <div id="todo-list-example">
      <input
        v-model="todoExample.newTodoText"
        v-on:keyup.enter="addNewTodo"
        placeholder="Add a todo"
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
