import { defineConfig } from 'vitepress'

export default defineConfig({
  // 网站标题
  title: "我的文档站",
  // 网站描述
  description: "基于 VitePress + Gitee 自动部署的静态网站",
  // 开启暗黑模式
  appearance: 'dark',
  // 最后更新时间
  lastUpdated: true,

  // 顶部导航栏
  nav: [
    { text: '首页', link: '/' },
    { text: '使用指南', link: '/guide/start' },
    { text: 'Gitee', link: 'https://gitee.com' }
  ],

  // 侧边栏
  sidebar: {
    '/guide/': [
      {
        text: '开始使用',
        items: [
          { text: '快速上手', link: '/guide/start' },
          { text: '编写文档', link: '/guide/write' },
          { text: '自动部署', link: '/guide/deploy' }
        ]
      }
    ]
  },

  // 搜索功能
  search: {
    provider: 'local'
  },

  // 页脚
  footer: {
    copyright: 'Copyright © 2026 我的文档站'
  },

  // 移动端适配
  themeConfig: {
    logo: '/logo.svg',
    socialLinks: [{ icon: 'github', link: 'https://gitee.com' }]
  }
})