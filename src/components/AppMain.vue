<script>
import axios from 'axios';
import AppLoader from './AppLoader.vue';

export default {
    name: 'AppMain',
    components:{
        AppLoader
    },
    data(){
        return{
            baseUrl: 'http://localhost:8000',
            projects:[],
            loading: true

        }
    },
    created(){
        this.getProjects();
    },
    methods:{
        getProjects(){
            this.loading = true;
            axios.get(`${this.baseUrl}/api/projects`).then((response) =>{

                if(response.data.success){
                    this.projects = response.data.results;
                    this.loading = false;
                }
                else{

                }
            })
        }
    }
}
</script>
<template>
    <div>
        <div class="container">
            <div class="row">
                <h1 class="text-center">Boolfolio</h1>
            </div>
        </div>
    </div>
    <AppLoader v-if="loading"/>
    <div class="container">
        <div class="row">
            <div class="col-12" v-for="project in projects" :key="project.id" >
                {{project.title}}
            </div>
        </div>
    </div>
</template>
<style lang="">
    
</style>