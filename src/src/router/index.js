import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  /* -- HOME -- */
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home/Index.vue'),
    meta: {
      scrollToTop: true,
      title: 'Coding Storm - Home'
    }
  },
  /* -- TOOLS -- */
  {
    path: '/tools',
    name: 'tools',
    component: () => import('../views/tools/Container.vue'),
    meta: {
      title: 'Coding Storm - Tools'
    },
    children: [
      {
        path: '',
        name: 'toolsIndex',
        component: () => import('../views/tools/Index.vue'),
        meta: {
          scrollToTop: true,
        },
      },
      {
        path: 'qrcode',
        name: 'toolsQrcode',
        component: () => import('../views/tools/Qrcode.vue'),
        meta: {
          scrollToTop: true,
        },
      }
    ]
  },
  /* -- TOOLS -- */
  {
    path: '/biografia',
    name: 'biography',
    component: () => import('../views/biography/Index.vue'),
    meta: {
      scrollToTop: true,
      title: 'Coding Storm - Biografia'
    }
  },
  /* -- CONTACT -- */
  {
    path: '/contato',
    name: 'contact',
    component: () => import('../views/contact/Index.vue'),
    meta: {
      scrollToTop: true,
      title: 'Coding Storm - Contato'
    }
  }
]

// const urlPublic = `${import.meta.env.VITE_STORAGE_PUBLIC_URL}`
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    if (to.meta.scrollToTop) {
      //Role a página para o topo
      return { top: 0 }
    }
  }
})

router.beforeEach((to, from, next) => {
  next()
  document.title = `${to.meta.title}`

  // let metaDescription = document.querySelector('meta[name="description"]')
  // metaDescription.setAttribute('content', to.meta.description || '')
})

export default router
