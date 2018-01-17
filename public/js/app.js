const app = angular.module('MyMoviesApp', []);

app.controller('MainController', ['$http', function ($http) {
  this.url = 'http://localhost:3000'
  this.addForm = false;
  this.editModal = false;
  this.taken = false;
  this.shortPass = false;
  this.shortUser = false;
  this.badLogin = false;
  this.addMovie = () => {
    this.addForm = !this.addForm;
  }

  $http({
    url: '/session',
    method: 'GET'
  }).then(response => {
    this.user = response.data;
  }, error => {
    // console.log(error.message);
  }).catch(err => console.log(err))

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
    console.log(movie);
    $http({
      url: this.url + '/movies/' + movie.id,
      method: 'PUT',
      data: this.createForm
    }).then(response => {
      this.getMovies();
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
      this.getMovies();
    }, error => {
      console.log(error.message);
    }).catch(err => console.log(err))
  }

  // ==============
  // Register Route
  // ==============

  this.registerUser = (id) => {

    this.shortUser = false;
    this.shortPass = false;
    this.taken = false;

    let pass = true;
    const newUser = {
      'email': `${this.newUserForm.username}@sample.com`,
      'password': this.newUserForm.password
    }


    if (this.newUserForm.username.length < 6) {
      pass = false;
      this.shortUser = true;
    }

    if (this.newUserForm.password.length < 8) {
      pass = false;
      this.shortPass = true;
    }

    if (pass) {
      $http({
        url: this.url + '/auth/',
        method: 'POST',
        data: newUser
      }).then(response => {
        this.user = response.data;
        this.user.name = this.newUserForm.username;
        this.newUserForm = {};
        this.shortPass = false;
        this.shortUser = false;
        this.taken = false;
        closeNav();
      }, error => {
        this.newUserForm = {};
        this.taken = true;
        console.log(error.message);
      }).catch(err => console.log(err))
    }

  }

  this.logout = () => {
    this.user = null;

    $http({
      url: '/session',
      method: 'DELETE',
    }).then(response => {
    }, error => {
      console.log(error.message);
    }).catch(err => console.log(err))
  }

  // ==============
  // Login Route
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
      this.user.name = this.loginForm.username;
      this.loginForm = {};
      this.badLogin = false;
      this.shortUser = false;
      this.shortPass = false;
      closeNavLogin();

      $http({
        url: '/session',
        method: 'POST',
        data: this.user
      }).then(response => {
      
      }, error => {
        
        console.log(error.message);
      }).catch(err => console.log(err))

    }, error => {
      this.badLogin = true;
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
