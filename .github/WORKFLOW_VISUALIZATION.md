# GitHub Actions 工作流程視覺化

## 📊 CI/CD 架構圖

```
┌─────────────────────────────────────────────────────────────┐
│                     GitHub Repository                        │
│                      (PoE Extension)                         │
└────────────┬────────────────────────────────┬───────────────┘
             │                                │
             ├─ Push to main/develop         ├─ Push tag (v*)
             │  or Pull Request              │  or Manual trigger
             │                                │
┌────────────▼────────────┐      ┌───────────▼──────────────┐
│   CI Workflow           │      │   Release Workflow        │
│   (.github/workflows/   │      │   (.github/workflows/     │
│    ci.yml)              │      │    release.yml)           │
├─────────────────────────┤      ├───────────────────────────┤
│                         │      │                           │
│ 1. Validate manifest    │      │ 1. Get version           │
│ 2. Check files          │      │ 2. Update manifest       │
│ 3. Syntax validation    │      │ 3. Create ZIP package    │
│ 4. File size check      │      │ 4. Generate changelog    │
│ 5. Test packaging       │      │ 5. Create GitHub Release │
│ 6. Architecture check   │      │ 6. Upload assets         │
│                         │      │                           │
└────────────┬────────────┘      └───────────┬──────────────┘
             │                                │
             ▼                                ▼
     ✅ Status Check              📦 GitHub Release Created
     (PR can merge)               (ZIP file available)
```

## 🔄 工作流程觸發條件

### CI Workflow (自動品質檢查)

```
觸發條件：
├─ git push origin main
├─ git push origin develop
├─ Create Pull Request → main
├─ Create Pull Request → develop
└─ Manual trigger (workflow_dispatch)

執行時間：~2-3 分鐘
結果：✅ Pass / ❌ Fail
```

### Release Workflow (發布新版本)

```
觸發條件：
├─ git tag v1.0.1 && git push origin v1.0.1
└─ Manual trigger with version input

執行時間：~3-5 分鐘
結果：📦 New Release + ZIP file
```

## 📋 發布流程圖

```
開發者行動                GitHub Actions               輸出結果
────────────              ───────────────              ────────

1. 完成開發
   git commit -am "feat: new feature"
   git push origin main
                          ┌──────────────┐
                    ───→  │  CI 檢查     │
                          │  ✓ Validate  │
                          │  ✓ Test      │
                          └──────┬───────┘
                                 │
                                 ▼
                          ✅ 通過檢查

2. 準備發布
   git tag v1.0.1
   git push origin v1.0.1
                          ┌──────────────┐
                    ───→  │ Release 流程 │
                          │ 1. 更新版本  │
                          │ 2. 打包 ZIP  │
                          │ 3. 建立發布  │
                          └──────┬───────┘
                                 │
                                 ▼
                          📦 Release 完成
                          ├─ poe-ninja-pob-sharer-1.0.1.zip
                          ├─ Changelog
                          └─ Release Notes

3. 開發者下載                            🛠️ 開發者備用
   從 GitHub Releases    ─────→          離線測試 ZIP
```

## 🎯 版本號策略

```
語意化版本 (Semantic Versioning)

v{MAJOR}.{MINOR}.{PATCH}
  │       │       │
  │       │       └─ Bug 修復：v1.0.0 → v1.0.1
  │       └───────── 新功能：  v1.0.1 → v1.1.0
  └───────────────── 重大更新：v1.1.0 → v2.0.0

範例：
├─ v1.0.0  首次發布
├─ v1.0.1  修復分享按鈕顯示問題
├─ v1.1.0  新增深色模式支援
├─ v1.2.0  新增快捷鍵功能
└─ v2.0.0  重構為 Manifest V3
```

## 📊 CI 檢查項目詳細

```
┌─────────────────────────────────────────┐
│ 1. Validate manifest.json               │
├─────────────────────────────────────────┤
│ • JSON 格式正確性                        │
│ • 必要欄位存在                           │
│ • 版本號格式                             │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ 2. Check Required Files                 │
├─────────────────────────────────────────┤
│ • manifest.json                         │
│ • content.js                            │
│ • background.js                         │
│ • styles.css                            │
│ • icons/ (16, 48, 128.png)              │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ 3. JavaScript Syntax Validation         │
├─────────────────────────────────────────┤
│ • Node.js -c content.js                 │
│ • Node.js -c background.js              │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ 4. File Size Check                      │
├─────────────────────────────────────────┤
│ • 顯示各檔案大小                         │
│ • 計算總擴充套件大小                     │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ 5. Test Packaging                       │
├─────────────────────────────────────────┤
│ • 建立 ZIP 封裝                          │
│ • 驗證 ZIP 內容                          │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ 6. Architecture Validation              │
├─────────────────────────────────────────┤
│ • 檢查檔案行數（避免 God Class）         │
│ • Clean Architecture 合規性              │
└─────────────────────────────────────────┘
```

## 🔐 權限設定

```
Repository Settings 必要設定：

1. Actions → General
   └─ Workflow permissions
      └─ ✓ Read and write permissions

2. 自動獲得權限（已在 workflow 設定）：
   └─ contents: write  (建立 Release)
```

## 📈 監控與通知

```
查看執行狀態：
├─ GitHub Actions 頁面
│  https://github.com/jakeuj/ChromeExtensionPobZh/actions
│
├─ 徽章狀態（README.md）
│  ![CI](https://github.com/.../workflows/CI/badge.svg)
│  ![Release](https://github.com/.../workflows/Release.../badge.svg)
│
└─ Email 通知
   當 workflow 失敗時自動發送
```

## 🎓 最佳實踐

```
✅ DO：
├─ 每個 feature 都經過 CI 檢查後才合併
├─ 使用語意化版本號
├─ 在 main 分支建立 tag 進行發布
├─ Release 前先在 develop 分支測試
└─ 撰寫清楚的 commit message

❌ DON'T：
├─ 跳過 CI 檢查直接合併
├─ 使用隨意的版本號
├─ 在 feature 分支建立 release tag
├─ 未測試就直接發布
└─ 使用模糊的 commit message
```

## 🚀 進階應用

```
未來可擴展功能：

1. 自動發布到 Chrome Web Store
   ├─ 使用 Chrome Web Store API
   └─ 自動提交審核

2. 自動發布到 Microsoft Edge Add-ons
   ├─ 使用 Edge Add-ons 發布流程
   └─ 同步維護商店版本

3. 多瀏覽器支援
   ├─ Firefox Add-on
   ├─ Edge Add-ons
   └─ 同步發布到多個商店

4. 自動化測試
   ├─ 單元測試（Jest）
   ├─ E2E 測試（Puppeteer）
   └─ 視覺回歸測試

5. 程式碼品質檢查
   ├─ ESLint
   ├─ Prettier
   └─ SonarQube
```
