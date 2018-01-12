const app = angular.module('MyMoviesApp', []);
app.controller('MainController', ['$http', function($http){
  this.whatevs = 'whatevs'
  console.log(this.whatevs);

// ==============
// GET Route
// ==============

  this.getBooks = () => {
    $http({
      url: 'books/',
      method: 'GET'
    }).then(response => {
      this.books = response.data
      // console.table(this.books);
    }, error => {
      console.log(error.message);
    }).catch(err => console.log(err))
  }

  this.getBooks();

  // info on book
  this.getBook = (book, num) => {
    this.book = book;
    this.index = num;
    // console.log("this.index", num);
    // console.table(this.book);
  }

  this.createBookShelf = (searchedBook, id) => {
    // console.log('selected book', searchedBook);
    // console.table('selected book', searchedBook);
    // console.log('user:', id);
    this.newBook = {
      title: searchedBook.volumeInfo.title,
      authors: searchedBook.volumeInfo.authors,
      thumbnail: searchedBook.volumeInfo.imageLinks.thumbnail,
      description: searchedBook.volumeInfo.description,
      categories: searchedBook.volumeInfo.categories[0],
      pageCount: searchedBook.volumeInfo.pageCount,
      publishedDate: searchedBook.volumeInfo.publishedDate,
      user: this.user._id,
      rating: 0
    }
// ==============
// CREATE Route
// ==============

    $http({
      url: 'books/',
      method: 'POST',
      data: this.newBook
    }).then(response => {
      // this.books = newBook;
      this.books.unshift(response.data);
      // console.log(this.arrayOfBooks);
      // console.log(this.books);
      // this.getMyShelf(this.user._id);
    }, error => {
      console.log(error);
    }).catch(err => console.log('Catch', err))
  }

  this.searchAPI = () => {
    $http({
      url: this.url + this.search + '&key=' + this.apikey,
      method: 'GET'
    }).then((response) => {
      // console.log('this search is ', this.search);
      this.searchParam = this.search;
      // console.log(this.searchParam);
      // console.table('search results are', response.data.items);
      this.searchResults = response.data.items;
      this.search = null;
      this.searched = true;
    }, ( error ) => {
      console.log(error);
    }).catch(err => console.log(err));
  }

// ==============
// DELETE Route
// ==============

  this.deleteBook = (id) => {
    // console.log(id);
    $http({
      url: 'books/' + id,
      method: 'DELETE'
    }).then(response => {
      const removeBook = this.books.findIndex(book => book._id === id);
      this.books.splice(removeBook, 1);
    }, error => {
      console.log(error.message);
    }).catch(err => console.log(err))
  }

  this.getShelfBook = (book) => {
    this.book = book;
    this.book.rating = null;
    // console.table(this.book);
  }

// ==============
// UPDATE Route
// ==============
  this.updateBook = () => {
    // console.log(this.book);
    $http({
      url: 'books/' + this.book._id,
      method: 'PUT',
      data: this.formData
    }).then(response => {
      this.book = this.formData;
      const updateByIndex = this.books.findIndex(book => book._id === response.data._id)
      this.books.splice(updateByIndex, 1, response.data)
      this.formData = {};
    }, error => {
      console.log(error.message);
    }).catch(err => console.log(err))
  }

}]);
