//密钥
const key = '1984898516@qq.com'

//封装时间
function fun_date(){
    const date = new Date()
    const y = date.getFullYear()
    const m = date.getMonth() + 1
    const d = date.getDate();
    return y+'-'+m+'-'+d
}

module.exports = {
    key,
    fun_date
}
