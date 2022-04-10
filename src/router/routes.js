const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Homepage.vue") }],
  },
  {
    path: "/Categories",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("src/pages/Categories/Categories.vue") },
      { path: "item/:id", component: () => import("src/pages/Categories/CategoriePage.vue") }
    ],
  },
  {
    path: "/Drinks",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      //{ path: "", component: () => import("pages/Categories.vue") },
      { path: "type/:id", component: () => import("src/pages/Drinks/Drinks.vue") },
      { path: "RandomDrink", component: () => import("src/pages/Drinks/RandomDrinks.vue") }
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
