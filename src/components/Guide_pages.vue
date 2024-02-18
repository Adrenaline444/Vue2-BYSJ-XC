<template>
    <div class="Guide_pages">
        <van-swipe class="my-swipe" indicator-color="white" :loop="false">
            <van-swipe-item>
                <div class="item_img">
                    <img :src="guide_data.guide_1" alt="">
                    <div class="flex_test">
                        <div class="margin">
                            <div class="text_style text_left">黄昏在美丽</div>
                            <div class="text_style text_right">终究要天黑</div>
                        </div>
                    </div>
                </div>
            </van-swipe-item>
            <van-swipe-item>
                <div class="item_img">
                    <img :src="guide_data.guide_2" alt="">
                    <div class="flex_test">
                        <div class="margin">
                            <div class="text_style text_left">岁月匆匆流逝</div>
                            <div class="text_style text_right">我们终将会长大</div>
                        </div>
                    </div>
                </div>
            </van-swipe-item>
            <van-swipe-item>
                <div class="item_img">
                    <img :src="guide_data.guide_3" alt="">
                    <div class="flex_test">
                        <div class="margin">
                            <div class="text_style text_left">记忆中的阳光</div>
                            <div class="text_style text_right">依旧那样温暖</div>
                        </div>
                    </div>
                </div>
            </van-swipe-item>
            <van-swipe-item>
                <div class="item_img">
                    <img :src="guide_data.guide_4" alt="">
                    <div class="flex_test">
                        <div class="margin">
                            <div class="text_style text_left">只求岁岁平安</div>
                            <div class="text_style text_right">即使生生不见</div>
                        </div>
                    </div>
                    <div class="btn">
                        <button @click="en_home">进入主页</button>
                    </div>
                </div>
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
    export default {
        name: "Guide_pages",
        data(){
            return{
                guide_data:{
                    guide_1:require('@/assets/image/guide_2.png'),
                    guide_2:require('@/assets/image/guide_1.png'),
                    guide_3:require('@/assets/image/guide_3.png'),
                    guide_4:require('@/assets/image/guide_4.png'),
                }
            }
        },
        created() {
            this.init()
        },
        methods:{
            init(){
                if(localStorage.getItem('guide_pages') != null){
                    this.$router.push({name:'index_home'})
                    return
                }
            },
            en_home(){
                localStorage.setItem('guide_pages',0)
                this.init()
            },
        }
    }
</script>

<style lang="scss" scoped>
    @font-face {
        font-family: 'guide_page';
        src: url("../assets/font/font.ttf");
    }
    .van-swipe{
        height: 100vh;
        img{
            width: 100%;
            height: 100vh;
        }
        .van-swipe-item {
            color: #fff;
            font-size: 20px;
            line-height: 150px;
            text-align: center;
            /*background-color: #39a9ed;*/
        }
        .item_img{
            .flex_test{
                position: absolute;
                top: 27%;
                left: 50%;
                transform: translateX(-50%);
                .margin{
                    display: flex;
                    margin: 0 auto;
                }
                .text_right{
                    margin-top: -76px;
                }
                .text_style{
                    width: 33px;
                    line-height: 38px;
                    color: #f9ddbf;
                    font-family: 'guide_page';

                }
            }
            .btn{
                position: absolute;
                bottom: 0;
                width: 100%;
                button{
                    line-height: 21px;
                    background: transparent;
                    border: 1px solid white;
                    margin: 0 auto;
                    font-size: 14px;
                    padding: 5px 14px 5px 14px;
                    &:active{
                        background-color: #f3b9b961;
                    }
                }
            }
        }
    }

</style>
