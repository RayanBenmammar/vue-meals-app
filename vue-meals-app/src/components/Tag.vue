<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="container-tag">
    {{ name }}
  </div>
</template>

<style scoped>
.container-tag {
  background-color: blanchedalmond;
  color: #525f7a;
  padding: 0.5rem;
  border-radius: 0.5rem;
}
</style>
