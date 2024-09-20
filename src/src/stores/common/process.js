import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useProcessStore = defineStore('process', () => {
  const data = reactive({
    processing: false,
    status: '',
    message: ''
  })

  const setProcessing = async (param = {}) => {
    data.processing = param?.processing ?? false
    data.status = param?.status ?? ''
    data.message = param?.message ?? ''

    if (data.processing) {
      disableScroll()
    } else {
      enableMouseScroll()
    }
  }

  const disableScroll = () => {
    window.addEventListener('wheel', preventScroll, { passive: false })
  }

  const preventScroll = (event) => {
    event.preventDefault()
  }

  const enableMouseScroll = () => {
    window.removeEventListener('wheel', preventScroll, { passive: false })
  }

  return { setProcessing, data }
})
