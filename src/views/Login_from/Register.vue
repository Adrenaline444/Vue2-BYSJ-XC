<template>
    <div class="Register">
        <div class="from">
            <van-form @submit="onSubmit">
                <van-field
                        v-model="student_id"
                        name="student_id"
                        label="学号"
                        placeholder="请输入学号"
                />
                <van-field
                        v-model="username"
                        name="username"
                        label="姓名"
                        placeholder="请输入姓名"
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
                    <van-button block type="info" native-type="submit">注册</van-button>
                </div>
            </van-form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Register",
        data(){
            return{
                student_id:'',
                username: '',
                phone:'',
                password: '',
            }
        },
        methods:{
            //注册
            onSubmit(values) {
                this.axios.post('admin/register',values).then(res=>{
                    if(res.status == 200){
                        if (res.data.code == 200){
                            this.$toast.success(res.data.msg)
                            this.$router.push({name:'Login'})
                        }else{
                            this.$toast.fail(res.data.msg)
                        }
                    }else{
                        this.$toast.fail('出问题啦！')
                    }
                })
            },
        },
        created() {

        }
    }
</script>

<style lang="scss" scoped>
    .from {
        .van-button {
            height: 37px;
        }
    }
</style>
