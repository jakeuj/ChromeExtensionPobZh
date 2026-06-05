# CI/CD 快速參考

## 🚀 發布新版本（3 步驟）

```bash
# 1. 確認在 main 分支
git checkout main
git pull

# 2. 建立並推送 tag
git tag v1.0.1
git push origin v1.0.1

# 3. 等待 GitHub Actions 完成
# 前往 https://github.com/jakeuj/ChromeExtensionPobZh/actions 查看進度
```

## ✅ CI 檢查內容

每次 push 或 PR 時自動執行：

- ✓ manifest.json 格式驗證
- ✓ 必要檔案存在性檢查
- ✓ JavaScript 語法檢查
- ✓ 檔案大小檢查
- ✓ 封裝測試
- ✓ Clean Architecture 合規性

## 📦 Release 產出

- ZIP 檔案：`poe-ninja-pob-sharer-{version}.zip`
- GitHub Release 頁面
- 自動生成的 Changelog
- ZIP 供開發者備用；一般使用者請透過 Chrome Web Store 或 Microsoft Edge Add-ons 安裝

## 🔗 相關連結

- [完整 CI/CD 文件](.github/CICD.md)
- [官方網站](https://poe.jakeuj.com/)
- [Chrome Web Store](https://chromewebstore.google.com/detail/poe-ninja-to-chronicles-p/aidenhnleibhchnhilkpbpkgeanmeedh?hl=zh-TW)
- [Microsoft Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/ilpjikgeonkegldnjdgpmcdiibmlabng)
- [GitHub Actions](https://github.com/jakeuj/ChromeExtensionPobZh/actions)
- [Releases](https://github.com/jakeuj/ChromeExtensionPobZh/releases)

## 🐛 常用除錯指令

```bash
# 檢查 workflow 語法
# (需安裝 actionlint: brew install actionlint)
actionlint .github/workflows/*.yml

# 本地測試封裝
cd src && zip -r ../test.zip manifest.json content.js background.js styles.css icons/

# 驗證 manifest.json
cat src/manifest.json | jq empty && echo "✓ Valid JSON"

# 檢查檔案大小
du -sh src/
```
