import "../css/app.css";
import { createApp, inject, toRefs } from "vue";
import delimiters from "./const/delimiters";
import useStore from "./store";

const AppMain = createApp({
  delimiters,

  setup() {
    useStore();
    const notification = inject("notification");

    const { removeNotification } = notification;
    const { notifications } = toRefs(notification.state);

    return { notifications, removeNotification };
  },
});

global.AppMain = AppMain;
