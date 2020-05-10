//app.js
App({
  onLaunch: function () {
    wx.cloud.init({
      env: 'aaaidea-6po4b'
    })

  },
  globalData: {
    userInfo: null
  }
})