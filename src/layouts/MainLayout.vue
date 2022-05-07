<template>
  <q-layout view="lHh Lpr lFf" class="pages_color">
    <Header />
    <q-page-container>
      <router-view :key="$route.fullPath" />
    </q-page-container>
    <Footer />
    <q-dialog
      v-model="dialog"
      persistent
      :maximized="maximizedToggle"
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <q-card class="bg-primary text-white">
        <q-bar>
          <q-space />
        </q-bar>

        <q-card-section
          class="q-pt-none text-center flex items-center justify-center full-height"
        >
          <div>
            <div class="text-h6">Atenção!</div>
            <div class="text-subtitle1">
              Este site apresenta conteúdo destinado a maiores de 18 anos!<br />
              Caso seja seu caso, clique no botão baixo<br />
            </div>
            <q-btn
              color="red"
              label="Sou maior de 18 anos"
              @click="closePopup"
            />
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-layout>
</template>

<script>
import Header from "components/Parts/Header.vue";
import Footer from "components/Parts/Footer.vue";

const linksList = [
  {
    title: "Docs",
    caption: "quasar.dev",
    icon: "school",
    link: "https://quasar.dev",
  },
  {
    title: "Github",
    caption: "github.com/quasarframework",
    icon: "code",
    link: "https://github.com/quasarframework",
  },
  {
    title: "Discord Chat Channel",
    caption: "chat.quasar.dev",
    icon: "chat",
    link: "https://chat.quasar.dev",
  },
  {
    title: "Forum",
    caption: "forum.quasar.dev",
    icon: "record_voice_over",
    link: "https://forum.quasar.dev",
  },
  {
    title: "Twitter",
    caption: "@quasarframework",
    icon: "rss_feed",
    link: "https://twitter.quasar.dev",
  },
  {
    title: "Facebook",
    caption: "@QuasarFramework",
    icon: "public",
    link: "https://facebook.quasar.dev",
  },
  {
    title: "Quasar Awesome",
    caption: "Community Quasar projects",
    icon: "favorite",
    link: "https://awesome.quasar.dev",
  },
];

import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: { Header, Footer },

  setup() {
    const leftDrawerOpen = ref(false);
    const dialog = ref(true);
    const closePopup = () => {
      dialog.value = false;
    };

    return {
      essentialLinks: linksList,
      closePopup,
      dialog,
      maximizedToggle: ref(true),
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
<style>
* {
  font-family: "Josefin Sans", sans-serif;
}
.pages_color {
  background-image: url("/images/bg6.jpg");
  background-attachment: fixed;
  overflow-x: hidden;
  background-size: cover;
  color: #fff;
  width: 100%;
}
</style>
