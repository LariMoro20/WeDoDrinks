<template>
  <div class="header bg-primary">
    <div class="header-logo text-center">
      <router-link to="/"
        ><img class="header-logo-img" src="/logo/logotipo.png"
      /></router-link>
    </div>
    <Menu />
  </div>
</template>

<script>
import Menu from "components/Menu/Menu.vue";

export default {
  components: { Menu },
};
</script>

<style>
.header {
  padding: 20px;
}
.header-logo-img {
  width: 250px;
}
</style>
