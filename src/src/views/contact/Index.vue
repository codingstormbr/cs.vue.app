<script setup>

import BaseTitle from '@/components/BaseTitle.vue'
import ContactForm from '@/components/ContactForm.vue'

</script>
<template>
    <section class="contact">
        <div class="container mx-auto px-5 md:px-16 grid grid-cols-12 gap-2 py-10">
            <div class="col-span-12 md:col-span-6">
                <div class="container grid grid-cols-12 gap-2">
                    <div class="col-span-12">
                        <base-title class="mb-5" theme="white" :data="{'title': 'Contato'}" />
                    </div>
                    <div class="col-span-12">
                        <span class="description mb-3">Fique à vontade para entrar em contato
                            conosco a qualquer momento para esclarecer suas dúvidas,
                            compartilhar ideias, iniciar uma colaboração incrível ou simplesmente
                            trocar informações e experiências conosco.</span>
                    </div>
                </div>
            </div>
            <div class="col-span-12 md:col-span-6 xl:col-span-4 xl:col-start-9">
                <div class="form-contact p-5">
                    <ContactForm />
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.contact {
    width: 100%;
    flex: 1;
    background: $blk2;

    .description {
        font-size: 1.2rem;
        color: $wth1;
    }

    .form-contact {
        background: $wth1;
    }
}
</style>