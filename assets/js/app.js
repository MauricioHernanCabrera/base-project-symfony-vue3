import "../css/app.css";
import { createApp, inject } from "vue";
import delimiters from "./const/delimiters";
import useStore from "./store";

const AppMain = createApp({
  delimiters,

  setup() {
    useStore();
    const notification = inject("notification");

    return { notification };
  },
});

global.AppMain = AppMain;
