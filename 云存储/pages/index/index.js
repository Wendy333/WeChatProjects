Page({
  data:{
    imgUrl:"",
    videoUrl:"cloud://aaaidea-6po4b.6161-aaaidea-6po4b-1301518245/video.mp4"
  },
  //下载并打开excel文件
  openExcel(){
    wx.cloud.downloadFile({
      fileID: 'cloud://aaaidea-6po4b.6161-aaaidea-6po4b-1301518245/编程.xlsx',
      success: res => {
        wx.openDocument({
          filePath:res.tempFilePath,
          success: function(res){
            console.log('打开文档成功')
          }
        })
      },
      fail: err => {
        // handle error
      }
    })
  },


  // 上传excel文件
  uploadExcel(){
    wx.chooseMessageFile({
      count: 1,
      type: 'all',
      success (res) {
        wx.cloud.uploadFile({
          cloudPath:'编程.xlsx',//上传至云端的路径
          filePath:res.tempFiles[0].path,// 小程序临时文件路径
          success:res=>{
            // 返回文件 ID
            console.log("上传excel成功",res)
          },
          fail:console.error
        })
      }
    })
  },


  // 上传图片
  upload(){
    let that = this;
    console.log("点击了上传")
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        console.log("选择成功",res)
        that.uploadImg(res.tempFilePaths[0]);
      }
    })
  },
  uploadImg(fileUrl){
    wx.cloud.uploadFile({
      cloudPath:new Date().getTime()+'.png',//上传至云端的路径
      filePath:fileUrl,// 小程序临时文件路径
      success:res=>{
        // 返回文件 ID
        console.log("上传成功",res)
        this.setData({
          imgUrl:res.fileID
        })
      },
      fail:console.error
    })
   },



   // 上传视频
   uploadVideo(){
    wx.chooseVideo({
      sourceType: ['album','camera'],
      maxDuration: 600,  //视频时长，单位秒
      camera: 'back',
      success(res) {
        console.log("选择视频成功",res.tempFilePath)
        wx.cloud.uploadFile({
          cloudPath:'video.mp4',//上传至云端的路径
          filePath:res.tempFilePath,// 小程序临时文件路径
          success:res=>{
            // 返回文件 ID
            console.log("上传视频成功",res)
            // this.setData({
            //   videoUrl:res.fileID
            // })
          },
          fail:console.error
        })
      }
    })
   }
})
