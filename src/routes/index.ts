import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/AuthenticatedLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/pages/HomePage.vue')
      }
    ]
  },
  {
    path: '/unauthenticated',
    component: () => import('@/layouts/UnauthenticatedLayout.vue'),
    children: [
      {
        path: '/sign-in',
        name: 'sign-in',
        component: () => import('@/pages/SignIn.vue')
      },
      {
        path: '/sign-up',
        name: 'sign-up',
        component: () => import('@/pages/SignUp.vue')
      }
    ]
  }
];

export default createRouter({
  history: createWebHistory(),
  routes
});
