<script lang="ts" setup>
import { RouterLink } from "vue-router";
import IconLanguage from "@/components/icons/IconLanguage.vue";
import {useI18n} from "vue-i18n";

const { t } = useI18n()
</script>

<template>
  <nav id="desktop-navbar">
    <div class="container">
      <h2>Tobias Hübner</h2>
      <ul>
        <li class="locale-wrapper">
          <IconLanguage />
          <div class="locale" @click="setLocale('en')">EN</div>
          <div class="locale" @click="setLocale('de')">DE</div>
        </li>

        <li>
         </li>

        <li>
          <a
              v-for="button in strapiStore.navBarData.button"
              :key="button.id"
              class="contact-btn"
              :href="button.link"
              :title="button.titleAttr"
              :target="button.openInNewTab ? '_blank' : ''"
          >{{ button.text }}</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss">
@import "@/assets/scss/navbar/desktop-navbar.scss";
</style>
