<script setup>
import Meals from "@/components/Meals.vue";
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
const name = ref("");
const route = useRoute();
const meals = ref([]);

onMounted(() => {
  if (route.params.name) {
    name.value = route.params.name;
  }
});

watch(
  () => route.params.name,
  (newVal, oldVal) => {
    if (newVal === oldVal) return;
    name.value = route.params.name;
  }
);

watch(
  () => name.value,
  (newVal, oldVal) => {
    if (newVal === oldVal) return;
    if (newVal.length === 0) {
      meals.value = [];
      return;
    }
    fetch(`https://themealdb.com/api/json/v1/1/search.php?s=${name.value}`)
      .then((res) => res.json())
      .then((data) => (meals.value = data.meals ? data.meals : []));
  }
);
</script>

<template>
  <div class="title-container">
    <h1>Search Meals by Name</h1>
    <input
      type="text"
      name="name"
      id="name"
      placeholder="Meal name"
      v-model="name"
    />
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
