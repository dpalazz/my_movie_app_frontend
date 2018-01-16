const app = angular.module('MyMoviesApp', []);

app.controller('MainController', ['$http', function($http){
  this.url= 'http://localhost:3000'
  this.addForm = false;
  this.addMovie = () => {
    this.addForm = true;
  }

  // ========================
  // GET Route
  // ========================

  this.getMovies = () => {
    $http({
      url: this.url + '/movies',
      method: 'GET'
    }).then(response => {
      this.movies = response.data
    }, error => {
      // console.log(error.message);
    }).catch(err => console.log(err))
  }

  this.getMovies();

  // ==============
  // CREATE Route
  // ==============
  this.createForm = {}

  this.processForm = () => {

    $http({
      url: this.url + '/movies',
      method: 'POST',
      data: this.createForm
    }).then(response => {
      this.movies.push(response.data);
      this.createForm = {};
    }).catch(err => console.log('Catch', err))
  }

  // // ==============
  // // DELETE Route
  // // ==============

  this.deleteMovie = (id) => {
    console.log(id);
    $http({
      url: this.url + '/movies/' + id,
      method: 'DELETE'
    }).then(response => {
      const removeMovie = this.movies.findIndex(movie => movie._id === id);
      this.movies.splice(removeMovie, 1);
    }, error => {
      console.log(error.message);
    }).catch(err => console.log(err))
  }

  // ==============
  // UPDATE Route
  // ==============
  // this.updateBook = () => {
  //   // console.log(this.book);
  //   // $http({
  //   //   url: '/activemovie',
  //   //   method: GET,
  //   // }).then(response => {this.activemovie = response})
  //   // });
  //   //
  //   $http({
  //     url: '/movies/' + this.activemovie,
  //     method: 'PUT',
  //     data: this.formData
  //   }).then(response => {
  //     this.book = this.formData;
  //     const updateByIndex = this.books.findIndex(book => book._id === response.data._id)
  //     this.books.splice(updateByIndex, 1, response.data)
  //     this.formData = {};
  //   }, error => {
  //     console.log(error.message);
  //   }).catch(err => console.log(err))
  // }

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
