<template>
  <q-page class="randon__bg flex justify-center full-height">
    <div class="row flex justify-center">
      <div
        class="col-md-6 col-lg-6 col-10 q-px-sm q-py-sm q-mt-md"
        v-for="(drink, ikey) in drinks"
        :key="ikey"
      >
        <div
          class="drinks__title text-black text-center full-width randon__item q-pa-md"
        >
          O desafio foi dado.. e o drink da vez é:
        </div>
        <Item :drink="drink" />
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import { api } from "boot/axios";
import { useRoute } from "vue-router";
import Item from "src/components/Drinks/Item.vue";

export default defineComponent({
  name: "Categories",
  components: {
    Item,
  },
  setup() {
    const drinks = ref([]);
    const route = useRoute();
    onMounted(() => {
      getAPI();
    });
    const getAPI = async () => {
      await api.get("random.php").then((res) => {
        drinks.value = res.data.drinks;
      });
    };

    return {
      drinks,
      getAPI,
    };
  },
});
</script>
<style scoped>
.randon__bg {
  background-image: url("/images/bg2.jpg");
  background-size: cover;
}
.drinks__title {
  font-weight: 400;
  color: #fff;
  font-size: 2em;
  line-height: normal;
}
.randon__item {
  background-color: #ffffffa3;
}
</style>
