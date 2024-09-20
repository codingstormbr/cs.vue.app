<script setup>

import { computed, onMounted, ref } from 'vue'
import TheNavegationMobile from '@/components/TheNavegationMobile.vue'

/** stores **/
import { useUtilityStore } from '@/stores/common/utility'
const utilityStore = useUtilityStore()

const logo = computed(() => {
    return import.meta.env.VITE_API_URL + '/files/e70ff83f72f1b32fc1e2545d980811db8cb24132a0bf22d3940921e7bdac8398'
})

</script>
<template>
    <header class="flex items-center fixed">
        <div class="container mx-auto px-5 md:px-16 grid grid-cols-12 gap-2">
            <div class="logo col-span-6">
                <RouterLink to="/"><img :src="logo" alt=""></RouterLink>
            </div>
            <nav class="navegation col-span-6 hidden md:flex justify-end items-center">
                <ul class="flex flex-row">
                    <li>
                        <RouterLink :to="{ 'name': 'home' }" activeClass="activeClass">Inicio</RouterLink>
                    </li>
                    <li>
                        <RouterLink :to="{ 'name': 'toolsIndex' }" exactActiveClass="activeClass">Tools</RouterLink>
                    </li>
                    <li>
                        <RouterLink :to="{ 'name': 'biography' }" activeClass="activeClass">Biografia</RouterLink>
                    </li>
                    <li>
                        <RouterLink :to="{ 'name': 'contact' }" activeClass="activeClass">Contato</RouterLink>
                    </li>
                </ul>
            </nav>
            <div class="navegation-mobile col-span-6 flex justify-end items-center md:hidden">
                <span class="menu icon-menu" @click="utilityStore.handleMenuMobile"></span>
            </div>
        </div>
        <TheNavegationMobile v-show="utilityStore.navegationMobile" :logo="logo" />
    </header>
</template>
<style scoped lang="scss">
header {
    width: 100%;
    height: 60px;
    background: $blk1;
    transition: .3s;
    top: 0;
    z-index: 99;
    position: absolute;

    &.fixed {
        position: fixed;
    }

    .logo {
        img {
            width: auto;
            height: 35px;
        }
    }

    .navegation {
        ul li {
            padding-left: .7rem;

            a {
                color: $wth1;
                border-bottom: 3px solid $blk1;
                transition: 0.3s;

                &:hover {
                    border-color: $bl1;
                    cursor: pointer;
                }
            }

            .activeClass {
                border-color: $bl1;
                cursor: pointer;
            }
        }
    }

    .navegation-mobile {
        .menu {
            color: $wth1;
            font-size: 1.5rem;
        }
    }
}
</style>