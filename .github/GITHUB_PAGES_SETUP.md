# 🌐 GitHub Pages 快速設定指南

## 📋 設定步驟（5 分鐘完成）

### 步驟 1: 推送網站檔案到 GitHub

```bash
# 確認在專案根目錄
cd /Users/jakeuj/Documents/Projects/PoE

# 加入所有檔案（網站檔案已在 docs/ 資料夾）
git add docs/
git add .github/workflows/deploy-pages.yml
git add .github/GITHUB_PAGES_SETUP.md
git add .github/PAGES_QUICK_REF.md
git add README.md

# 提交變更
git commit -m "feat: add GitHub Pages website in docs folder"

# 推送到 GitHub
git push origin main
```

### 步驟 2: 啟用 GitHub Pages

1. 前往 GitHub Repository: https://github.com/jakeuj/PoE
2. 點擊 **Settings** (設定) 頁籤
3. 在左側選單找到 **Pages**
4. 在 **Build and deployment** 區域：
   - **Source**: 選擇 `GitHub Actions` ✅
5. 完成！不需要點擊儲存

### 步驟 3: 等待自動部署

1. 前往 **Actions** 頁籤: https://github.com/jakeuj/PoE/actions
2. 查看 "Deploy GitHub Pages" workflow 執行狀態
3. 等待部署完成（約 1-2 分鐘）
4. 出現綠色勾勾 ✅ 表示部署成功！

### 步驟 4: 查看網站

網站連結：
```
https://jakeuj.github.io/PoE/
```

🎉 完成！您的專案網站已上線！

---

## 🎨 網站特色

### ✨ 已實現的功能

- ✅ **響應式設計** - 完美支援手機、平板、桌面
- ✅ **PoE 風格主題** - 暗色主題配色 (#af6025, #d4923f)
- ✅ **流暢動畫** - 滾動動畫、懸浮效果、淡入效果
- ✅ **自動部署** - Push 即部署，無需手動操作
- ✅ **進度指示器** - 頂部滾動進度條
- ✅ **平滑滾動** - 錨點平滑跳轉
- ✅ **互動功能** - 程式碼區塊點擊複製
- ✅ **視差效果** - Hero 區域視差滾動

### 📄 頁面區塊

1. **Header** - Logo、導航連結、下載按鈕
2. **Hero** - 主標題、徽章、CTA 按鈕、Demo 展示
3. **Features** - 6 大功能特色卡片
4. **Installation** - 5 步驟安裝指南 + 測試連結
5. **Architecture** - Clean Architecture 圖表 + SOLID 原則
6. **Documentation** - 4 個文件連結卡片
7. **Footer** - 專案資訊、相關連結、開發者資訊

---

## 🔧 本地測試

在推送到 GitHub 之前，可以先在本地測試：

```bash
# 方法 1: 直接開啟檔案
open index.html

# 方法 2: 使用 Python 啟動伺服器
python3 -m http.server 8000
# 然後開啟 http://localhost:8000

# 方法 3: 使用 Node.js
npx http-server -p 8000
# 然後開啟 http://localhost:8000
```

---

## 📝 自訂網站內容

### 修改顏色主題

編輯 `style.css` 的 CSS 變數：

```css
:root {
    --primary-color: #af6025;      /* 主要顏色 */
    --secondary-color: #1a1a1a;    /* 次要顏色 */
    --accent-color: #d4923f;       /* 強調顏色 */
    --text-color: #e0e0e0;         /* 文字顏色 */
    --bg-color: #0d0d0d;           /* 背景顏色 */
}
```

### 修改文字內容

編輯 `index.html` 中對應的 HTML 標籤。

### 加入新區塊

1. 在 `index.html` 加入新的 `<section>` 標籤
2. 在 `style.css` 加入對應的樣式
3. 必要時在 `script.js` 加入互動功能

---

## 🚀 自動部署流程

每次推送到 `main` 分支時，GitHub Actions 會自動：

1. ✅ Checkout 程式碼
2. ✅ 設定 GitHub Pages
3. ✅ 上傳網站檔案
4. ✅ 部署到 GitHub Pages
5. ✅ 產生部署報告

查看部署狀態：
- Actions 頁面: https://github.com/jakeuj/PoE/actions
- Workflow 檔案: `.github/workflows/deploy-pages.yml`

---

## 🎯 進階設定

### 1. 自訂網域

如果您有自己的網域：

```bash
# 建立 CNAME 檔案
echo "your-domain.com" > CNAME
git add CNAME
git commit -m "feat: add custom domain"
git push origin main
```

然後在網域商設定 DNS：
- Type: `CNAME`
- Name: `www`
- Value: `jakeuj.github.io`

### 2. Google Analytics

在 `index.html` 的 `</head>` 前加入：

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 3. SEO 優化

已包含基本 SEO 設定：
- ✅ Meta description
- ✅ 語意化 HTML
- ✅ Alt 標籤

可選加入：
```html
<!-- Open Graph -->
<meta property="og:title" content="PoE Ninja to Chronicles PoB Sharer">
<meta property="og:description" content="Chrome 擴充套件 - 一鍵分享中文 PoB 連結">
<meta property="og:image" content="https://jakeuj.github.io/PoE/src/icons/icon128.png">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary">
<meta name="twitter:title" content="PoE Ninja to Chronicles PoB Sharer">
```

---

## 🐛 常見問題

### Q: 網站沒有顯示？
**A**: 
1. 確認 GitHub Pages 已啟用（Settings → Pages → Source: GitHub Actions）
2. 檢查 Actions 頁面是否部署成功
3. 等待 1-2 分鐘讓快取更新

### Q: 圖示沒有顯示？
**A**: 確認 `src/icons/icon128.png` 檔案存在並已提交到 repository。

### Q: 樣式沒有套用？
**A**: 
1. 確認 `style.css` 和 `script.js` 都已提交
2. 清除瀏覽器快取
3. 使用無痕模式測試

### Q: 修改後沒有立即生效？
**A**: 
1. GitHub Pages 有快取機制，可能需要幾分鐘
2. 強制重新整理 (Ctrl+F5 / Cmd+Shift+R)
3. 清除瀏覽器快取

---

## 📊 網站分析

部署後可以查看：

- **訪客統計**: 加入 Google Analytics
- **部署歷史**: GitHub Actions → Deploy GitHub Pages
- **效能分析**: 使用 Lighthouse (Chrome DevTools)

---

## ✨ 完成清單

設定完成後，確認以下項目：

- [ ] 已推送 `index.html`, `style.css`, `script.js` 到 GitHub
- [ ] GitHub Pages 已啟用（Source: GitHub Actions）
- [ ] Deploy workflow 執行成功
- [ ] 網站可以正常存取 (https://jakeuj.github.io/PoE/)
- [ ] 所有連結都正常運作
- [ ] 圖示正確顯示
- [ ] 響應式設計在手機上正常顯示
- [ ] README.md 已更新（加入網站連結）

---

## 🎉 恭喜！

您的專案網站已成功上線！

### 分享您的網站：
```
https://jakeuj.github.io/PoE/
```

### 下一步：
1. ✅ 分享網站連結給使用者
2. ✅ 在 README 中加入網站連結（已完成）
3. ✅ 考慮加入 Google Analytics 追蹤訪客
4. ✅ 定期更新網站內容

---

**建立日期**: 2025-12-30  
**完整文件**: [GITHUB_PAGES.md](GITHUB_PAGES.md)

