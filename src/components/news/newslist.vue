<template>
    <div id="tmpl">
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in list">
                <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body">
                        {{item.title}}
                        <p class='mui-ellipsis' v-text="item.zhaiyao"></p>
                        <div class="ft">
                            <span>发表时间:{{item.add_time | datefmt('YYYY-MM-DD HH:mm:ss')}}</span>
                            <span class="click">点击数:{{item.click}}</span>
                        </div>
                    </div>
                </a>
            </li>

        </ul>
    </div>
</template>
<script>
    import { Toast } from 'mint-ui';
    export default{
        data(){
            return{
                list:[]
            }
        },
        created(){
            this.getnews();
        },
        methods:{
            getnews(){
                var url = 'http://www.lovegf.cn:8899/api/getnewslist';
                this.$http.get(url).then(function (response) {
                    var data =  response.body;
                    if(data.status != 0 ){
                        Toast(data.message);
                        return
                    }
                    this.list = data.message
                })
            }
        }
    }
</script>
<style scoped>
    .mui-table-view img{
        width: 80px;
        height: 80px;
    }
    .mui-table-view .mui-media-object{
        max-width:80px;
        line-height:80px;
    }
    .ft{
        margin-top:1.5em;
        font-size: 14px;
        color: #0094ff;
    }
    .ft .click{
        margin-left:25px;
    }
</style>