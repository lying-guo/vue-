//1.0导入vue这个包
import Vue from 'vue';
//2.0导入App.vue
import 	App from './App.vue';

//3.0集成vue-router
import vueRouter from 'vue-router';
//3.0.1将vueRouter绑定到Vue对象上
Vue.use(vueRouter);
import Home from './components/Home.vue';
import newslist from './components/news/newslist.vue';
import newsshow from './components/news/newsshow.vue';
import shopcar from './components/shopcar/car.vue';
//3.0.2定义路由规则
var router = new vueRouter({
	//改变路由激活时的class名称
	linkActiveClass:'mui-active',
	routes:[
		{path:'/Home',component:Home},
        {path:'/news/newslist',component:newslist},
        {path:'/news/newsshow',component:newsshow},
		{path:'/shopcar',component:shopcar}

	]
});
//4.0 注册mint ui
//4.0.1导入mintui 的css
import 'mint-ui/lib/style.css'
import mintui from 'mint-ui';
//4.0.2使用mint-ui
Vue.use(mintui);

//5.0 注册mui 的css  不用安装
import '../statics/mui/css/mui.css';
//6.0 全局基本样式
import '../statics/css/site.css';
//7.0 将vue-resource 在vue中绑定,自动会在Vue实力对象上注入一个$http对象
import vueResource from 'vue-resource';
Vue.use	(vueResource);
//8.0全局时间过滤器
import moment from "moment"
Vue.filter('datefmt',function (input,fmtstring) {
	//使用moment类库
	return moment (input).format(fmtstring)
})
//
//
new Vue({
	el:'#app',
	/*render:function (create) {
		create(App)
    }*///es5的写法
	router:router,
	render:c=>c(App)//es6的写法
})