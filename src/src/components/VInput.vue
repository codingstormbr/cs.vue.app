<script setup>

const props = defineProps({
    'label': String,
    'placeholder': String,
    'modelValue': String,
    'type': {
        type: String,
        default: "text"
    },
    'error': Array,
    'mask': {
        type: String,
        default: ""
    }
})

defineEmits(['update:modelValue', 'blur', 'enter']);

</script>

<template>
    <div class="v-input w-full flex flex-col">
        <label class="mb-1">{{ label }}</label>
        <input :type="type" :placeholder="placeholder" :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)" @keyup.enter="$emit('enter')" @blur="$emit('blur')"
            :class="[error[0] ? 'error' : '']" v-maska="mask" />
        <span class="error-desc">{{ error[0] }}</span>
    </div>
</template>

<style scoped lang="scss">
.v-input {

    label {
        font-weight: 500;
        color: $blk2;
    }

    input {
        width: 100%;
        height: 40px;
        padding: 0 10px;
        font-weight: 400;
        border: $grey2 solid 1px;
        background: $wth1;
        color: $blk2;

        &:focus {
            box-shadow: 0 0 0 0;
            border: $bl1 solid 1px;
            outline: 0;
        }

        &::placeholder {
            font-style: italic;
            color: $blk4;
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
