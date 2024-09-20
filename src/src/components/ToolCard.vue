<script setup>
const props = defineProps({
    'tool': {
        type: Object
    }
})

</script>
<template>
    <RouterLink class="tool-card cursor-pointer flex justify-center items-center" :to="{ 'path': props.tool.uri }">
        <span class="_title text-lg font-bold">{{ tool.name }}</span>
    </RouterLink>
</template>
<style scoped lang="scss">
.tool-card {
    width: 100%;
    height: 100px;
    box-shadow: inset 0 0 0 5px $blk3;
    transition: .2s;
    background: $wth1;

    ._title {
        color: $blk3;
    }

    &:hover {
        background: $blk2;
        box-shadow: inset 0 0 0 5px $blk2;

        ._title {
            color: $wth1;
        }
    }
}
</style>