<template>
    <div class="Footer_Home">
        <router-view></router-view>
        <van-tabbar v-model="active" @change="aciveChange(active)">
            <van-tabbar-item icon="home-o">首页</van-tabbar-item>
            <van-tabbar-item icon="flower-o">服务</van-tabbar-item>
            <van-tabbar-item icon="chat-o">消息</van-tabbar-item>
            <van-tabbar-item icon="contact">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
    export default {
        name: "Footer_Home",
        data(){
            return{
                active:0
            }
        },
        created() {
            this.aciveChange()
            if (sessionStorage.getItem('index_page') == null || sessionStorage.getItem('index_page') == undefined){
                this.active = 0
            }else{
                this.active = parseInt(sessionStorage.getItem('index_page'))
            }
        },
        methods:{
            aciveChange(val){
                this.active = val
                if(val == 0){
                    this.$router.push({name:'index_home'}).catch(() => {})
                    sessionStorage.setItem('index_page',val)
                }else if(val == 1){
                    this.$router.push({name:'index_serve'}).catch(() => {})
                    sessionStorage.setItem('index_page',val)
                } else if(val == 2){
                    this.$router.push({name:'index_info'}).catch(() => {})
                    sessionStorage.setItem('index_page',val)
                } else if(val == 3){
                    if(localStorage.getItem('token') == null || localStorage.getItem('token') == undefined){
                        this.$router.push({name:'Login'}).catch(() => {})
                    }else{
                        this.$router.push({name:'index_mine'}).catch(() => {})
                        sessionStorage.setItem('index_page',val)
                    }
                }
            }
        },
        watch:{
            '$route.name'(newVal,oldVal){
                if(newVal == 'index_home'){
                    this.active = 0
                    this.aciveChange(0)
                }else if(newVal == 'index_serve'){
                    this.active = 1
                    this.aciveChange(1)
                }else if(newVal == 'index_info'){
                    this.active = 2
                    this.aciveChange(2)
                }else if(newVal == 'index_mine'){
                    this.active = 3
                    this.aciveChange(3)
                }
                sessionStorage.setItem('footer_name',newVal)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .Footer_Home{
        &::after{
            content : '';
            height : 50px;
            display :block;
        }
    }
</style>
