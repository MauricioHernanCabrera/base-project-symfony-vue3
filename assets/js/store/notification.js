import { reactive, readonly } from "vue";

const state = reactive({
  notifications: [],
});

const addNotification = (message, type) => {
  state.notifications.push({
    message,
    type,
    id: Date.now(),
  });
};

const removeNotification = (notificationIndex) => {
  state.notifications.splice(notificationIndex, 1);
};

export default readonly({ state, addNotification, removeNotification });
