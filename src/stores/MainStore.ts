import type { Ref } from 'vue'
import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useMainStore = defineStore('mainStore', () => {

  const activeLocale: Ref<string> = ref('de')

  // Flag that indicates if the viewport with is at least 768px
  const isDesktop: Ref<boolean> = ref(window.innerWidth >= 991)

  // Flag that indicates if the nav menu is open
  const openNavMenu: Ref<boolean> = ref(false)

  // Check viewport with on resize
  window.onresize = (): void => {
    isDesktop.value =  (window.innerWidth >= 991)
  }

  return {
    activeLocale,
    isDesktop,
    openNavMenu,
  }
})
