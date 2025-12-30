/**
 * Content Script - 在 poe.ninja 角色頁面注入分享按鈕
 * 遵循 Clean Architecture 原則
 */

// Domain Layer - 實體與業務邏輯
class PobShareResult {
  constructor(hash, url, isReused = false) {
    this.hash = hash;
    this.url = url;
    this.isReused = isReused;
  }
}

class ApiError extends Error {
  constructor(message, code) {
    super(message);
    this.name = 'ApiError';
    this.code = code;
  }
}

// Application Layer - 用例
class SharePobUseCase {
  constructor(apiClient) {
    this._apiClient = apiClient;
  }

  async execute(pobCode) {
    if (!pobCode || typeof pobCode !== 'string') {
      throw new ApiError('Invalid PoB code', 'INVALID_INPUT');
    }

    try {
      const response = await this._apiClient.uploadPobCode(pobCode);
      
      if (response.code !== 200 || !response.hash) {
        throw new ApiError('Upload failed', 'UPLOAD_FAILED');
      }

      const url = `https://poe2db.tw/tw/pob/${response.hash}`;
      return new PobShareResult(response.hash, url, response.reused === 1);
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }
      throw new ApiError(`Network error: ${error.message}`, 'NETWORK_ERROR');
    }
  }
}

// Infrastructure Layer - API 客戶端
class ChroniclesApiClient {
  constructor(baseUrl = 'https://poe2db.tw') {
    this._baseUrl = baseUrl;
  }

  async uploadPobCode(pobCode) {
    // 透過 background service worker 發送請求以規避 CORS
    return new Promise((resolve, reject) => {
      chrome.runtime.sendMessage(
        { action: 'uploadPobCode', pobCode },
        (response) => {
          // 檢查是否有錯誤
          if (chrome.runtime.lastError) {
            reject(new Error(chrome.runtime.lastError.message));
            return;
          }

          if (!response.success) {
            reject(new Error(response.error.message));
            return;
          }

          // 轉換回原本的格式以維持相容性
          resolve({
            code: 200,
            hash: response.data.hash,
            reused: response.data.isReused ? 1 : 0
          });
        }
      );
    });
  }
}

// Infrastructure Layer - PoB 代碼擷取器
class PoeNinjaPobExtractor {
  extractFromPage() {
    // 方法 1: 從 input 元素直接取得 PoB 代碼
    const pobInput = document.querySelector('input[readonly][value]');
    if (pobInput && pobInput.value) {
      return pobInput.value;
    }

    // 方法 2: 從 pob2:// 或 https://pobb.in/ 連結取得
    const importLinks = document.querySelectorAll('a[href^="pob2://"], a[href^="https://pobb.in/"]');
    for (const link of importLinks) {
      const href = link.getAttribute('href');
      
      // 處理 pob2:// 協議
      if (href.startsWith('pob2://')) {
        // 從相鄰的 input 找
        const parent = link.parentElement;
        const input = parent?.querySelector('input[readonly]');
        if (input?.value) {
          return input.value;
        }
      }
      
      // 處理 https://pobb.in/ URL
      if (href.startsWith('https://pobb.in/')) {
        const match = href.match(/https:\/\/pobb\.in\/([^\/\?]+)/);
        if (match) {
          return match[1];
        }
      }
    }

    // 方法 3: 從頁面資料結構取得（備用方案）
    const scriptTags = document.querySelectorAll('script');
    for (const script of scriptTags) {
      const content = script.textContent;
      if (content.includes('pobCode') || content.includes('buildCode')) {
        const match = content.match(/"(?:pobCode|buildCode)"\s*:\s*"([^"]+)"/);
        if (match) {
          return match[1];
        }
      }
    }

    return null;
  }
}

// Presentation Layer - UI 控制器
class ShareButtonController {
  constructor(sharePobUseCase, pobExtractor) {
    this._sharePobUseCase = sharePobUseCase;
    this._pobExtractor = pobExtractor;
    this._button = null;
  }

  initialize() {
    this._waitForElement()
      .then(() => {
        this._createButton();
        this._attachEventListeners();
      })
      .catch(error => {
        console.error('[PoB Sharer] Failed to initialize:', error);
      });
  }

  _waitForElement() {
    return new Promise((resolve, reject) => {
      // 先檢查元素是否已經存在
      const importButton = document.querySelector('a[href^="pob2://"], a[href^="https://pobb.in/"]');
      if (importButton) {
        resolve();
        return;
      }

      // 使用 MutationObserver 監聽 DOM 變化
      const observer = new MutationObserver((mutations, obs) => {
        const button = document.querySelector('a[href^="pob2://"], a[href^="https://pobb.in/"]');
        if (button) {
          obs.disconnect();
          resolve();
        }
      });

      // 開始觀察
      observer.observe(document.body, {
        childList: true,
        subtree: true
      });

      // 設置超時時間（10秒）
      setTimeout(() => {
        observer.disconnect();
        reject(new Error('Timeout waiting for import button'));
      }, 10000);
    });
  }

