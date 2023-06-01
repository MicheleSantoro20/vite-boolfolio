<template>
    <div v-if="project">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h1>Titolo</h1>
                <h5 class="card-title">{{ this.project.title }}</h5>
                <h2>Slug</h2>
                <h6 class="card-subtitle mb-2 text-muted">{{ this.project.slug }}</h6>
                <h2>Tipologie</h2>
                <h2>Descrizione</h2>
                <h6 class="card-subtitle mb-2 text-muted">{{ this.project.description }}</h6>
                <div>
                    <div class="card-text">Technology</div>
                    <span v-for="technology in this.project.technologies">
                        {{ technology.name }},
                    </span>
                </div>
                <router-link :to="{ name: this.store.menuheadbar[2].routeName }" class="btn btn-danger">
                    Torna al menù principale
                </router-link>

            </div>
        </div>
    </div>
    <div v-else>
        <h1>caricamento</h1>
    </div>
</template>
    
<script>
import axios from 'axios';
import { store } from '../store.js';

export default {
    name: 'SingleProject',
    data() {
        return {
            store,
            project: null
        }
    },
    mounted() {
        const slug = this.$route.params.slug;
        axios.get(`${this.store.localhost}api/projects/${slug}`)
            .then(response => {
                console.log(response);
                this.project = response.data.results;
            })
    }
}
</script>
<style>

</style>