import { createRouter, createWebHistory } from 'vue-router';
import ClientesView from '@/views/ClientesView.vue';
import ClienteForm from '@/components/ClienteForm.vue';

const routes = [
  {
    path: '/',
    name: 'clientes',
    component: ClientesView,
  },
  {
    path: '/clientes/add',
    name: 'addCliente',
    component: ClienteForm,
  },
  {
    path: '/clientes/edit/:id',
    name: 'editCliente',
    component: ClienteForm,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;