/**
 * Background Service Worker
 * 處理跨域 API 請求，規避 CORS 限制
 */

// 監聽來自 content script 的訊息
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'uploadPobCode') {
    // 非同步處理，返回 true 以保持 message channel 開啟
    handleUploadPobCode(request.pobCode)
      .then(sendResponse)
      .catch(error => {
        sendResponse({
          success: false,
          error: {
            message: error.message,
            code: error.code || 'UNKNOWN_ERROR'
          }
        });
      });
    
    return true; // 保持 message channel 開啟以供非同步回應
  }
});

/**
 * 處理 PoB 代碼上傳
 */
async function handleUploadPobCode(pobCode) {
  if (!pobCode || typeof pobCode !== 'string') {
    throw {
      message: 'Invalid PoB code',
      code: 'INVALID_INPUT'
    };
  }

  try {
    const response = await fetch('https://poe2db.tw/pob/api/paste', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'PoENinjaToChronicles/1.0',
      },
      body: JSON.stringify({ content: pobCode })
    });

    if (!response.ok) {
      throw {
        message: `HTTP ${response.status}: ${response.statusText}`,
        code: 'HTTP_ERROR'
      };
    }

    const data = await response.json();

    if (data.code !== 200 || !data.hash) {
      throw {
        message: 'Upload failed: Invalid response',
        code: 'UPLOAD_FAILED'
      };
    }

    // 回傳成功結果
    return {
      success: true,
      data: {
        hash: data.hash,
        url: `https://poe2db.tw/tw/pob/${data.hash}`,
        isReused: data.reused === 1
      }
    };

  } catch (error) {
    console.error('[Background] Upload error:', error);
    
    // 如果是我們自己拋出的錯誤，直接拋出
    if (error.code) {
      throw error;
    }
    
    // 網路或其他錯誤
    throw {
      message: `Network error: ${error.message}`,
      code: 'NETWORK_ERROR'
    };
  }
}

// Service Worker 啟動時的初始化
chrome.runtime.onInstalled.addListener(() => {
  console.log('[Background] PoE Ninja to Chronicles PoB Sharer installed');
});
