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
      lorem_title: "Lorem Ipsum",
      lorem_content:
        "Excepteur proident duis duis magna nisi. Duis cupidatat duis ad enim et fugiat occaecat anim do nulla incididunt laborum adipisicing in. Anim deserunt in mollit nostrud. Consequat elit laboris eu mollit quis veniam consectetur proident ad quis qui labore sint.",
      main_title: "Medical Chatbot",
      main_content:
        "Our medical AI simplifies healthcare journeys and helps people take care of themselves.A medical Chatbot is an artificail inteligence chatbot that helps our paitents be cured without going to see a docter by using our system from home where it is easy and acceseble to everybody.",
    };
  },
});
</script>
