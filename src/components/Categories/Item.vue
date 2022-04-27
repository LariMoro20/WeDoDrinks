<template>
  <div class="categories__item q-pa-lg">
    <div class="categories__item-image">
      <img
        :src="
          '/images/categories/' +
          categorie.strCategory.replace(' ', '_').replace('/', '_') +
          '.jpg'
        "
        class="categories__item-image-img"
      />
    </div>
    <div class="categories__item-title text-black text-center">
      {{ categorie.strCategory }}
    </div>
    <div class="text-white text-center">
      <q-btn
        color="primary"
        text-color="white"
        label="Ver categoria"
        :to="
          '/categories/item/' +
          categorie.strCategory.replace(' ', '_').replace('/', '-')
        "
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    categorie: {
      default: null,
      type: [Array, Object],
    },
    user: Object,
  },
};
</script>

<style scoped>
.categories__item {
  background-color: white;
}
.categories__item-image-img {
  width: 100%;
}
.categories__item-title {
  font-weight: 400;
  font-size: 1.2em;
  line-height: normal;
}
.categories__item-text {
  font-weight: 400;
  font-size: 1.2em;
  line-height: normal;
}
</style>
