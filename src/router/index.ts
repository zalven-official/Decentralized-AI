import { createRouter, createWebHistory } from 'vue-router';


const router = createRouter({
  history: createWebHistory(process.env.VUE_BASE_PATH ?? ''),
  routes: [
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/pages/NotFound.vue')
    }
  ]
});

export default router;