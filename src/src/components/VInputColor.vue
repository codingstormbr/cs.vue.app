<script setup>
import { reactive, computed, ref } from 'vue';
import { rgbToLuminance } from '@/composables/util'

const props = defineProps({
    'label': String,
    'placeholder': String,
    'modelValue': Object,
})

const color = reactive({ ...props.modelValue });

const emit = defineEmits(['update:modelValue']);

// Emitir o valor RGB atualizado
const emitColor = () => {
    emit('update:modelValue', { red: color.red, green: color.green, blue: color.blue });
};

//-------------------------------------------------------------------

const backgroundColor = computed(() => {
    return `rgb(${color.red},${color.green},${color.blue})`
})

const textColor = computed(() => {
    const luminance = rgbToLuminance(color.red, color.green, color.blue);
    return luminance < 0.5 ? '#ffffff' : '#000000';
});

const changeColor = ref(false);

const openChangeColor = () => (
    changeColor.value = !changeColor.value
)

</script>

<template>
    <div class="v-input-color w-full flex flex-col">
        <label class="mb-1">{{ label }}</label>
        <div class="color flex justify-center items-center cursor-pointer" @click="openChangeColor"
            :style="{ backgroundColor: backgroundColor, color: textColor }">RGB ({{ color.red }}, {{ color.green }}, {{
                color.blue }})
        </div>
        <div class="change-color p-5" v-if="changeColor">
            <div class="flex flex-col pb-2">
                <label class="mb-1">Red</label>
                <input type="range" min="0" max="255" v-model.number="color.red" @input="emitColor">
            </div>
            <div class="flex flex-col pb-3">
                <label class="mb-1">Green</label>
                <input type="range" min="0" max="255" v-model.number="color.green" @input="emitColor">
            </div>
            <div class="flex flex-col pb-3">
                <label class="mb-1">Blue</label>
                <input type="range" min="0" max="255" v-model.number="color.blue" @input="emitColor">
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.v-input-color {
    position: relative;

    label {
        font-weight: 500;
        color: $blk2;
    }

    .color {
        width: 100%;
        height: 40px;
        font-weight: 400;
        border: $grey2 solid 1px;
    }

    .change-color {
        width: 100%;
        height: auto;
        background: $wth1;

        /* Estilo básico do controle deslizante */
        input[type="range"] {
            -webkit-appearance: none;
            width: 100%;
            height: 3px;
            background: $grey1;
            outline: none;
        }

        /* Estilo da parte que o usuário arrasta */
        input[type="range"]::-webkit-slider-thumb {
            -webkit-appearance: none;
            width: 20px;
            height: 20px;
            background: $wth1;
            border: $bl1 solid 2px;
            cursor: pointer;
            border-radius: 50%;
        }

        /* Estilo da parte que o usuário arrasta para navegadores não-webkit */
        input[type="range"]::-moz-range-thumb {
            width: 20px;
            height: 20px;
            background: $wth1;
            border: $bl1 solid 2px;
            cursor: pointer;
            border-radius: 50%;
        }

        /* Estilo da parte que o usuário arrasta para navegadores não-webkit */
        input[type="range"]::-ms-thumb {
            width: 20px;
            height: 20px;
            background: $wth1;
            border: $bl1 solid 2px;
            cursor: pointer;
            border-radius: 50%;
        }

    }
}
</style>
