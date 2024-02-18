<template>
    <div class="index_serve">
        <div class="serve-title">
            <p>综合服务</p>
            <div class="serve-box" v-for="(item,index) in list" :key="index" @click="wm(item)">
                <div class="box-left"><img :src="item.img" alt=""></div>
                <div class="box-right">
                    <div>{{item.title}}</div>
                    <div>{{item.text}}</div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "index_serve",
        data(){
            return{
                list:[
                    {img:require('../../assets/image/serve_1.png'),title:'快捷入口',text:'学院官网、图书馆官网、成绩查询等快捷入口',id:1},
                    {img:require('../../assets/image/serve_2.png'),title:'学校时事',text:'学校新闻、学校活动、实验室动态等最新资讯',id:2},
                    {img:require('../../assets/image/serve_3.png'),title:'表白墙',text:'老虎不发威、你当我女朋友把。',id:3},
                    {img:require('../../assets/image/serve_4.png'),title:'校园圈子',text:'你的校园朋友圈，在这里认识更多有意思的人',id:4},
                    {img:require('../../assets/image/serve_5.png'),title:'校园订餐服务',text:'校园更多的美食，在这里等着你',id:5},
                ]
            }
        },
        methods:{
                    wm(value){
                      if (value.id === 5) {
                          this.$router.push('/wm/wm');
                      }
                    }
        },

    }
</script>

<style lang="scss" scoped>
    .index_serve{
        height: 100vh;
        background: #f5f4f4;
        .serve-title{
            width: 95%;
            margin: 0 auto;
            p{
                font-size: 22px;
                line-height: 73px;
            }
            .serve-box{
                background: white;
                display: flex;
                padding: 18px 11px;
                border-radius: 8px;
                box-shadow: 0 0 10px #d7d7d7;
                margin-bottom: 16px;
                .box-left{
                    width: 53px;
                }
                .box-right{
                    padding-left: 10px;
                    div:nth-child(1){
                        font-size: 15px;
                        font-weight: 600;
                        line-height: 30px;
                    }
                    div:nth-child(2){
                        font-size: 12px;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        width: 96%;
                    }
                }
                &:active{
                    background: #f9f9f9;
                }
            }
        }

    }
</style>
