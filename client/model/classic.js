import HTTP from '../utils/http';
import { CLASSIC_PREFIX_KEY_CACHE, LATEST_INDEX_CACHE } from '../utils/type';

class ClassicModel extends HTTP {
  /**
   * 获取最新一期
   */
  async getLatest() {
    const res = await this.request({
      url: '/classic/latest',
    });
    this.setLatestIndex(res.index);
    return res;
  }

  async getClassic(index, nextOrPrevious = 'next') {
    let url = `/classic/${index}/${nextOrPrevious}`;
    const res = await this.request({
      url,
      index,
    });
    return res;
  }

  /**
   * 是否第一期
   */
  isFirst(index) {
    return index === 1;
  }

  /**
   * 是否最后一期
   */
  isLatest(curIndex) {
    const index = this.getLatestIndex();
    return curIndex === index;
  }

  getLatestIndex() {
    const index = wx.getStorageSync(LATEST_INDEX_CACHE);
    return index;
  }

  setLatestIndex(index) {
    wx.setStorageSync(LATEST_INDEX_CACHE, index);
  }

  getKey(index) {
    const key = CLASSIC_PREFIX_KEY_CACHE + index;
    return key;
  }
}

export default ClassicModel;
