<script setup>
import { useRouter, useRoute } from 'vue-router';
import { useToolStore } from '@/stores/tool'
import BaseTitle from '@/components/BaseTitle.vue'
import { onMounted, computed } from 'vue'

const router = useRouter();
const route = useRoute();
const toolStore = useToolStore()

onMounted(() => {
    toolStore.getToolsLimit()
})

const currentTool = computed(() => {
    const tool = toolStore.data.tools ? toolStore.data.tools.find(item => item.uri === route.path) : [{ name: '', uri: '' }];
    return tool ?? { name: '', uri: '' };
})

const goBack = () => {
    router.back()
}

</script>
<template>
    <section class="tool py-10">
        <div class="container mx-auto px-5 md:px-16 grid grid-cols-12 gap-2">
            <div class="col-span-12 md:col-span-11">
                <base-title :data="{ title: 'Tools', subtitle: currentTool.name }" />
            </div>
            <div class="col-span-12 md:col-span-1 flex md:justify-end">
                <span class="cursor-pointer h-fit select-none flex items-center" @click="goBack">
                    <span class="icon-arrow"></span>
                    <span>Voltar</span>
                </span>
            </div>
            <div class="col-span-12 border-t-2 border-solid border-slate-200 pt-5">
                <router-view></router-view>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.tool {
    width: 100%;
    background: $wth1;
}
</style>