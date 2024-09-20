<script setup>
import { onMounted } from 'vue'
import ToolCard from '@/components/ToolCard.vue'
import { useToolStore } from '@/stores/tool'

const toolStore = useToolStore()

onMounted(() => {
    toolStore.currentTool.subtitle = "Início"
    toolStore.getTools()
})

</script>
<template>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-5">
        <tool-card v-for="tool in toolStore.data.tools" :tool="tool" :key="tool" />
    </div>
</template>

<style lang="scss" scoped>
.tools {
    width: 100%;
    background: $wth1;
}
</style>