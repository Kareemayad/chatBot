<template>
  <q-page>
    <q-card class="no-shadow">
      <q-tabs
        v-model="tab"
        class="text-grey"
        active-color="primary"
        indicator-color="primary"
        align="justify"
        narrow-indicator
      >
        <q-tab name="home" label="Home" />
        <q-tab name="chatBot" label="ChatBot" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="home"> <HomePage /> </q-tab-panel>

        <q-tab-panel name="chatBot">
          <ChatBot />
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </q-page>
</template>
<script>
import { defineComponent } from "vue";
import { ref } from "vue";

export default defineComponent({
  name: "IndexPage",
  setup() {
    return {
      tab: ref("home"),
      slide: ref("style"),
    };
  },
});
</script>
