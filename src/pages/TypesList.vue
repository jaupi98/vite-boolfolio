<script>
import {store} from '../store.js';
import axios from 'axios';
import AppLoeder from '../components/AppLoader.vue';
 export default {
      name:"TypesList",
      components:{
        AppLoeder
      },
      data(){
            return{
                store,
                types:[],
                loading
            }
        },
        created() {
            this.getTypes();
        },
        methods: {
            getTypes(){
                axios.get(`${this.store.baseUrl}/api/types`).then((response)=>{
                    this.store.loading = true;
                   if(response.data.success){
                        this.types = response.data.results
                   }
                });
            }
        }   
    }
    </script>
<template lang="">
    <div>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1>tipologie</h1>
                </div>
            </div>
            <AppLoader v-if="store.loading"/>
            <div class="container" v-else>
                <div class="row">
                    <div class="col-12 col-md-2" v-for="type in types" :key="types.id">
                        <div class="card">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="">
    
</style>