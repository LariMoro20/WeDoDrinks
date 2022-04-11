const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Homepage.vue") },
    { path: "about", component: () => import("src/pages/About.vue") },
    { path: "drinks/type/:id", component: () => import("src/pages/Drinks/Drinks.vue") },
    { path: "drinks/RandomDrink", component: () => import("src/pages/Drinks/RandomDrinks.vue") }],

  },
  {
    path: "/Categories",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("src/pages/Categories/Categories.vue") },
      { path: "item/:id", component: () => import("src/pages/Categories/CategoriePage.vue") }
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
