import { boot } from "quasar/wrappers";
import HomePage from "components/HomePage.vue";
import ChatBot from "components/ChatBot.vue";

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app }) => {
  // something to do
  app.component("HomePage", HomePage);
  app.component("ChatBot", ChatBot);
});
