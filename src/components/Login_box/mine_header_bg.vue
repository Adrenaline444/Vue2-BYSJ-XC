<template>
    <div class="mine-bg">
        <div class="login-box">
            <van-nav-bar
                    left-arrow
                    @click-left="onClickLeft"
            />
            <p>{{app_title}}</p>
            <div class="login-botton">
                <div class="bg bg1"></div>
                <div class="bg bg2"></div>
                <div class="bg bg3"></div>
            </div>
        </div>
        <router-view></router-view>
        <div class="login-regester">
            <div class="box1" @click="btn_click(box1.public_one)">{{box1.public_one}}</div>
            <div class="box1" v-if="app_title == '校园登录'" @click="btn_click(box1.public_two)">{{box1.public_two}}</div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "mine_header_bg",
        data() {
            return {
                app_title: '校园登录',
                box1: {
                    public_one: '注册',
                    public_two: '忘记密码'
                }
            }
        },
        methods: {
            //返回上一页
            onClickLeft() {
                // this.$router.push({name: 'index_home'})
                this.$router.back()
            },
            //登录、注册、找回
            btn_click(val) {
                if (val == '注册') {
                    this.$router.push({name: 'Register'})
                    this.box1.public_one = '登录'
                    this.app_title = '校园注册'
                } else if (val == '忘记密码') {
                    this.$router.push({name: 'forget_pwd'})
                    this.app_title = '校园密码找回'
                    this.box1.public_one = '登录'
                } else if (val == '登录') {
                    this.$router.push({name: 'Login'})
                    this.box1.public_one = '注册'
                    this.app_title = '校园登录'
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .login-box {
        background: linear-gradient(
                        180deg, #af8aff, #708efe);
        height: 35vh;
        position: relative;

        p {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            margin: 0;
            color: white;
            font-size: 26px;
        }

        .van-hairline--bottom::after {
            border-bottom-width: 0px !important;
        }

        .van-nav-bar {
            background-color: transparent;

            /deep/ .van-icon {
                color: white;
                font-size: 22px;
            }
        }

        .login-botton {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 50px;

            .bg {
                position: absolute;
                transition: all 5s linear;
            }

            .bg1 {
                width: 100%;
                height: 50px;
                background-size: 100% 100%;
                background-image: url("../../assets/image/b.png");
                animation: bg1 5s infinite linear;
            }

            .bg2 {
                width: 100%;
                height: 50px;
                background-size: 100% 100%;
                background-image: url("../../assets/image/b.png");
                background-position-x: 109px;
                opacity: 0.7;
                animation: bg2 10s infinite linear;
            }

            .bg3 {
                width: 100%;
                height: 50px;
                background-size: 100% 100%;
                background-image: url("../../assets/image/b.png");
                opacity: 0.7;
                background-position-x: 264px;
            }
        }
    }

    .login-regester {
        display: flex;
        margin-top: 10px;
        color: #708efe;
        width: 90%;
        margin: 0 auto;

        .box1 {
            flex: 1;
            font-size: 13px;
        }

        .box1:nth-child(2) {
            text-align: right;
        }
    }

    @keyframes bg1 {
        0% {
            background-position-x: 0px
        }
        100% {
            background-position-x: 375px
        }
    }

    @keyframes bg2 {
        0% {
            background-position-x: 109px
        }
        100% {
            background-position-x: 1000px
        }
    }

</style>
