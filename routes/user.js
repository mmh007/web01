//引入上一级目录下的mysql连接池对象
const express = require('express');
const pool = require('../pool');

//创建空路由器
var router = express.Router();

//1.用户注册
//获取post请求的数据
router.post('/register',(req,res)=>{
    //判断用户是否为空
    var obj=req.body; 
    console.log(obj);
    var $uname = obj.uname;
    if(!$uname){
        res.send({code:401,msg:'name required'});
        return;
    };
    //验证密码是否为空
    var $upwd = obj.upwd;
    if(!$upwd){
        res.send({code:402,msg:'upwd required'});
        return;
    };
    //验证再次输入密码是否为空
    var $upwda = obj.upwda;
    console.log($upwda)
    if(!$upwda){
        res.send({code:403,msg:'upwda required'});
        return;
    };
    // //二次验证密码是否为空
    if($upwd!=$upwda){
        res.send({code:404,msg:'两次输入的密码不一致！'});
        return;
    };
    
     //执行SQL语句，将注册的数据插入到pi_user数据表中，成功响应 {code:200,msg:'register suc'}
    pool.query('INSERT INTO HOME_male VALUES(NULL,?,?)',[$uname,$upwd],(err,result)=>{
     if(err) throw err;
     //是否添加成功
     if(result.affectedRows>0){
         res.send({code:200,msg:'register suc'});
       }
  });
  
});



// //获取插入的数据 （用户名）
// router.get('/into',(req,res)=>{
//     var name = req.query.uname;
//     console.log(name);
//     //执行sql语句
//     var sql = "SELECT * FROM HOME_male where uname=?";
//     pool.query(sql,[$uname],(err,result)=>{
//         if(err) throw err;
//         if(result.length>0){
//             res.send({code:1,msg:result});
//         }else{
//             res.send({code:-1,msg:"错误结果！"})
//         }
//     })
// }
// )















//导出路由器
module.exports=router;