// pages/classic/classic.js
import ClassicModel from '../../model/classic';
import LikeModel from '../../model/like';

const classicModel = new ClassicModel();
const likeModel = new LikeModel();

Page({
  data: {
    classic: {},
    first: false,
    latest: true,
    likeStatus: 0,
    likeCount: 0,
  },
  async onLoad(options) {
    const res = await classicModel.getLatest();
    const key = classicModel.getKey(res.index);
    wx.setStorageSync(key, res);
    this.setData({
      classic: res,
      likeStatus: res.like_status,
      likeCount: res.fav_nums,
    });
  },
  /**
   * 点赞/取消点赞
   */
  async handleTapLike(event) {
    const { behavior } = event.detail;
    const { id, type } = this.data.classic;
    await likeModel.like(behavior, id, type);
  },
  async _updateClassic(nextOrPrevious) {
    const { index } = this.data.classic;
    const key = nextOrPrevious === 'next' ? classicModel.getKey(index + 1) : classicModel.getKey(index - 1);
    let classic = wx.getStorageSync(key);
    if (!classic) {
      classic = await classicModel.getClassic(index, nextOrPrevious);
      wx.setStorageSync(key, classic);
    }
    this._getLikeStatus(classic.id, classic.type);
    this.setData({
      classic,
      first: classicModel.isFirst(classic.index),
      latest: classicModel.isLatest(classic.index),
    });
  },
  async handleTapPrev(event) {
    await this._updateClassic('previous');
  },
  async handleTapNext(event) {
    await this._updateClassic('next');
  },
  async _getLikeStatus(artId, category) {
    const res = await likeModel.getClassicLikeStatus(artId, category);
    this.setData({
      likeStatus: res.like_status,
      likeCount: res.fav_nums,
    });
  },
});
