<template>
    <div class="recharge_money">
        <div class="recharge_header">
            <van-nav-bar
                    title="校园卡充值"
                    left-text="返回"
                    left-arrow
                    @click-left="onClickLeft"
            />
        </div>
        <div class="recharge_input">
            <van-cell-group>
                <van-field v-model="from_list.money" label="校园卡充值" placeholder="请输入金额" />
            </van-cell-group>
        </div>
        <div class="btn">
            <van-button type="default" size="small" block @click="recharge_money_click">充值</van-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "recharge_money",
        data(){
            return{
                from_list:{
                    student_id:sessionStorage.getItem('student_id'),
                    money:''
                }
            }
        },
        created() {

        },
        methods:{
            onClickLeft() {
                this.$router.push({path:'/index_mine'})
            },
            recharge_money_click(){
                let val_reg = /^\d+(\.\d+)?$/
                if(this.from_list.money == ''){
                    this.$toast.fail('充值金额不能为空')
                    return
                }
                if(!val_reg.test(this.from_list.money)){
                    this.$toast.fail('非法输入')
                    return;
                }
                this.axios.post('api/recharge_money',this.from_list).then(res=>{
                    if (res.status == 200){
                        if(res.data.code == '200'){
                            this.$toast.success(res.data.msg)
                            this.$router.push({name:'index_mine'})
                        }else{
                            this.$toast.fail(res.data.msg)
                        }
                    }else{
                        this.$toast.fail('网络不给力！')
                    }
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .btn{
        width: 90%;
        margin: 0 auto;
        margin-top: 10px;
    }
</style>
