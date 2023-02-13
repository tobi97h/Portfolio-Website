<script setup lang="ts">
import axios from "axios"
import { ref, onMounted } from "vue";
import type { Ref } from "vue";

// access ref with blogEntries.value
const blogEntries: Ref<number> = ref(1)

onMounted(() => {
  // TODO: axios get, set ref.value
})


</script>

<template>
  <section id="link-section">
    <div class="container">
      <div class="link-box-wrapper">

        <div class="link-box blog">
          <h4>{{ blogEntries }}</h4>
          <div class="divider"></div>
          <h2>Blogeinträge</h2>
          <p>Besagter Blog über besagte Themen.</p>
          <div class="arrow"></div>
        </div>

        <div class="link-box blog">
          <h4>24</h4>
          <div class="divider"></div>
          <h2>Blogeinträge</h2>
          <p>Besagter Blog über besagte Themen.</p>
          <div class="arrow"></div>
        </div>

        <div class="link-box git">
          <h4>30</h4>
          <div class="divider"></div>
          <h2>Git Repos</h2>
          <p>Praktisch wie GitHub nur self-hosted.</p>
          <div class="arrow"></div>
        </div>
        <div class="link-box wiki">
          <h4>18</h4>
          <div class="divider"></div>
          <h2>Wiki Einträge</h2>
          <p>Meine eigene kleine Knowledgebase.</p>
          <div class="arrow"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/scss/home-view/link-section.scss";
</style>
