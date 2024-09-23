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
  <div>
    <input
      type="text"
      name="name"
      id="name"
      placeholder="Meal name"
      v-model="name"
    />
  </div>
  <Meals :meals="meals" />
</template>

<style scoped></style>
