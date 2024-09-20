<script setup>
import BaseTitle from '@/components/BaseTitle.vue'
import ToolCard from '@/components/ToolCard.vue'
import { onMounted } from 'vue'
import { useToolStore } from '@/stores/tool'

const toolStore = useToolStore()

onMounted(() => {
    toolStore.getToolsLimit()
})

</script>
<template>
    <article class="w-full">
        <section class="sec-1 flex items-center">
            <div class="container mx-auto px-5 md:px-16 grid grid-cols-12 gap-4">
                <div
                    class="title col-span-12 md:col-span-6 xl:col-span-3 xl:col-start-4 flex flex-col justify-center text-center md:text-right">
                    <h1 class="title-primary font-medium text-5xl mb-5">Facilite sua rotina online!</h1>
                    <h2 class="title-secondary font-extralight leading-6 text-xl">Encontre ferramentas online fáceis
                        de
                        usar
                        com
                        recursos práticos
                        para
                        simplificar suas tarefas diárias na Internet.</h2>
                </div>

                <div class="draw col-span-12 md:col-span-6 xl:col-span-3 flex items-center">
                    <div class="frame flex justify-center">
                        <div class="paper paper-1">
                            <div class="line line-1"></div>
                            <div class="line line-2"></div>
                            <div class="line line-3"></div>
                            <div class="line line-4"></div>
                            <div class="line line-5"></div>
                            <div class="line line-6"></div>
                            <div class="line line-7"></div>
                        </div>
                        <div class="paper paper-2"></div>
                        <div class="paper paper-3"></div>
                    </div>
                </div>

                <div class="col-span-12">
                    <div class="scroll hidden md:block">
                        <span class="icon-mouse"></span>
                    </div>
                </div>
            </div>
        </section>
        <section class="sec-2 py-10">
            <div class="container mx-auto px-5 md:px-16 grid grid-cols-12 gap-2">
                <div class="col-span-12">
                    <base-title class="mb-5" :data="{ 'title': 'Tools' }" />
                </div>
                <div class="col-span-12">
                    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5">
                        <tool-card v-for="tool in toolStore.data.tools" :tool="tool" :key="tool" />
                        <tool-card :tool="{ 'name': 'Ver Mais', 'uri': '/tools' }" />
                    </div>
                </div>
            </div>
        </section>
    </article>
</template>

<style scoped lang="scss">
.sec-1 {
    width: 100%;
    height: calc(100vh - 60px);
    background: $blk2;

    .draw {
        display: flex;
        justify-content: center;
        position: relative;

        .frame {
            width: 250px;
            height: 250px;
            background: $bl1;
            position: relative;
            border-radius: 0 1rem 0 1rem;

            .paper {
                width: 100px;
                height: 150px;
                display: flex;
                flex-direction: column;
                padding: 20px;
                box-sizing: border-box;
                transform: rotate(330deg) skew(30deg) scaleY(0.850);
                position: absolute;
                background: $wth1;


                .line {
                    width: 0;
                    height: 10px;
                    background: $blk3;
                    margin: 5px 0;
                }

                .line-1 {
                    width: 100%;
                }

                .line-2 {
                    width: 80%;
                }

                .line-3 {
                    width: 80%;
                }

                .line-4 {
                    width: 100%;
                }

                .line-5 {
                    width: 80%;
                }

                .line-6 {
                    width: 80%;
                }

                .line-7 {
                    width: 100%;
                }
            }

            .paper-1 {
                z-index: 10;
                top: 50px;
                animation: paper 4s ease-in-out infinite;
            }

            .paper-2 {
                z-index: 5;
                top: 60px;
                opacity: .7;
            }

            .paper-3 {
                z-index: 3;
                top: 70px;
                opacity: .7;
                box-shadow: -20px 19px 15px 0px rgba(0, 0, 0, 0.5);
            }

            @keyframes paper {

                0%,
                100% {
                    transform: translateY(0) rotate(330deg) skew(30deg) scaleY(0.850);
                }

                50% {
                    transform: translateY(-7px) rotate(330deg) skew(30deg) scaleY(0.850);
                }
            }
        }

    }

    .title {
        color: $wth1;
    }

    .scroll {
        color: $wth1;

        span {
            font-size: 2rem;
            animation: mouse 2s infinite;
            position: absolute;
            opacity: 0;
            transform: translateY(50px);
            left: calc(50% - 10px);
        }

        @keyframes mouse {

            0% {
                transform: translateY(50px);
                opacity: 0;
            }

            50% {
                opacity: 1;
            }

            100% {
                transform: translateY(100px);
                opacity: 0;
            }


        }
    }
}

.sec-2 {
    width: 100%;
    height: auto;
    background: $wth1;
}
</style>