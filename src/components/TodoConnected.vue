<template>
  <div id="todo-list-example">
    <input
      v-model="newTodoText"
      v-on:keyup.enter="addTask()"
      placeholder="Add a todo"
    >
    <p>{{ newTodoText}}</p>
    <p>{{ answer }}</p>
    <ul class="list-group">
      <li class="list-group-item"
          is="todo"
          v-for="(todo, index) in todoList"
          v-bind:key="todo.id"
          v-bind:todo="todo"
          v-on:remove="remove(index)"
      ></li>
    </ul>
  </div>
</template>

<script>
  import Axios from '../../node_modules/axios/dist/axios.min'
  import Todo from './Todo'

  export default {
    name: "TodoConnected",
    data() {
      return {
        newTodoText: '',
        todoList: [],
        answer: "waiting..."
      }
    },
    components: {
      Todo,
    },
    created: function () {
      const apiUrl = "http://localhost:1323/tasks"
      let vm = this
      Axios.get(apiUrl)
        .then(response => {
          response.data.items.forEach(value => {
            value['text'] = value.name
          })
          vm.todoList = response.data.items
          vm.answer = ""
          if (vm.todoList.length <= 0)
            vm.answer = "Empty"
        }).catch(error => {
        vm.answer = "Failed." + error
      })
    },
    methods: {
      addTask: function () {
        const vm = this
        const apiUrl = "http://localhost:1323/tasks"
        Axios.put(apiUrl, {
          name: vm.newTodoText
        }).then(r => {
          vm.todoList.push({
            id: r.data.created,
            name: vm.newTodoText,
            text: vm.newTodoText
          })
        })
          .catch(e => console.log(e));

        // this.newTodoText = ''
      },
      remove: function (index) {
        const apiUrl = "http://localhost:1323/tasks"
        Axios.delete(apiUrl + "/" + this.todoList[index].id).then(r => {
          this.todoList.splice(index, 1)
        })
          .catch(e => console.log(e));
      }
    }
  }
</script>

<style scoped>

</style>
