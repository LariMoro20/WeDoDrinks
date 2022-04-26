<template>
  <div class="drinks__item q-pa-lg">
    <div class="drinks__item-image">
      <img :src="drink.strDrinkThumb" class="drinks__item-image-img" />
    </div>
    <div class="drinks__item-title text-black text-center q-mb-sm">
      [#{{ drink.idDrink }}] {{ drink.strDrink }}
    </div>
    <div class="text-white text-center">
      <q-btn
        color="secondary"
        text-color="white"
        label="Detalhes"
        @click="handleOpenDialog"
      />
    </div>
  </div>
  <q-dialog class="bg-grey-10 text-white q-pa-none" v-model="openDialog">
    <q-card class="bg-grey-10 text-white" style="width: 100%; max-width: 90vw">
      <q-card-section class="text-center row items-center">
        <div class="text-h6 text-capitalize">{{ drinkDetails.strDrink }}</div>
        <q-space />
        <q-btn icon="close" flat round dense v-close-popup />
      </q-card-section>

      <q-card-section
        class="q-pt-none scroll full-height flex items-center justify-center"
      >
        <div class="itemtrst full-width">
          <div class="row">
            <div class="col-md-1 col-12"></div>
            <div class="col-md-3 col-12 text-center">
              <div class="drink__modal-image text-center q-pa-md">
                <img
                  class="drink__modal-image-img col-6"
                  :src="drinkDetails.strDrinkThumb"
                />
              </div>
            </div>
            <div class="col-md-8">
              <div class="flex">
                <div class="drink__info-item">
                  <div class="drink__info-item-title">Tipo:</div>
                  {{ drinkDetails.strAlcoholic }}
                </div>
                <div class="drink__info-item">
                  <div class="drink__info-item-title">Categoria:</div>
                  {{ drinkDetails.strCategory }}
                </div>
                <div class="drink__info-item">
                  <div class="drink__info-item-title">Tipo de copo:</div>
                  {{ drinkDetails.strGlass }}
                </div>
              </div>
              <div class="drink__info-item">
                <div class="drink__info-item-title">Ingredientes:</div>
                <ul>
                  <li v-if="drinkDetails.strIngredient1">
                    {{ drinkDetails.strIngredient1 }}
                  </li>
                  <li v-if="drinkDetails.strIngredient2">
                    {{ drinkDetails.strIngredient2 }}
                  </li>
                  <li v-if="drinkDetails.strIngredient3">
                    {{ drinkDetails.strIngredient3 }}
                  </li>
                  <li v-if="drinkDetails.strIngredient4">
                    {{ drinkDetails.strIngredient4 }}
                  </li>
                  <li v-if="drinkDetails.strIngredient5">
                    {{ drinkDetails.strIngredient5 }}
                  </li>
                  <li v-if="drinkDetails.strIngredient6">
                    {{ drinkDetails.strIngredient6 }}
                  </li>
                  <li v-if="drinkDetails.strIngredient7">
                    {{ drinkDetails.strIngredient7 }}
                  </li>
                  <li v-if="drinkDetails.strIngredient8">
                    {{ drinkDetails.strIngredient8 }}
                  </li>
                  <li v-if="drinkDetails.strIngredient9">
                    {{ drinkDetails.strIngredient9 }}
                  </li>
                  <li v-if="drinkDetails.strIngredient10">
                    {{ drinkDetails.strIngredient10 }}
                  </li>
                  <li v-if="drinkDetails.strIngredient11">
                    {{ drinkDetails.strIngredient11 }}
                  </li>
                  <li v-if="drinkDetails.strIngredient12">
                    {{ drinkDetails.strIngredient12 }}
                  </li>
                  <li v-if="drinkDetails.strIngredient13">
                    {{ drinkDetails.strIngredient13 }}
                  </li>
                  <li v-if="drinkDetails.strIngredient14">
                    {{ drinkDetails.strIngredient14 }}
                  </li>
                  <li v-if="drinkDetails.strIngredient15">
                    {{ drinkDetails.strIngredient15 }}
                  </li>
                </ul>
              </div>
              <div class="drink__info-item">
                <div class="drink__info-item-title">Instruções:</div>
                {{ drinkDetails.strInstructions }}
              </div>
            </div>
          </div>
        </div>
      </q-card-section>

      <q-card-actions
        align="right"
        class="bg-grey-10 text-white text-center flex justify-center q-pb-lg"
      >
        <q-btn flat label="Fechar" class="bg-primary col-4" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { api } from "boot/axios";
export default {
  props: {
    drink: {
      default: false,
      type: [Array, Boolean, Object],
    },
    user: Object,
  },
  data: () => ({
    drinkDetails: [],
    openDialog: false,
    maximizedToggle: false,
  }),
  created() {},
  methods: {
    async handleOpenDialog() {
      this.getDrink();
      this.openDialog = !this.openDialog;
    },
    getDrink() {
      api.get("lookup.php?i=" + this.drink.idDrink).then((res) => {
        this.drinkDetails = res.data.drinks[0];
        console.log(this.drinkDetails);
      });
    },
  },
};
</script>

<style scoped>
.drinks__item {
  background-color: white;
  min-height: 300px;
}
.drinks__item-image-img {
  width: 100%;
}
.drinks__item-title {
  font-weight: 400;
  font-size: 1.1em;
  line-height: normal;
}
.drinks__item-text {
  font-weight: 400;
  font-size: 1.2em;
  line-height: normal;
}

.drink__modal-image-img {
  max-width: 100%;
  border: 5px ridge;
}

.drink__info-item {
  font-size: 1rem;
  padding: 8px;
  font-size: 0.9rem;
}
.drink__info-item-title {
  font-weight: 700;
  font-size: 0.9rem;
}
</style>
