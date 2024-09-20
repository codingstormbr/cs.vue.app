<script setup>
/** stores **/
import { useUtilityStore } from '@/stores/common/utility'
const utilityStore = useUtilityStore()

const props = defineProps(['logo'])

</script>
<template>
    <nav class="navegation-mobile flex flex-col md:hidden">
        <div class="header basis-2/12 ">
            <div class="container mx-auto px-7 sm:px-32 h-full flex justify-end items-center">
                <span class="_icon icon-close" @click="utilityStore.handleMenuMobile"></span>
            </div>
        </div>
        <div class="body basis-5/12">
            <div class="container mx-auto px-7 sm:px-32 h-full flex justify-center items-center text-center">
                <ul class="flex flex-col">
                    <li>
                        <RouterLink class="text-2xl" :to="{ 'name': 'home' }" activeClass="activeClass"
                            @click="utilityStore.handleMenuMobile">Inicio
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink class="text-2xl" :to="{ 'name': 'toolsIndex' }" activeClass="activeClass"
                            @click="utilityStore.handleMenuMobile">
                            Tools</RouterLink>
                    </li>
                    <li>
                        <RouterLink class="text-2xl" :to="{ 'name': 'biography' }" activeClass="activeClass"
                            @click="utilityStore.handleMenuMobile">
                            Biografia</RouterLink>
                    </li>
                    <li>
                        <RouterLink class="text-2xl" :to="{ 'name': 'contact' }" activeClass="activeClass"
                            @click="utilityStore.handleMenuMobile">
                            Contato</RouterLink>
                    </li>
                </ul>
            </div>
        </div>
        <div class="footer basis-5/12 ">
            <div class="container mx-auto px-7 sm:px-32 h-full flex flex-col justify-center items-center ">
                <div class="logo flex items-center justify-center mb-5">
                    <img :src="props.logo" alt="">
                </div>
                <div class="social flex flex-col items-center justify-center">
                    <div class="flex items-center">
                        <span class="icon icon-instagram mx-1"></span>
                        <span class="handle">codingstorm.dev</span>
                    </div>
                    <div class="flex items-center">
                        <span class="icon icon-linkedin mx-1"></span>
                        <span class="handle">codingstorm.dev</span>
                    </div>
                    <div class="flex items-center">
                        <span class="icon icon-mail mx-1"></span>
                        <span class="handle">contato@codingstorm.com.br</span>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>
<style scoped lang="scss">
.navegation-mobile {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    background: $blk1;

    .header {
        background: $blk1;

        ._icon {
            font-size: 1.7rem;
            color: $wth1;
        }
    }

    .body {
        ul li {
            padding-bottom: 1rem;

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

    .footer {

        .logo {
            img {
                height: 30px;
            }
        }

        .social {
            .icon {
                color: $wth1;
                font-size: 1rem;
            }

            .handle {
                color: $wth1;
                font-size: .8rem;
            }
        }
    }

}
</style>