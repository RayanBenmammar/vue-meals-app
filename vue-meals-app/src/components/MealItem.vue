<script setup>
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import Tag from "./Tag.vue";
const props = defineProps({
  meal: {
    type: Object,
    required: true,
  },
});

const tags = ref(props.meal.strTags ? props.meal.strTags?.split(",") : []);
const category = ref(props.meal.strCategory);
const finalTags = computed(() => {
  const tmp = [...tags.value];
  if (category.value) {
    tmp.unshift(category.value);
  }
  return tmp;
});
const router = useRouter();

const goToMeal = () => {
  router.push(`/meal/${props.meal.idMeal}`);
};
</script>

<template>
  <article>
    <header>{{ meal.strMeal }}</header>
    <img :src="meal.strMealThumb" :alt="meal.strMeal" @click="goToMeal" />
    <footer>
      <div class="footer-container">
        <Tag v-for="tag in finalTags" :key="tag" :name="tag" />
      </div>
    </footer>
  </article>
</template>

<style scoped>
.footer-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

img {
  cursor: pointer;
}
</style>
