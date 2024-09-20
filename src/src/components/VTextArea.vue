<script setup>

const props = defineProps({
    'label': String,
    'placeholder': String,
    'modelValue': String,
    'error': Array
})

const emit = defineEmits(['update:modelValue', 'blur', 'enter']);

</script>

<template>
    <div class="v-text-area">
        <label class="mb-1">{{ label }}</label>
        <textarea :placeholder="placeholder" :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)" @blur="$emit('blur')"
            :class="[error[0] ? 'error' : '']">
        </textarea>
        <span class="error-desc">{{ error[0] }}</span>
    </div>
</template>

<style scoped lang="scss">
.v-text-area {
    width: 100%;
    display: flex;
    flex-direction: column;

    label {
        font-weight: 500;
        color: $blk2;
    }

    textarea {
        width: 100%;
        height: 150px;
        padding: 10px;
        resize: none;
        font-weight: 400;
        background: $wth1;
        border: $grey2 solid 1px;

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
