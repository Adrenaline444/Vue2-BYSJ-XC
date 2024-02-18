<template>
    <div class="Login">
        <div class="from">
            <van-form @submit="onSubmit">
                <van-field
                        v-model="from_list.student_id"
                        name="student_id"
                        label="学号"
                        placeholder="请输入学号"
                />
                <van-field
                        v-model="from_list.password"
                        type="password"
                        name="password"
                        label="密码"
                        placeholder="请输入密码"
                />
                <div style="margin: 16px;">
                    <van-button block type="info" native-type="submit">登录</van-button>
                </div>
            </van-form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data(){
            return{
                from_list:{
                    student_id: '',
                    password: '',
                }
            }
        },
        methods:{
            //登录验证
            onSubmit() {
                //正则
                if(this.from_list.student_id == '' || this.from_list.student_id == ''){
                    this.$toast.fail('学号或密码不能为空')
                    return
                }
                if(this.from_list.student_id.length < 9){
                    this.$toast.fail('学号不能小于9位')
                    return;
                }
                this.axios.post('admin/login',this.from_list).then(res=>{
                    if (res.status == '200'){
                        if(res.data.code === 200){
                            this.$toast.success(res.data.msg)
                            localStorage.setItem('token',res.data.token)
                            this.$router.push({name:'index_mine'})
                            sessionStorage.setItem('index_page',3)
                            sessionStorage.setItem('student_id',res.data.student_id)
                        }else{
                            this.$toast.fail(res.data.msg)
                        }
                    }else{
                        this.$toast.fail('未知错误')
                    }
                })
            },
        },
        created() {

        }
    }
</script>

<style lang="scss" scoped>
    .Login {
        .from {
            .van-button {
                height: 37px;
            }
        }
    }
</style>
