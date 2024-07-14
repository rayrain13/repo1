<script setup>
import { onMounted } from 'vue';
import { useCounterStore } from '@/stores/counter';
const counterStore = useCounterStore()
console.log(counterStore);

onMounted(() => {
  counterStore.getList()
})

</script>

<template>
  <button @click="counterStore.increment">{{ counterStore.count }}</button>
  {{ counterStore.doubleCount }}

  <ul>
    <li v-for="item in counterStore.list" :key="item.id"> {{ item.name }}</li>
   </ul>
</template>

<style scoped></style>
