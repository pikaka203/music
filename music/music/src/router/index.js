import Vue from 'vue'
import Router from "vue-router"

const reconmmend=()=>import('components/views/reconmmend/reconmmend')
const search=()=>import('components/views/search/search')
const singer=()=>import('components/views/singer/singer')
const sort=()=>import('components/views/sort/sort')

Vue.use(Router)



const routes=[
    {
        path:'',
        redirect:"/reconmmend"
    },
    {
       path:'/reconmmend',
       component:reconmmend 
    },
    {
        path:'/search',
        component:search
    },
    {
        path:'/singer',
        component:singer
    },
    {
        path:'/sort',
        component:sort
    }
]
const router = new Router({
    routes,
    // mode:'history'
})

export default router