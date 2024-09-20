<script setup>
import { computed } from 'vue'

const logo = computed(() => {
    return import.meta.env.VITE_API_URL + '/files/e70ff83f72f1b32fc1e2545d980811db8cb24132a0bf22d3940921e7bdac8398'
})

const currentDate = new Date();

const initialYear = computed(() => {
    const currentYear = currentDate.getFullYear();
    return (currentYear == 2023) ? currentYear : `2023 - ${currentYear}`;
})

</script>
<template>
    <footer class="footer">
        <nav class="container mx-auto px-5 md:px-16 grid grid-cols-12 gap-2 py-3 pb-5">
            <div class="col-span-12 logo flex items-center justify-center">
                <img :src="logo" alt="">
            </div>
            <div class="col-span-12 flex flex-col md:flex-row items-center justify-center pt-5 social">
                <a target="_blank" class="flex items-center mb-1 md:mb-0 md:mx-2"
                    href="https://www.instagram.com/codingstorm.dev?igsh=MThqbTJrM2M1dW5iMA==">
                    <span class="icon icon-instagram me-2"></span>
                    <span class="handle">codingstorm.dev</span>
                </a>
                <a target="_blank" class="flex items-center mb-1 md:mb-0 md:mx-2"
                    href="https://www.linkedin.com/company/codigo-storm/">
                    <span class="icon icon-linkedin me-2"></span>
                    <span class="handle">codingstorm.dev</span>
                </a>
                <div class="flex items-center md:mx-2">
                    <span class="icon icon-mail me-2"></span>
                    <span class="handle">contato@codingstorm.com.br</span>
                </div>
            </div>
        </nav>
        <div class="sub-footer">
            <div class="container mx-auto px-5 md:px-16 grid grid-cols-12 gap-2 py-3">
                <div class="col-span-12 copyright flex flex-col md:flex-row text-center items-center justify-center">
                    <span class="desc">{{ initialYear }}</span>
                    <span class="desc md:mx-2 hidden md:block">|</span>
                    <span class="desc">Desenvolvido com</span>
                    <span class="icon icon-heart mx-1"></span>
                    <span class="desc">por Paulo Teixeira</span>
                </div>
            </div>
        </div>
    </footer>
</template>
<style scoped lang="scss">
.footer {
    width: 100%;
    height: auto;
    background: $blk1;

    .logo {
        img {
            height: 50px;
        }
    }

    .social {
        .icon {
            color: $wth1;
            font-size: 1.7rem;
        }

        .handle {
            color: $wth1;
            font-size: 1rem;
        }
    }

    .sub-footer {
        background: $bl1;

        .copyright {
            .desc {
                color: $wth1;
            }

            .icon {
                color: $wth1;
                font-size: 1.2rem;
            }
        }
    }
}
</style>