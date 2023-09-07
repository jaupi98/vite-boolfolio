<script>
export default {
         name:"AppHeader" ,
         data(){
            return{
                    menuItems:[
                        {
                            label:'Home',
                            routeName:'home'
                        },
                        {
                            label:'Chi siamo',
                        },
                        {
                            label:'progetti',
                            routeName:'projects'
                        },
                        {
                            label:'tipologie',
                            routeName:'types'
                        },
                        {
                            label:'Contatti',
                        },
                    ]
            }
         }
    }
</script>
<template lang="">
    
<nav class="navbar navbar-expand-lg navbar-light bg-">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">
                    Boolfolio
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item" v-for="(item,index) in menuItems" :key="index">
                    <router-link :to="{name: item.routeName}" class="nav-link " aria-current="page" href="#">{{item.label}}</router-link>
                </li>
            </ul>
            
        </div>
    </div>
</nav>
    
</template>
<style lang="">
    
</style>