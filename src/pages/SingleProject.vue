<template>
    <h1>elemento singolo</h1>
</template>
    
<script>
import axios from 'axios';
import { store } from '../store.js';

    export default {
        name: 'SingleProject',
        data() {
            return {
                store,
            }
        },
        mounted() {
            const slug =  this.$route.params.slug;
            axios.get (`${this.store.localhost}api/progetti/${slug}`)
            .then(response => {
                console.log(response);
            })
        }
    }
</script>