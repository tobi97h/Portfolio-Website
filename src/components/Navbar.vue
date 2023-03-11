<script lang="ts" setup>
import { setLocale } from '@/i18n'
import IconLanguage from "@/components/icons/IconLanguage.vue";
import {useMainStore} from "@/stores/MainStore";

const mainStore = useMainStore()

// Bool to check if active class should be rendered
function checkLocale(locale: string) {
  return locale === mainStore.activeLocale
}
</script>

<template>
  <nav id="navbar">
    <div class="nav-container">
    <p class="logo">Tobias Hübner</p>

    <div class="link-container">
      <div class="open-button" @click="mainStore.openNavMenu = true"></div>
      <ul :class="{ open : mainStore.openNavMenu }">
        <li class="close-button" @click="mainStore.openNavMenu = false"></li>
        <li><a href="#hero-section">Über mich</a></li>
        <li><a href="#tech-section">Tech Stack</a></li>
        <li><a href="#link-section">Stats</a></li>
        <li><a href="https://www.linkedin.com/in/tobias-h%C3%BCbner-b19ba416a/" target="_blank">LinkedIn</a></li>
        <li class="locale-wrapper">
          <IconLanguage />
          <div class="locale" :class="{ active: checkLocale('en') }" @click="setLocale('en')">EN</div>
          <div class="locale" :class="{ active: checkLocale('de') }" @click="setLocale('de')">DE</div>
        </li>
      </ul>
    </div>
    <div class="nav-underlay" :class="{ open : mainStore.openNavMenu }" @click="mainStore.openNavMenu = false"></div>
    </div>
  </nav>
</template>

<style lang="scss">
@import url("@/assets/scss/navbar.scss");
</style>
