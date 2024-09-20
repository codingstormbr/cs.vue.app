<script setup>
import VInput from '@/components/VInput.vue'
import VTextArea from '@/components/VTextArea.vue'
import VButton from '@/components/VButton.vue'
import { yup, cellRegex } from '@/composables/yup_pt_BR'
import { useForm, useIsFormValid } from 'vee-validate';
import { useContactStore } from '@/stores/contact'

const contactStore = useContactStore()

const { defineField, handleSubmit } = useForm({
    validationSchema: yup.object({
        name: yup.string().required().min(2).max(200),
        surname: yup.string().required().min(2).max(200),
        company: yup.string().min(2).max(200),
        phone: yup.string().matches(cellRegex, 'Celular deve estar no formato (XX) 9 XXXX-XXXX').required().min(2).max(200),
        mail: yup.string().required().email().min(2).max(200),
        description: yup.string().required().min(10).max(200),
    })
});

const [name, nameProps] = defineField('name', { props: state => ({ error: state.errors }) });
const [surname, surnameProps] = defineField('surname', { props: state => ({ error: state.errors }) });
const [company, companyProps] = defineField('company', { props: state => ({ error: state.errors }) });
const [phone, phoneProps] = defineField('phone', { props: state => ({ error: state.errors }) });
const [mail, mailProps] = defineField('mail', { props: state => ({ error: state.errors }) });
const [description, descriptionProps] = defineField('description', { props: state => ({ error: state.errors }) });

const isValid = useIsFormValid();
const onSubmit = handleSubmit(values => {
    contactStore.store(values)
});

</script>
<template>
    <div>
        <v-input class="mb-3" label="Nome" placeholder="Informe seu nome." v-model="name" v-bind="nameProps" />
        <v-input class="mb-3" label="Sobrenome" placeholder="Informe seu sobrenome." v-model="surname"
            v-bind="surnameProps" />
        <v-input class="mb-3" label="Empresa (opcional)" placeholder="Informe sua empresa." v-model="company"
            v-bind="companyProps" />
        <v-input class="mb-3" label="Telefone" placeholder="Informe seu telefone com DDD." v-model="phone"
            v-bind="phoneProps" mask="(##) # ####-####" />
        <v-input class="mb-3" label="Email" placeholder="Informe seu email." v-model="mail" v-bind="mailProps" />
        <v-text-area class="mb-3" label="Descrição" placeholder="Fique a vontade na descrição." v-model="description"
            v-bind="descriptionProps" />
        <v-button @click="onSubmit" :disabled="!isValid">Enviar</v-button>
    </div>
</template>
<style scoped lang="scss"></style>