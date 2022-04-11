<template>
  <q-page>
    <div class="drinks row flex q-py-md">
      <div class="drinks__title text-center full-width">
        Drinks
        {{ $route.params.id.replace("_", " ") }}
      </div>
      <div class="container">
        <div v-if="drinks" class="drinks__itens row flex flex-center">
          <div
            class="col-md-3 col-lg-3 col-6 q-px-sm q-py-sm"
            v-for="(drink, ikey) in drinks"
            :key="ikey"
          >
            <Item :drink="drink" />
          </div>
        </div>
        <div class="text-white row flex flex-center" v-else>
          Drinks não encontrados..
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
  name: "drinks",
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
      await api.get("filter.php?a=" + route.params.id).then((res) => {
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

.drinks__title {
  font-weight: 400;
  color: #fff;
  font-size: 2em;
  line-height: normal;
}
</style>
