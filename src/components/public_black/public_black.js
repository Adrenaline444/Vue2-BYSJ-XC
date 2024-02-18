/**
 * 解决hbuilder打包app之后点击手机返回键直接退出app的
 */
import Vue from "vue";
import {Toast} from 'vant'
import router from "../../router";


Vue.use(Toast)
document.addEventListener('plusready', function(a) {
    var first = null;
    var webview = plus.webview.currentWebview()
    plus.key.addEventListener('backbutton', function() {
        //首次按键，提示‘再按一次退出应用’
        webview.back()
        if(sessionStorage.getItem('footer_name') == 'index_home'){
            if (!first) {
                first = new Date().getTime();
                plus.nativeUI.toast( "再按一次退出程序");
                setTimeout(function() {
                    first = null;
                }, 1000);
            } else {
                console.log(1);
                if (new Date().getTime() - first < 1000) {
                    plus.runtime.quit();
                }
            }
        }else{
            router.push({name:'index_home'})
        }
    }, false);
});
