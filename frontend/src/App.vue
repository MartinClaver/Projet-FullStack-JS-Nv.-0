<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Task from './components/Task.vue'
import AddTask from './components/AddTask.vue'
import { ref } from 'vue'

let tasks = ref([])
fetch('http://localhost:3000/get-task').then(response => response.json())
.then(backendTasks => {
  tasks.value = tasks.value.concat(backendTasks)
  console.log(backendTasks)
})
</script>

<template>
  <AddTask />
  <Task :tasks="tasks"/>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
