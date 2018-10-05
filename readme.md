# 项目结构

│  app.js            全局脚本逻辑文件
│  app.json        全局配置文件，包括子页面的路径，窗口信息，导航栏配置等
│  app.wxss      全局样式（相当于css文件）
│  project.config.json   工具配置
│
├─assets              静态资源
│  │  avatar.png
│  │  contact-active.png
│  │  contact.png
│  │  home-active.png
│  │  home.png
│  │  link-01.png
│  │  link-02.png
│  │  message-active.png
│  │  message.png
│  │  profile-active.png
│  │  profile.png
│  │
│  └─img
│          1.png
│          slide1.jpg
│          slide2.jpg
│
├─includes              引入内容
│      search-bar.wxml    引入的搜索框
│
├─pages                  子页面
│  ├─contact            联系我们页面
│  │      contact.js
│  │      contact.json
│  │      contact.wxml
│  │      contact.wxss
│  │
│  ├─detail              详情页
│  │      detail.js
│  │      detail.json
│  │      detail.wxml
│  │      detail.wxss
│  │
│  ├─index             主页面
│  │      index.js
│  │      index.json
│  │      index.wxml
│  │      index.wxss
│  │
│  ├─list                 列表页
│  │      list.js
│  │      list.json
│  │      list.wxml
│  │      list.wxss
│  │
│  ├─message       消息页
│  │      message.js
│  │      message.json
│  │      message.wxml
│  │      message.wxss
│  │
│  └─profile           个人资料页
│          profile.js
│          profile.json
│          profile.wxml
│          profile.wxss
│
├─utils             
│      fetch.js      包装发送请求函数以供引用
│
└─venders        外部文件
        weui.wxss   引用了weui样式文件



注意：本demo的后台数据接口由https://github.com/zce提供（https://locally.uieee.com ）安全证书已经无效了，调试时打开：不校验合法域名、web-view（业务域名）、TLS 版本以及 HTTPS 证书 

微信小程序对后台接口有安全管理；