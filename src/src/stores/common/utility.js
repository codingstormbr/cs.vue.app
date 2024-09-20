import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUtilityStore = defineStore('utility', () => {
  const navegationMobile = ref(false)
  const statusConnection = ref(navigator.onLine)

  const startConnectionView = () => {
    const updateOnlineStatus = () => {
      statusConnection.value = navigator.onLine
    }

    window.addEventListener('online', updateOnlineStatus)
    window.addEventListener('offline', updateOnlineStatus)
  }

  const handleMenuMobile = () => {
    navegationMobile.value = !navegationMobile.value

    if (navegationMobile.value) {
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

  return { handleMenuMobile, navegationMobile, startConnectionView, statusConnection }
})
