import { createRouter, createWebHistory } from 'vue-router';

// Importiamo le componenti che rappresentano le pagine 
import HomePage from "./pages/HomePage.vue";
import ProjectList from "./pages/ProjectList.vue";

// Creiamo il router a tutti gli effetti 
const router = createRouter({
    history: createWebHistory(),
    routes: [  // NOTA: Cambiato 'routers' in 'routes'
        {
            path:'/',
            name:'home',
            component: HomePage, 
        },
        {
            path:'/projects',
            name:'projects',
            component: ProjectList, 
        }
    ]
});

export { router }


