import { inject } from "vue";
import delimiters from "./../../const/delimiters";

AppMain.component("app-page", {
  delimiters,

  setup() {
    const notification = inject("notification");
    return { notification };
  },

  template:
    /* html */
    `<div>
      <slot
        :notification="notification"
      ></slot>
    </div>`,
});
