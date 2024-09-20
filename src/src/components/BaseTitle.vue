<script setup>
defineProps({
    'theme': {
        type: String,
        default: "blue"
    },
    'data': {
        type: Object,
        default: () => ({})
    },
})
</script>
<template>
    <div class="base-title flex items-end" :class="['base-' + theme]">
        <h1 class="title">{{ data.title }}</h1>
        <span class="subtitle ms-2" v-show="data.subtitle">&#8226;</span>
        <h2 class="subtitle ms-2" v-show="data.subtitle"> {{ data.subtitle }}</h2>
    </div>
</template>
<style scoped lang="scss">
.base-title {
    width: fit-content;

    .title {
        font-size: 1.7rem;
        font-weight: 600;
        line-height: 1.1;
    }

    .subtitle {
        font-size: 1.5rem;
        font-weight: 400;
        line-height: 1.1;
    }
}

.base-blue {
    color: $bl1;
}

.base-black {
    color: $blk2;
}

.base-white {
    color: $wth1;
}
</style>