import { ref } from 'vue'
import { defineStore } from 'pinia'

/** stores **/
import { useProcessStore } from '@/stores/common/process'

/** services **/
import { httpPost } from '@/services/http'

/** composables **/
import { cleanNumberPhone } from '@/composables/util'

export const useContactStore = defineStore('contact', () => {
  /** default import **/
  const processStore = useProcessStore()

  /**  states  **/
  const data = ref({})

  async function store(values = {}) {
    const body = { ...values, ...{ phone: cleanNumberPhone(values.phone) } }

    await processStore.setProcessing({ processing: true })
    const response = await httpPost({ url: '/contacts/', body: body })

    if (response.status == 200) {
      await processStore.setProcessing({
        status: response.status,
        message: 'Enviado com sucesso!'
      })
    } else {
      await processStore.setProcessing({
        status: response.status,
        message: 'Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.'
      })
    }
  }

  return { data, store }
})
