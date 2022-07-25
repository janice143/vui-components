import Row from "./main"

/* istanbul ignore next */
Row.install = function(Vue) {
    Vue.component(Row.name, Row);
};

export default Row;
