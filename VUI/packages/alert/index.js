import Alert from './main.vue';

/* istanbul ignore next */
Alert.install = function(Vue) {
    Vue.component(Alert.name, Alert);
};

export default Alert;

