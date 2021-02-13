// components/classic/music/index.js
import ClassicBeh from '../classic-beh';

const mMgr = wx.getBackgroundAudioManager();

Component({
  /**
   * 组件的属性列表
   */
  behaviors: [ClassicBeh],
  properties: {
    src: String,
    title: String,
  },

  /**
   * 组件的初始数据
   */
  data: {
    playing: false,
    playSrc: './images/player@playing.png',
    pauseSrc: './images/player@waitting.png',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handlePlay() {
      if (!this.data.playing) {
        this.setData({
          playing: true,
        });
        if (mMgr.src === this.properties.src) {
          mMgr.play();
        } else {
          mMgr.title = this.properties.title;
          mMgr.src = this.properties.src;
        }
      } else {
        this.setData({
          playing: false,
        });
        mMgr.pause();
      }
    },
    _recoverStatus() {
      if (mMgr.paused) {
        this.setData({
          playing: false,
        });
        return;
      }
      if (mMgr.src === this.properties.src) {
        if (!mMgr.paused) {
          this.setData({
            playing: true,
          });
        }
      }
    },
    _monitorSwitch() {
      mMgr.onPlay(() => {
        this._recoverStatus();
      });
      mMgr.onPause(() => {
        this._recoverStatus();
      });
      mMgr.onEnded(() => {
        this._recoverStatus();
      });
      mMgr.onStop(() => {
        this._recoverStatus();
      });
    },
  },
  lifetimes: {
    attached() {
      this._recoverStatus();
      this._monitorSwitch();
    },
  },
});
