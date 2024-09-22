<script setup>
import Meals from "@/components/Meals.vue";
import { onMounted, ref } from "vue";

const meals = ref([]);

onMounted(() => {
  for (let i = 0; i < 10; i++) {
    fetch("https://themealdb.com/api/json/v1/1/random.php")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        meals.value.push(data.meals[0]);
      });
  }
});
</script>

<template>
  <div>
    <h1>Random Meals</h1>
  </div>
  <Meals :meals="meals" />
</template>

<style scoped></style>
