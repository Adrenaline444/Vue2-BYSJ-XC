<template>
    <div class="forget_pwd">
        <div class="from">
            <van-form @submit="onSubmit">
                <van-field
                        v-model="student_id"
                        name="student_id"
                        label="学号"
                        placeholder="请输入学号"
                />
                <van-field
                        v-model="phone"
                        name="phone"
                        label="手机号"
                        placeholder="请输入手机号"
                />
                <van-field
                        v-model="password"
                        type="password"
                        name="password"
                        label="新密码"
                        placeholder="请输入新密码"
                />
                <div style="margin: 16px;">
                    <van-button block type="info" native-type="submit">确认密码</van-button>
                </div>
            </van-form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "forget_pwd",
        data(){
            return{
                student_id: '',
                phone:'',
                password: '',
            }
        },
        created() {
            this.$dialog.alert({
                title:'修改规则',
                message:'确保：学号、手机号填入正确加上要修改的密码方可修改成功'
            })

        },
        methods:{
            onSubmit(values) {
                this.axios.post('admin/forget_pwd',values).then(res=>{
                    if(res.status == 200){
                        if(res.data.code == 200){
                            this.$toast.success(res.data.msg)
                            this.$router.push({name:'Login'})
                        }else{
                            this.$toast.fail(res.data.msg)
                        }
                    }else{
                        this.$toast.fail('网络出差去了！')
                    }
                })
            },
        },
    }
</script>

<style lang="scss" scoped>
    .from {
        .van-button {
            height: 37px;
        }
    }
</style>
