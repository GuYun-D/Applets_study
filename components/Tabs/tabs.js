// components/Tabs/tabs.js
Component({
  /**
   * 组件的属性列表
   * 存放的是要从子组件接收的数据
   */
  properties: {
    // 要接收的数据名称
    // aaa: {
    //   // type: 要接受的数据类型
    //   type: String,
    //   // value: 默认值
    //   value: ''
    // }
    tabs: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // tabs: [{
    //   id: 0,
    //   name: "首页",
    //   isActive: true
    // }, {
    //   id: 1,
    //   name: "原创",
    //   isActive: false
    // }, {
    //   id: 2,
    //   name: "分类",
    //   isActive: false
    // }, {
    //   id: 3,
    //   name: "关于",
    //   isActive: false
    // }, ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleItemTap(e) {
      // console.log("我触发了");
      /* 
      1 绑定点击事件  需要在methods中绑定
      2 获取被点击的索引 
      3 获取原数组 
      4 对数组循环
        1 给每一个循环性 选中属性 改为 false
        2 给 当前的索引的 项 添加激活选中效果就可以了！！！
      5 点击事件触发的时候 
         触发父组件中的自定义事件 同时传递数据给  父组件  
         this.triggerEvent("父组件自定义事件的名称",要传递的参数)
         不能在下面对tabs就行处理，虽然效果一样，但是真正的数据并未修改
         let {tabs} = this.data， 这段代码同样可以拿到数据，但是拿到的是propertie中的tabs
         this.setData({tabs}), 这就相当于在本文件的data加了一个数据，相当于页面就存在了两个tabs，所以这是有问题的
       */

      // 获取索引
      // console.log(e);
      const {
        index
      } = e.currentTarget.dataset;
      console.log(index);

      // 触发父组件中的自定义事件，同时传递数据给
      this.triggerEvent("itemChange", {index})

      // 获取原数组
      // let {
      //   tabs
      // } = this.data
      // // 循环数组
      // tabs.forEach((v, i) => {
      //   i === index ? v.isActive = true : v.isActive = false
      // });
      // // 重新赋值
      // this.setData({
      //   tabs
      // })
    }
  }
})