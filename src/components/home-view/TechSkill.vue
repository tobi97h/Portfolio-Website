<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  percentage: {
    type: Number,
    required: true,
  }
})
</script>

<template>
  <div class="tech-skill">
    <h4>{{ title }}</h4>
    <p>{{ text }}</p>
    <div class="skill-bar">
      <div class="skill-bar-fill" :style="{ width: percentage + '%' }"></div>
    </div>
  </div>
</template>

