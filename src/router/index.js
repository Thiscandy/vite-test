
import { createRouter, createWebHistory } from "vue-router";

const Index = { template: '<div>Index</div>' }
const Home = { template: '<div>Home</div>' }
const About = { template: '<div>About</div>' }

const routes = [
    { path: '/', component: Index },
    { path: '/home', component: Home },
    { path: '/about', component: About }
]

export default createRouter({
    history: createWebHistory(),
    routes,
})

