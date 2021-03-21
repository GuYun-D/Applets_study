// pages/demo11/demo11.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 标签字符串
    // html: '<div style="background-color: aquamarine; height: 30px; line-height: 30px; text-align: center;">我靠</div>'

    // 对象数组
    html: [{
      // div标签， name属性指定
      name: "div",
      // 标签上有哪些属性
      attrs: {
        class: "my_div",
        style: "color: red",
      },
      // 子节点 children 要接受的数据类型和nodes第二种渲染方式的数据类型一致
      children: [{
        name: "p",
        // 标签上有哪些属性
        attrs: {
          class: "page",
          style: "color: blue",
        },
        // 子节点 children 要接受的数据类型和nodes第二种渲染方式的数据类型一致
        children: [{
          // 文本
          type: "text",
          text: "hello"
        }]
      }]

    }]
  }
})