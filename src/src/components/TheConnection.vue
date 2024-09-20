<script setup>
import { onMounted } from 'vue';

/** stores **/
import { useUtilityStore } from '@/stores/common/utility'
const utilityStore = useUtilityStore()

onMounted(() => {
    utilityStore.startConnectionView()
});

</script>
<template>
    <div class="the-connection flex justify-center items-center" v-if="!utilityStore.statusConnection">
        <div class="mask-load"></div>
        <span class="title">Você está sem conexão com a internet!</span>
    </div>
</template>
<style scoped lang="scss">
.the-connection {
    width: 100vw;
    height: 100%;
    position: fixed;
    top: 0;
    z-index: 100;
    backdrop-filter: blur(7px);

    .mask-load {
        width: 100%;
        height: 100%;
        background: $blk1;
        opacity: .9;
        position: absolute;
        z-index: 101;
    }

    .title {
        color: $wth1;
        z-index: 101;
        position: relative;
    }
}
</style>