<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n()
</script>

<template>
  <section id="hero-section">
    <div class="container">
      <div class="image-wrapper">
        <img src="/src/assets/images/Profilbild.jpg" alt="Profil Bild Tobias Hübner">
      </div>
      <div class="text-wrapper">
        <h1>{{ $t('hero.heading') }}</h1>
        <p>{{ $t('hero.text') }}</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/scss/home-view/hero-section.scss";
</style>
