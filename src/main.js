import Vue from 'vue'
let layout = {
    template: '<div>我是内部挂载的组件<global-component></global-component><child></child></div>',
    components: {
        'child': {
            template: '<span>我是一个普通组件内部的组件</span>'
        }
    }
}
Vue.component('global-component', {

    template: '<h2>I\'m a global component </h2>'
})
new Vue({
    el: "#app",
    components: {
        "layout": layout
    }

})