import Vue from 'vue';
import Router from 'vue-router';
import Inicio from '@/views/Inicio.vue';
import Login from '@/views/Login.vue';
import signUp from '@/views/SignUp.vue';
import Cursos from '@/views/Cursos.vue';
import Produtos from '@/views/Produtos.vue';
import Blog from '@/views/Blog.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: Inicio,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/signup',
      name: 'signUp',
      component: signUp,
    },
    {
      path: '/cursos',
      name: 'cursos',
      component: Cursos,
    },
    {
      path: '/produtos',
      name: 'produtos',
      component: Produtos,
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog,
    },
  ],
  mode: 'history',
});
