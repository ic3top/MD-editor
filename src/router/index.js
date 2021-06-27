import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/home/Home.vue';
import MainEditor from '../views/editor/MainEditor.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/files/:name',
    name: 'MainEditor',
    component: MainEditor,
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "notFound" */ '../views/NotFound.vue'),
  },
  {
    path: '/404/:resource',
    name: '404Resource',
    component: () => import(/* webpackChunkName: "notFound" */ '../views/NotFound.vue'),
    props: true,
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
