<template>
    <div class="index_mine">
        <div class="mine_header-box">
            <div class="mine-white">
                <div class="mine-flex-box">
                    <div class="flex_flex">
                        <div class="mine-ico" :style="{'background-image':'url('+img+')'}"></div>
                        <div class="mine-title">
                            <div class="mine-name">新乡工程学院</div>
                            <div class="mine-school">{{user_info.username}}：{{user_info.student_id}}</div>
                        </div>
                    </div>
                    <div class="mine_money">
                        <div class="money_user">
                            <div>账户余额：</div>
                            <div>￥{{user_info.money}}</div>
                        </div>
                        <div class="money_btn">
                            <button type="submit" @click="recharge_moneyClick">充值</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mine_menu">
            <van-cell-group>
                <van-cell title="常用" :border="false"/>
            <van-grid :border="false">
                <van-grid-item v-for="(item,index) in menu_list" :key="index" :class="item.class_var" :icon="item.icon" :icon-prefix="item.iconPrefix" :text="item.text"/>
            </van-grid>
            </van-cell-group>
        </div>
        <div class="out_btn">
            <button type="submit" @click="out_btn">退出登录</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index_mine",
        data(){
            return{
                img:require('../../assets/image/st_3.jpeg'),
                user_info:'',
                menu_list:[
                    {icon:'credit-pay',text:'电子卡'},
                    {icon:'luyouqi-',text:'校园网',class_var:'iconfont',iconPrefix:'icon'},
                    {icon:'description',text:'消费账单'},
                    {icon:'scan',text:'扫一扫'},
                    {icon:'comment-o',text:'通知'},
                    {icon:'newspaper-o',text:'校内新闻'},
                    {icon:'todo-list-o',text:'成绩查询'},
                    {icon:'points',text:'全部应用'},
                ],
            }
        },
        created() {
            this.init()

        },
        methods:{
            //初始化内容
            init(){
                    let val = {student_id:sessionStorage.getItem('student_id')}
                    this.axios.post('api/info',val).then(res=>{
                        if(res.status == 200){
                            if(res.data.code == '401'){
                                this.$toast.fail(res.data.smg)
                            }else if(res.data.code == '201'){
                                this.$toast.fail(res.data.msg)
                            }else if(res.data.code == '200'){
                                this.user_info = res.data.list
                                sessionStorage.setItem('user_info',JSON.stringify(res.data.list))
                            }
                        }else{
                            this.$toast.fail('网络出问题啦！')
                        }
                    })
            },
            //退出登录
            out_btn(){
                localStorage.clear()
                sessionStorage.clear()
                this.$toast.success('退出成功')
                this.$router.push({name:'Login'})
            },
            //充值
            recharge_moneyClick(){
                this.$router.push({name:'recharge_money'})
            }
        }
    }
</script>

<style lang="scss" scoped>

    .mine_header-box{
        position: relative;
        height: 30vh;
        .mine-white{
            background: linear-gradient(
                            180deg, #af8aff, #708efe);

            height: 20vh;
        }
        .mine-flex-box{
            width: 95%;
            margin: 0 auto;
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            background: white;
            box-shadow: 0 0 10px #bbbbbb;
            border-radius: 10px;
            padding-top: 17px;
            padding-bottom: 17px;
            .flex_flex{
                display: flex;
                margin-bottom: 17px;
                width: 90%;
                margin: 0 auto;
            }
            .mine_money{
                display: flex;
                width: 90%;
                margin: 0 auto;
                margin-top: 17px;
                align-items: center;
                .money_user{
                    div:nth-child(1){
                        font-size: 13px;
                        color: #7c7c7c;
                        font-weight: 600;
                    }
                    div:nth-child(2){
                        font-size: 16px;
                        color: black;
                        font-weight: 600;
                    }
                }
                .money_btn{
                    flex: 1;
                    text-align: right;
                    button{
                        border: none;
                        background: #a28bff;
                        color: white;
                        padding: 7px 14px;
                        font-size: 12px;
                        border-radius: 3px;
                        &:active{
                            background: #8477cf;
                        }
                    }
                }
            }
        }
        .mine-ico{
            width: 65px;
            height: 65px;
            border-radius: 50px;
            background-size: cover;
        }
        .mine-title{
            line-height: 23px;
            margin-top: 9px;
            padding-left: 10px;
            .mine-name{
                font-size: 16px;
            }
            .mine-school{
                font-size: 11px;
            }
        }
    }
    .mine_menu{
        width: 95%;
        margin: 10px auto;
        overflow: hidden;
        box-shadow: 0 0 10px #bbbbbb;
        border-radius: 10px;
        /deep/.van-grid-item__content{
            padding: 11px 8px;
            color: #9f8afe;
        }
    }
    .out_btn{
        width: 90%;
        margin: 0 auto;
        button{
            width: 100%;
            border: none;
            padding: 8px;
            font-size: 13px;
            color: white;
            background: linear-gradient(
                            180deg, #aa8bff, #727ed1);;

            border-radius: 6px;
            &:active{
                background: linear-gradient(
                                180deg, #aa8bff, #8593f6);
            }
        }
    }
</style>
