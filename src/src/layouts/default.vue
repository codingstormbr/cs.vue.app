<script setup>

/**component**/
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
import TheProcess from '@/components/TheProcess.vue'
import TheNotification from '@/components/TheNotification.vue'
import TheConnection from '@/components/TheConnection.vue'

</script>

<template>
    <div class="layout">
        <the-process />
        <the-notification />
        <TheHeader />
        <main class="main h-full">
            <slot></slot>
        </main>
        <TheFooter />
        <the-connection />
    </div>
</template>

<style scoped lang="scss">
.layout {
    width: 100%;
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    .main {
        width: 100%;
        display: flex;
        flex: 1;
        position: relative;
        margin-top: 60px;
    }
}
</style>