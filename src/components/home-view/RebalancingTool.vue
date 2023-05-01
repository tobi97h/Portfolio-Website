<script setup lang="ts">
import { useI18n } from "vue-i18n";
import {onMounted, ref} from "vue";
import statsApi from "@/services/StatsApi";
const { t } = useI18n()
import type { Ref } from "vue";


const suggestUsers: Ref<number> = ref(0);
const suggestMinutes: Ref<number> = ref(0);

onMounted(async () => {
  let stats = await statsApi.fetchStats()
  suggestUsers.value = stats.suggestUsers
  suggestMinutes.value = stats.suggestMinutes
})

</script>

<template>
  <section id="project-section">
    <div class="container">

      <p class="subheading">Eigne Projekte</p>
      <div class="divider"></div>

      <div class="project-wrapper art">
        <div class="text-wrapper">
          <h3>Portfolio Rebalancing Tool</h3>
          <p class="text">{{ $t('projects.balancingTool') }}</p>
          <div class="button-wrapper">
            <a href="https://portfolio-rebalancer.com/" target="_blank" class="button">{{ $t('projects.homepage') }}</a>
            <a href="https://github.com/Asset-Rebalancing-Tool/ApiRunner" target="_blank" class="button">{{ $t('projects.source') }}</a>
          </div>
        </div>
        <img class="art-wireframes" src="@/assets/images/Portfolio_Rebalancing_Tool_Wireframes.png" alt="Portfolio Rebalancing Tool Wireframes" />
      </div>

      <div class="project-wrapper sg">
        <div class="text-wrapper">
          <h3>Suggest App</h3>
          <p class="text">{{ $t('projects.suggest') }}</p>
          <div class="button-wrapper">
            <a href="https://suggest-app.com/" target="_blank" class="button">{{ $t('projects.homepage') }}</a>
            <a href="https://github.com/Suggest-App/SGBackend" target="_blank" class="button">{{ $t('projects.source') }}</a>
          </div>
        </div>
        <img class="sg-wireframes" src="@/assets/images/Suggest_App_Wireframes.png" alt="Suggest App Wireframes" />
      </div>

      <div class="link-box-wrapper">

        <a href="https://blog.tobias-huebner.tech/" class="link-box minutes">
          <h4>{{ suggestUsers }}</h4>
          <div class="divider"></div>
          <h2>{{ $t('stats.suggestUsers.heading') }}</h2>
          <p>{{ $t('stats.suggestUsers.text') }}</p>
        </a>

        <a href="https://github.com/tobi97h?tab=repositories" class="link-box minutes">
          <h4>{{ suggestMinutes }}</h4>
          <div class="divider"></div>
          <h2>{{ $t('stats.suggestMinutes.heading') }}</h2>
          <p>{{ $t("stats.suggestMinutes.text") }}</p>
        </a>

      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/scss/home-view/rebalancing-tool.scss";
</style>
