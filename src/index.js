import { createApp } from "vue";
import { createStore } from "vuex";
import store from './vuex/store';
import App from "./App.vue";


const app = createApp(App);

app.use(createStore(store));

app.mount("#app");