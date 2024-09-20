<script setup>

/** stores **/
import { useProcessStore } from '@/stores/common/process'

const processStore = useProcessStore()

const closeCard = () => {
    processStore.setProcessing({})
}

</script>
<template>
    <div class="notification-container" v-if="processStore.data.message">
        <div class="notification grid grid-cols-5 gap-2">
            <div class="col-span-4 p-3">
                <span class="message success" :class="[processStore.data.status == 200 ? 'success' : 'warning']">{{
                    processStore.data.message }}</span>
            </div>
            <div class="col-span-1 flex justify-center items-center">
                <span class="_icon icon-close cursor-pointer" @click="closeCard"></span>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
.notification-container {
    width: 300px;
    height: auto;
    position: fixed;
    bottom: 100px;
    right: 50px;
    z-index: 98;

    .notification {
        width: 100%;
        height: auto;
        background: $wth1;
        box-shadow: $shadow;
        border: solid 1px $grey2;

        ._icon {
            color: $blk1;
            font-size: 1.5rem;
        }

        .success {
            color: $bl1;
        }

        .warning {
            color: $red1;
        }
    }
}
</style>