import {RouteRecordRaw} from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {path: 'rooms/:roomId', component: () => import('pages/PokerRoom.vue')},
      {path: '', component: () => import('pages/PokerRoom.vue')},
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('layouts/LogInLayout.vue'),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
