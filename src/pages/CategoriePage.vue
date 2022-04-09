<template>
  <q-page>
    <div class="categories row flex q-py-md">
      <div class="categories__title text-center full-width">
        Drinks da categoria:
        {{ $route.params.id.replace("-", "/").replace("_", " ") }}
      </div>
      <div class="container">
        <div class="categories__itens row flex flex-center">
          <div
            class="col-md-3 col-lg-3 col-6 q-px-sm q-py-sm"
            v-for="(drink, ikey) in drinks"
            :key="ikey"
          >
            <Item :drink="drink" />
          </div>
        </div>
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
      await api
        .get("filter.php?c=" + route.params.id.replace("-", "/"))
        .then((res) => {
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
.section__full {
  background-image: url("/images/bg1.jpg");
  background-size: cover;
  background-attachment: fixed;
  height: 250px;
}

.categories__title {
  font-weight: 400;
  color: #fff;
  font-size: 3em;
  line-height: normal;
}
</style>
