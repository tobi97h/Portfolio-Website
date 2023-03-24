<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n()
</script>

<template>
  <p class="date">{{ $t('tech.date') }}</p>
  <h2>{{ $t('tech.heading') }}</h2>
  <div class="divider"></div>
</template>