  _createButton() {
    // 尋找合適的插入位置（在 "Import build into Path of Building" 按鈕旁）
    // 支援新舊兩種連結格式
    const importButton = document.querySelector('a[href^="pob2://"], a[href^="https://pobb.in/"]');
    
    if (!importButton) {
      console.warn('[PoB Sharer] Import button not found');
      return;
    }

    const container = importButton.parentElement;
    
    // 建立分享按鈕
    this._button = document.createElement('button');
    this._button.className = 'pob-share-button';
    this._button.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <path d="M13 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM4.5 13a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm9-9a2.5 2.5 0 0 0-4.799-.989L5.18 5.036a2.5 2.5 0 1 0-.116 5.928l3.521 2.025a2.5 2.5 0 1 0 .853-1.484L6.017 9.48a2.5 2.5 0 0 0 0-2.96l3.421-2.025A2.5 2.5 0 0 0 13.5 4z"/>
      </svg>
      <span>分享中文 PoB</span>
    `;
    this._button.title = '建立編年史（poe2db.tw）中文 PoB 連結';
    
    container.appendChild(this._button);
  }

  _attachEventListeners() {
    if (!this._button) return;

    this._button.addEventListener('click', async () => {
      await this._handleShare();
    });
  }

  async _handleShare() {
    try {
      this._setButtonState('loading');

      // 擷取 PoB 代碼
      const pobCode = this._pobExtractor.extractFromPage();
      
      if (!pobCode) {
        this._showNotification('error', '無法找到 PoB 代碼');
        return;
      }

      // 上傳並取得連結
      const result = await this._sharePobUseCase.execute(pobCode);

      // 複製到剪貼簿
      await this._copyToClipboard(result.url);

      // 直接在新分頁開啟中文 PoB 連結
      window.open(result.url, '_blank');

      // 顯示簡短成功訊息
      const message = result.isReused 
        ? '已開啟中文 PoB（使用現有連結）' 
        : '已開啟中文 PoB 連結';
      this._showNotification('success', message);

    } catch (error) {
      console.error('[PoB Sharer] Error:', error);
      
      let errorMessage = '分享失敗';
      if (error instanceof ApiError) {
        switch (error.code) {
          case 'INVALID_INPUT':
            errorMessage = 'PoB 代碼無效';
            break;
          case 'NETWORK_ERROR':
            errorMessage = '網路連線失敗';
            break;
          case 'UPLOAD_FAILED':
            errorMessage = 'API 上傳失敗';
            break;
          default:
            errorMessage = error.message;
        }
      }
      
      this._showNotification('error', errorMessage);
    } finally {
      this._setButtonState('idle');
    }
  }

  _setButtonState(state) {
    if (!this._button) return;

    this._button.disabled = state === 'loading';
    
    if (state === 'loading') {
      this._button.classList.add('loading');
    } else {
      this._button.classList.remove('loading');
    }
  }

  async _copyToClipboard(text) {
    try {
      await navigator.clipboard.writeText(text);
    } catch (error) {
      // 降級方案
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }
  }

  _showNotification(type, message, url = null) {
    // 建立通知元素
    const notification = document.createElement('div');
    notification.className = `pob-notification pob-notification-${type}`;
    
    const icon = type === 'success' ? '✓' : '✗';
    
    let content = `
      <span class="pob-notification-icon">${icon}</span>
      <span class="pob-notification-message">${message}</span>
    `;
    
    if (url) {
      content += `
        <a href="${url}" target="_blank" class="pob-notification-link">
          開啟連結 →
        </a>
      `;
    }
    
    notification.innerHTML = content;
    document.body.appendChild(notification);

    // 動畫顯示
    setTimeout(() => notification.classList.add('show'), 10);

    // 3 秒後移除
    setTimeout(() => {
      notification.classList.remove('show');
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  }
}

// Application Bootstrap
(function initialize() {
  // 等待頁面完全載入
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootstrap);
  } else {
    bootstrap();
  }

  function bootstrap() {
    // 確認是否在角色頁面
    if (!window.location.pathname.includes('/character/')) {
      return;
    }

    // 依賴注入組裝
    const apiClient = new ChroniclesApiClient();
    const pobExtractor = new PoeNinjaPobExtractor();
    const sharePobUseCase = new SharePobUseCase(apiClient);
    const buttonController = new ShareButtonController(sharePobUseCase, pobExtractor);

    // 初始化
    buttonController.initialize();

    console.log('[PoB Sharer] Extension initialized');
  }
})();

