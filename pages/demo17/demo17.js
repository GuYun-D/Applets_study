// pages/demo17/demo17.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("onload");
    // onLoad发送异步请求来初始化页面数据 
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("onready");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("页面onshow");
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("页面隐藏");
  },

  /**
   * 生命周期函数--监听页面卸载 也是可以通过点击超链接来演示 关闭都会卸载页面
   */
  onUnload: function () {
    console.log("页面卸载");
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log("用户下拉");
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("没有数据啦");
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log("用户分享了");
  },

  /**
   * 页面滚动时触发
   */
  onPageScroll() {
    console.log("页面滚动啦");
  },

  /**
   * 页面尺寸发生改变时
   * 如：横屏竖屏时
   * "pageOrientation": "auto", json文件配置，若在全局配置时，所有页面都可以横屏，加载该文件下的json文件下，只有该页面可以横屏
   */
  onResize() {
    console.log("屏幕发生变化啦");
  },

  /**
   * 1 必须要求当前页面 也是tabbar页面
   * 2 点击的自己的tab item的时候才触发
   */
  onTabItemTap() {
    console.log("点击了tabbar+onTabItemTap");
  }
})