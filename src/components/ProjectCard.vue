<script>

export default {
    name: "ProjectCard",
    props: {
        project: Object,
    },
    data() {
        return {
            contentMaxLength: 200,
        }

    },
    methods: {
        truncateText(text) {
            if (text && text.length > this.contentMaxLength) {
                return text.substr(0, this.contentMaxLength) + '...';
            }
            return text;
        }
    }

}
</script>

<template>
    <div class="card" >
        <div class="card-body">
            <h1>Titolo</h1>
            <h5 class="card-title">{{ this.project.title }}</h5>
            <h2>Slug</h2>
            <h6 class="card-subtitle mb-2 text-muted">{{ this.project.slug }}</h6>
            <h2>Tipologie</h2>
            <h2>Descrizione</h2>
            <h6 class="card-subtitle ms-height mb-2 text-muted">{{ truncateText(this.project.description) }}</h6>
            <div>
                <div class="card-text">Technology</div>
                <span v-for="technology in this.project.technologies">
                    {{ technology.name }},
                </span>
            </div>
            <router-link :to="{name: 'single-project', params: { slug: this.project.slug }}" class="btn btn-danger">
                Mostra Elemento
            </router-link>

        </div>
    </div>
</template>

<style>
.ms-height {
    height: 100px;
}
</style>