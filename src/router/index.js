import { createRouter, createWebHistory } from 'vue-router';

import ViewPost from '@/views/ViewPost.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: ViewPost,
  },
  {
    path: '/:id',
    name: 'post',
    component: ViewPost,
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
