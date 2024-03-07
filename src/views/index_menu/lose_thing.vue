<template>
    <div class="lose_thing">
      <van-sticky>
        <div class="header">
          <van-nav-bar
              title="失物招领"
              left-text="返回"
              left-arrow
              @click-left="onClickLeft"
          />
        </div>
      </van-sticky>
        <div class="lose_title">
            <div class="lose_title_text">失物招领</div>
        </div>
        <div class="search">
            <van-sticky>
            <van-search
                    v-model="value"
                    show-action
                    label="地址"
                    placeholder="请输入关键词进行搜索"
                    @search="onSearch"
            >
                <template #action>
                    <div @click="onSearch">搜索</div>
                </template>
            </van-search>
            </van-sticky>
        </div>
        <div class="tab">
            <van-tabs v-model="active" @click="clickActive">
                <van-tab v-for="(item,index) in tab_list" :title="item.title" :key="index">
                    <div class="tab-content" v-for="(item,index) in tab_list_com" :key="index">
                        <div class="tab-centent-left">
                            <div class="tab-centent-left-img">
                                <img src="../../assets/image/guide_1.png" alt="">
                            </div>
                        </div>
                        <div class="tab-centent-right">
                            <div class="right-title">{{item.title}}</div>
                            <div class="money">{{item.remuneration}} <span>酬金</span></div>
                        </div>
                    </div>
                </van-tab>
            </van-tabs>
        </div>
    </div>
</template>

<script>
    export default {
        name: "lose_thing",
        data() {
            return {
                value:'',
                active:0,
                tab_list:[
                    {title:'失主',title_index:'0'},
                    {title:'拾主',title_index:'1'},
                ],
                loser_list:[
                    {title:'宠物 | 新乡某学校某街',remuneration:'500'},
                    {title:'钱包 | 新乡某学校某街',remuneration:'500'},
                    {title:'钱包 | 新乡某学校某街',remuneration:'500'},
                    {title:'随身 | 新乡某学校某街',remuneration:'500'},
                    {title:'电子 | 新乡某学校某街',remuneration:'500'},
                    {title:'机械 | 新乡某学校某街',remuneration:'500'},
                    {title:'电脑 | 新乡某学校某街',remuneration:'500'},
                    {title:'人人 | 新乡某学校某街',remuneration:'500'},
                ]
            }
        },
        methods: {
          onClickLeft(){
            this.$router.push({name:'index_home'})
          },

            //搜索
            onSearch(){

            },
            clickActive(val){
                if(val == 1){
                    // console.log(this.loser_list.sort())
                    // console.log(this.loser_list.reverse())
                    this.loser_list.reverse()
                    this.value = ''
                }else{
                    this.loser_list.reverse()
                    this.value = ''
                }
            }
        },
        computed:{
            tab_list_com(){
                if(this.value == ''){
                    return this.loser_list
                }
                return this.loser_list.filter((item)=>{
                    return item.title.includes(this.value)
                })
                return this.loser_list
            }
        }
    }
</script>

<style lang="scss" scoped>
    .lose_thing {
        .lose_title {
            .lose_title_text {
                padding: 10px 14px;
                font-weight: 600;
                font-size: 18px;
            }
        }
        .tab{
            .tab-content{
                background: white;
                display: flex;
                margin: 20px 13px;
                border-radius: 5px;
                overflow: hidden;
                box-shadow: 0 0 10px #c3bdbd;
                &:active{
                    filter: brightness(80%);
                }
                .tab-centent-left{
                    .tab-centent-left-img{
                        height: 99px;
                        width: 99px;
                        overflow: hidden;
                    }
                }
                .tab-centent-right{
                    width: 100%;
                    display: flex;
                    font-size: 13px;
                    padding-left: 10px;
                    line-height: 35px;
                    .money{
                        flex: 1;
                        text-align: right;
                        padding-right: 14px;
                        color: #df5555;
                        font-weight: 600;
                        span{
                            color: gray;
                            font-weight: normal;
                            font-size: 12px;
                        }
                    }
                }
            }
        }
    }
</style>
