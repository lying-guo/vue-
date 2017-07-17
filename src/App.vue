<!--根组件-->
<template>
<!--html元素  页面结构-->
   <div>
       <span v-text="msg" class="red"></span>
       <button @click="add(1,2)">add</button>
       <router-link to="/login">登录</router-link>
       <router-link to="register">注册</router-link>
       <router-view></router-view>
       <!--使用mint-ui-->
       <mt-button @click="add(4,5)" type="danger">danger</mt-button>
       <mt-button @click="tip" size="normal">normal</mt-button>
        <!--mui的9宫格-->
       <div class="mui-content">

           <ul class="mui-table-view mui-grid-view mui-grid-9">
               <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                   <span class="mui-icon mui-icon-home"></span>
                   <div class="mui-media-body">Home</div></a></li>
               <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                   <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
                   <div class="mui-media-body">Email</div></a></li>
               <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                   <span class="mui-icon mui-icon-chatbubble"></span>
                   <div class="mui-media-body">Chat</div></a></li>
               <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                   <span class="mui-icon mui-icon-location"></span>
                   <div class="mui-media-body">location</div></a></li>
               <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                   <span class="mui-icon mui-icon-search"></span>
                   <div class="mui-media-body">Search</div></a></li>
               <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                   <span class="mui-icon mui-icon-phone"></span>
                   <div class="mui-media-body">Phone</div></a></li>
               <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                   <span class="mui-icon mui-icon-gear"></span>
                   <div class="mui-media-body">Setting</div></a></li>
               <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                   <span class="mui-icon mui-icon-info"></span>
                   <div class="mui-media-body">about</div></a></li>
               <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                   <span class="mui-icon mui-icon-more"></span>
                   <div class="mui-media-body">more</div></a></li>
           </ul>
           <ul class="mui-table-view">
               <li class="mui-table-view-cell mui-media">
                   <a href="javascript:;">
                       <img class="mui-media-object mui-pull-left" src="">
                       <div class="mui-media-body">
                           幸福
                           <p class='mui-ellipsis'>能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
                       </div>
                   </a>
               </li>
               <li class="mui-table-view-cell mui-media">
                   <a href="javascript:;">
                       <img class="mui-media-object mui-pull-left" src="">
                       <div class="mui-media-body">
                           木屋
                           <p class='mui-ellipsis'>想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖.</p>
                       </div>
                   </a>
               </li>
               <li class="mui-table-view-cell mui-media">
                   <a href="javascript:;">
                       <img class="mui-media-object mui-pull-left" src="">
                       <div class="mui-media-body">
                           CBD
                           <p class='mui-ellipsis'>烤炉模式的城，到黄昏，如同打翻的调色盘一般.</p>
                       </div>
                   </a>
               </li>

           </ul>
       </div>
   </div>
</template>
<script>
    //导入mintui的js
    import { Toast } from 'mint-ui';


    function add(x,y) {
        console.log(x * y);

    }
    //按需导出  加{}
    //负责导出.vue这个组件对象
    export default{//等价于es5中的data:function(){}
        data() {
            return {
                msg:'hello world'
            }
        },
        methods:{
            add,//es6的写法
            tip:function () {
                Toast('提示信息');
            }
        },
        created(){

        }
    }
</script>
<style scoped>
    /*当前页面的css样式  scoped表示只会应用在当前页面*/
    .red{
        color:blue;
    }
</style>
