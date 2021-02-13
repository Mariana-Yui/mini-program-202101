// components/episode/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    index: {
      type: Number,
      value: 0,
      observer(newVal, oldVal, path) {
        const index = String(newVal).padStart('0', 2);
        this.setData({
          _index: index,
        });
      },
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    monthMap: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'],
    month: '',
    year: 0,
    _index: '',
  },

  /**
   * 生命周期钩子
   */
  lifetimes: {
    attached() {
      const date = new Date();
      const month = date.getMonth();
      const year = date.getFullYear();
      this.setData({
        year,
        month: this.data.monthMap[month] + '月',
      });
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {},
});
