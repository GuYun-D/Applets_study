// app.js
App({
  // 应用第一次启动时就会触发的事件
  onLaunch() {
    // 在应用第一次启动时，获取用户的个人信息
    console.log("登陆了");
    // 测试onerror
    // aaa

    // js的方式来跳转 不能触发 onPageNotFound,在登陆时，页面是page16，该页面存在
    // wx.navigateTo({
    //   url: '/11/22/33'
    // });
  },

  // 应用被用户看到的时候触发的
  // 生命周期回调——监听小程序启动或切前台。
  onShow(){
    // 比如说从后台切换回来
    // 对页面的数据或者效果进行重置
    console.log("onshow");
  },

  // 应用被隐藏了
  onHide(){
    // 暂停或清楚定时器
    console.log("被隐藏了");
  },

  // 当应用发生了报错就会触发
  onError(err){
    // 在应用发生代码报错的时候，收集用户的错误信息，通过异步请求 将错误的信息发送后台去
    console.log("onerror");
    console.log(err);
  },

  // 页面找不到触发
  // 应用第一次启动的时候，如果找不到第一个入口页面 才会触发
  onPageNotFound(){
    console.log("onPageNotFound");
    // 如果页面不存在了 通过js的方式来重新跳转页面 重新跳到第二个首页
    // 不能跳到tabbar页面  导航组件类似  
    wx.navigateTo({
      url: '/pages/demo16/demo16' 
    });  
  }
})