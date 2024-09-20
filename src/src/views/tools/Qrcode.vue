<script setup>
import { computed } from 'vue'
import { useQrCodetStore } from '@/stores/qr-code'
import VInput from '@/components/VInput.vue'
import VInputColor from '@/components/VInputColor.vue'
import VSelect from '@/components/VSelect.vue'
import VButton from '@/components/VButton.vue'
import { yup } from '@/composables/yup_pt_BR'
import { useForm, useIsFormValid } from 'vee-validate';

const qrCodetStore = useQrCodetStore()

const { defineField, handleSubmit } = useForm({
    validationSchema: yup.object({
        content: yup.string().required().min(2).max(1200),
        size: yup.number().min(200).max(1080),
        backgroundColor: yup.object(),
        color: yup.object(),
        margin: yup.number().min(1).max(50),
    }),
    initialValues: {
        size: 200,
        backgroundColor: { red: 255, green: 255, blue: 255 },
        color: { red: 0, green: 0, blue: 0 },
        margin: 1,
    },
});

const [content, contentProps] = defineField('content', { props: state => ({ error: state.errors }) });
const [size, sizeProps] = defineField('size', { props: state => ({ error: state.errors }) });
const [backgroundColor, backgroundColorProps] = defineField('backgroundColor', { props: state => ({ error: state.errors }) });
const [color, colorProps] = defineField('color', { props: state => ({ error: state.errors }) });
const [margin, marginProps] = defineField('margin', { props: state => ({ error: state.errors }) });

const isValid = useIsFormValid();
const onSubmit = handleSubmit(values => {
    qrCodetStore.generate({ ...values })
});

/** ------------------------------------------------------------------------------------------------------------------------------ **/

const sizeParam = {
    start: 200,
    interval: 10,
    end: 1080,
}

const sizeOptions = Array.from(
    { length: (sizeParam.end - sizeParam.start) / sizeParam.interval + 1 },
    (_, index) => {
        const value = sizeParam.start + index * sizeParam.interval;
        return {
            value: value,
            option: `${value}px - ${value}px`
        };
    }
);

const sizeInfo = computed(() => {
    const item = sizeOptions.find(item => item.value === size.value);
    return item ? item.option : null;
});

const marginOptions = Array.from(
    { length: 50 },
    (_, index) => {
        return {
            value: index + 1,
            option: `${index + 1}`
        };
    }
);

/** ------------------------------------------------------------------------------------------------------------------------------ **/


// Função para fazer o download da imagem
const download = () => {
    const link = document.createElement('a');
    link.href = `data:image/png;base64,${qrCodetStore.data.data}`;
    link.download = `QR Code ${sizeInfo.value}.png`;
    link.click();
};

</script>
<template>
    <div class="bg-slate-100 p-3 drop-shadow">
        <div class="qrcode grid grid-cols-12 gap-7">
            <div class="col-span-12 md:col-span-6">
                <v-input class="mb-3" label="Conteúdo" placeholder="Informe o conteúdo." v-model="content"
                    v-bind="contentProps" />
                <v-select class="mb-3" label="Tamanho" v-model.number="size" v-bind="sizeProps"
                    :options="sizeOptions" />
                <v-input-color class="mb-3" label="Cor" v-model="color" />
                <v-input-color class="mb-3" label="Background" v-model="backgroundColor" />
                <v-select class="mb-3" label="Margem" v-model="margin" v-bind="marginProps" :options="marginOptions" />
                <v-button @click="onSubmit" :disabled="!isValid">Gerar</v-button>
                <v-button theme="outline-blue" class="ms-3" @click="download"
                    :disabled="!isValid && !qrCodetStore.data.data" v-if="qrCodetStore.data?.data">Download</v-button>
            </div>
            <div class="col-span-12 md:col-span-6">
                <div class="bl-qr-code bg-slate-200 flex flex-col justify-center items-center p-5">
                    <img class="mb-3" :src="`data:image/png;base64,${qrCodetStore.data.data}`" alt="QR Code"
                        v-if="qrCodetStore.data.data">
                    <span v-if="qrCodetStore.data.data">{{ sizeInfo }}</span>
                    <span class="text-slate-400">QR Code</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.qrcode {
    .bl-qr-code {
        width: 100%;
        height: 100%;
        min-height: 300px;

        img {
            max-width: 300px;
            width: auto;
            height: auto;
        }
    }
}
</style>