# 🚀 快速開始指南

## 30 秒快速安裝

### 1️⃣ 載入擴充套件
```
1. 開啟 Chrome
2. 輸入: chrome://extensions/
3. 啟用「開發人員模式」（右上角開關）
4. 點擊「載入未封裝項目」
5. 選擇 src 資料夾
6. 完成！✅
```

### 2️⃣ 立即測試
前往測試頁面：
```
https://poe.ninja/poe2/profile/jakeuj-2332/character/泰坦燃燒大象
```

### 3️⃣ 使用功能
1. 找到紫色的「分享中文 PoB」按鈕
2. 點擊按鈕
3. 等待通知顯示
4. 連結已自動複製！
5. 貼上分享給朋友 🎉

---

## 📁 專案結構

```
src/
├── 📄 manifest.json          # 擴充套件設定
├── 🎨 content.js             # 主要功能（7.9 KB）
├── 💅 styles.css             # UI 樣式（2.9 KB）
├── 🖼️  icons/                 # 圖示檔案
│   ├── icon.svg
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
├── 📚 README.md              # 專案說明
├── 📋 INSTALL.md             # 安裝指南
├── 📊 SUMMARY.md             # 專案總覽
├── 🏗️  ARCHITECTURE.md       # 架構圖
└── 🔧 generate-icons.sh      # 圖示生成腳本
```

---

## ✨ 功能展示

### 按鈕外觀
```
┌─────────────────────────────────┐
│  🔗 分享中文 PoB                │  ← 紫色漸層按鈕
└─────────────────────────────────┘
```

### 載入狀態
```
┌─────────────────────────────────┐
│  ⏳ 載入中...                   │  ← 旋轉動畫
└─────────────────────────────────┘
```

### 成功通知
```
┌─────────────────────────────────────────────┐
│ ✓  中文 PoB 連結已建立並複製               │
│    開啟連結 →                               │
└─────────────────────────────────────────────┘
```

---

## 🔧 技術棧

- **架構**: Clean Architecture
- **原則**: SOLID
- **語言**: Vanilla JavaScript (ES6+)
- **平台**: Chrome Extension Manifest V3
- **API**: poe2db.tw Chronicles API

---

## 📖 文件導覽

| 檔案 | 用途 |
|------|------|
| **README.md** | 專案介紹、功能特色、技術說明 |
| **INSTALL.md** | 詳細安裝步驟、測試方法、除錯 |
| **SUMMARY.md** | 專案總覽、完整功能清單 |
| **ARCHITECTURE.md** | 架構圖、資料流程、狀態機 |
| **QUICKSTART.md** | 本檔案 - 快速開始 |

---

## 🐛 遇到問題？

### 按鈕沒出現
- ✅ 確認在角色頁面（包含 `/character/`）
- ✅ 重新整理頁面
- ✅ 檢查 Console (F12)

### 點擊無反應
- ✅ 開啟 Console 查看錯誤
- ✅ 確認網路連線
- ✅ 嘗試其他角色頁面

### 顯示錯誤訊息
- ✅ 查看錯誤通知內容
- ✅ 檢查 Console 詳細錯誤
- ✅ 確認該角色有公開 Build

---

## 💡 使用範例

### 情境：分享你的 Build 給朋友

1. **在 poe.ninja 查看自己的角色**
   ```
   https://poe.ninja/poe2/profile/你的帳號/character/角色名稱
   ```

2. **點擊「分享中文 PoB」按鈕**
   - 自動上傳到編年史
   - 自動複製中文連結

3. **分享連結**
   ```
   貼上給朋友: https://poe2db.tw/pob/xxxxxxxx
   ```

4. **朋友開啟連結**
   - 看到中文化的 Build 資訊
   - 可以匯入 Path of Building

---

## 🎯 下一步

### 想了解更多？
- 📖 閱讀 [README.md](README.md) - 完整專案說明
- 🏗️  閱讀 [ARCHITECTURE.md](ARCHITECTURE.md) - 架構設計

### 想修改程式碼？
- 📝 編輯 `content.js` - 修改功能邏輯
- 🎨 編輯 `styles.css` - 修改按鈕樣式
- 🔄 重新整理擴充套件即可測試

### 想發布？
- 📦 打包成 .crx 檔案
- 🌐 上傳到 Chrome Web Store

---

## 🎉 開始使用吧！

**現在就去測試你的第一個 PoB 分享！**

[前往測試頁面 →](https://poe.ninja/poe2/profile/jakeuj-2332/character/泰坦燃燒大象)

---

Made with ❤️ for Path of Exile 2 Community

