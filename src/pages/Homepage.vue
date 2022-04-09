<template>
  <q-page>
    <div class="homepage row full-width">
      <div class="col-12 row homepage__item section__full flex justify-end">
        <div
          class="col-md-6 col-lg-6 col-12 justify-center items-center flex q-pa-lg section__full-text"
        >
          <p class="">
            Bem vindos(as) ao WeDoDrinks! Aqui você encontrará receitas de
            bebidas e coquetéis de todo o mundo. Essa aplicação utiliza a API
            thecocktaildb, a qual é a fonte de todos os dados aqui exibidos.
          </p>
        </div>
      </div>

      <div class="homepage__item full-width q-pa-md">
        <div class="container">
          <div class="row">
            <div
              class="col-md-7 col-12 text-right justify-center items-center flex"
            >
              <div>
                <p class="homepage__item-text text-white text-right">
                  Descubra aqui os melhores drinks para reunir os amigos, montar
                  uma boa festa, construir um happy hour com colegas ou até
                  mesmo tomar sozinho.
                </p>
                <q-btn
                  color="accent"
                  text-color="white"
                  to="/categories"
                  label="Encontrar drinks"
                />
              </div>
            </div>
            <div class="col-md-5 justify-center items-center flex q-pa-md">
              <img src="/images/friends.jpg" class="homepage__item-img" />
            </div>
          </div>
        </div>
      </div>

      <div class="homepage__item full-width q-pa-md bg-secondary">
        <div class="container">
          <div class="row flex">
            <div class="col-md-5 justify-center items-center flex q-pa-md">
              <img src="/images/wdrink.jpg" class="homepage__item-img" />
            </div>
            <div
              class="col-md-7 col-12 text-left justify-center items-center flex"
            >
              <div>
                <div class="homepage__item-title">Que drink é esse?</div>
                <p class="homepage__item-text text-white">
                  Ta em dúvida do que fazer? Ta afim de se arriscar? Está em um
                  encontro com a galera e ta afim de um desafio?<br />
                  Aqui podemos sortear um drink completamente aleatório para
                  você experimentar!
                </p>
                <q-btn
                  color="accent"
                  text-color="white"
                  label="Sortear um drink agora!"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="homepage__item full-width q-pa-md">
        <div class="container">
          <div class="row">
            <div
              class="col-md-7 col-12 text-right justify-center items-center flex"
            >
              <div>
                <div class="homepage__item-title">Drinks sem alcool</div>
                <p class="homepage__item-text text-white">
                  Esses drinks incriveis são para aqueles que não podem ou não
                  tomam alcool! Seja por idade, opção, vício, ou ser a pessoa
                  escolhida pra dirigir o carro da galera pro rolê.<br />
                  Não deixe ninguem fora! Bora anotar as receitas e incluir todo
                  mundo na festa
                </p>
                <q-btn
                  color="accent"
                  text-color="white"
                  label="Conferir os drinks"
                />
              </div>
            </div>
            <div class="col-md-5 justify-center items-center flex q-pa-lg">
              <img src="/images/noalcool.jpg" class="homepage__item-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageIndex",
});
</script>
<style scoped>
.section__full {
  background-image: url("/images/bg1.jpg");
  background-size: cover;
  background-attachment: fixed;
  height: 250px;
}
.section__full-text {
  background-color: #fffc;
}
.homepage__item-img {
  width: 100%;
}
.homepage__item-title {
  font-weight: 400;
  color: #fff;
  font-size: 3em;
  line-height: normal;
}
.homepage__item-text {
  font-weight: 400;
  font-size: 1.2em;
  line-height: normal;
}
</style>
