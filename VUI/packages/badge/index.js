import Badge from "./main";
Badge.install = function(Vue) {
    Vue.component(Badge.name, Badge);
};

export default Badge;