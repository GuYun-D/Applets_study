```json
{
  "pages":[
    "pages/index/index",
    "pages/logs/logs",
    "pages/demo01/demo01"
  ],
  "window":{
    // 下拉 loading 的样式，仅支持 dark / light
    "backgroundTextStyle":"light",
    // 打开下拉
    "enablePullDownRefresh": true,
    // 导航栏背景色
    "navigationBarBackgroundColor": "#fff",
    // 导航栏的文字
    "navigationBarTitleText": "我的微信小程序",
    // 导航栏的文字颜色,只能是黑色和白色
    "navigationBarTextStyle":"black",
    // 加载区域的背景颜色
    "backgroundColor": "#ff4400"
  },
  "style": "v2",
  "sitemapLocation": "sitemap.json"
}

```

```json
"tabBar": {
    "list": [{
      // 页面地址
      "pagePath": "pages/index/index",
      // 页面名称
      "text": "首页",
      // 未点击时图标地址
      "iconPath": "./icon/_home.png",
      // 点击时图标地址
      "selectedIconPath": "./icon/home.png"
    },{
      ...
    }],

    // tabler字体颜色
    "color": "#0094ff",

    // 选中时字体颜色
    "selectedColor": "#ff9400",

    // 背景色
    "backgroundColor": "#ff5533",

    // 位置，top、bottom
    "position": "bottom",

    // 点击时该地区的背景颜色
    "borderStyle": "white"
  }
```