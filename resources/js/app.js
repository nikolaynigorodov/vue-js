require('./bootstrap')
// window.Vue = require('vue').default;
// Vue.component('example-component', require('./components/ExampleComponent.vue').default);
// Vue.component('app', require('./components/App.vue').default);

import Vue from "vue";
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import App from "./components/App"
import Home from "./components/Home"
import Desks from "./components/desks/Desks"

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/desks',
            name: 'desks',
            component: Desks
        }
    ]
})

const app = new Vue({
    el: '#app',
    components: {App},
    router
});
