/* eslint-disable prettier/prettier */
// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import ReservaForm from '../components/ReservaForm.vue';
import { addBodyClass, removeBodyClass } from '../utils/bodyClassManager';

const routes = [
  { path: '/', component: HomePage },
  { path: '/reservas', component: ReservaForm },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.path === '/reservas') {
    addBodyClass('reserva-form');
  } else {
    removeBodyClass('reserva-form');
  }
  next();
});

export default router;