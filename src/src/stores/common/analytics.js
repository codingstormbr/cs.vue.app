import { defineStore } from 'pinia'
import { reactive } from 'vue'

/** services **/
import { httpPost } from '@/services/http'

export const useAnalyticsStore = defineStore('analytics', () => {
  const data = reactive({
    screen_width: screen.width,
    screen_height: screen.height
  })

  const getAnalyticData = () => {
    if(import.meta.env.VITE_APP_ENV == 'production'){
      httpPost({ url: '/analytic/', body: data })
    }
  }

  return { getAnalyticData }
})
