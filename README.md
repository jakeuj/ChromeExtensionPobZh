# PoE Ninja to Chronicles PoB Sharer

![CI](https://github.com/jakeuj/PoE/workflows/CI/badge.svg)
![Release](https://github.com/jakeuj/PoE/workflows/Release%20Chrome%20Extension/badge.svg)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

Chrome 擴充套件專案 - 在 poe.ninja 加入中文 PoB 分享按鈕

🌐 **[查看專案網站](https://jakeuj.github.io/PoE/)** | 📦 **[下載最新版本](https://github.com/jakeuj/PoE/releases/latest)**

## 📦 專案結構

```
PoE/
├── docs/                      # GitHub Pages 網站
│   ├── index.html            # 網站主頁
│   ├── style.css             # 網站樣式
│   ├── script.js             # 網站互動
│   └── GITHUB_PAGES.md       # 網站說明
├── rest-api.http              # API 測試檔案（編年史 API 規格）
├── test-pob-code.txt          # 測試用 PoB 代碼
├── README.md                  # 本檔案
└── src/                       # ← Chrome 擴充套件主目錄
    ├── manifest.json          # 擴充套件設定檔
    ├── content.js             # 主要功能（Clean Architecture）
    ├── styles.css             # UI 樣式
    ├── generate-icons.sh      # 圖示生成腳本
    ├── icons/                 # 圖示資源
    │   ├── icon.svg
    │   ├── icon16.png
    │   ├── icon48.png
    │   └── icon128.png
    ├── QUICKSTART.md          # 🚀 30 秒快速開始
    ├── README.md              # 專案說明
    ├── INSTALL.md             # 安裝指南
    ├── SUMMARY.md             # 專案總覽
    └── ARCHITECTURE.md        # 架構設計
```

## 🚀 快速開始

### 1. 安裝擴充套件

```bash
# 1. 開啟 Chrome 瀏覽器
# 2. 在網址列輸入: chrome://extensions/
# 3. 啟用「開發人員模式」（右上角）
# 4. 點擊「載入未封裝項目」
# 5. 選擇 src 資料夾
```

### 2. 測試功能

前往任一角色頁面，支援 POE1 / POE2 共四種 URL 格式：

**POE2 - Profile 頁面:**
```
https://poe.ninja/poe2/profile/jakeuj-2332/character/泰坦燃燒大象
```

**POE2 - Builds 頁面:**
```
https://poe.ninja/poe2/builds/vaal/character/methanman-2640/drubringer
```

**POE1 - Profile 頁面:**
```
https://poe.ninja/poe1/profile/jakeuj-2332/character/從從容容游刀有餘
```

應該會看到「**分享中文 PoB**」按鈕！

## 📖 文件導覽

| 檔案 | 說明 |
|------|------|
| [src/QUICKSTART.md](src/QUICKSTART.md) | 🚀 30 秒快速開始指南 |
| [src/README.md](src/README.md) | 📖 完整專案說明 |
| [src/INSTALL.md](src/INSTALL.md) | 📋 安裝與測試指南 |
| [src/SUMMARY.md](src/SUMMARY.md) | 📊 專案總覽 |
| [src/ARCHITECTURE.md](src/ARCHITECTURE.md) | 🏗️ 架構設計圖 |
| [.github/CICD.md](.github/CICD.md) | 🔄 CI/CD 自動化流程說明 |

## ✨ 主要功能

- ✅ 同時支援 **Path of Exile 一代（POE1）** 與 **二代（POE2）**
- ✅ 支援四種 poe.ninja URL 格式：
  - `/poe2/profile/{username}/character/{charactername}` → poe2db.tw
  - `/poe2/builds/{class}/character/{username}/{charactername}` → poe2db.tw
  - `/poe1/profile/{username}/character/{charactername}` → poedb.tw
  - `/poe1/builds/{class}/character/{username}/{charactername}` → poedb.tw
- ✅ 在 poe.ninja 角色頁面自動注入分享按鈕
- ✅ 一鍵擷取並上傳 PoB 代碼到對應編年史 API
- ✅ 建立中文 PoB 連結（POE2 → poe2db.tw，POE1 → poedb.tw）
- ✅ 自動複製連結到剪貼簿
- ✅ 美觀的通知提示
- ✅ 載入動畫效果
- ✅ 深色模式支援

## 🏗️ 技術架構

### Clean Architecture

```
Presentation Layer (UI Controller)
         ↓
Application Layer (Use Cases)
         ↓
Domain Layer (Business Logic)
         ↑
Infrastructure Layer (API Client, Extractors)
```

### SOLID 原則

- ✅ Single Responsibility Principle
- ✅ Open/Closed Principle
- ✅ Dependency Inversion Principle

### 核心元件

- `ShareButtonController` - UI 控制器
- `SharePobUseCase` - 分享用例
- `ChroniclesApiClient` - API 客戶端
- `PoeNinjaPobExtractor` - PoB 擷取器

## 🔌 API 規格

### POE2 - 編年史 Paste API（poe2db.tw）

```http
POST https://poe2db.tw/pob/api/paste
Content-Type: application/json

{ "content": "<PoB_CODE>" }
```
結果連結：`https://poe2db.tw/tw/pob/{hash}`

### POE1 - 編年史 Paste API（poedb.tw）

```http
POST https://poedb.tw/pob/api/paste
Content-Type: application/json

{ "content": "<PoB_CODE>" }
```
結果連結：`https://poedb.tw/tw/pob/{hash}`

### 回應格式（兩者相同）

```json
{
  "code": 200,
  "hash": "aqDuPGwaeq",
  "reused": 1
}
```

完整 API 測試範例請參考 [rest-api.http](rest-api.http)

## 🎯 使用流程

```
1. 使用者前往 poe.ninja POE1 或 POE2 角色頁面
2. 點擊「分享中文 PoB」按鈕
3. 自動擷取 PoB 代碼
4. 依遊戲版本上傳到對應編年史 API
   - POE2 → https://poe2db.tw/pob/api/paste
   - POE1 → https://poedb.tw/pob/api/paste
5. 建立分享連結並在新分頁開啟
6. 自動複製到剪貼簿
7. 顯示成功通知
8. 使用者貼上分享！
```

## 🛠️ 開發

### 修改程式碼

```bash
# 1. 編輯檔案
vim src/content.js

# 2. 重新整理擴充套件
# 到 chrome://extensions/ 點擊重新整理按鈕

# 3. 重新載入測試頁面
```

### 重新產生圖示

```bash
cd src
./generate-icons.sh
```

需要 ImageMagick：
```bash
brew install imagemagick
```

## 🐛 除錯

開啟 Console (F12) 查看：
```javascript
[PoB Sharer] Extension initialized (poe1) on: /poe1/profile/...
[PoB Sharer] Extension initialized (poe2) on: /poe2/profile/...
```

詳細除錯方法請參考 [src/INSTALL.md](src/INSTALL.md)

## 📦 發布

### 自動化發布 (推薦)

本專案使用 GitHub Actions 自動化 CI/CD 流程：

```bash
# 建立並推送 tag 即可自動發布
git tag v1.0.1
git push origin v1.0.1
```

GitHub Actions 會自動：
- ✅ 更新 manifest.json 版本號
- ✅ 建立擴充套件 ZIP 檔案
- ✅ 生成 Changelog
- ✅ 建立 GitHub Release

詳細說明請參考 [.github/CICD.md](.github/CICD.md)

### 手動打包

1. 到 `chrome://extensions/`
2. 點擊「封裝擴充功能」
3. 選擇 `src` 資料夾
4. 產生 .crx 檔案供分發

### Chrome Web Store

1. 註冊開發者帳號
2. 準備宣傳素材
3. 上傳 src 資料夾內容
4. 等待審核

## 📝 授權

MIT License

## 👤 作者

jakeuj

## 🔗 相關連結

- [poe.ninja](https://poe.ninja/) - 角色資料網站
- [編年史 POE2 (poe2db.tw)](https://poe2db.tw/) - 二代中文資料庫
- [編年史 POE1 (poedb.tw)](https://poedb.tw/) - 一代中文資料庫
- [Path of Building](https://github.com/PathOfBuildingCommunity/PathOfBuilding) - Build 規劃工具

---

## 🎉 立即開始

```bash
# 1. 載入擴充套件到 Chrome
chrome://extensions/ → 載入未封裝項目 → 選擇 src/

# 2. 測試功能（POE2）
https://poe.ninja/poe2/profile/jakeuj-2332/character/泰坦燃燒大象

# 或測試 POE1
https://poe.ninja/poe1/profile/jakeuj-2332/character/從從容容游刀有餘
```

**祝你在流亡黯道中玩得開心！** 🎮

---

Made with ❤️ for Path of Exile Community

