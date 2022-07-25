import Button from './main.vue';

/* istanbul ignore next */
Button.install = function(Vue) {
    Vue.component(Button.name, Button);
};

export default Button;

