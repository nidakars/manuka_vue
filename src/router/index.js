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
        path: "/kayit",
        name: "kayit",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/uye_kayit.vue")
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
        path: "/sepet",
        name: "sepet",
        component: () =>
            import ( /* webpackChunkName: "canta" */ "../views/Sepet")
    },
    {
        path: "/giris",
        name: "giris",
        component: () =>
            import ( /* webpackChunkName: "aksesuar" */ "../views/uye_giris")
    },
    {
        path: "/sepetup",
        name: "sepetup",
        component: () =>
            import ( /* webpackChunkName: "ayakkabi" */ "../views/Sepet_popUp")
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