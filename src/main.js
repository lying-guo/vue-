//1.0导入vue这个包
import Vue from 'vue';
//2.0导入App.vue
import 	App from './App.vue';

//3.0集成vue-router
import vueRouter from 'vue-router';
//3.0.1将vueRouter绑定到Vue对象上
Vue.use(vueRouter);
import login from './components/account/login.vue';
import register from './components/account/register.vue';
//3.0.2定义路由规则
var router = new vueRouter({
	routes:[
		{path:'/login',component:login},
		{path:'/register',component:register}
	]
});
//注册mint ui
//导入mintui 的css
import 'mint-ui/lib/style.css'
import mintui from 'mint-ui';
//使用mint-ui
Vue.use(mintui);

//注册mui 的css  不用安装
import '../statics/mui/css/mui.css'
new Vue({
	el:'#app',
	/*render:function (create) {
		create(App)
    }*///es5的写法
	router:router,
	render:c=>c(App)//es6的写法
})