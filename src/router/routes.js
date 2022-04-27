const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Homepage.vue") },
    { path: "about", name: "about", component: () => import("src/pages/About.vue") },
    { path: "drinks/type/:id", name: "type", component: () => import("src/pages/Drinks/Drinks.vue") },
    { path: "drinks/search/:id", name: "search", component: () => import("src/pages/Drinks/FoundDrink.vue") },
    { path: "drinks/RandomDrink", name: "random", component: () => import("src/pages/Drinks/RandomDrinks.vue") }],

  },
  {
    path: "/Categories",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", name: "categories", component: () => import("src/pages/Categories/Categories.vue") },
      { path: "item/:id", name: "categorie", component: () => import("src/pages/Categories/CategoriePage.vue") }
    ],
  },



  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
