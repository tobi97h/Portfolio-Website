<script lang="ts" setup>
import { ref } from 'vue'
import type { Ref } from 'vue'
const isOpen: Ref<boolean> = ref(false)
</script>

<template>
  <nav id="navbar">
    <div class="open-button" @click="isOpen = true"></div>
    <div class="nav-link-wrapper" :class="{ open : isOpen}">
      <div class="close-button" @click="isOpen = false"></div>
    </div>
  </nav>
</template>

<style lang="scss">
@import url("@/assets/scss/navbar.scss");
</style>
