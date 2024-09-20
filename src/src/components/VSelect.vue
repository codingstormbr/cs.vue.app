<script setup>

const props = defineProps({
    'label': String,
    'modelValue': [String, Number],
    'options': {
        type: Array,
        default: () => ([{}])
    },
    'error': Array
})

const emit = defineEmits(['update:modelValue', 'change', 'enter']);

</script>

<template>
    <div class="v-input w-full flex flex-col">
        <label class="mb-1">{{ label }}</label>
        <select :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"
            :class="[error[0] ? 'error' : '']">
            <option v-for="option in options" :value="option.value" :key="option.value">{{ option.option }}</option>
        </select>
        <span class="error-desc">{{ error[0] }}</span>
    </div>
</template>

<style scoped lang="scss">
.v-input {

    label {
        font-weight: 500;
        color: $blk2;
    }

    select {
        width: 100%;
        height: 40px;
        padding: 0 10px;
        font-weight: 400;
        border: $grey2 solid 1px;
        background: $wth1;
        color: $blk2;
        border-radius: 0;

        &:focus {
            box-shadow: 0 0 0 0;
            border: $bl1 solid 1px;
            outline: 0;
        }
    }

    .error {
        border-color: $red1;

        &:focus {
            box-shadow: 0 0 0 0;
            border: $red1 solid 1px;
            outline: 0;
        }
    }

    .error-desc {
        color: $red1;
        font-size: .8rem;
    }
}
</style>
