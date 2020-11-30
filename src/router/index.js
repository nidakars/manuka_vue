import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Manuka from "../views/Manuka.vue";

Vue.use(VueRouter);


const routes = [{
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/About.vue")
    },
    {
        path: "/Manuka",
        name: "Manuka",
        component: Manuka
    },
    {
        path: "/indirim",
        name: "indirim",
        component: () =>
            import ( /* webpackChunkName: "indirim" */ "../views/İndirim")
    },
    {
        path: "/yeni",
        name: "yeni",
        component: () =>
            import ( /* webpackChunkName: "yeni" */ "../views/Yeni")
    },
    {
        path: "/giyim",
        name: "giyim",
        component: () =>
            import ( /* webpackChunkName: "giyim" */ "../views/Giyim")
    },
    {
        path: "/canta",
        name: "canta",
        component: () =>
            import ( /* webpackChunkName: "canta" */ "../views/Çanta")
    },
    {
        path: "/aksesuar",
        name: "aksesuar",
        component: () =>
            import ( /* webpackChunkName: "aksesuar" */ "../views/Aksesuar")
    },
    {
        path: "/ayakkabi",
        name: "ayakkabi",
        component: () =>
            import ( /* webpackChunkName: "ayakkabi" */ "../views/Ayakkabı")
    },
    {
        path: "/corap",
        name: "corap",
        component: () =>
            import ( /* webpackChunkName: "corap" */ "../views/Çorap")
    }
];

const router = new VueRouter({
    routes
});

export default router;