import { createWebHistory, createRouter } from "vue-router";
import Home from '../components/home.vue'
import Resume from '../components/resume.vue'
import Projects from '../components/projects.vue'
import About from '../components/about.vue'


const routes = [
    { path: "/", name:'Home', component: Home },
    { path: "/Resume", name:'Resume', component: Resume },
    { path: "/Projects", name:'Projects', component: Projects },
    { path: "/About", name:'About', component: About },
];


const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
