import Vue from 'vue';
import App from './App';
var root = new Vue({
        el: "#app",
        render: h => h(App),
        data: {
            word: 'hello,world'
        },
        components: {
            'my-header': myHeader
        }
    })
    //实例方法属性以root.$*开头
    /*root.$data//获取数据
    root.$on('emit',function(){
        console.log('test');
    })*/ //绑定事件
    //指令在模板里面
    //{{}}用来插值
    //v-bind属性绑定值
    //v-html也可以渲染数据
    //v-html v-on  参数:修改器.
    //内置组件component router transition