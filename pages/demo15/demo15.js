// pages/demo15/demo15.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
        id: 0,
        value: 'USA',
        name: '美国'
      },
      {
        id: 1,
        value: 'CHN',
        name: '中国',
        checked: 'true'
      },
      {
        id: 2,
        value: 'BRA',
        name: '巴西'
      },
      {
        id: 3,
        value: 'JPN',
        name: '日本'
      },
      {
        id: 4,
        value: 'ENG',
        name: '英国'
      },
      {
        id: 5,
        value: 'FRA',
        name: '法国'
      }
    ],

    // 已选中的
    checkedList:[]
  },

  cChange(e){
    console.log(e);
    // 获取已选中的复选框的值
    const checkedList = e.detail.value
    console.log(checkedList);
    // 赋值
    this.setData({
      checkedList
    })
  }
})