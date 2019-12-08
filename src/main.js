import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueTextareaAutosize from "vue-textarea-autosize";
import firebase from "firebase/app";
import "firebase/firestore";

Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyAecnaUSKelnvDPO8MV3ovig48R3FifjG8",
  authDomain: "vue-calendar-c03ad.firebaseapp.com",
  databaseURL: "https://vue-calendar-c03ad.firebaseio.com",
  projectId: "vue-calendar-c03ad",
  storageBucket: "vue-calendar-c03ad.appspot.com",
  messagingSenderId: "440171830425",
  appId: "1:440171830425:web:f1574be6730cc64efd2c08"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount("#app");
