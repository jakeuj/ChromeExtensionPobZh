# .github 目錄說明

本目錄包含 GitHub Actions CI/CD 工作流程和相關文件。

## 📂 目錄結構

```
.github/
├── workflows/              # GitHub Actions 工作流程
│   ├── ci.yml             # 持續整合 (CI)
│   └── release.yml        # 發布流程 (Release)
└── 文件檔案/
    ├── CICD.md                      # 📖 完整使用說明
    ├── QUICK_REFERENCE.md           # 📋 快速參考指南
    ├── WORKFLOW_VISUALIZATION.md    # 📊 視覺化圖表
    └── SETUP_COMPLETE.md            # 🎯 設定完成總結
```

## 🚀 快速開始

### 發布新版本
```bash
git tag v1.0.0
git push origin v1.0.0
```

### 手動觸發 CI
前往 [GitHub Actions](https://github.com/jakeuj/PoE/actions)，選擇 workflow 並點擊 "Run workflow"。

## 📚 文件說明

### [CICD.md](CICD.md)
完整的 CI/CD 使用說明，包含：
- 工作流程詳細說明
- 觸發條件
- 使用方法
- 常見問題
- 進階配置

### [QUICK_REFERENCE.md](QUICK_REFERENCE.md)
快速參考指南，包含：
- 常用指令
- CI 檢查項目
- Release 產出
- 除錯指令

### [WORKFLOW_VISUALIZATION.md](WORKFLOW_VISUALIZATION.md)
工作流程視覺化，包含：
- CI/CD 架構圖
- 流程圖
- 版本號策略
- 最佳實踐

### [SETUP_COMPLETE.md](SETUP_COMPLETE.md)
設定完成總結，包含：
- 建立的檔案清單
- 立即開始步驟
- 功能清單
- 後續優化建議

## 🔗 相關連結

- [GitHub Actions 執行狀態](https://github.com/jakeuj/PoE/actions)
- [Releases 頁面](https://github.com/jakeuj/PoE/releases)
- [主專案 README](../README.md)

## 💡 提示

首次使用請先閱讀 [SETUP_COMPLETE.md](SETUP_COMPLETE.md)！

