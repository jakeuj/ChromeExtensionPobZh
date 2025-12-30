# GitHub Pages 網站目錄

此目錄包含 GitHub Pages 網站的所有檔案。

## 📁 檔案結構

```
docs/
├── index.html          # 主頁面
├── style.css           # CSS 樣式表
├── script.js           # JavaScript 互動功能
└── GITHUB_PAGES.md     # 使用說明
```

## 🌐 網站連結

部署後可透過以下連結存取：
```
https://jakeuj.github.io/PoE/
```

## 🚀 部署方式

### 方法 1: GitHub Actions (自動部署，推薦)

推送變更到 `main` 分支後，GitHub Actions 會自動部署：

```bash
git add docs/
git commit -m "update: website content"
git push origin main
```

工作流程檔案：`.github/workflows/deploy-pages.yml`

### 方法 2: 從 docs 資料夾部署 (手動設定)

1. 前往 Repository Settings → Pages
2. Source 選擇: **Deploy from a branch**
3. Branch 選擇: **main** / **docs**
4. 儲存

## 🧪 本地測試

```bash
# 方法 1: 直接開啟
open docs/index.html

# 方法 2: 啟動伺服器
cd docs
python3 -m http.server 8000
# 然後開啟 http://localhost:8000
```

## 📝 修改內容

修改網站內容後：

```bash
# 編輯檔案
vim docs/index.html
vim docs/style.css
vim docs/script.js

# 提交變更
git add docs/
git commit -m "update: website content"
git push origin main

# GitHub Actions 會自動重新部署
```

## 🎨 檔案說明

### index.html
- 主頁面 HTML 結構
- 包含 7 個主要區塊
- 響應式設計

### style.css
- PoE 風格暗色主題
- CSS 變數定義在 `:root`
- 完全響應式設計

### script.js
- 平滑滾動導航
- 滾動動畫效果
- 互動功能（複製、視差等）

### GITHUB_PAGES.md
- 詳細使用說明
- 設定步驟
- 常見問題

## 🔗 相關文件

- [完整設定指南](../.github/GITHUB_PAGES_SETUP.md)
- [快速參考](../.github/PAGES_QUICK_REF.md)
- [專案 README](../README.md)

## 📊 目前設定

- **部署方式**: GitHub Actions
- **觸發條件**: Push 到 main 分支，修改 docs/ 內容
- **建置工具**: 無需建置，直接部署靜態檔案
- **自訂網域**: 未設定（可選）

---

**建立日期**: 2025-12-30  
**維護者**: @jakeuj  
**網站**: https://jakeuj.github.io/PoE/

