const app = angular.module('MyMoviesApp', []);
app.controller('MainController', ['$http', function($http){
  this.url= 'http://localhost:3000'
  this.form = false;

// ========================
// GET (and display) Route
// ========================

  this.getMovies = () => {
    $http({
      url: this.url + '/movies',
      method: 'GET'
    }).then(response => {
      this.movies = response.data
      console.log(response.data);
    }, error => {
      console.log(error.message);
    }).catch(err => console.log(err))
  }

  this.getMovies();

  this.getActors = () => {
    $http({
      url: this.url + '/actors',
      method: 'GET'
    }).then(response => {
      this.actors = response.data
      console.log(response.data);
    }, error => {
      console.log(error.message);
    }).catch(err => console.log(err))
  }

  this.getActors();

  // info on book
  // this.getBook = (book, num) => {
  //   this.book = book;
  //   this.index = num;
    // console.log("this.index", num);
    // console.table(this.book);
  // }
  // this.addMovie() = () => {
  //   this.form = true
  // }
//   this.createBookShelf = (searchedBook, id) => {
//     // console.log('selected book', searchedBook);
//     // console.table('selected book', searchedBook);
//     // console.log('user:', id);
//     this.newBook = {
//       title: searchedBook.volumeInfo.title,
//       authors: searchedBook.volumeInfo.authors,
//       thumbnail: searchedBook.volumeInfo.imageLinks.thumbnail,
//       description: searchedBook.volumeInfo.description,
//       categories: searchedBook.volumeInfo.categories[0],
//       pageCount: searchedBook.volumeInfo.pageCount,
//       publishedDate: searchedBook.volumeInfo.publishedDate,
//       user: this.user._id,
//       rating: 0
//     }
// // ==============
// // CREATE Route
// // ==============
//
//     $http({
//       url: '/movies',
//       method: 'POST',
//       data: this.newMovie
//     }).then(response => {
//       this.movies.unshift(response.data);
//     }, error => {
//       console.log(error);
//     }).catch(err => console.log('Catch', err))
//   }
//
//   //   $http({
  //     url: '/movies',
  //     method: 'POST',
  //     data: this.newActor
  //   }).then(response => {
  //     this.actor.unshift(response.data);
  //   }, error => {
  //     console.log(error);
  //   }).catch(err => console.log('Catch', err))
  // }

//   this.searchAPI = () => {
//     $http({
//       url: this.url + this.search + '&key=' + this.apikey,
//       method: 'GET'
//     }).then((response) => {
//       // console.log('this search is ', this.search);
//       this.searchParam = this.search;
//       // console.log(this.searchParam);
//       // console.table('search results are', response.data.items);
//       this.searchResults = response.data.items;
//       this.search = null;
//       this.searched = true;
//     }, ( error ) => {
//       console.log(error);
//     }).catch(err => console.log(err));
//   }
//
// // ==============
// // DELETE Route
// // ==============
//
//   this.deleteBook = (id) => {
//     // console.log(id);
//     $http({
//       url: 'books/' + id,
//       method: 'DELETE'
//     }).then(response => {
//       const removeBook = this.books.findIndex(book => book._id === id);
//       this.books.splice(removeBook, 1);
//     }, error => {
//       console.log(error.message);
//     }).catch(err => console.log(err))
//   }
//
//   this.getShelfBook = (book) => {
//     this.book = book;
//     this.book.rating = null;
//     // console.table(this.book);
//   }
//
// ==============
// UPDATE Route
// ==============
  this.updateBook = () => {
    // console.log(this.book);
    // $http({
    //   url: '/activemovie',
    //   method: GET,
    // }).then(response => {this.activemovie = response})
    // });
    //
    $http({
      url: '/movies/' + this.activemovie,
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
//
}]);

// ======================
// ratings.ejs functions
// ======================


function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}
function openNavLogin() {
  document.getElementById("mySidenavLogin").style.width = "250px";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
function closeNavLogin() {
  document.getElementById("mySidenavLogin").style.width = "0";
}
