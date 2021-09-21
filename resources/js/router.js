


import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Post from './pages/Post';
import SinglePost from './pages/SinglePost';





const router = new VueRouter({

    mode: "history",

    routes: [

        {
            path: '/',
            name: "home",
            component: Home
        },
        {
            path: '/chi-siamo',
            name: "about",
            component: About
        },
        {
            path: '/posts',
            name: "post",
            component: Post
        },
        {
            path: '/post/:slug', 
            name: "post-detail",
            component: SinglePost
        },
        {
            path: '/contatti',
            name: "contact",
            component: Contact
        },
        
    ]

});

export default router;