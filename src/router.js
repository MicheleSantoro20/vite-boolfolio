import { createRouter, createWebHistory } from "vue-router";
import AppHome from './pages/AppHome.vue';
import AppContact from './pages/AppContact.vue';
import ProjectList from './pages/ProjectList.vue';
import SingleProject from './pages/SingleProject.vue';


const router = createRouter(
    {
        history: createWebHistory(),
        routes: [
            {
                path: '/',
                name: 'home',
                component: AppHome
            },
            {
                path: '/contatti',
                name: 'contact',
                component: AppContact
            },
            {
                path: '/progetti',
                name: 'project',
                component: ProjectList
            },
            {
                path: '/progetti/:slug',
                name: 'single-project',
                component: SingleProject
            },
        ]
    }
);

export { router };