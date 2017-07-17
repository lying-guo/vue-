<!--根组件-->
<template>
<!--html元素  页面结构-->
    <div>
        <!--头部 mintui-->
        <mt-header fixed title="传智博客"></mt-header>
        <!--内容-->
        <router-view></router-view>
        <!--底部 mui-->
        <nav class="mui-bar mui-bar-tab">
            <router-link class="mui-tab-item" to="/Home">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link class="mui-tab-item" to="/tabbar-with-chat">
                <span class="mui-icon mui-icon-email"></span>
                <span class="mui-tab-label">会员</span>
            </router-link>
            <router-link class="mui-tab-item" to="/shopcar">
                <span class="mui-icon mui-icon-contact"><span class="mui-badge">0</span></span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
            <router-link class="mui-tab-item" to="/tabbar-with-map">
                <span class="mui-icon mui-icon-gear"></span>
                <span class="mui-tab-label">搜索</span>
            </router-link>
        </nav>
    </div>
</template>
<script>
    //负责导出.vue这个组件对象
    export default{//等价于es5中的data:function(){}
        data() {
            return {
            }
        },
        methods:{

        },
        created(){

        }
    }
</script>
<style scoped>

</style>
