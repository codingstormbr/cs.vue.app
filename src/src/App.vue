<script setup>
import { computed, onMounted } from 'vue';
import { useRouter, RouterView } from 'vue-router'

/** stores **/
import { useAnalyticsStore } from '@/stores/common/analytics'
const analyticsStore = useAnalyticsStore()

onMounted(() => {
  analyticsStore.getAnalyticData()
})

const router = useRouter();
const layout = computed(() => {
  return `${router.currentRoute.value.meta.layout || 'default'}-layout`
})
</script>
<template>
  <component :is="layout">
    <RouterView />
  </component>
</template>

<style lang="scss">
body{
  background: $blk1;
}
</style>
