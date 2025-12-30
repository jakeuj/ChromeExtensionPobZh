# PoE Ninja to Chronicles PoB Sharer

Chrome 擴充套件，在 poe.ninja 角色頁面加入「分享中文 PoB」按鈕，一鍵建立編年史（poe2db.tw）中文 PoB 連結。

## 功能特色

- ✨ 在 poe.ninja 角色頁面自動注入分享按鈕
- 🚀 一鍵上傳 PoB 代碼到編年史 API
- 📋 自動複製連結到剪貼簿
- 🎨 美觀的通知提示
- 🔄 支援重複上傳檢測
- 🌙 深色模式支援

## 安裝方式

### 開發者模式安裝

1. 開啟 Chrome 瀏覽器，前往 `chrome://extensions/`
2. 開啟右上角的「開發人員模式」
3. 點擊「載入未封裝項目」
4. 選擇 `src` 資料夾

### 使用方式

1. 前往任何 poe.ninja PoE2 角色頁面，例如：
   ```
   https://poe.ninja/poe2/profile/jakeuj-2332/character/泰坦燃燒大象
   ```

2. 在「Import build into Path of Building」按鈕旁，會出現「分享中文 PoB」按鈕

3. 點擊按鈕後：
   - 擴充套件會自動擷取 PoB 代碼
   - 上傳到編年史 API（poe2db.tw）
   - 自動複製連結到剪貼簿
   - 顯示成功通知

4. 貼上連結分享給朋友！

## 技術架構

本專案遵循 **Clean Architecture** 原則：

```
Presentation Layer (UI)
    ↓
Application Layer (Use Cases)
    ↓
Domain Layer (Business Logic)
    ↑
Infrastructure Layer (API, Extractors)
```

### 檔案結構

```
src/
├── manifest.json          # Chrome 擴充套件設定檔
├── content.js            # 內容腳本（主要邏輯）
├── styles.css            # 樣式表
├── icons/                # 圖示資源
│   ├── icon.svg
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
└── README.md
```

### 架構說明

#### Domain Layer（領域層）
- `PobShareResult`: 分享結果實體
- `ApiError`: 自訂錯誤類別

#### Application Layer（應用層）
- `SharePobUseCase`: 分享 PoB 用例

#### Infrastructure Layer（基礎設施層）
- `ChroniclesApiClient`: 編年史 API 客戶端
- `PoeNinjaPobExtractor`: PoB 代碼擷取器

#### Presentation Layer（展示層）
- `ShareButtonController`: 按鈕 UI 控制器

## API 規格

### 編年史 Paste API

```http
POST https://poe2db.tw/pob/api/paste
Content-Type: application/json

{
  "content": "<PoB_CODE>"
}
```

#### Response

```json
{
  "code": 200,
  "hash": "aqDuPGwaeq",
  "reused": 1  // 可選，1 表示使用現有連結
}
```

## 開發指南

### 程式碼規範

- ✅ 單一職責原則（SRP）
- ✅ 開放封閉原則（OCP）
- ✅ 依賴反轉原則（DIP）
- ✅ 不可變設計
- ✅ 錯誤處理
- ✅ 清晰命名

### 測試方式

1. 載入擴充套件
2. 前往測試頁面：
   ```
   https://poe.ninja/poe2/profile/jakeuj-2332/character/泰坦燃燒大象
   ```
3. 測試按鈕功能
4. 檢查 Console 輸出
5. 驗證通知顯示
6. 確認連結已複製

## 圖示生成

需要生成 PNG 圖示：

```bash
# 使用 ImageMagick 或線上工具將 icon.svg 轉換為不同尺寸的 PNG
convert icon.svg -resize 16x16 icon16.png
convert icon.svg -resize 48x48 icon48.png
convert icon.svg -resize 128x128 icon128.png
```

或使用線上工具：
- https://www.pngtosvg.com/
- https://cloudconvert.com/svg-to-png

## 許可證

MIT License

## 作者

jakeuj

## 相關連結

- [poe.ninja](https://poe.ninja/)
- [編年史 (poe2db.tw)](https://poe2db.tw/)
- [Path of Building](https://github.com/PathOfBuildingCommunity/PathOfBuilding)

