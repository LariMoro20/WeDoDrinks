<template>
  <nav class="full-width flex justify-center">
    <ul class="horizontal__menu no-padding no-margin">
      <li class="horizontal__menu-item">
        <router-link class="horizontal__menu-item-link" to="/"
          >Inicial</router-link
        >
      </li>
      <li class="horizontal__menu-item">
        <router-link class="horizontal__menu-item-link" to="/categories"
          >Drinks</router-link
        >
      </li>
      <li class="horizontal__menu-item">
        <router-link
          class="horizontal__menu-item-link"
          to="/drinks/type/Non_Alcoholic/"
          >Drinks não alcoólicos</router-link
        >
      </li>
      <li class="horizontal__menu-item">
        <router-link class="horizontal__menu-item-link" to="/"
          >Drink Aleatório</router-link
        >
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style>
.horizontal__menu {
}
.horizontal__menu-item {
  padding: 10px;
  display: inline-block;
}
.horizontal__menu-item-link,
.horizontal__menu-item-link:active {
  text-decoration: none;
  color: white;
}
</style>
