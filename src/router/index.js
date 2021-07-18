import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home/Home.vue';
import MovieDetail from '../views/detail/MovieDetail.vue';
import Contact from '../views/contact/Contact.vue';
import About from '../views/about/About.vue';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/movie/:id',
    name: 'MovieDetail',
    component: MovieDetail
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]
;
const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;