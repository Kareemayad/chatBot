<template>
  <div class="row q-mb-xl items-center q-gutter-xl">
    <q-space />
    <img
      alt="Doctor"
      src="~assets/images/istockphoto-1363311631-170667a.jpg"
      style="width: 30em"
    />
    <q-card
      class="my-card text-white bg-primary"
      style="width: 40em; height: 30em"
    >
      <q-card-section class="items-center text-center">
        <q-icon name="help" size="80px" />
        <div class="q-my-lg text-h3">{{ main_title }}</div>
        <div class="q-ml-lg text-h6">
          {{ main_content }}
        </div>
      </q-card-section>
    </q-card>
    <q-space />
  </div>

  <div class="row q-mt-xl items-center q-gutter-md">
    <q-space />
    <q-card
      class="my-card text-white bg-primary"
      style="width: 40em; height: 30em"
    >
      <q-card-section>
        <div class="text-h3 row q-ma-md items-center">What Is It</div>
        <div class="text-h5">{{ lorem_content }}</div>
      </q-card-section>

      <q-card-section class="q-pt-none float-left">
        {{ lorem }}
      </q-card-section>
    </q-card>
    <q-space />
    <img
      alt="Doctor"
      src="~assets/images/Baidu_Melody_in_Action_part_1.0.0.jpg"
      style="width: 40em; hight: 30em"
    />
    <q-space />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";

export default defineComponent({
  name: "homePage",
  setup() {
    return {
      tab: ref("home"),
      slide: ref("style"),
      lorem_title: "Lorem Ipsum",
      lorem_content:
        "**Chatbot name** is an AI powered chatbot used to help you book an appointment with a doctor best suited for your needs. **Chatbot name** is designed to be a simple user experience. To get started, just type your symptoms and **Chatbot name** will guide you to booking your appointment. Any data you input will only be shared with your doctor and is completely confidential..",
      main_title: "Medical Chatbot",
      main_content:
        "Our medical AI simplifies healthcare journeys and helps people take care of themselves.A medical Chatbot is an artificail inteligence chatbot that helps our paitents be cured without going to see a docter by using our system from home where it is easy and acceseble to everybody.",
      main_title2: "Medical Chatbot",
      main_content2:
        "**Chatbot name** is an AI powered chatbot used to help you book an appointment with a doctor best suited for your needs.",
    };
  },
});
</script>
