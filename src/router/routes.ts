import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/IndexPage.vue'),
        children: [
          {
            path: '',
            strict: true,
            redirect: 'operations',
          },
          {
            path: 'operations',
            name: 'OperationsPage',
            component: () => import('pages/OperationsPage.vue'),
          },
        ],
      },
    ],
  },
];

export default routes;
