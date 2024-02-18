<template>
    <div class="part_time">
        <van-sticky>
            <div class="header">
                <van-nav-bar
                        title="校园兼职"
                        left-text="返回"
                        left-arrow
                        @click-left="onClickLeft"
                />
            </div>
        </van-sticky>
        <div class="swiper">
            <van-swipe class="my-swipe" :autoplay="4000" indicator-color="white">
                <van-swipe-item v-for="(item,index) in swipe_list" :key="index"><div :class="item.name" :style="{'background-image':'url('+item.img+')','width':'100%','height':'26vh','background-size':'cover','background-position-y':'-46px'}"></div></van-swipe-item>
            </van-swipe>
        </div>
        <div class="content">
            <van-tabs v-model="active" swipeable @click="tabs_click" :sticky="true">
                <van-tab v-for="(item,index) in tabs_title" :title="item.title" :key="index">
                    <div class="content-box" v-for="(item,index) in tabs_data" :key="index">
                        <div class="box-left">
                            <div class="text-title">{{item.title}}{{index}}</div>
                            <div class="text-text">{{item.text}}</div>
                            <div class="text-dup">
                                <van-tag mark type="primary">官方推荐</van-tag>
                                <van-tag type="primary" color="gray">日结</van-tag>
                            </div>
                        </div>
                       <div class="box-right">{{item.money}}元/天</div>
                    </div>
                </van-tab>
            </van-tabs>
        </div>
    </div>
</template>

