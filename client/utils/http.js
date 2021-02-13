/* eslint-disable no-param-reassign */
import { config } from '../config';

const tips = {
  '-1': '系统出了点问题',
  1005: 'appkey无效',
  3000: '期刊不存在',
};

class HTTP {
  request({ url, method = 'GET', data = {} }) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: `${config.api_base_url}${url}`,
        method,
        data,
        header: {
          'Content-Type': 'application/json',
          appkey: config.appkey,
        },
        success: (res) => {
          const code = res.statusCode.toString();
          if (code.startsWith('2')) {
            resolve(res && res.data);
          } else {
            reject(Error('incorrent status code'));
            this._showError(res && res.data && res.data.error_code);
          }
        },
        fail: (err) => {
          reject(err);
          this._showError(-1);
        },
      });
    });
  }
  _showError(errorCode) {
    if (!errorCode || !tips[errorCode]) {
      errorCode = -1;
    }
    wx.showToast({
      title: tips[errorCode],
      icon: 'error',
      duration: 2000,
    });
  }
}

export default HTTP;
