# 🎉 GitHub Actions CI/CD 設定完成！

> **建立日期**: 2025-12-30  
> **專案**: PoE Ninja to Chronicles PoB Sharer  
> **CI/CD 工具**: GitHub Actions

---

## ✅ 已建立的檔案

### 1. Workflow 檔案
- `.github/workflows/ci.yml` - 持續整合工作流程
- `.github/workflows/release.yml` - 發布工作流程

### 2. 文件檔案
- `.github/CICD.md` - 完整 CI/CD 使用說明
- `.github/QUICK_REFERENCE.md` - 快速參考指南
- `.github/WORKFLOW_VISUALIZATION.md` - 工作流程視覺化圖表

### 3. 更新的檔案
- `README.md` - 加入 CI/CD 徽章和發布說明

---

## 🚀 立即開始使用

### 第一次發布（3 步驟）

```bash
# 1. 確認在 main 分支並推送所有變更
git checkout main
git add .
git commit -m "feat: add GitHub Actions CI/CD"
git push origin main

# 2. 建立並推送第一個 release tag
git tag v1.0.0
git push origin v1.0.0

# 3. 查看 GitHub Actions 執行狀態
# 前往: https://github.com/jakeuj/ChromeExtensionPobZh/actions
```

---

## 📋 功能清單

### CI Workflow (ci.yml)
✅ **觸發條件**:
- Push 到 `main` 或 `develop` 分支
- Pull Request 到 `main` 或 `develop` 分支
- 手動觸發

✅ **檢查項目**:
- Manifest.json 格式驗證
- 必要檔案存在性檢查
- JavaScript 語法驗證
- 檔案大小檢查
- 封裝測試
- Clean Architecture 合規性檢查

### Release Workflow (release.yml)
✅ **觸發條件**:
- Push tag (格式: `v*`)
- 手動觸發（可指定版本號）

✅ **自動執行**:
- 更新 manifest.json 版本號
- 建立 ZIP 封裝檔案
- 生成 Changelog
- 建立 GitHub Release
- 上傳 ZIP 檔案到 Release（開發者備用）

一般使用者安裝入口：

- [官方網站](https://poe.jakeuj.com/)
- [Chrome Web Store](https://chromewebstore.google.com/detail/poe-ninja-to-chronicles-p/aidenhnleibhchnhilkpbpkgeanmeedh?hl=zh-TW)
- [Microsoft Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/ilpjikgeonkegldnjdgpmcdiibmlabng)

---

## 📖 文件導覽

| 文件 | 用途 | 適合對象 |
|------|------|----------|
| [CICD.md](.github/CICD.md) | 完整說明文件 | 詳細了解 CI/CD 流程 |
| [QUICK_REFERENCE.md](.github/QUICK_REFERENCE.md) | 快速參考 | 需要快速查找指令 |
| [WORKFLOW_VISUALIZATION.md](.github/WORKFLOW_VISUALIZATION.md) | 視覺化圖表 | 理解整體架構 |

---

## 🎯 常用操作

### 發布新版本
```bash
# Bug 修復 (1.0.0 → 1.0.1)
git tag v1.0.1
git push origin v1.0.1

# 新功能 (1.0.1 → 1.1.0)
git tag v1.1.0
git push origin v1.1.0

# 重大更新 (1.1.0 → 2.0.0)
git tag v2.0.0
git push origin v2.0.0
```

### 手動觸發 Release
1. 前往 GitHub Repository
2. 點擊 **Actions** 頁籤
3. 選擇 **Release Chrome Extension**
4. 點擊 **Run workflow**
5. 輸入版本號（例如: `1.0.1`）
6. 點擊 **Run workflow** 按鈕

### 檢視 CI 狀態
- Actions 頁面: https://github.com/jakeuj/ChromeExtensionPobZh/actions
- README 徽章: 顯示即時狀態

---

## 🔧 設定檢查清單

在第一次 push 之前，請確認：

- [ ] 已建立 `.github/workflows/` 目錄
- [ ] `ci.yml` 和 `release.yml` 已就位
- [ ] `README.md` 已更新（加入徽章）
- [ ] `.gitignore` 包含必要的忽略項目
- [ ] Repository Settings 允許 workflow 寫入權限
  - Settings → Actions → General
  - Workflow permissions → **Read and write permissions**

---

## ⚠️ 重要注意事項

### 版本號規範
- ✅ 使用語意化版本：`v1.0.0`
- ❌ 不要使用：`1.0.0` (缺少 `v` 前綴)
- ❌ 不要使用：`version-1.0.0`

### Tag 命名
- ✅ `v1.0.0`, `v1.0.1`, `v2.0.0`
- ❌ `V1.0.0`, `ver1.0.0`, `release-1.0.0`

### 發布前檢查
1. ✅ CI 檢查全部通過
2. ✅ 在本地測試擴充套件功能
3. ✅ 確認版本號符合變更內容
4. ✅ 檢查 manifest.json 內容正確

---

## 🐛 故障排除

### Q: Release 失敗，顯示權限錯誤
**A**: 檢查 Repository Settings → Actions → General，確保啟用 "Read and write permissions"

### Q: CI 檢查失敗
**A**: 
1. 查看 Actions 頁面的錯誤訊息
2. 確認所有必要檔案都存在
3. 檢查 JavaScript 語法是否正確
4. 確認 manifest.json 格式正確

### Q: Tag 推送後沒有觸發 Release
**A**:
1. 確認 tag 格式正確（必須是 `v*`）
2. 檢查 workflow 檔案是否已提交到 repository
3. 前往 Actions 頁面查看是否有錯誤

---

## 📊 後續優化建議

### 短期（可選）
- [ ] 加入 ESLint 進行程式碼檢查
- [ ] 加入 Prettier 進行程式碼格式化
- [ ] 設定 Pull Request 模板

### 中期（進階）
- [ ] 加入單元測試（Jest）
- [ ] 加入 E2E 測試（Puppeteer）
- [ ] 自動生成更詳細的 Changelog

### 長期（專業）
- [ ] 自動發布到 Chrome Web Store
- [ ] 自動發布到 Microsoft Edge Add-ons
- [ ] 支援更多瀏覽器發布（Firefox 等）
- [ ] 設定 CD pipeline 到生產環境

---

## 🎓 參考資源

- [GitHub Actions 官方文件](https://docs.github.com/en/actions)
- [Chrome Extension 發布指南](https://developer.chrome.com/docs/webstore/publish/)
- [Semantic Versioning](https://semver.org/)
- [GitHub Release 最佳實踐](https://docs.github.com/en/repositories/releasing-projects-on-github/about-releases)

---

## ✨ 完成！

您的 CI/CD 流程已經完全設定完成！

現在每次 push 程式碼，GitHub Actions 會自動：
- ✅ 檢查程式碼品質
- ✅ 驗證擴充套件結構
- ✅ 測試封裝流程

當您準備發布新版本時，只需要：
```bash
git tag v1.0.0 && git push origin v1.0.0
```

就會自動建立 Release 並產生開發者備用 ZIP 檔案！🚀

---

**祝您開發順利！** 🎉

如有任何問題，請參考 `.github/CICD.md` 完整文件。
