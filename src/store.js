import { reactive } from "vue";

export const store = reactive ({
    localhost: 'http://localhost:8000/',


//Menù relativo all'header
    menuheadbar : [
        {
            label: 'Home',
            routeName: 'home'
        },
        {
            label: 'Contatti',
            routeName: 'contact'
        },
        {
            label: 'Progetti',
            routeName: 'project'
        },
    ],
//Fine Menù relativo all'header
})