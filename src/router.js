//importiamo createRouter e CreateHistory da vue_router
import { createRouter, createWebHistory } from "vue-router";

//importiamo le componenti che rappresentano le pagine 

import HomePage from "./pages/HomePage.vue";
import ProjectList from "./pages/ProjectList.vue";

//creiamo il router a tutti gli effeti 

const router = createRouter({
    history: createWebHistory(),
    routers:[
        {
            path:'/',
            name:'home',
            components:HomePage
        },
        {
            path:'/projects',
            name:'projects',
            components:ProjectList
        }
    ]
})


