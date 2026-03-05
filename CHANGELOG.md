# 更新日誌 (Changelog)

所有重要的專案變更都會記錄在此檔案中。

格式基於 [Keep a Changelog](https://keepachangelog.com/zh-TW/1.0.0/)，
版本號遵循 [語意化版本 2.0.0](https://semver.org/lang/zh-TW/)。

## [1.2.0] - 2026-03-05

### 新增 (Added)
- ✨ 支援 **Path of Exile 一代**（poe1）頁面：
  - `https://poe.ninja/poe1/profile/{username}/character/{charactername}`
  - `https://poe.ninja/poe1/builds/{class}/character/{username}/{charactername}`
- 🔗 POE1 連結轉換至 **poedb.tw**（`https://poedb.tw/tw/pob/{hash}`）
- 🔌 新增 `pob://` 協議支援（POE1 Path of Building 使用）

### 修改 (Changed)
- 🔧 `manifest.json` 新增 `/poe1/` URL 匹配模式與 `poedb.tw` host 權限
- 🔧 `background.js` 依 `gameVersion` 動態切換 API 端點與結果連結
- 🔧 `content.js` 自動偵測 URL 中的 `/poe1/` 或 `/poe2/`，組裝對應元件
- 🔧 按鈕 tooltip 依版本顯示「一代」或「二代」及對應網站

## [1.1.0] - 2024-12-30

### 新增 (Added)
- ✨ 支援 poe.ninja Builds 頁面 URL 格式：`/poe2/builds/{class}/character/{username}/{charactername}`
- 📝 更新文檔，說明支援的兩種 URL 格式

### 修改 (Changed)
- 🔧 manifest.json 新增 `/poe2/builds/*/character/*` URL 匹配模式
- 🔧 content.js bootstrap 函數改進，精確識別兩種 URL 格式
- 📝 更新 README.md 和 src/README.md，加入使用範例

### 修復 (Fixed)
- 🐛 修復 Builds 頁面無法注入分享按鈕的問題

## [1.0.0] - 2024-12-29

### 新增 (Added)
- 🎉 首次發布
- ✨ 支援 poe.ninja Profile 頁面一鍵分享中文 PoB
- 🚀 自動擷取 PoB 代碼並上傳至編年史 API (poe2db.tw)
- 📋 自動複製連結到剪貼簿
- 🎨 美觀的通知提示系統
- 🌙 深色模式支援
- 🏗️ Clean Architecture 架構設計
- 📚 完整的文檔和安裝指南
- 🌐 GitHub Pages 專案網站
- 🔄 CI/CD 自動化流程

### 技術特色
- ✅ SOLID 原則
- ✅ 依賴注入 (DI)
- ✅ 分層架構設計
- ✅ 錯誤處理機制
- ✅ TypeScript 風格的類別設計

---

## URL 格式說明

### v1.2.0+ 支援的 URL 格式

#### POE2 - Profile 頁面
```
https://poe.ninja/poe2/profile/{username}/character/{charactername}
```
範例：`https://poe.ninja/poe2/profile/jakeuj-2332/character/泰坦燃燒大象`
→ 分享至：`https://poe2db.tw/tw/pob/{hash}`

#### POE2 - Builds 頁面
```
https://poe.ninja/poe2/builds/{class}/character/{username}/{charactername}
```
範例：`https://poe.ninja/poe2/builds/vaal/character/methanman-2640/drubringer`
→ 分享至：`https://poe2db.tw/tw/pob/{hash}`

#### POE1 - Profile 頁面
```
https://poe.ninja/poe1/profile/{username}/character/{charactername}
```
範例：`https://poe.ninja/poe1/profile/jakeuj-2332/character/從從容容游刀有餘`
→ 分享至：`https://poedb.tw/tw/pob/{hash}`

#### POE1 - Builds 頁面
```
https://poe.ninja/poe1/builds/{class}/character/{username}/{charactername}
```
→ 分享至：`https://poedb.tw/tw/pob/{hash}`

---

[1.2.0]: https://github.com/jakeuj/ChromeExtensionPobZh/releases/tag/v1.2.0
[1.1.0]: https://github.com/jakeuj/ChromeExtensionPobZh/releases/tag/v1.1.0
[1.0.0]: https://github.com/jakeuj/ChromeExtensionPobZh/releases/tag/v1.0.0

