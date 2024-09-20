<script setup> 
defineProps({
    tasks: Array
})
</script>

<template>
    <li v-for="(task, iTask) in tasks" :key="iTask" >
    {{ iTask }} - {{ task.nom }} - {{ task.id }} - {{ task.description }} - {{ task.creator }}
    </li>

</template>