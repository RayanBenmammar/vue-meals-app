<script setup>
import MealItem from "./MealItem.vue";

defineProps({
  meals: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div class="grid">
    <MealItem v-for="meal in meals" :key="meal.id" :meal="meal" class="meal" />
  </div>
  <div v-if="!meals.length">There is no meal here</div>
</template>

<style scoped>
.grid {
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
}

.meal:hover {
  transition: all 0.3s ease-in-out;
  transform: scale(1.05);
}
</style>
