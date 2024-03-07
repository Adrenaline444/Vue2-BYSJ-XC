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

//商品购买
router.post('/purchase',async (req,res)=>{

    const value = req.body

    const findSql = 'select * from user where student_id = ?'
    //查询用户信息
    const findInfo = await new Promise((resolve, reject)=>{
        db.query(findSql,[value.user.student_id],(err,result)=>{
            if (err){
                reject(err)
            }else{
                resolve(result)
            }
        })
    })
    // console.log(findInfo)
    //金额相减
    const moneys = parseInt(findInfo[0].money) - parseInt(value.money)
    console.log(moneys)
    console.log(value)
    if (moneys > 0) {
        const updataSql = 'update user set money = ? where student_id = ?'
        const updataDb = await new Promise((resolve, reject)=>{
            db.query(updataSql,[moneys,value.user.student_id],(err,result)=>{
                if (err){
                    reject(err)
                }else{
                    resolve(result)
                }
            })
        })
        console.log(updataDb)
        res.status(200).json({code:200,msg:'购买成功'})
    }else{
        res.send({code:501,msg:'金额不足请充值！'})
    }
})

module.exports = router
