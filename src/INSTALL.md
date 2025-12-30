# 安裝與使用指南

## 安裝步驟

### 1. 安裝 Chrome 擴充套件

1. 開啟 Chrome 瀏覽器
2. 在網址列輸入：`chrome://extensions/`
3. 開啟右上角的「開發人員模式」開關
4. 點擊「載入未封裝項目」按鈕
5. 選擇 `src` 資料夾（包含 manifest.json 的資料夾）
6. 擴充套件會出現在清單中，確認已啟用

### 2. 測試擴充套件

#### 測試用角色頁面
```
https://poe.ninja/poe2/profile/jakeuj-2332/character/泰坦燃燒大象
```

#### 預期行為
1. 進入上述頁面後
2. 在「Import build into Path of Building」按鈕旁應出現紫色漸層的「分享中文 PoB」按鈕
3. 點擊按鈕後：
   - 按鈕顯示載入動畫
   - 自動擷取 PoB 代碼
   - 上傳到編年史 API
   - 右上角顯示成功通知
   - 連結已複製到剪貼簿
4. 貼上測試（Cmd+V / Ctrl+V）

#### 預期連結格式
```
https://poe2db.tw/pob/{hash}
```
例如：`https://poe2db.tw/pob/aqDuPGwaeq`

### 3. 除錯方法

#### 開啟 Console
1. 在 poe.ninja 角色頁面按 F12 或右鍵 → 檢查
2. 切換到 Console 標籤
3. 尋找 `[PoB Sharer]` 開頭的訊息

#### 預期 Console 輸出
```
[PoB Sharer] Extension initialized
```

#### 常見問題

**問題：沒有出現按鈕**
- 檢查是否在正確的頁面（包含 `/character/`）
- 檢查是否有「Import build into Path of Building」按鈕
- 開啟 Console 查看錯誤訊息

**問題：按鈕點擊後無反應**
- 開啟 Console 查看錯誤訊息
- 檢查網路連線
- 確認 poe2db.tw 網站可正常訪問

**問題：顯示「無法找到 PoB 代碼」**
- 確認該角色頁面有公開 Build
- 確認頁面已完全載入
- 嘗試重新整理頁面

## 開發測試

### 修改程式碼後
1. 儲存檔案
2. 回到 `chrome://extensions/`
3. 找到「PoE Ninja to Chronicles PoB Sharer」
4. 點擊重新整理圖示 🔄
5. 重新整理 poe.ninja 頁面
6. 測試功能

### Console 除錯指令

```javascript
// 手動觸發擷取
const extractor = new PoeNinjaPobExtractor();
const code = extractor.extractFromPage();
console.log('PoB Code:', code);

// 手動測試 API
const apiClient = new ChroniclesApiClient();
apiClient.uploadPobCode('test_code_here').then(console.log);
```

## 功能驗證清單

- [ ] 按鈕正確顯示在頁面上
- [ ] 按鈕樣式正確（紫色漸層）
- [ ] 點擊按鈕後顯示載入動畫
- [ ] 成功擷取 PoB 代碼
- [ ] API 呼叫成功
- [ ] 顯示成功通知
- [ ] 連結已複製到剪貼簿
- [ ] 通知中的「開啟連結」可點擊
- [ ] 連結可正常開啟 poe2db.tw 頁面
- [ ] 深色模式下通知樣式正確

## API 測試

### 手動測試 API

```bash
curl -X POST https://poe2db.tw/pob/api/paste \
  -H "Content-Type: application/json" \
  -H "User-Agent: Test/1.0" \
  -d '{"content":"test_pob_code"}'
```

預期回應：
```json
{
  "code": 200,
  "hash": "xxxxxxxxxx"
}
```

## 發布前檢查

- [ ] 所有功能正常運作
- [ ] Console 無錯誤訊息
- [ ] 在多個角色頁面測試
- [ ] 測試重複上傳（應顯示 reused）
- [ ] 圖示顯示正常
- [ ] README 文件完整
- [ ] 程式碼符合 Clean Architecture

## 下一步

如需打包成 .crx 檔案分發：
1. 在 `chrome://extensions/` 點擊「封裝擴充功能」
2. 選擇 `src` 資料夾
3. 產生 .crx 檔案
4. 分享給其他使用者

或上傳到 Chrome Web Store：
1. 註冊 Chrome Web Store 開發者帳號
2. 準備宣傳圖片和說明
3. 上傳擴充套件
4. 等待審核

