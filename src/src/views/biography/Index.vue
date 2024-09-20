<script setup>

import { computed } from 'vue'
import BaseTitle from '@/components/BaseTitle.vue'

const profile = computed(() => {
    return import.meta.env.VITE_API_URL + '/files/853ad544e5fb8f3a79c3b68e8187a393b66e4d46c7369ed5a067c56ac3d6b871'
})

</script>
<template>
    <div class="w-full">
        <section class="sec-1 py-10">
            <div class="container mx-auto px-5 md:px-16 grid grid-cols-12 gap-2">
                <div class="col-span-5 sm:col-span-4 lg:col-span-3 xl:col-span-2">
                    <img class="profile" :src="profile" alt="">
                </div>
                <div class="col-span-12 sm:col-span-8 lg:col-span-9 xl:col-span-6 profile-init sm:ps-10">
                    <p class="title-1 text-2xl sm:text-2xl lg:text-3xl font-light mb-3">Olá, meu nome é</p>
                    <p class="title-2 text-3xl sm:text-3xl lg:text-4xl font-bold mb-3">Paulo Ananias Teixeira</p>
                    <p class="title-3 text-2xl sm:text-2xl lg:text-3xl font-light">Sou analista e desenvolvedor de
                        sistemas, com
                        foco
                        especializado em
                        desenvolvimento web.</p>
                </div>
            </div>

            <div class="container mx-auto px-5 md:px-16 grid grid-cols-11 gap-2 mt-10">
                <div class="col-span-12">
                    <base-title class="mb-5" theme="white" :data="{'title': 'Sobre mim'}" />
                </div>
                <div class="col-span-12 sm:col-span-5 journey">
                    <p class="desc text-xl font-light mb-3">Com uma paixão duradoura pela tecnologia
                        desde jovem,
                        possuo uma formação consistente e uma promissora trajetória na área de
                        desenvolvimento de sistemas web.</p>
                    <p class="desc text-xl font-light mb-3">Se você está em busca de um talentoso desenvolvedor web
                        brasileiro,
                        com uma sólida experiência tanto em aplicações front-end quanto back-end,
                        eu sou a escolha ideal.</p>
                </div>
                <div class="col-span-12 sm:col-span-5 sm:col-start-7 journey">
                    <p class="desc text-xl font-light mb-3">Formado em Análise e Desenvolvimento de Sistemas pelo Centro
                        Universitário
                        Estácio de Sá, em Recife, Pernambuco,
                        e com uma formação adicional em Redes de Computadores pela Faculdade Maurício de Nassau,
                        obtive uma sólida base
                        em tecnologia da informação. Isso me proporcionou um conhecimento profundo em programação,
                        design de interfaces e gestão de sistemas.</p>
                </div>

            </div>
        </section>
        <section class="sec-2 py-10">
            <div class="container mx-auto px-5 md:px-16 grid grid-cols-11 gap-2 mt-10">
                <div class="col-span-12">
                    <base-title class="mb-5" theme="blue">Minha<br>Jornada</base-title>
                    <base-title class="mb-5" theme="blue" :data="{'title': 'Minha Jornada'}" />
                </div>
                <div class="col-span-12 sm:col-span-5 journey">
                    <p class="desc text-xl font-light mb-3">Minha carreira em TI iniciou em 2015, onde atuei como
                        analista de suporte
                        técnico,
                        desempenhando um papel fundamental na resolução de desafios tecnológicos e proporcionando
                        suporte
                        eficaz aos colaboradores da prefeitura da cidade do Recife através da Stefanini, uma empresa
                        renomada
                        em consultoria e assessoria em informática.</p>
                    <p class="desc text-xl font-light mb-3">Nesse mesmo ano, finalizei meu curso técnico em redes de
                        computadores na
                        UNINASSAU e,
                        logo em seguida, comecei minha jornada no ensino superior em análise e desenvolvimento de
                        sistemas
                        na Universidade Estácio de Sá, localizada em Recife, Pernambuco.</p>
                </div>
                <div class="col-span-12 sm:col-span-5 sm:col-start-7 journey">
                    <p class="desc text-xl font-light mb-3">Com o passar dos anos, acumulei valiosas experiências em
                        minha jornada,
                        tendo trabalhado em
                        várias empresas para vários clientes e com a oportunidade de possuir meus próprios clientes,
                        desde o meu
                        início como estagiário em programação web até alcançar a posição de analista de
                        sistemas.</p>
                    <p class="desc text-xl font-light mb-3">Tive a oportunidade de colaborar com o crescimento de
                        diversos clientes,
                        alguns dos notáveis clientes incluem a Escola de Idiomas Fisk, Hotel Ponta Verde,
                        Aguisa Agropecuária Guimarães, evento Sonho Nordestino, Banco Santander, Oi
                        Telecomunicações,
                        Cerâmica Horizonte, Hospital Municipal Dr. Mário Gatti, entre outros.</p>
                </div>

            </div>
        </section>
    </div>

</template>

<style scoped lang="scss">
.sec-1 {
    width: 100%;
    height: auto;
    background: $blk2;

    .profile {
        width: 100%;
        border-radius: 0 1rem 0 1rem;
    }

    .profile-init {

        .title-1,
        .title-2,
        .title-3 {
            color: $grey3;
        }
    }

    .journey {
        .desc {
            color: $grey3;
        }
    }
}

.sec-2 {
    width: 100%;
    height: auto;
    background: $wth1;

    .profile {
        width: 100%;
    }

    .experience {
        .desc {
            color: $blk2;
        }
    }
}
</style>