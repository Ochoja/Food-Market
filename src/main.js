import { createApp } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHome,
  faUser,
  faShoppingCart,
  faPhoneAlt,
  faEnvelope,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import App from "./App.vue";

library.add(
  faHome,
  faUser,
  faShoppingCart,
  faPhoneAlt,
  faEnvelope,
  faTrashAlt,
  faFacebook,
  faInstagram,
  faTwitter
);

createApp(App).component("fa", FontAwesomeIcon).mount("#app");
