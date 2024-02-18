<template>
    <div class="index">
        <div class="sticky">
            <van-sticky>
                <van-search
                        v-model="value"
                        show-action
                        label="地址"
                        placeholder="请输入搜索关键词"
                        @search="onSearch"
                >
                    <template #action>
                        <div @click="onSearch">搜索</div>
                    </template>
                </van-search>
            </van-sticky>
        </div>
        <div class="swiper">
            <van-swipe class="my-swipe" :autoplay="4000" indicator-color="white">
                <van-swipe-item v-for="(item,index) in swipe_list" :key="index"><div :class="item.name" :style="{'background-image':'url('+item.img+')','width':'100%','height':'26vh','background-size':'cover','background-position-y':'-46px'}"></div></van-swipe-item>
            </van-swipe>
        </div>
        <div class="guide">
            <van-grid :border="false" :column-num="5">
                <van-grid-item v-for="(item,index) in guide" :key="index" :icon="item.img" :text="item.text"  @click="course_click(item.text)"/>
            </van-grid>
        </div>
        <div class="more">
            <div class="more-header">
                <div class="more-left">社团风采</div>
                <div class="more-right"><span>更多</span></div>
            </div>
            <div class="more-test">
                <div class="more-test-for" v-for="(item,index) in st_list" :key="index" :style="{'background-image':'url('+item.img+')','width':'149px','height':'80px','background-size':'cover'}">
                    <span>{{item.text}}</span>
                </div>
            </div>
            <div class="more-header">
                <div class="more-left">活动报名</div>
                <div class="more-right"><span>更多</span></div>
            </div>
            <div class="more_sign">
                <div class="more_sign_box" v-for="(item,index) in sign_list" :key="index">
                    <div class="box-img" :style="{'background-image':'url('+item.img+')','width':'149px','height':'80px','background-size':'cover'}">
                        <span>{{item.data_start}}</span>
                    </div>
                    <div class="box-title">{{item.title}}</div>
                    <div class="box-data">{{item.data}}</div>
                </div>
            </div>
        </div>
        <div class="fotr_text">
            <p>没有更多了</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        data(){
            return{
                value:'',
                swipe_list:[
                    {img:require('../../assets/image/index_home_swipe_1.jpg'),name:'page1'},
                    {img:require('../../assets/image/index_home_swipe_2.jpg'),name:'page2'},
                    {img:require('../../assets/image/index_home_swipe_3.jpg'),name:'page3'},
                    {img:require('../../assets/image/index_home_swipe_4.jpg'),name:'page4'},
                ],
                guide:[
                    {img:require('../../assets/image/kedan.png'),text:'课程查询',iconSize:'36px'},
                    {img:require('../../assets/image/jianzhi.png'),text:'校园兼职',iconSize:'26px'},
                    {img:require('../../assets/image/wenjianjia.png'),text:'失物招领',iconSize:'36px'},
                    {img:require('../../assets/image/shalou.png'),text:'闲置转让',iconSize:'36px'},
                    {img:require('../../assets/image/chengchang.png'),text:'志愿活动',iconSize:'36px'},
                ],
                st_list:[
                    {img:require('../../assets/image/st_1.jpeg'),text:'英语协会，come on baby!'},
                    {img:require('../../assets/image/st_2.jpg'),text:'音乐协会，我们不见不散'},
                    {img:require('../../assets/image/st_3.jpeg'),text:'篮球协会，兄弟打篮球了'},
                    {img:require('../../assets/image/st_4.jpeg'),text:'艺术协会，艺术来源生活'},
                    {img:require('../../assets/image/st_5.jpeg'),text:'计算机协会，万物皆可对象'},
                ],
                sign_list:[
                    {img:require('../../assets/image/more_sign_1.jpg'),title:'新乡工程学院文艺汇演',data:'12/07 周五',data_start:'进行中'},
                    {img:require('../../assets/image/more_sign_2.jpeg'),title:'新乡工程学院文艺汇演',data:'12/07 周五',data_start:'已结束'},
                    {img:require('../../assets/image/more_sign_3.jpeg'),title:'新乡工程学院文艺汇演',data:'12/07 周五',data_start:'进行中'},
                    {img:require('../../assets/image/more_sign_4.jpeg'),title:'新乡工程学院文艺汇演',data:'12/07 周五',data_start:'已结束'},
                ]
            }
        },

        methods: {
            //搜索
            onSearch() {
                this.$toast(this.value)
            },
            //课程查询
             course_click(val) {
                this.axios.get('api/test').then(res=>{
                    if (res.data.status == '401') {
                        this.$dialog.confirm({
                            title: '暂未登录',
                            message: '登录身份过期或未登录是否重新登陆'
                        }).then(() => {
                            this.$router.push({name: 'Login'})
                        }).catch(()=>{
                            return false
                        })
                    }else{
                        this.href_link(val)
                    }
                })

            },
            href_link(val){
                switch (val) {
                    case '课程查询':
                        this.$router.push({name: 'course_inquire'})
                        break
                    case '校园兼职':
                        this.$router.push({name:'part_time'})
                        break
                    case '失物招领':
                        this.$router.push({name:'lose_thing'})
                        break
                    case '闲置转让':
                        this.$router.push({name:'idea_transfer'})
                        break
                    case '志愿活动':
                        break
                }
            }
        },
        components:{

        }
    }
