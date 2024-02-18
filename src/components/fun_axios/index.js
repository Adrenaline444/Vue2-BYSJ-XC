import axios from 'axios'
function axios_post(url,val) {
    return new Promise((resolve, reject) => {
        axios({
            url:url,
            method:'post',
            data:val
        }).then(res=>{
            resolve(res.data)
        }).catch(res=>{
            reject(res)
        })
    })
}

module.exports = {axios_post}
