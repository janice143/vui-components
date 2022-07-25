import Chatbox from "./main";

/* istanbul ignore next */
Chatbox.install = function (Vue) {
  Vue.component(Chatbox.name, Chatbox);
};

export default Chatbox;
