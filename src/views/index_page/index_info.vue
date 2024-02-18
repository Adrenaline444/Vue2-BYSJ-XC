<template>
    <div class="index_info">
        <van-sticky>
        <div class="info-headers">
            <van-nav-bar title="消息"/>
        </div>
        </van-sticky>
        <div class="info_menu">
            <van-grid :border="false">
                <van-grid-item v-for="(item,index) in info_menu" :key="index" :icon="item.icon" :text="item.text" icon-size="30"/>
            </van-grid>
        </div>
        <div class="info_user_box">
            <div class="info_user" v-for="index in 10" :key="index">
                <div class="user_box">
                    <div class="user_box_left"><img :src="test.icon" alt=""></div>
                    <div class="user_box_center">
                        <div class="user_box_center_top">{{test.title}}</div>
                        <div class="user_box_center_bottom">{{test.content}}</div>
                    </div>
                    <div class="user_box_right">
                        <div class="user_box_right_top">{{test.right_text}}</div>
                        <div class="user_box_right_bottom" v-if="test.right_botton == '0'"><div class="round"></div></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index_info",
        data(){
            return{
                info_menu:[
                    {icon:require('../../assets/image/info_collent.png'),text:'收藏'},
                    {icon:require('../../assets/image/info_gerat.png'),text:'点赞'},
                    {icon:require('../../assets/image/info_comment.png'),text:'评论'},
                    {icon:require('../../assets/image/info_nottiye.png'),text:'通知'},
                ],
                test:{icon:require('../../assets/image/info_collent.png'),title:'广播',content:'恭喜你的消息达成互动量成就',right_text:'1天前',right_botton:'0'},
            }
        },
        methods:{},

    }
</script>

<style lang="scss" scoped>
    /deep/.van-grid-item__icon{
        font-size: 33px;
    }
    .info_user{
        padding: 12px 12px;
        .user_box{
            margin: 0 auto;
            display: flex;
            .user_box_left{
                width: 33px;
                border-radius: 50px;
                height: 33px;
                overflow: hidden;
            }
            .user_box_center{
                flex: 1;
                padding-left: 10px;
                font-size: 12px;
            }
            .user_box_right{
                font-size: 12px;
                .user_box_right_bottom{
                    .round{
                        width: 5px;
                        height: 5px;
                        background: red;
                        border-radius: 50%;
                        margin: 0 auto;
                        margin-top: 7px;
                    }
                }
            }

        }
        &:active{
            background: rgba(213,213,213,0.6);
        }
    }
    .info_user_box{
        margin-bottom: 52px;
    }
</style>
