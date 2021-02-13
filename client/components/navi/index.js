// components/navi/navi.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    latest: Boolean,
    first: Boolean,
    title: String,
  },

  /**
   * 组件的初始数据
   */
  data: {
    leftSrc: 'images/triangle@left.png',
    disLeftSrc: 'images/triangle.dis@left.png',
    rightSrc: 'images/triangle@right.png',
    disRightSrc: 'images/triangle.dis@right.png',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleTapPrev() {
      if (!this.data.first) {
        this.triggerEvent('prev');
      }
    },
    handleTapNext() {
      if (!this.data.latest) {
        this.triggerEvent('next');
      }
    },
  },
});
