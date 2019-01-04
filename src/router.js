import Vue from 'vue';
import Router from 'vue-router';
import Inicio from '@/views/Inicio.vue';
import Conta from '@/views/Conta.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: Inicio,
    },
    {
      path: '/conta',
      name: 'conta',
      component: Conta,
    },
  ],
  mode: 'history',
});
