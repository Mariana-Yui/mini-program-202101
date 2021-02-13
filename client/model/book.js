import HTTP from '../utils/http';

class BookModel extends HTTP {
  getHotList() {
    const res = this.request({
      url: '/book/hot_list',
    });
    return res;
  }
}

export default BookModel;
