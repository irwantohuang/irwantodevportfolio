export const routes = [
    {
        path: "/home",
        name: "Home",
        component: () => import('../pages/HomePage.vue')
    },
    {
        path: "/about",
        name: "About",
        component: () => import('../pages/AboutPage.vue')
    }
    ,
    {
        path: "/skill",
        name: "Skill",
        component: () => import('../pages/SkillPage.vue')
    }
    ,
    {
        path: "/portoflio",
        name: "Portfolio",
        component: () => import('../pages/PortfolioPage.vue')
    }
    ,
    {
        path: "/client",
        name: "Client",
        component: () => import('../pages/ClientPage.vue')
    }


]