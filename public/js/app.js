const app = angular.module('MyMoviesApp', []);

app.controller('MainController', ['$http', function($http){
  this.url= 'http://localhost:3000'
  this.addForm = false;
  this.editModal = false;
  this.addMovie = () => {
    this.addForm = !this.addForm;
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

  this.processCreateForm = () => {
    $http({
      url: this.url + '/movies',
      method: 'POST',
      data: this.createForm
    }).then(response => {
      this.movies.push(response.data);
      this.createForm = {};
    }).catch(err => console.log('Catch', err))
  }

  // ==============
  // UPDATE Route
  // ==============

  this.createForm = {}

  this.processEditForm = (movie) => {
    $http({
      url: this.url + '/movies/' + movie.id,
      method: 'PUT',
      data: this.createForm
    }).then(response => {
      const updateByIndex = this.movies.findIndex(movie => movie._id === movie.id)
      this.movies.splice(updateByIndex, 1, response.data)
      this.createForm = {};
      this.editModal = false;
    }, error => {
      console.log(error.message);
    }).catch(err => console.log(err))
  }

  // ==============
  // DELETE Route
  // ==============

  this.deleteMovie = (id) => {
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
  // Login Route
  // ==============
  
  this.registerUser = (id) => {

    const newUser = {
      'email': `${this.newUserForm.username}@sample.com`,
      'password': this.newUserForm.password
    }

    $http({
      url: this.url + '/auth/',
      method: 'POST',
      data: newUser
    }).then(response => {
      this.user = response.data;
      this.newUserForm = {};
      closeNav();
    }, error => {
      console.log(error.message);
    }).catch(err => console.log(err))
  }

  this.logout = () => {
    this.user = null;
  }
  
  // ==============
  // Register Route
  // ==============

  this.loginUser = (id) => {

    const user = {
      'email': `${this.loginForm.username}@sample.com`,
      'password': this.loginForm.password
    }

    $http({
      url: this.url + '/auth/sign_in',
      method: 'POST',
      data: user
    }).then(response => {
      this.user = response.data;
      this.loginForm = {};
      closeNavLogin();
    }, error => {
      console.log(error.message);
    }).catch(err => console.log(err))
  }

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
