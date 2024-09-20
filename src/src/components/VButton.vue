<script setup>
const props = defineProps({
    'theme': {
        type: String,
        default: "default"
    },
    'disabled': {
        type: Boolean,
        default: false
    }
})
const emit = defineEmits(['action'])

function handleButtonClick() {
    if (!props.disabled)
        emit('action')
}
</script>

<template>
    <button class="p-3" :disabled="disabled"
        :class="[disabled ? 'b-disable cursor-no-drop' : `b-${theme} cursor-pointer`]" @click="handleButtonClick">
        <slot></slot>
    </button>
</template>

<style scoped lang="scss">
button {
    width: fit-content;
    height: auto;
    border-radius: 3px;
    font-weight: 700;
}

.b-default {
    background: $bl1;
    color: $wth1;
    border: none;
}

.b-outline-blue {
    background: none;
    color: $bl1;
    box-shadow: inset 0 0 0 2px $bl1;
}

.b-outline-white {
    background: none;
    color: $grey3;
    box-shadow: inset 0 0 0 2px $bl1;
}

.b-grey {
    background: $grey1;
    color: $blk2;
    border: none;
}

.b-disable {
    background: $grey1;
    color: $wth1;
    border: none;
}
</style>
