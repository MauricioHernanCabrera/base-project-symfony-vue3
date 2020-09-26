import { provide } from "vue";
import notification from "./notification";

const useStore = () => {
  provide("notification", notification);
};

export default useStore;
