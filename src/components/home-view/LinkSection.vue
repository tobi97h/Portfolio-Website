<script setup lang="ts">
import axios from "axios"
import { ref, onMounted } from "vue";
import type { Ref } from "vue";
import type { Stats } from "@/models/stats/Stats";
import { useI18n } from "vue-i18n";
import statsApi from "@/services/StatsApi";

const { t } = useI18n()

// access ref with blogEntries.value
const blogEntries: Ref<number> = ref(1)

let stats: Stats = {
  blogEntries: 4
} as Stats

onMounted(async () => {
  //stats = await statsApi.fetchStats()
})


</script>

<template>
  <section id="link-section">
    <div class="container">
      <div class="link-box-wrapper">

        <a href="#" class="link-box blog">
          <h4>{{ stats.blogEntries }}</h4>
          <div class="divider"></div>
          <h2>{{ $t('stats.blog.heading') }}</h2>
          <p>{{ $t('stats.blog.text') }}</p>
          <div class="arrow"></div>
        </a>

        <div class="link-box git">
          <h4>24</h4>
          <div class="divider"></div>
          <h2>Git Commits</h2>
          <p>{{ $t("stats.commits") }}</p>
          <div class="arrow"></div>
        </div>

        <div class="link-box git">
          <h4>30</h4>
          <div class="divider"></div>
          <h2>Git Repos</h2>
          <p>{{ $t("stats.repos") }}</p>
          <div class="arrow"></div>
        </div>

      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/scss/home-view/link-section.scss";
</style>
