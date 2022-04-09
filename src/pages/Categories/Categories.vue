<template>
  <q-page>
    <div class="categories row flex q-py-md">
      <div class="categories__title text-center full-width">Categorias</div>
      <div class="container">
        <div class="categories__itens row flex flex-center">
          <div
            class="col-md-3 col-lg-3 col-6 q-px-sm q-py-sm"
            v-for="(categorie, ikey) in categories"
            :key="ikey"
          >
            <Item :categorie="categorie" />
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import { api } from "boot/axios";
import Item from "src/components/Categories/Item.vue";

export default defineComponent({
  name: "Categories",
  components: {
    Item,
  },
  setup() {
    const categories = ref([]);

    onMounted(() => {
      getAPI();
    });
    const getAPI = async () => {
      await api.get("list.php?c=list").then((res) => {
        categories.value = res.data.drinks;
      });
    };
    return {
      categories,
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
  font-size: 2em;
  line-height: normal;
}
</style>
