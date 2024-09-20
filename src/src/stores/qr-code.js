import { reactive } from 'vue'
import { defineStore } from 'pinia'

/** stores **/
import { useProcessStore } from '@/stores/common/process'

/** services **/
import { httpPost } from '@/services/http'

export const useQrCodetStore = defineStore('qrCode', () => {
  /** default import **/
  const processStore = useProcessStore()

  /**  states  **/
  const data = reactive({ status: '', message: '', data: '' })

  async function generate(value) {
    await processStore.setProcessing({ processing: true })
    const response = await httpPost({ url: '/tools/code/qrcode/generate/', body: value })

    if (response.status == 200) {
      await processStore.setProcessing()
      Object.assign(data, response)
    } else {
      await processStore.setProcessing({
        status: response.status,
        message: 'Ocorreu um erro. Por favor, tente novamente.'
      })
    }
  }

  return { data, generate }
})
