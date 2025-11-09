import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import CreateAccountView from '../views/CreateAccountView.vue'
import AboutView from '../views/AboutView.vue'
// Rename HomeMain to DashboardView
import DashboardView from '../views/DashboardView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', name: 'home', component: HomeView,
    },
      {
      path: '/login', name: 'login', component: LoginView,
    },
    {
      path: '/create-account', name: 'create-account', component: CreateAccountView,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
    },
    {
      path: '/about', name: 'about', component: AboutView,
    },
  ]
})

export default router
