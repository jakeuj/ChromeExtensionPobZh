# 🌐 GitHub Pages 快速參考

## 🚀 三步驟啟用

```bash
# 1️⃣ 推送檔案
git add docs/ .github/workflows/deploy-pages.yml
git commit -m "feat: add GitHub Pages website"
git push origin main

# 2️⃣ 啟用 GitHub Pages
# 前往 https://github.com/jakeuj/PoE/settings/pages
# Source 選擇: GitHub Actions

# 3️⃣ 查看部署狀態
# https://github.com/jakeuj/PoE/actions
```

## 🌐 網站連結

```
https://jakeuj.github.io/PoE/
```

## 📁 檔案清單

| 檔案 | 大小 | 說明 |
|------|------|------|
| `docs/index.html` | 13 KB | 主頁面 HTML |
| `docs/style.css` | 10 KB | CSS 樣式表 |
| `docs/script.js` | 4 KB | JavaScript 互動 |
| `.github/workflows/deploy-pages.yml` | - | 自動部署 |
| `docs/GITHUB_PAGES.md` | 3 KB | 詳細文件 |
| `docs/README.md` | - | docs 資料夾說明 |

## ✨ 網站特色

### 設計
- 🎨 PoE 暗色主題 (#af6025, #d4923f)
- 📱 響應式設計（手機、平板、桌面）
- ✨ 流暢動畫效果
- 🌊 平滑滾動導航

### 區塊
- 🎯 **Hero** - 主介紹 + Demo 展示
- ✨ **Features** - 6 大功能特色
- 📦 **Installation** - 5 步驟安裝指南
- 🏗️ **Architecture** - Clean Architecture 圖表
- 📚 **Documentation** - 文件連結
- 📞 **Footer** - 相關資源

### 互動
- 📊 頂部進度指示器
- 🖱️ 平滑錨點跳轉
- 📋 程式碼點擊複製
- 🎭 視差滾動效果
- 💫 滾動動畫

## 🧪 本地測試

```bash
# 直接開啟
open docs/index.html

# 或使用伺服器
cd docs
python3 -m http.server 8000
# 然後開啟 http://localhost:8000
```

## 🔧 修改內容

```bash
# 修改文字
vim docs/index.html

# 修改樣式
vim docs/style.css

# 修改互動
vim docs/script.js

# 推送更新
git add docs/
git commit -m "update: website content"
git push origin main
# GitHub Actions 會自動重新部署
```

## 🎨 自訂主題

編輯 `docs/style.css` 的 CSS 變數：

```css
:root {
    --primary-color: #af6025;    /* 主色 */
    --accent-color: #d4923f;     /* 強調色 */
    --bg-color: #0d0d0d;         /* 背景色 */
}
```

## 📊 部署流程

```
Push to main
    ↓
GitHub Actions 觸發
    ↓
Build & Upload
    ↓
Deploy to Pages
    ↓
✅ 網站更新完成
```

## 🐛 問題排除

### 網站無法存取
1. 確認 Settings → Pages → Source: GitHub Actions
2. 檢查 Actions 頁面部署狀態
3. 等待 1-2 分鐘快取更新

### 樣式沒有套用
1. 清除瀏覽器快取
2. 使用無痕模式測試
3. 強制重新整理 (Cmd+Shift+R)

### 圖示沒有顯示
確認 `src/icons/icon128.png` 存在並已提交

## 📚 完整文件

- **快速設定**: `.github/GITHUB_PAGES_SETUP.md`
- **詳細說明**: `GITHUB_PAGES.md`
- **Workflow**: `.github/workflows/deploy-pages.yml`

## 🎯 進階功能

### 自訂網域
```bash
echo "your-domain.com" > CNAME
git add CNAME
git commit -m "feat: add custom domain"
git push
```

### Google Analytics
在 `index.html` 的 `</head>` 前加入 GA 程式碼

### SEO 優化
已包含基本 meta tags，可選加入 Open Graph / Twitter Card

---

**建立日期**: 2025-12-30  
**網站**: https://jakeuj.github.io/PoE/  
**Repository**: https://github.com/jakeuj/PoE

