import BookModel from '../../model/book';

const bookModel = new BookModel();

Page({
  data: {
    books: [],
  },
  async onLoad() {
    const books = await bookModel.getHotList();
    this.setData({
      books,
    });
  },
});
