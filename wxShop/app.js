//app.js
App({
    //onLaunch,onShow: options(path,query,scene,shareTicket,referrerInfo(appId,extraData))
    onLaunch: function(){
      //云开发环境初始化
      wx.cloud.init({
        env:"aaaidea-6po4b"
      })
        
    },
    onShow: function(options){

    },
    onHide: function(){

    },
    onError: function(msg){

    },
    //options(path,query,isEntryPage)
    onPageNotFound: function(options){

    }
    
});