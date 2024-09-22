<script setup>
defineProps({
  meals: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div>
    <h2>Meals</h2>
    <ul>
      <li v-for="meal in meals" :key="meal.id">
        <a :href="meal.url">{{ meal.strMeal }}</a>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
