<template>
  <div class="header bg-primary flex justify-between items-center">
    <div class="header-logo text-center">
      <router-link to="/"
        ><img class="header-logo-img" src="/logo/logotipo.png"
      /></router-link>
    </div>
    <div>
      <Menu />
      <q-input
        dense
        color="white"
        label-color="black"
        borderless
        bg-color="white"
        outlined
        v-model="drinkname"
        placeholder="Digite aqui o nome ou inicial do drink"
      >
        <template v-slot:after>
          <q-btn
            @click="handleGetDrink"
            class="full-height full-width text-white bg-secondary"
          >
            <i class="text-h6 ri-search-line"></i>
          </q-btn>
        </template>
      </q-input>
    </div>
  </div>
</template>

<script>
import Menu from "components/Menu/Menu.vue";
import { defineComponent, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
export default defineComponent({
  components: { Menu },
  setup() {
    const router = useRouter();
    const drinkname = ref("");
    const drinks = ref([""]);
    const handleGetDrink = async () => {
      router.push({ name: "search", params: { id: drinkname.value } });
    };

    return {
      drinkname,
      router,
      handleGetDrink,
    };
  },
});
</script>

<style>
.header {
  padding: 10px;
}
.header-logo-img {
  width: 250px;
}
</style>
