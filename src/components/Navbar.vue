<script lang="ts" setup>
import { ref } from 'vue'
import type { Ref } from 'vue'
import { setLocale } from '@/i18n'
import IconLanguage from "@/components/icons/IconLanguage.vue";
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
        <li class="locale-wrapper">
          <IconLanguage />
          <div class="locale" @click="setLocale('en')">EN</div>
          <div class="locale" @click="setLocale('de')">DE</div>
        </li>
      </ul>
    </div>
    <div class="nav-underlay" :class="{ open : isOpen }" @click="isOpen = false"></div>
  </nav>
</template>

<style lang="scss">
@import url("@/assets/scss/navbar.scss");
</style>
