<script setup>
import { ref, computed, watch, onMounted } from "vue";
import { useRoute } from "vue-router";
import Meals from "@/components/Meals.vue";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const route = useRoute();
const letter = computed(() => route.params.letter);
const meals = ref([]);

onMounted(() => {
  if (route.params.letter) {
    fetch(
      `https://themealdb.com/api/json/v1/1/search.php?f=${route.params.letter}`
    )
      .then((res) => res.json())
      .then((data) => (meals.value = data.meals ? data.meals : []));
  }
});

watch(
  () => letter.value,
  (newVal, oldVal) => {
    if (newVal === oldVal) return;
    if (newVal.length === 0) {
      meals.value = [];
      return;
    }
    fetch(`https://themealdb.com/api/json/v1/1/search.php?f=${letter.value}`)
      .then((res) => res.json())
      .then((data) => (meals.value = data.meals ? data.meals : []));
  }
);
</script>

<template>
  <div>
    <h1>Meals by Letter</h1>
  </div>
  <div class="router-link">
    <RouterLink v-for="l in letters" :key="l" :to="`/by-letter/${l}`"
      >{{ l }}
    </RouterLink>
  </div>

  <Meals :meals="meals" />
</template>

<style scoped>
.router-link {
  display: inline-flex;
  gap: 0.5rem;
}
</style>
