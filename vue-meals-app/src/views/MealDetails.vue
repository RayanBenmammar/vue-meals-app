<script setup>
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const meal = ref(null);
const ingredients = computed(() => {
  if (!meal.value) return [];
  const ingredients = [];
  Object.keys(meal.value).forEach((key) => {
    if (
      key.startsWith("strIngredient") &&
      meal.value[key] &&
      meal.value[key] !== " "
    ) {
      ingredients.push(meal.value[key]);
    }
  });
  return ingredients;
});

const measures = computed(() => {
  if (!meal.value) return [];
  const measures = [];
  Object.keys(meal.value).forEach((key) => {
    if (
      key.startsWith("strMeasure") &&
      meal.value[key] &&
      meal.value[key] !== " "
    ) {
      measures.push(meal.value[key]);
    }
  });
  return measures;
});
onMounted(() => {
  if (route.params.id) {
    fetch(`https://themealdb.com/api/json/v1/1/lookup.php?i=${route.params.id}`)
      .then((res) => res.json())
      .then((data) => (meal.value = data.meals ? data.meals[0] : null));
  }
});
</script>

<template>
  <div v-if="!meal" class="container">Meal not found</div>
  <div v-else class="container">
    <h1>{{ meal.strMeal }}</h1>
    <img :src="meal.strMealThumb" :alt="meal.strMeal" />
    <div class="meal-details">
      <div v-if="meal.strCategory">
        <strong>Category:</strong> {{ meal.strCategory }}
      </div>
      <div v-if="meal.strArea"><strong>Area:</strong> {{ meal.strArea }}</div>
      <div v-if="meal.strTags"><strong>Tags:</strong> {{ meal.strTags }}</div>
    </div>
    <div class="instructions">
      <p>{{ meal.strInstructions }}</p>
    </div>
    <div class="ingredients-measures">
      <ul class="ingredients">
        <li v-for="ingredient in ingredients" :key="ingredient">
          {{ ingredient }}
        </li>
      </ul>
      <ul class="measures">
        <li v-for="measure in measures" :key="measure">{{ measure }}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 800px;
}

.meal-details {
  display: flex;
  justify-content: space-between;
}
.instructions {
  padding: 1rem 0 1rem 0;
}
.ingredients-measures {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
</style>
