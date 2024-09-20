import { ref } from 'vue'
import { defineStore } from 'pinia'

/** stores **/
import { useProcessStore } from '@/stores/common/process'

/** services **/
import { httpGet } from '@/services/http'

export const useToolStore = defineStore('tool', () => {
  /** default import **/
  const processStore = useProcessStore()

  /**  states  **/
  const data = ref({})
  const currentTool = ref({
    title: 'Tools',
    subtitle: ''
  })

  async function getToolsLimit(qtd = 5) {
    await processStore.setProcessing({ processing: true })
    const response = await httpGet({ url: '/tools/limit/' + qtd })

    if (response.status == 200) {
      await processStore.setProcessing({ processing: false })
      data.value = await response.data
    } else {
      await processStore.setProcessing({
        status: response.status,
        message: 'Ocorreu um erro ao carregar alguns dados. Por favor, tente novamente.'
      })
    }
  }

  async function getTools() {
    await processStore.setProcessing({ processing: true })
    const response = await httpGet({ url: '/tools/' })

    if (response.status == 200) {
      await processStore.setProcessing({ processing: false })
      data.value = await response.data
    } else {
      await processStore.setProcessing({
        status: response.status,
        message: 'Ocorreu um erro ao carregar alguns dados. Por favor, tente novamente.'
      })
    }
  }

  return { data, currentTool, getTools, getToolsLimit }
})
