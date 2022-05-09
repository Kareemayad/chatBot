<template>
  <div class="row items-center">
    <q-space />
    <img
      alt="Doctor"
      src="~assets/images/istockphoto-1363311631-170667a.jpg"
      style="width: 50em"
    />
    <q-card style="width: 50em" class="q-ma-sm bg-secondary text-black">
      <q-carousel
        v-model="slide"
        transition-prev="scale"
        transition-next="scale"
        swipeable
        animated
        control-color="white"
        navigation
        padding
        arrows
        class="bg-primary text-white shadow-1 rounded-borders"
      >
        <q-carousel-slide name="style" class="column no-wrap flex-center">
          <q-icon name="help" size="80px" />
          <div class="q-my-lg text-h3">{{ main_title }}</div>
          <div class="q-ml-lg text-h6">
            {{ main_content }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="page2" class="column no-wrap flex-center">
          <q-icon name="help" size="80px" />
          <div class="q-my-lg text-h3">{{ lorem_title }}</div>
          <div class="q-ml-lg text-h6">
            {{ lorem_content }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="page3" class="column no-wrap flex-center">
          <q-icon name="help" size="80px" />
          <div class="q-my-lg text-h3">{{ lorem_title }}</div>
          <div class="q-ml-lg text-h6">
            {{ lorem_content }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="page4" class="column no-wrap flex-center">
          <q-icon name="help" size="80px" />
          <div class="q-my-lg text-h3">{{ lorem_title }}</div>
          <div class="q-ml-lg text-h6">
            {{ lorem_content }}
          </div>
        </q-carousel-slide>
      </q-carousel>
    </q-card>
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
        "Excepteur proident duis duis magna nisi. Duis cupidatat duis ad enim et fugiat occaecat anim do nulla incididunt laborum adipisicing in. Anim deserunt in mollit nostrud. Consequat elit laboris eu mollit quis veniam consectetur proident ad quis qui labore sint.",
      main_title: "Medical Chatbot",
      main_content:
        "Our medical AI simplifies healthcare journeys and helps people take care of themselves.A medical Chatbot is an artificail inteligence chatbot that helps our paitents be cured without going to see a docter by using our system from home where it is easy and acceseble to everybody.",
    };
  },
});
</script>
