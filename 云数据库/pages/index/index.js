const DB = wx.cloud.database().collection("list")
let name=""
let age=""
let id=""
Page({
  // 获取用户输入的name
addName(event){
  name = event.detail.value
},
 // 获取用户输入的age
addAge(event){
  age = event.detail.value
},
 // 要删除的id
 delDataInput(event){
   console.log("要删除的id",event.detail.value)
   id = event.detail.value
 },
 // 要更新的id
 updDataInput(event){
  id = event.detail.value
},
 // 要更新的年龄
 updAge(event){
  age = event.detail.value
},
 //添加数据
addData(){
  DB.add({
    data:{
      name:name,
      age:age
    },
    success(res){
      console.log("添加成功",res)
    },
    fail(res){
      console.log("添加失败",res)
    }
  })
},
//删除数据
delData(){
  DB.doc(id).remove({
    success(res){
      console.log("删除成功",res)
    },
    fail(res){
      console.log("删除失败",res)
    }
  })
},
// 修改数据
updData(){
  DB.doc(id).update({
    data:{
      age: age
    },
    success(res){
      console.log("更新成功",res)
    },
    fail(res){
      console.log("更新失败",res)
    }
  })
},
  //查询数据
  getData(){
    DB.get({
      success(res){
        console.log("查询数据成功",res)
      }
    })
  }
})
