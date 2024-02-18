import Vue from 'vue'
import VueRouter from 'vue-router'
import * as path from "path";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Guide_pages',
    component: resolve => require(['@/components/Guide_pages'],resolve),
    meta:{title:'引导页'}
  },
  {
    path: '/Footer_Home',
    name:'Footer_Home',
    component:resolve => require(['@/components/Footer_Home'],resolve),
    meta: {title: '首页'},
    redirect:'/index_home',
    children:[
      {path:'/index_home',name:'index_home',component:resolve => require(['@/views/index_page/index_home'],resolve),meta:{title:'首页'}},
      {path:'/index_serve',name:'index_serve',component:resolve => require(['@/views/index_page/index_serve'],resolve),meta:{title:'服务'}},
      {path:'/index_info',name:'index_info',component:resolve => require(['@/views/index_page/index_info'],resolve),meta:{title:'消息'}},
      {path:'/index_mine',name:'index_mine',component:resolve => require(['@/views/index_page/index_mine'],resolve),meta:{title:'我的'}},
    ]
  },
  {
    path: '/mine_header_bg',
    name:'mine_header_bg',
    component:resolve => require(['@/components/Login_box/mine_header_bg'],resolve),
    redirect: '/Login',
    children: [
      {path: '/Login',name:'Login',component:resolve => require(['@/views/Login_from/Login'],resolve),meta: {title:'登录'}},
      {path: '/Register',name:'Register',component:resolve => require(['@/views/Login_from/Register'],resolve),meta: {title:'注册'}},
      {path: '/forget_pwd',name:'forget_pwd',component:resolve => require(['@/views/Login_from/forget_pwd'],resolve),meta: {title:'找回密码'}},
    ]
  },
  {
    path: '/index_mine/recharge_money',
    name:'recharge_money',
    component:resolve => require(['@/components/money/recharge_money'],resolve),
    meta: {title: '校园卡充值'}
  },
  {
    path: '/index_home/course_inquire',
    name: 'course_inquire',
    component:resolve => require(['@/views/index_menu/course_inquire'],resolve),
    meta: {title: '课程查询'}
  },
  {
    path: '/index_home/part_time',
    name: 'part_time',
    component:resolve => require(['@/views/index_menu/part_time'],resolve),
    meta: {title: '校园兼职'}
  },
  {
    path: '/index_home/lose_thing',
    name: 'lose_thing',
    component:resolve => require(['@/views/index_menu/lose_thing'],resolve),
    meta: {title: '失物招领'}
  },
  {
    path: '/index_home/idea_transfer',
    name: 'idea_transfer',
    component:resolve => require(['@/views/index_menu/idea_transfer'],resolve),
    meta: {title: '闲置转让'}
  },
  {
    path: '/wm/wm',
    name:'wm',
    component:resolve => require(['@/views/wm/wm.vue'],resolve),
    meta: {title: '校园订餐服务'}
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  document.title = '校园App-'+to.meta.title //更改每个页面的头部信息
  next()
})

export default router
