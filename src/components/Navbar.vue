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
    <p class="logo">Tobias Hübner</p>

    <div class="link-container">
      <div class="open-button" @click="mainStore.openNavMenu = true"></div>
      <ul :class="{ open : mainStore.openNavMenu }">
        <li class="close-button" @click="mainStore.openNavMenu = false"></li>
        <li>Über mich</li>
        <li>Tech Stack</li>
        <li>Stats</li>
        <li>LinkedIn</li>
        <li class="locale-wrapper">
          <IconLanguage />
          <div class="locale" :class="{ active: checkLocale('en') }" @click="setLocale('en')">EN</div>
          <div class="locale" :class="{ active: checkLocale('de') }" @click="setLocale('de')">DE</div>
        </li>
      </ul>
    </div>
    <div class="nav-underlay" :class="{ open : mainStore.openNavMenu }" @click="mainStore.openNavMenu = false"></div>
  </nav>
</template>

<style lang="scss">
@import url("@/assets/scss/navbar.scss");
</style>
