<script setup>

/** stores **/
import { useProcessStore } from '@/stores/common/process'
const processStore = useProcessStore()

</script>
<template>
    <div class="the-process flex justify-center items-center" v-if="processStore.data.processing">
        <div class="mask-load"></div>
        <div class="progress"></div>
    </div>
</template>
<style scoped lang="scss">
.the-process {
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

    .progress {
        z-index: 101;
        height: 4.5px;
        width: 145.6px;
        background: linear-gradient($bl1 0 0),
            linear-gradient($bl1 0 0),
            $wth1;
        background-size: 60% 100%;
        background-repeat: no-repeat;
        animation: progress 3s infinite;
    }

    @keyframes progress {
        0% {
            background-position: -150% 0, -150% 0;
        }

        66% {
            background-position: 250% 0, -150% 0;
        }

        100% {
            background-position: 250% 0, 250% 0;
        }
    }
}
</style>