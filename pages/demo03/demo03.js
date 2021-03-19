// pages/demo03/demo03.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num: 0
  },

  handleInput(e){
    // console.log(e);
    this.setData({
      num: e.detail.value
    })
  }
})