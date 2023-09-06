<script>
import {store} from '../store.js';

    export default {
            name:"ProjectCard",
            props:{
                project:Object
            },
            data() {
                return {
                    store,
                    maxNumCharacters:200,
                }
            },
            methods: {
                truncateText(text){
                    if(text.length>50){
                    return text.substr(0,50 ) + '...';
                     }
                return text;
                }
            }
        }
</script>
<template lang="">
    
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
    
</template>
<style lang="">
    
</style>