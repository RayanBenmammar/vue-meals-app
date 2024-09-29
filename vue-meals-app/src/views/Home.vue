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
  <div class="title-container">
    <h1>Random Meals</h1>
  </div>
  <div class="meals-container">
    <Meals :meals="meals" />
  </div>
</template>

<style scoped>
.title-container {
  padding-left: 2rem;
  padding-right: 2rem;
}

.meals-container {
  padding: 2rem;
}
</style>
