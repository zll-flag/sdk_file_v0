#!/usr/bin/env sh

# 1. 打包构建
npm run build

# 2. 提交代码
git add .
git commit -m "deploy: 更新文档"

# 3. 推送到 Gitee（自动触发部署）
git push origin main

echo "✅ 部署完成！Gitee 正在自动构建，1 分钟后公网生效"