<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
  export default {
    name:'app',
    data(){
      return{

      }
    },
    methods:{
      // keyFocus(){
      //   sessionStorage.setItem('footer_name','footer_name')
      //   //软键盘弹起
      //   document.body.addEventListener('focusin',function () {
      //     // console.log('弹起')
      //     //获取导航栏的元素
      //     let footer = document.getElementsByClassName('van-tabbar--fixed')[0]
      //     //监听手机软键盘弹出 并隐藏底部导航栏
      //     footer.style.display = 'none'
      //   })
      //   //软键盘关闭
      //   document.body.addEventListener('focusout',function () {
      //     // console.log('关闭')
      //     //获取导航栏的元素
      //     let footer = document.getElementsByClassName('van-tabbar--fixed')[0]
      //     //监听手机软键盘关闭 并显示出导航栏
      //     footer.style.display = 'flex'
      //   })
      // }
    },
    created() {
      // this.keyFocus()
    },
  }
</script>
<style>
  .iconfont{
    font-size: 22px!important;
    display: block;
    margin-bottom: 4px;
    text-align: center;
  }
  img{
    width: 100%;
    height: 100%;
  }
/*  @font-face {
    font-family: 'public_font';
    src: url("assets/font/Captureit.ttf");
  }
  *{
    font-family: 'public_font';
  }*/
  p{
    margin: 0 ;
    padding: 0;
  }
  .icon{
    font-style: normal;
    font-weight: 600;
  }

</style>