<script>
    export default {
        name: "part_time",
        data(){
            return{
                tabs_title:[
                    {title:'推荐'},
                    {title:'日结兼职'},
                    {title:'在家可做'},
                    {title:'高薪兼职'},
                    {title:'在线兼职'},
                ],
                swipe_list:[
                    {img:require('../../assets/image/index_home_swipe_1.jpg'),name:'page1'},
                    {img:require('../../assets/image/index_home_swipe_2.jpg'),name:'page2'},
                    {img:require('../../assets/image/index_home_swipe_3.jpg'),name:'page3'},
                    {img:require('../../assets/image/index_home_swipe_4.jpg'),name:'page4'},
                ],
                tabs_data:'',
                active:0
            }
        },
        methods:{
            onClickLeft(){
                this.$router.push({name:'index_home'})
            },
            tabs_click(val){
                if (val == 0){
                    this.tabs_data = [
                        {title:'线上推广平台',text:'这是一份不正经的一份兼职',list:['官方推荐','日结'],money:'120-180'},
                        {title:'线上推广平台',text:'这是一份不正经的一份兼职',list:['官方推荐','日结'],money:'120-180'},
                        {title:'线上推广平台',text:'这是一份不正经的一份兼职',list:['官方推荐','月结'],money:'120-180'},
                        {title:'线上推广平台',text:'这是一份不正经的一份兼职',list:['官方推荐','月结'],money:'120-180'},
                        {title:'线上推广平台',text:'这是一份不正经的一份兼职',list:['官方推荐','月结'],money:'120-180'},
                        {title:'线上推广平台',text:'这是一份不正经的一份兼职',list:['官方推荐','日结'],money:'120-180'},
                        {title:'线上推广平台',text:'这是一份不正经的一份兼职',list:['官方推荐','日结'],money:'120-180'},
                        {title:'线上推广平台',text:'这是一份不正经的一份兼职',list:['官方推荐','日结'],money:'120-180'},
                        {title:'线上推广平台',text:'这是一份不正经的一份兼职',list:['官方推荐','日结'],money:'120-180'},
                        {title:'线上推广平台',text:'这是一份不正经的一份兼职',list:['官方推荐','日结'],money:'120-180'},
                        {title:'线上推广平台',text:'这是一份不正经的一份兼职',list:['官方推荐','日结'],money:'120-180'},
                    ]
                }else if(val == 1){
                    this.tabs_data = [
                        {title:'沃特遨游弄啥类',text:'这是一份不正经的一份兼职',list:['官方推荐','日结'],money:'120-180'},
                        {title:'沃特遨游弄啥类',text:'这是一份不正经的一份兼职',list:['官方推荐','日结'],money:'120-180'},
                        {title:'沃特遨游弄啥类',text:'这是一份不正经的一份兼职',list:['官方推荐','月结'],money:'120-180'},
                        {title:'沃特遨游弄啥类',text:'这是一份不正经的一份兼职',list:['官方推荐','月结'],money:'120-180'},
                        {title:'沃特遨游弄啥类',text:'这是一份不正经的一份兼职',list:['官方推荐','月结'],money:'120-180'},
                        {title:'沃特遨游弄啥类',text:'这是一份不正经的一份兼职',list:['官方推荐','日结'],money:'120-180'},
                        {title:'沃特遨游弄啥类',text:'这是一份不正经的一份兼职',list:['官方推荐','日结'],money:'120-180'},
                        {title:'沃特遨游弄啥类',text:'这是一份不正经的一份兼职',list:['官方推荐','日结'],money:'120-180'},
                        {title:'沃特遨游弄啥类',text:'这是一份不正经的一份兼职',list:['官方推荐','日结'],money:'120-180'},
                        {title:'沃特遨游弄啥类',text:'这是一份不正经的一份兼职',list:['官方推荐','日结'],money:'120-180'},
                        {title:'沃特遨游弄啥类',text:'这是一份不正经的一份兼职',list:['官方推荐','日结'],money:'120-180'},
                    ]
                }else if(val == 2){
                    this.tabs_data = [
                        {title:'在家可做可能吗',text:'这是一份不正经的一份兼职',list:['官方推荐','日结'],money:'120-180'},
                        {title:'在家可做可能吗',text:'这是一份不正经的一份兼职',list:['官方推荐','日结'],money:'120-180'},
                        {title:'在家可做可能吗',text:'这是一份不正经的一份兼职',list:['官方推荐','月结'],money:'120-180'},
                        {title:'在家可做可能吗',text:'这是一份不正经的一份兼职',list:['官方推荐','月结'],money:'120-180'},
                        {title:'在家可做可能吗',text:'这是一份不正经的一份兼职',list:['官方推荐','月结'],money:'120-180'},
                        {title:'在家可做可能吗',text:'这是一份不正经的一份兼职',list:['官方推荐','日结'],money:'120-180'},
                        {title:'在家可做可能吗',text:'这是一份不正经的一份兼职',list:['官方推荐','日结'],money:'120-180'},
                        {title:'在家可做可能吗',text:'这是一份不正经的一份兼职',list:['官方推荐','日结'],money:'120-180'},
                        {title:'在家可做可能吗',text:'这是一份不正经的一份兼职',list:['官方推荐','日结'],money:'120-180'},
                        {title:'在家可做可能吗',text:'这是一份不正经的一份兼职',list:['官方推荐','日结'],money:'120-180'},
                        {title:'在家可做可能吗',text:'这是一份不正经的一份兼职',list:['官方推荐','日结'],money:'120-180'},
                    ]
                }else if(val == 3){
                    this.tabs_data = [
                        {title:'高新好啊',text:'这是一份不正经的一份兼职',list:['官方推荐','日结'],money:'120-180'},
                        {title:'高新好啊',text:'这是一份不正经的一份兼职',list:['官方推荐','日结'],money:'120-180'},
                        {title:'高新好啊',text:'这是一份不正经的一份兼职',list:['官方推荐','月结'],money:'120-180'},
                        {title:'高新好啊',text:'这是一份不正经的一份兼职',list:['官方推荐','月结'],money:'120-180'},
                        {title:'高新好啊',text:'这是一份不正经的一份兼职',list:['官方推荐','月结'],money:'120-180'},
                        {title:'高新好啊',text:'这是一份不正经的一份兼职',list:['官方推荐','日结'],money:'120-180'},
                        {title:'高新好啊',text:'这是一份不正经的一份兼职',list:['官方推荐','日结'],money:'120-180'},
                        {title:'高新好啊',text:'这是一份不正经的一份兼职',list:['官方推荐','日结'],money:'120-180'},
                        {title:'高新好啊',text:'这是一份不正经的一份兼职',list:['官方推荐','日结'],money:'120-180'},
                        {title:'高新好啊',text:'这是一份不正经的一份兼职',list:['官方推荐','日结'],money:'120-180'},
                        {title:'高新好啊',text:'这是一份不正经的一份兼职',list:['官方推荐','日结'],money:'120-180'},
                    ]
                }else if(val == 4){
                    this.tabs_data = [
                        {title:'在线兼职太棒了把',text:'这是一份不正经的一份兼职',list:['官方推荐','日结'],money:'120-180'},
                        {title:'在线兼职太棒了把',text:'这是一份不正经的一份兼职',list:['官方推荐','日结'],money:'120-180'},
                        {title:'在线兼职太棒了把',text:'这是一份不正经的一份兼职',list:['官方推荐','月结'],money:'120-180'},
                        {title:'在线兼职太棒了把',text:'这是一份不正经的一份兼职',list:['官方推荐','月结'],money:'120-180'},
                        {title:'在线兼职太棒了把',text:'这是一份不正经的一份兼职',list:['官方推荐','月结'],money:'120-180'},
                        {title:'在线兼职太棒了把',text:'这是一份不正经的一份兼职',list:['官方推荐','日结'],money:'120-180'},
                        {title:'在线兼职太棒了把',text:'这是一份不正经的一份兼职',list:['官方推荐','日结'],money:'120-180'},
                        {title:'在线兼职太棒了把',text:'这是一份不正经的一份兼职',list:['官方推荐','日结'],money:'120-180'},
                        {title:'在线兼职太棒了把',text:'这是一份不正经的一份兼职',list:['官方推荐','日结'],money:'120-180'},
                        {title:'在线兼职太棒了把',text:'这是一份不正经的一份兼职',list:['官方推荐','日结'],money:'120-180'},
                        {title:'在线兼职太棒了把',text:'这是一份不正经的一份兼职',list:['官方推荐','日结'],money:'120-180'},
                    ]
                }
            }
        },
        created() {
            this.tabs_click(0)
        }
    }
</script>

<style lang="scss" scoped>
    /deep/.van-tabs__content{

    }
    .content-box{
        display: flex;
        padding: 10px 20px;
        border-bottom: 1px solid #ebebeb;
        &:active{
            background-color: #bdbdbd;
        }
        .box-left{
            div{
                line-height: 21px;
            }
            .van-tag--mark{
                margin-right: 10px;
            }
        }
        .text-title{
            font-size: 15px;
        }
        .text-text{
            font-size: 12px;
            color: gray;
        }
        .box-right{
            text-align: right;
            flex: 1;
            font-size: 14px;
            color: #ed2c2c;
            font-weight: 600;
        }
    }
    .my-swipe .van-swipe-item {
        color: #fff;
        font-size: 20px;
        line-height: 150px;
        text-align: center;
        background-color: #39a9ed;
    }
</style>
