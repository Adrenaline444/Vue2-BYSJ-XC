<template>
    <div class="course_inquire">
        <van-sticky>
        <div class="header">
            <van-nav-bar
                    title="课程查询"
                    left-text="返回"
                    left-arrow
                    @click-left="onClickLeft"
            />
        </div>
        </van-sticky>
        <public_loading v-if="lodaing"></public_loading>
        <div class="content">
            <table border="1" cellspacing="0" cellpadding="0">
                <tr>
                    <th v-for="(item,index) in course_inquire_list" :key="index">{{item.day}}</th>
                </tr>
                <tr v-for="(item,index) in courese_num" :key="index">
                    <td>{{item.day}}</td>
                    <td v-for="items in item.list" rowspan="2">{{items.text}}</td>
                    <td v-for="ite in item.list" rowspan="2">{{ite.text2}}</td>
                    <td v-for="ite in item.list" rowspan="2">{{ite.text3}}</td>
                    <td v-for="ite in item.list" rowspan="2">{{ite.text4}}</td>
                    <td v-for="ite in item.list" rowspan="2">{{ite.text5}}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "course_inquire",
        data(){
            return{
                course_inquire_list:[
                    {day:''},
                    {day:'周一'},
                    {day:'周二'},
                    {day:'周三'},
                    {day:'周四'},
                    {day:'周五'},
                ],
                lodaing:true,
                courese_num:[
                    {day:'1',list:[{text:'数学',text2:'计算机',text3:'音乐',text4:'英语',text5:'C语言'}]},
                    {day:'2',list:[{text2:''}]},
                    {day:'3',list:[{text:'语文',text2:'计算机',text3:'音乐',text4:'英语',text5:'C语言'}]},
                    {day:'4',list:[{text2:''}]},
                    {day:'5',list:[{text:'数学',text2:'计算机',text3:'音乐',text4:'英语',text5:'C语言'}]},
                    {day:'6',list:[{text2:''}]},
                    {day:'7',list:[{text:'数学',text2:'计算机',text3:'音乐',text4:'英语',text5:'C语言'}]},
                    {day:'8',list:[{text2:''}]},
                    {day:'9',list:[{text:'数学',text2:'计算机',text3:'音乐',text4:'英语',text5:'C语言'}]},
                    {day:'10',list:[{text2:''}]},
                ]
            }
        },
        created() {
            this.init()
        },
        methods:{
            onClickLeft(){
                this.$router.push({name:'index_home'})
            },
            init(){
                //删除节点
                setTimeout(()=>{
                    let tr = document.querySelectorAll('table tr td')
                    for (var i=1;i<tr.length;i++){
                        if(tr[i].innerText == ''){
                            tr[i].remove()
                        }
                    }
                    this.lodaing = false
                },1000)
            }
        }
    }
</script>

<style lang="scss" scoped>
.content{
    table{
        width: 100%;
        text-align: center;
        tr:nth-child(1){
            width: 25px;
        }
        tr:not(:first-child){
            height: 50px;
        }
    }
}
</style>
