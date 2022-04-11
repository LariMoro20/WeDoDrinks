<template>
  <q-page>
    <div class="about row full-width q-pt-md">
      <div class="about__title text-center full-width">Sobre</div>
      <div class="full-width q-pa-md">
        <div class="container">
          <div class="row">
            <div
              class="col-md-12 col-12 text-center justify-center items-center flex"
            >
              <p class="text-white">
                Estar com os amigos, compartilhar momentos, preparar drinks
                diferentes a cada encontro.. essa foi a motivação do nascimento
                dessa aplicação! Cada encontro, uma história diferente, risadas
                e momentos que ficam pra sempre na memória! Então, aqui
                encontram-se reunidas algumas dessas bebidas, para a galera
                experimentar e compartilhar junto.<br /><br />
                Essa aplicação utiliza a
                <a href="https://www.thecocktaildb.com/api.php" target="_blank"
                  >API TheCocktailDB</a
                >, a qual é a fonte de todos os dados aqui exibidos.<br /><br />
              </p>
            </div>
            <div class="col-md-12 col-12 text-white">
              <div class="text-h6">Créditos das imagens:</div>

              <ul class="text-white q-ma-none">
                <li>
                  <a href="https://.pngtree.com/so/vetor"
                    >vetor png de .pngtree.com/</a
                  >
                </li>
                <li>
                  <a href="https://iconscout.com/icons/drink" target="_blank"
                    >Drink Icon</a
                  >
                  on
                  <a href="https://iconscout.com">Iconscout</a>
                </li>

                <li>
                  <a href="https://iconscout.com/icons/cocktail" target="_blank"
                    >Cocktail Icon</a
                  >
                  on
                  <a href="https://iconscout.com">Iconscout</a>
                </li>

                <li>
                  <a href="https://br.freepik.com/fotos-vetores-gratis/festa"
                    >Festa foto criado por KamranAydinov - br.freepik.com</a
                  >
                </li>
                <li>
                  <a href="https://br.freepik.com/fotos-vetores-gratis/festa"
                    >Festa foto criado por freepik - br.freepik.com</a
                  >
                </li>
                <li>
                  <a href="https://br.freepik.com/fotos-vetores-gratis/alimento"
                    >Alimento foto criado por freepik - br.freepik.com</a
                  >
                </li>

                <li>
                  <a href="https://br.freepik.com/fotos-vetores-gratis/alimento"
                    >Alimento foto criado por KamranAydinov - br.freepik.com</a
                  >
                </li>
                <li>
                  <a href="https://br.freepik.com/fotos-vetores-gratis/verao"
                    >Verão foto criado por KamranAydinov - br.freepik.com</a
                  >
                </li>

                <li>
                  <a href="https://br.freepik.com/fotos-vetores-gratis/festa"
                    >Festa foto criado por Racool_studio - br.freepik.com</a
                  >
                </li>

                <li>
                  <a href="https://br.freepik.com/fotos-vetores-gratis/fundo"
                    >Fundo vetor criado por pikisuperstar - br.freepik.com</a
                  >
                </li>
                <li>
                  <a href="https://br.freepik.com/fotos-vetores-gratis/fundo"
                    >Fundo vetor criado por freepik - br.freepik.com</a
                  >
                </li>
              </ul>
            </div>
            <div class="col-md-12 col-12 text-center q-pt-xl">
              <p class="text-white">
                Desenvolvida com por
                <a
                  href="https://larissa-santos.vercel.app/"
                  class="text-white"
                  target="_blank"
                  >Larissa Santos</a
                >, Desenvolvedora Web <br /><br />
              </p>
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
.about a {
  color: white;
}
.section__full {
  background-image: url("/images/bg1.jpg");
  background-size: cover;
  background-attachment: fixed;
  height: 250px;
}
.section__full-text {
  background-color: #fffc;
}
.about__item-img {
  width: 100%;
}
.about__item-title {
  font-weight: 400;
  color: #fff;
  font-size: 3em;
  line-height: normal;
}
.about__item-text {
  font-weight: 400;
  font-size: 1.2em;
  line-height: normal;
}

.about__title {
  font-weight: 400;
  color: #fff;
  font-size: 2em;
  line-height: normal;
}
</style>
