import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "SDK 文档中心",
  description: "SDK 开发操作指南",
  lastUpdated: true,

  // 顶部导航栏
  nav: [
    { text: '首页', link: '/' },
    { text: 'API 规范', link: '/api.md' },
    { text: '开发案例', link: '/case.md' }
  ],

  // 左侧侧边栏
  sidebar: [
    {
      text: '开发指南',
      items: [
        { text: '🏠 首页', link: '/' },
        { text: '⚙️ 环境配置', link: '/environment.md' },
        { text: '🧩 应用层二次开发', link: '/applicanLayer.md' },
        { text: '📘 API规范', link: '/api.md' },
        { text: '📌 二次开发综合案例', link: '/case.md' }
      ]
    }
  ],

  themeConfig: {
    // 右上角 GitHub 仓库链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/zll-flag/sdk_file_v0' }
    ],

    // 右上角深色/浅色模式切换
    appearance: true,

    // 页脚
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026 SDK 文档中心'
    },

    // 编辑链接
    editLink: {
      pattern: 'https://github.com/zll-flag/sdk_file_v0/edit/main/docs/:path',
      text: '编辑此页面'
    }
  }
})