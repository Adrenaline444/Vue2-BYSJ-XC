const express = require('express')
const router = express.Router()
const db = require('../mysql/index')

//查询个人信息
router.post('/info',(req,res)=>{
    const {student_id} = req.body
    db.query('select student_id,phone,username,money,date from user where student_id = ?',[student_id],(err,results)=>{
        if(err || results.length == 0){
            res.send({code:201,msg:'查询失败'})
        }else{
            res.send({code:200,list:results[0]})
        }
    })
})
//充值金额
router.post('/recharge_money',(req,res)=>{
    const {student_id,money} = req.body
    let sqlMoney = parseInt(money)
    //查询金额然后提取出来


    db.query('select * from user where student_id = ?',[student_id],(err,results)=>{
        if(err || results.length == 0){
            res.send('数据有误')
        }else{
            sqlMoney += parseInt(results[0].money)
            db.query('update user set money = ? where student_id = ?',[sqlMoney,student_id],function (err,results) {
                if(err||results.length == 0){
                    res.send({code:201,msg:'数据有误'})
                }else{
                    res.send({code:200,msg:'充值成功'})
                }
            })
        }
    })
})
//测试接口
router.get('/test',(req,res)=>{
    res.send('1')
})

module.exports = router
