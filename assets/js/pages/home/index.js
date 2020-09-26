import { inject } from "vue";
import delimiters from "./../../const/delimiters";

AppMain.component("app-page", {
  delimiters,

  setup() {
    const { addNotification } = inject("notification");

    return { addNotification };
  },

  template:
    /* html */
    `<div>
      <slot
        :addNotification="addNotification"
      ></slot>
    </div>`,
});
