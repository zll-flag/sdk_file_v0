import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "SDK 文档中心",
  description: "SDK 开发操作指南",
  lastUpdated: true,

  // 顶部导航栏（正常显示）
  nav: [
    { text: '首页', link: '/' },
    { text: 'API 规范', link: '/api.md' },
    { text: '开发案例', link: '/case.md' }
  ],

  // 左侧侧边栏（正常显示，无乱码）
  sidebar: [
    {
      text: '开发指南',
      items: [
        { text: '环境配置', link: '/environment.md' },
        { text: '应用层功能二次开发', link: '/applicanLayer.md' },
        { text: 'API规范', link: '/api.md' },
        { text: '二次开发综合案例', link: '/case.md' }
      ]
    }
  ],

  themeConfig: {
    // 关闭你不想要的所有多余元素
    appearance: false, // 关闭深色模式切换
    returnToTop: false, // 关闭返回顶部按钮
    outline: false, // 关闭右侧「On this page」目录
    editLink: false, // 关闭「编辑此页面」
    lastUpdated: false, // 关闭最后更新时间
    footer: false, // 关闭页脚版权
    socialLinks: [] // 关闭GitHub图标
  }
})