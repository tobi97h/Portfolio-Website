<script setup lang="ts">
import axios from "axios"
import {ref, onMounted, reactive} from "vue";
import type { Ref } from "vue";
import type { Stats } from "@/models/stats/Stats";
import { useI18n } from "vue-i18n";
import statsApi from "@/services/StatsApi";

const { t } = useI18n()

const ghostBlogEntries: Ref<number> = ref(0);
const commits: Ref<number> = ref(0);
const linesOfCode: Ref<number> = ref(0);
const repos: Ref<number> = ref(0);
const builds: Ref<number> = ref(0);

onMounted(async () => {
  let stats = await statsApi.fetchStats()
  ghostBlogEntries.value = stats.ghostBlogEntries
  commits.value = stats.commits
  linesOfCode.value = stats.linesOfCode
  repos.value = stats.repos
  builds.value = stats.executedBuilds
})

</script>

<template>
  <section id="link-section">
    <div class="container">
      <div class="link-box-wrapper">

        <a href="https://github.com/tobi97h?tab=repositories" class="link-box git">
          <h4>{{ repos}}</h4>
          <div class="divider"></div>
          <h2>Git Repos</h2>
          <p>{{ $t("stats.repos") }}</p>
          <div class="arrow"></div>
        </a>

        <a href="https://github.com/tobi97h"  class="link-box git">
          <h4>{{ commits }}</h4>
          <div class="divider"></div>
          <h2>Git Commits</h2>
          <p>{{ $t("stats.commits") }}</p>
          <div class="arrow"></div>
        </a>

      </div>
      <p>{{ $t("stats.api.text") }} <a href="https://github.com/tobi97h/Portfolio-Website-Api">{{ $t("stats.api.link") }}</a></p>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/scss/home-view/link-section.scss";
</style>
