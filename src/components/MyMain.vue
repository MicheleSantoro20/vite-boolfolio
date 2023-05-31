<script>
import axios from 'axios';
import ProjectCard from './ProjectCard.vue';

export default {
    name: 'MyMain',
    components:{
        ProjectCard
    },

    data() {
        return{
            projects: [],
            localhost: 'http://localhost:8000/',
        }
    },
    methods: {
        getPosts() {
            axios.get(`${this.localhost}api/projects`)
            .then(response =>{
                this.projects = response.data.results;
                console.log(this.projects);
                console.log('fine');
            })

        }
    },
    mounted(){
        this.getPosts();
    }
}

</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-3" v-for="project in projects">
                <ProjectCard :project="project"></ProjectCard>
            </div>
        </div>
    </div>
</template>



<style scoped lang="scss">
</style>

