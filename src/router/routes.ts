export const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: "/home",
        name: "Home",
        component: () => import('../pages/HomePage.vue')
    },
    {
        path: "/about",
        name: "About",
        component: () => import('../pages/AboutPage.vue')
    },
    {
        path: "/skill",
        name: "Skill",
        component: () => import('../pages/SkillPage.vue')
    },
    {
        path: "/portfolio",
        name: "Portfolio",
        component: () => import('../pages/PortfolioPage.vue'),
        children: [
            {
                path: ":id",
                name: "PortfolioDetail",
                component: () => import('../pages/PortfolioPage.vue')
            }
        ]
    },
    {
        path: "/client",
        name: "Client",
        component: () => import('../pages/ClientPage.vue')
    }


]