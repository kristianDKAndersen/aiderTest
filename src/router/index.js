import { createRouter, createWebHashHistory } from 'vue-router';
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'formbuilder',
      component: () => import('../views/FrontPage.vue'),
    },
  ],
});

export default router;