</script>

<style lang="scss" scoped>
    .swiper{
        width: 95%;
        margin: 0 auto;
        border-radius: 10px;
        overflow: hidden;
        height: 26vh;
        box-shadow: 0 0 10px #bfbfbf;
    }
    .page2{
        background-position-y: -108px!important;
    }
    .more{
        width: 95%;
        margin: 0 auto;

        .more-header{
            display: flex;
            .more-left,.more-right{
                flex: 1;
            }
            .more-left{
                font-weight: 600;
                font-size: 14px;
            }
            .more-right{
                text-align: right;
                font-size: 12px;
                color: #00b1ff;
                span{
                    border: 1px solid #00b1ff;
                    padding: 1px 10px;
                    border-radius: 50px;
                    line-height: 22px;
                }
            }
        }
        .more_content{
            display: flex;
            margin-top: 9px;
            white-space: nowrap;
            overflow: auto;
            margin-bottom: 13px;

            .more_content-b{
                width: 143px;
                height: 84px;
                margin-right: 13px;
            }
        }
        .more-test{
            display: flex;
            overflow-x: auto;
            flex-shrink: 0;
            position: relative;
            margin-top: 10px;
            margin-bottom: 10px;
            &::-webkit-scrollbar{
                display: none;
            }
            .more-test-for{
                margin-right: 12px;
                flex-shrink: 0;
                position: relative;
                span{
                    position: absolute;
                    bottom: 0;
                    color: white;
                    font-size: 12px;
                    text-align: center;
                    left: 0;
                    right: 0;
                    line-height: 25px;
                    background: linear-gradient(
                                    0deg, #464646, transparent);
                }
            }
            .more-test-for:nth-child(3){
                background-position-y: -42px;
            }
            .more-test-for:nth-child(5){
                background-position-y: -48px;
            }
        }
        .more_sign{
            display: flex;
            overflow-x: auto;
            margin-top: 10px;
            &::-webkit-scrollbar{
                display: none;
            }
            .more_sign_box{
                flex-shrink: 0;
                margin-right: 12px;
                .box-img{
                    position: relative;
                    span{
                        background: black;
                        position: absolute;
                        top: 0;
                        color: white;
                        font-size: 12px;
                        padding: 4px 5px;
                        border-radius: 0 0 10px 0;
                    }
                }
                .box-title{
                    font-size: 12px;
                    font-weight: 600;
                    margin-top: 3px;
                    margin-bottom: 1px;
                }
                .box-data{
                    font-size: 12px;
                    color: gray;
                }
            }
        }
    }
    .my-swipe .van-swipe-item {
        color: #fff;
        font-size: 20px;
        line-height: 150px;
        text-align: center;
        background-color: #39a9ed;
    }
    /*.index{
        margin-bottom: 78px;
    }*/
    .sticky{
        margin-bottom: 10px;
        box-shadow: 0px 0px 6px #b5b5b5;
    }
    .fotr_text{
        p{
            line-height: 75px;
            /* padding-left: 10px; */
            text-align: center;
            color: gray;
            font-size: 13px;
        }
    }
</style>
