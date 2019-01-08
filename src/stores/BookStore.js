import { decorate, observable, computed } from "mobx";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://the-index-api.herokuapp.com"
});

class BookStore {
  constructor() {
    this.books = [];
    this.query = "";
    this.loading = true;
    this.statusMessage = "";
  }

  fetchBooks() {
    return instance
      .get("https://the-index-api.herokuapp.com/api/books/")
      .then(res => res.data)
      .then(books => {
        this.books = books;
        this.loading = false;
      })
      .catch(err => console.error(err));
  }
  addBook(newBook, authorID) {
    newBook = { ...newBook, authors: [authorID] };
    console.log(newBook);
    return instance
      .post("https://the-index-api.herokuapp.com/api/books/", newBook)
      .then(res => res.data)
      .then(data => this.books.unshift(data))
      .then(() => {
        this.statusMessage = "Success";
      })
      .catch(err => console.error(err.response.data));
  }
  get filteredBooks() {
    return this.books.filter(book => {
      return book.title.toLowerCase().includes(this.query.toLowerCase());
    });
  }

  getBookById(id) {
    return this.books.find(book => +book.id === +id);
  }

  getBooksByColor(color) {
    return this.filteredBooks.filter(book => book.color === color);
  }
}

decorate(BookStore, {
  books: observable,
  query: observable,
  loading: observable,
  filteredBooks: computed
});

const bookStore = new BookStore();
bookStore.fetchBooks();

export default bookStore;
