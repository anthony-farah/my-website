import Vue from 'vue'
import { createWebHistory, createRouter } from "vue-router";
import Home from './components/home.vue'
import Resume from './components/resume.vue'
import Projects from './components/projects.vue'
import About from './components/about.vue'

const history = createWebHistory();

const routes = [
    { path: "/", component: Home },
    { path: "/Resume", component: Resume },
    { path: "/Projects", component: Projects },
    { path: "/About", component: About },
];

const router = createRouter({ history, routes });

export default router;
