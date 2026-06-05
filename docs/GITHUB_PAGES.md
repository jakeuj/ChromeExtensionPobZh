# GitHub Pages 說明

## 🌐 網站連結

部署完成後，網站將可透過以下連結存取：
```
https://poe.jakeuj.com/
```

## 🧩 安裝連結

- [Chrome Web Store](https://chromewebstore.google.com/detail/poe-ninja-to-chronicles-p/aidenhnleibhchnhilkpbpkgeanmeedh?hl=zh-TW)
- [Microsoft Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/ilpjikgeonkegldnjdgpmcdiibmlabng)

## 📁 檔案結構

```
docs/
├── index.html          # 主頁面
├── style.css           # 樣式表
├── script.js           # JavaScript 互動
├── sitemap.xml         # 搜尋引擎 sitemap
├── robots.txt          # 爬蟲規則
├── privacy.html        # 隱私權原則
└── icons/              # 圖示資源
```

## 🚀 自動部署

GitHub Pages 會在以下情況自動部署：
- Push 到 `main` 分支
- 修改 `index.html`, `style.css`, `script.js`
- 手動觸發 workflow

部署流程由 `.github/workflows/deploy-pages.yml` 控制。

## ⚙️ 設定步驟

### 1. 啟用 GitHub Pages

1. 前往 Repository Settings
2. 點擊左側選單的 **Pages**
3. 在 **Source** 區域：
   - Source: 選擇 **GitHub Actions**
4. 儲存設定

### 2. 推送程式碼

```bash
git add index.html style.css script.js .github/workflows/deploy-pages.yml
git commit -m "feat: add GitHub Pages"
git push origin main
```

### 3. 檢查部署狀態

前往 [GitHub Actions](https://github.com/jakeuj/ChromeExtensionPobZh/actions) 查看部署進度。

## 🎨 頁面特色

### 設計元素
- ✅ 暗色 PoE 風格主題
- ✅ 響應式設計（支援手機、平板、桌面）
- ✅ 流暢動畫效果
- ✅ 平滑滾動
- ✅ 進度指示器

### 區塊內容
- 🎯 Hero Section - 主要介紹
- ✨ Features - 功能特色
- 📦 Installation - Chrome / Edge 商店安裝入口
- 🏗️ Architecture - 技術架構
- 📚 Documentation - 文件連結
- 📞 Footer - 相關資源

## 🔧 本地測試

```bash
# 使用 Python 啟動本地伺服器
cd /Users/jakeuj/Documents/GitHub/ChromeExtensionPobZh
cd docs
python3 -m http.server 8000

# 或使用 Node.js
npx http-server -p 8000

# 開啟瀏覽器
open http://localhost:8000
```

## 📝 修改內容

### 更新文字內容
編輯 `index.html` 中的對應區塊。

### 修改樣式
編輯 `style.css`，主要變數定義在 `:root` 區塊：
```css
:root {
    --primary-color: #af6025;
    --secondary-color: #1a1a1a;
    --accent-color: #d4923f;
    /* ... */
}
```

### 加入互動功能
編輯 `script.js` 加入新的 JavaScript 功能。

## 🐛 常見問題

### Q: 頁面更新後沒有立即顯示？
**A**: GitHub Pages 可能需要幾分鐘快取更新，可以：
1. 清除瀏覽器快取
2. 使用無痕模式
3. 強制重新整理 (Ctrl+F5 / Cmd+Shift+R)

### Q: 部署失敗？
**A**: 檢查：
1. Repository Settings → Pages 是否設定為 GitHub Actions
2. Workflow 權限是否正確
3. Actions 頁面的錯誤訊息

### Q: 圖示沒有顯示？
**A**: 確認 `src/icons/` 目錄中有 `icon128.png` 檔案。

## 🎯 進階功能

### 自訂網域
1. 在 Repository 根目錄建立 `CNAME` 檔案
2. 內容填入您的網域名稱
3. 在網域商設定 DNS 指向 GitHub Pages

### Google Analytics
在 `index.html` 的 `</head>` 前加入追蹤碼。

### SEO 優化
- ✅ 已加入 meta description
- ✅ 使用語意化 HTML 標籤
- ✅ 已加入 canonical URL
- ✅ 已加入 Open Graph tags
- ✅ 已加入 Twitter Card tags
- ✅ 已加入 sitemap.xml 與 robots.txt

## 📚 參考資源

- [GitHub Pages 官方文件](https://docs.github.com/en/pages)
- [GitHub Actions 文件](https://docs.github.com/en/actions)
- [自訂網域設定](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

---

**建立日期**: 2025-12-30  
**維護者**: @jakeuj
