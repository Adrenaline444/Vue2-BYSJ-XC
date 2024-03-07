<script>
export default {
  data() {


    return {

      arrData: [],

      allMoney: 0,
      list: [
        {
          images: 'https://photo.tuchong.com/7994979/f/1033773156.jpg',
          title: '鱼香肉丝套餐',
          text: '',
          money: '20.00',
          commodityNumber: '2',
          id: '1'
        },
        {
          images: 'https://img0.baidu.com/it/u=3636032896,2883231853&fm=253&fmt=auto&app=138&f=JPEG?w=469&h=372',
          title: '宫保鸡丁',
          text: '',
          money: '20.00',
          commodityNumber: '2',
          id: '2'
        },
        {
          images: 'https://img1.baidu.com/it/u=2079893176,3126993789&fm=253&fmt=auto&app=138&f=JPEG?w=825&h=500',
          title: '香辣鸡腿堡',
          text: '',
          money: '15.00',
          commodityNumber: '2',
          id: '3'
        },
        {
          images: 'https://p0.meituan.net/deal/fa8fb0d2cf754e9d7f9d992aebfedcab443535.jpg',
          title: '披萨',
          text: '',
          money: '18.00',
          commodityNumber: '2',
          id: '4'
        },
        {
          images: 'https://img2.baidu.com/it/u=4149388747,1258310065&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=709',
          title: '薯条',
          text: '',
          money: '7.00',
          commodityNumber: '2',
          id: '4'
        },
        {
          images: 'https://img0.baidu.com/it/u=1359910248,517012312&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=749',
          title: '西瓜汁',
          text: '',
          money: '7.00',
          commodityNumber: '2',
          id: '4'
        },

      ]
    }

  },
  created() {
    // this.init()
  },
  methods: {
    init() {
      // let money = 0;
      // for (let item in this.list) {
      //   money += parseInt(this.list[item].money)
      //   console.log(money)
      // }
      // this.allMoney = money
    },
    onClickLeft() {
      this.$router.push({name: 'index_serve'})
    },
    addwm(value) {
      this.arrData.push(value)
      this.$toast.success('添加成功')
      if (this.arrData.length !== 0) {
        /*for(let item in this.arrData){
          console.log(this.arrData[item].money)
          this.allMoney += parseInt(this.arrData[item].money)
        }*/
        this.allMoney += parseInt(value.money)
      }

      console.log(this.allMoney)
    },
    onSubmit() {
      this.axios.post('api/purchase', {
        money: this.allMoney,
        user: JSON.parse(sessionStorage.getItem('user_info'))
      }).then(res => {
        if (res.data.code === 200) {
          this.$toast.success('购买成功')
          this.$router.push('/index_serve')
        } else {
          this.$toast.fail('金额不足，请充值后购买')
        }
      })
    }
  }
}
</script>

<template>
  <div class="wm">
    <van-sticky>
      <div class="header">
        <van-nav-bar
            title="校园订餐服务"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
        />
      </div>
    </van-sticky>


    <div v-for="(item,index) in list" :key="index">
      <van-card
          :price="item.money"
          :desc="item.text"
          :title="item.title"
          :thumb="item.images"
      >

        <template #footer>
          <van-button size="small " @click="addwm(item)">添加至结算</van-button>
        </template>
      </van-card>

    </div>


    <van-submit-bar :price="allMoney*100" button-text="结算订单" @submit="onSubmit"/>
  </div>
</template>


<style scoped lang="scss">
.goods-card {
  margin: 0;
  background-color: white;
}

.delete-button {
  height: 100%;
}
</style>