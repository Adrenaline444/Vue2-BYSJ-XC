const express = require('express')
const router = express.Router()
const db = require('../mysql/index')
//导入用于生成jwt字符串的包
const jwt = require('jsonwebtoken')
//导入全局变量
const public_var = require('../public_var/index')

//注册
router.post('/register',(req,res)=>{
    const {student_id,username,phone,password} = req.body
    let date = public_var.fun_date()

    // const addSql = 'insert into user(username,password,createTime,teacher,teacher_phone,teacher_position,roles) values(?,?,?,?,?,?,?)'

    db.query('insert into user(student_id,password,phone,username,money,date) values(?,?,?,?,?,?)',[student_id,password,phone,username,'0',date],(err,results)=>{
        console.log(req.body,date)
        if (err || results.length == 0){
            res.send({code:201,msg:'添加数据错误'})
        }else{
            res.send({
                code:200,
                msg:'注册成功'
            })
        }
    })
})
//登录
router.post('/login',(req,res)=>{
    const {student_id,password} = req.body
    console.log(student_id,password);
    db.query('select student_id,password from user where student_id = ? and password = ?',[student_id,password],(err,results)=>{
        if(err || results.length == 0){
            res.send({code:201,msg:'用户名不存在或密码错误'})
        }else{
            res.send({
                code:200,
                msg:'登录成功',
                token:jwt.sign({student_id:student_id},public_var.key,{expiresIn: '1h'}),
                student_id:student_id
            })
        }
    })
})
//修改密码
router.post('/forget_pwd',(req,res)=>{
    const {student_id,phone,password} = req.body
    db.query('select student_id,phone from user where student_id = ? and phone = ?',[student_id,phone],(err,results)=>{
        if(err || results.length == 0){
            res.send({code:201,msg:'学号或手机号找不到！'});
        }else{
            db.query('update user set password = ? where student_id = ?',[password,student_id],(err,results_update)=>{

                console.log(results_update);

                if(err || results_update.length == 0){
                    res.send({code:201,msg:'修改失败'})
                }else{
                    res.send({code:200,msg:'修改成功'})
                }
            })
        }
    })
})

module.exports = router
