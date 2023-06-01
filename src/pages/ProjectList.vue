<template>
    <div class="container">
        <div class="row">
            <div class="col-3" v-for="project in projects">
                <ProjectCard :project="project"></ProjectCard>
            </div>
            
        </div>
    </div>
    <nav class="d-flex justify-content-center">
            <ul class="pagination">
                <li class="page-item" @click="getProjects(currentPage - 1)" :class="{'disabled':currentPage==1}">
                    <button class="page-link">Precedente</button>
                </li>
                <li v-for="(page,index) in this.lastPage" class="page-item" @click="getProjects(index+1)" :class="{'disabled':currentPage==index+1}">
                    <button class="page-link">{{index + 1}}</button>
                </li>
                <li class="page-item" @click="getProjects(currentPage + 1)" :class="{'disabled':currentPage==lastPage}">
                    <button class="page-link">Successiva</button>
                </li>
            </ul>
        </nav>
</template>


<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';
import { store } from '../store.js';

export default {
    name: 'ProjectList',
    components:{
        ProjectCard
    },

    data() {
        return{
            projects: [],
            store,
            currentPage: 1,
            lastPage: null
        }
    },
    methods: {
        getProjects(getPage) {
            axios.get(`${this.store.localhost}api/projects`,
                {
                    params: {
                        page:getPage
                    }
                }
            )
            .then(response =>{
                console.log(response);
                this.projects = response.data.results.data;
                this.currentPage= response.data.results.current_page;
                this.lastPage= response.data.results.last_page;

            })

        }
    },
    mounted(){
        this.getProjects(1); 
    }
}

</script>




<style scoped lang="scss">
</style>

