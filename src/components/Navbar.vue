<script lang="ts" setup>
import { ref } from 'vue'
import type { Ref } from 'vue'
const isOpen: Ref<boolean> = ref(false)
</script>

<template>
  <nav id="navbar">
    <p class="logo">Tobias Hübner</p>
    <div class="link-container">
      <div class="open-button" @click="isOpen = true"></div>
      <ul :class="{ open : isOpen }">
        <li class="close-button" @click="isOpen = false"></li>
        <li>Über mich</li>
        <li>Tech Stack</li>
        <li>Stats</li>
        <li>LinkedIn</li>
      </ul>
    </div>
    <div class="nav-underlay" :class="{ open : isOpen }" @click="isOpen = false"></div>
  </nav>
</template>

<style lang="scss">
@import url("@/assets/scss/navbar.scss");
</style>
