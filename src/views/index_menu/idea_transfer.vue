<template>
  <div class="idea_transfer">
    <van-sticky>
      <div class="header">
        <van-nav-bar
            title="闲置转让"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
        />
      </div>
    </van-sticky>
    <van-sticky>
      <van-search v-model="value" placeholder="请输入标题进行搜索"/>
    </van-sticky>
    <div class="pb">

      <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
          offset="1000"
      >
        <div class="pb_item" v-for="(item,index) in img_data_td" :key="index">
          <img :src="item.img" alt="">
          <div class="item_title">{{ item.title }}</div>
          <div class="item_money">￥{{ item.money }} <span>{{ item.look_people }}人想要</span></div>
        </div>
      </van-list>
    </div>
  </div>
</template>

<script>
export default {
  name: "idea_transfer",
  data() {
    return {
      value: '',
      img_data: [
        {img: require('../../assets/image/st_3.jpeg'), title: '篮球大师', money: '49', look_people: '3'},
        {img: require('../../assets/image/st_2.jpg'), title: '音乐大师', money: '59', look_people: '3'},
        {img: require('../../assets/image/st_3.jpeg'), title: '篮球大师', money: '69', look_people: '3'},
        {img: require('../../assets/image/st_4.jpeg'), title: '艺术大师', money: '79', look_people: '3'},
        {img: require('../../assets/image/st_5.jpeg'), title: '电脑大师', money: '89', look_people: '3'},
      ],
      loading: false,
      finished: false,
    }
  },
  methods: {
    onClickLeft(){
      this.$router.push({name:'index_home'})
    },
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      let index = 0
      let index_title = 0
      let indexData = ['文艺世界', '音乐大师', '篮球大师', '艺术大师', '电脑大师']
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          index++
          if (index > 5) {
            index = 1
          }
          this.img_data.push({
            img: require(`../../assets/image/st_${index}.jpeg`),
            title: `${indexData[index_title]}`,
            money: '49',
            look_people: `${i}`
          })
          index_title++
        }
        // 加载状态结束
        this.loading = false;
        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    },
  },
  computed: {
    img_data_td() {
      let then = this
      if (this.value == '') {
        return this.img_data
      }
      /*   return this.img_data.filter((item)=>{
             if ((item.title).includes(this.value)){
                 console.log(item.title)
                 return item.title.includes(this.value)
             }
         })*/
      return this.img_data.filter(item => {
        return item.title.includes(then.value)
      })
      console.log(1)
    }
  }
}
</script>

<style lang="scss" scoped>
.pb {
  width: 100%;
  column-count: 2; /*列表 列*/
  /*column-gap:0.1rem;*/
  /*列表之前的间距*/
  padding: 0.15rem;
  box-sizing: border-box;

  .pb_item {
    height: auto;
    background: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    break-inside: avoid; /*避免在元素内部断行并产生新列 */
    margin-bottom: 0.6rem;
    border-radius: 0.5rem;
    overflow: hidden;
    box-shadow: 0 0 10px #c7c7c7;

    img {
      width: 100%;
      height: auto;
    }

    .item_title {
      font-size: 14px;
      line-height: 27px;
      padding-left: 10px;
    }

    .item_money {
      color: #d35555;
      font-size: 17px;
      margin-bottom: 10px;
      padding-left: 10px;

      span {
        color: gray;
        font-size: 12px;
      }
    }

    &:active {
      filter: brightness(80%);
    }
  }
}
</style>
