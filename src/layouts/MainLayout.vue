<template>
  <q-layout view="hHh Lpr fFf">
    <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <q-header elevated class="row no-padding">
      <q-toolbar class="">
        <h3 class="q-mx-xl">Medical ChatBot</h3>
        <q-space />
        <q-avatar size="95px" color="teal">
          <q-img
            src="~assets/images/screen_shot_2020-02-20_at_1.06.10_pm.png"
          />
        </q-avatar>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  // name: 'LayoutName',

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
};
</script>
