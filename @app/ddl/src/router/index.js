import { createRouter, createWebHistory } from 'vue-router';

import { DOCUMENT_TITLE } from '@/constants';
import PageError from '@/pages/Error/index.vue';
import PageHome from '@/pages/Home/index.vue';

const routes = [
  {
    path: '/',
    name: 'stepA',
    meta: { title: 'papaen' },
    component: PageHome,
    children: [
      {
        path: '/',
        name: 'stepA',
        meta: { title: 'Step A' },
        component: () => import('@/pages/StepA/index.vue'),
      },
      {
        path: '/step-b',
        name: 'stepB',
        meta: { title: 'Step B' },
        component: () => import('@/pages/StepB/index.vue'),
      },
      {
        path: '/step-c',
        name: 'stepC',
        meta: { title: 'Step C' },
        component: () => import('@/pages/StepC/index.vue'),
      },
    ],
  },

  {
    path: '/:pathMatch(.*)',
    name: '404',
    meta: { title: '404 Not Found', isPublicRoute: true },
    component: PageError,
  },
];

const router = createRouter({
  scrollBehavior: () => ({ top: 0 }),
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, _, next) => {
  document.title = to?.meta?.title
    ? `${to.meta.title} - ${DOCUMENT_TITLE}`
    : DOCUMENT_TITLE;

  next();
});

export default router;

export { router, routes };
