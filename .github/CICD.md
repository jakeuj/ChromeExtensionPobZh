# GitHub Actions CI/CD 說明

## 📋 工作流程說明

本專案包含兩個 GitHub Actions 工作流程：

### 1. CI (Continuous Integration) - `ci.yml`

**觸發時機：**
- Push 到 `main` 或 `develop` 分支
- 對 `main` 或 `develop` 分支的 Pull Request
- 手動觸發

**執行內容：**
- ✅ 驗證 `manifest.json` 格式
- ✅ 檢查必要檔案存在性
- ✅ JavaScript 語法驗證
- ✅ 檔案大小檢查
- ✅ 測試封裝流程
- ✅ Clean Architecture 合規性檢查

### 2. Release (發布流程) - `release.yml`

**觸發時機：**
- 推送 tag（格式：`v*`，例如：`v1.0.1`）
- 手動觸發（可指定版本號）

**執行內容：**
- 📝 更新 `manifest.json` 版本號
- 📦 建立擴充套件 ZIP 檔案
- 📋 生成 Changelog
- 🚀 建立 GitHub Release
- 📤 上傳擴充套件檔案

---

## 🚀 使用方式

### 方法一：透過 Git Tag 發布（推薦）

```bash
# 1. 確保在 main 分支
git checkout main
git pull

# 2. 建立並推送 tag
git tag v1.0.1
git push origin v1.0.1

# 3. GitHub Actions 會自動執行發布流程
```

### 方法二：手動觸發發布

1. 前往 GitHub Repository
2. 點擊 **Actions** 頁籤
3. 選擇 **Release Chrome Extension** 工作流程
4. 點擊 **Run workflow**
5. 輸入版本號（例如：`1.0.1`）
6. 點擊 **Run workflow** 按鈕

---

## 📦 發布產出

每次成功發布後，會在 GitHub Releases 中產生：

1. **Release 頁面**：包含版本資訊和變更記錄
2. **ZIP 檔案**：`poe-ninja-pob-sharer-{version}.zip`
   - 包含所有擴充套件檔案
   - 可直接用於安裝

---

## 🔄 版本號規範

遵循 [Semantic Versioning](https://semver.org/)：

```
v{MAJOR}.{MINOR}.{PATCH}

例如：
- v1.0.0  - 首次發布
- v1.0.1  - Bug 修復
- v1.1.0  - 新增功能
- v2.0.0  - 重大更新（Breaking Changes）
```

---

## 🛠️ 本地測試發布流程

在推送 tag 之前，可以先在本地測試封裝流程：

```bash
# 進入 src 目錄
cd src

# 手動建立 ZIP 檔案
zip -r ../poe-ninja-pob-sharer-test.zip \
  manifest.json \
  content.js \
  background.js \
  styles.css \
  icons/

# 檢查檔案內容
unzip -l ../poe-ninja-pob-sharer-test.zip
```

---

## 📊 CI 狀態徽章

在 README.md 中加入狀態徽章：

```markdown
![CI](https://github.com/jakeuj/PoE/workflows/CI/badge.svg)
![Release](https://github.com/jakeuj/PoE/workflows/Release%20Chrome%20Extension/badge.svg)
```

---

## 🔒 權限設定

工作流程需要以下權限（已在 workflow 中設定）：

- `contents: write` - 用於建立 Release 和上傳檔案

**注意：** 確保 Repository Settings 中啟用了 Workflow 權限：
1. Settings → Actions → General
2. Workflow permissions → **Read and write permissions**

---

## 🐛 常見問題

### Q1: Release 失敗，顯示權限錯誤
**A:** 檢查 Repository Settings → Actions → General，確保啟用 "Read and write permissions"

### Q2: 如何刪除錯誤的 Release？
**A:** 
```bash
# 刪除本地 tag
git tag -d v1.0.1

# 刪除遠端 tag
git push origin --delete v1.0.1

# 手動在 GitHub Release 頁面刪除 Release
```

### Q3: 如何跳過 CI 檢查？
**A:** 在 commit message 中加入 `[skip ci]`
```bash
git commit -m "docs: update README [skip ci]"
```

### Q4: CI 失敗但我需要緊急發布
**A:** 可以使用手動觸發 Release workflow，但建議修復 CI 問題後再發布

---

## 📚 進階配置

### 自動發布到 Chrome Web Store

若要自動發布到 Chrome Web Store，需要：

1. 取得 Chrome Web Store API 憑證
2. 在 Repository Secrets 中加入：
   - `CHROME_CLIENT_ID`
   - `CHROME_CLIENT_SECRET`
   - `CHROME_REFRESH_TOKEN`
3. 修改 `release.yml` 加入發布步驟

詳細說明：[Chrome Web Store API](https://developer.chrome.com/docs/webstore/using_webstore_api/)

### 加入測試覆蓋率

如果未來加入單元測試，可在 `ci.yml` 中加入：

```yaml
- name: Run tests
  run: npm test

- name: Upload coverage
  uses: codecov/codecov-action@v3
```

---

## 📝 版本歷史

| 版本 | 日期 | 說明 |
|------|------|------|
| 1.0.0 | 2025-12-30 | 初始化 CI/CD 流程 |

---

## 🤝 貢獻

如需改進 CI/CD 流程，請：

1. Fork 專案
2. 建立 feature branch
3. 修改 workflow 檔案
4. 提交 Pull Request

CI 會自動驗證您的變更！

