### 说明

 - 接口开发

   ###### 校园APP接口规范与测试地址：

   ```javascript
   'http://localhost:8090'
   '/admin' 无需携带token的传入
   '/api'    需要携带token
   ```

- 状态码

  ```javascript
  code：
  201:数据有误
  200:正常
  401:token过期或token未携带
  500：未知错误
  ```

  



### 登录接口

- 登录接口列表

  请求方式：post

  ```javascript
  '/admin/login'
  ```

  | 参数       | 类型   | 必填 | 说明 |
  | ---------- | ------ | ---- | ---- |
  | student_id | String | 是   | 学号 |
  | password   | String | 是   | 密码 |

- 返回参数

  ```javascript
  //成功
  {
  	code:200
  	msg:'登录成功'
  	token:"一串token"
      studnet_id:'返回学号'
  }
  //失败
  {
      code:201,
      msg:"登录失败",
  }
  ```





### 用户注册

- 注册接口列表

- 请求方式：post

  ```javascript
  '/admin/register'
  ```

  | 参数名     | 类型   | 必填 | 说明   |
  | ---------- | ------ | ---- | ------ |
  | student_id | String | 是   | 学号   |
  | username   | String | 是   | 姓名   |
  | phone      | String | 是   | 手机号 |
  | password   | String | 是   | 新密码 |

- 返回参数

  ```javascript
  //成功
  {
  	code:200,
  	msg:'注册成功'
  }
  //失败
  {
      code:201,
      msg:"注册失败"
  }
  ```

  



### 修改密码

-  修改密码接口列表

-  请求方式：post

  ```javascript
  '/admin/forget_pwd'
  ```

  - <font color="red">注意</font>：需要 学号和手机号都填入正确 在填入正确的密码即可修改成功

  | 参数名     | 类型   | 必填 | 说明   |
  | ---------- | ------ | ---- | ------ |
  | student_id | String | 是   | 学号   |
  | phone      | String | 是   | 手机号 |
  | password   | String | 是   | 密码   |

- 返回参数

  ```javascript
  //成功
  {
      code:200
      msg:"修改成功"
  }
  //失败
  {
      code:201
      msg:"修改失败"
  }
  ```

  



### 个人信息

- 个人信息接口列表

- 请求方式：post

  ```javascript
  '/api/user_info'
  ```

- 携带token

  ```javascript
  Authorization:'token'
  ```

  | 参数名     | 类型   | 必填 | 说明         |
  | ---------- | ------ | ---- | ------------ |
  | student_id | String | 是   | 需要传入学号 |

- 返回参数

  ```javascript
  //成功
  {
  	code:200
      list:[
          {
          sutdent_id:'学号'
          phone:'手机号'
          username:'姓名',
          money:'金额'
          date:'注册时间'
          }
      ]
  }
  //失败
  {
      code:201
      msg:'请求失败！'
  }
  ```
  
  

### 充值接口列表

- 请求方式：post

  ```javascript
  '/api/recharge_money'
  ```

- 携带token

  ```javascript
  Authorization:'token'
  ```

  | 参数名     | 类型   | 必填 | 说明       |
  | ---------- | ------ | ---- | ---------- |
  | student_id | String | 是   | 学号       |
  | money      | String | 是   | 校园卡金额 |

- 返回参数

  ```javascript
  //成功
  {
      code:200
      msg:'充值成功'
  }
  //失败
  {
      code:201
      msg:'数据有误'
  }
  ```

  

