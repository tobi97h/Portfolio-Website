<script lang="ts" setup>
import BasicSelect from "@/components/BasicSelect.vue"
import { computed, ref } from 'vue'
import type { ComputedRef } from 'vue'
import type { Ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { allLocales, createLocaleObject, setLocale } from '@/i18n'

const isOpen: Ref<boolean> = ref(false)

const { t } = useI18n()

// TODO: import t and acces in template {{ $t('') }}

// Get the locale select options
const localeOptions: ComputedRef<string[]> = computed((): string[] => {
  return createLocaleObject(allLocales)
})
</script>

<template>
  <nav id="navbar">
    <p class="logo">Tobias Hübner {{ $t('test') }}</p>

    <BasicSelect
        id="locale"
        :options="localeOptions"
        :default-selection="$i18n.locale"
        :modelValue="$i18n.locale"
        @change="setLocale($event.target.value)"
    />

    <div class="link-container">
      <div class="open-button" @click="isOpen = true"></div>
      <ul :class="{ open : isOpen }">
        <li class="close-button" @click="isOpen = false"></li>
        <li>Über mich</li>
        <li>Tech Stack</li>
        <li>Stats</li>
        <li>LinkedIn</li>
      </ul>
    </div>
    <div class="nav-underlay" :class="{ open : isOpen }" @click="isOpen = false"></div>
  </nav>
</template>

<style lang="scss">
@import url("@/assets/scss/navbar.scss");
</style>
