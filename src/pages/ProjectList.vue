<script>
import axios from 'axios';
import AppLoader from '../components/AppLoader.vue';

export default {
    name: 'ProjectList',
    components:{
        AppLoader
    },
    data(){
        return{
            baseUrl: 'http://localhost:8000',
            projects:[],
            loading: true,
            maxNumCharacters:200,
            currentPage:1,
            lastPage:null,
        

        }
    },
    created(){
        this.getProjects(1);
    },
    methods:{
        getProjects(num_page){
            // this.loading = true;
            // axios.get(`${this.baseUrl}/api/projects`).then((response) =>{

            //     if(response.data.success){
            //         this.projects = response.data.results.data;
            //         this.loading = false;
            //     }
            //     else{

            //     }
            // })
            axios.get(`${this.baseUrl}/api/projects`,{params: {page: num_page}}).then((response)=>{
                this.projects = response.data.results.data;
                this.currentPage = response.data.results.current_page;
                this.lastPage = response.data.results.last_page;
                this.loading =false;
            })
        },
        truncateText(text){
            if(text.length>50){
                return text.substr(0,50 ) + '...';
            }
            return text;
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
            <div class="col-12 col-md-4" v-for="project in projects" :key="project.id" >
                <div class="card my-3 min-height-250px">
                    <div class="card-header">
                        <h2 class="text-center">{{project.title}}</h2>
                    </div>
                    <div class="card-body m-1">
                        <span v-if="project.type">
                                {{project.type.name}}
                        </span>
                        <span v-else="project.type" >Tipologia non asegnata</span>
                       <p>{{truncateText(project.description)}}</p> 
                    </div>
                    <div class="card-footer">
                        <a href="#" class="btn btn-sm btn-primary">leggi piu' informazioni</a>
                    </div>
               </div>
                
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="d-flex justify-content-center">
                        <nav>
                            <ul class="pagination">
                                <li :class="currentPage === 1 ? 'disabled' : ''">
                                    <button class="page-link"  @click="getProjects(currentPage -1)" >precedente</button>
                                </li>
                                <li :class="currentPage === lastPage ? 'disabled' : ''">
                                    <button class="page-link" @click="getProjects(currentPage+1)">successivo</button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
    .min-height-250px{
        min-height: 250px;
    }
</style>