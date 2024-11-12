import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';

// Define your routes
const routes = [
  // Add your routes here
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Create the Vue app
const app = createApp(App);

// Use Pinia and Router
app.use(createPinia());
app.use(router);

// Mount the app
app.mount('#app');
