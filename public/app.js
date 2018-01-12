const app = angular.module('MyMoviesApp', []);
app.controller('MainController', ['$http', function($http){
  this.whatevs = 'whatevs'

  $http({
    method: 'GET',
    url: 'http://localhost:3000/actors',
  }).then(response => {
    console.log('the response is...', response);
    this.users = response.data;
  }).catch(reject => {
    console.log('the rejection is...', reject);
  });

  this.processForm = () => {
    console.log('Form data: ', this.formdata);
    $http({
      method: 'POST',
      url: 'http://localhost:3000/users',
      data: this.formdata
    }).then(response => {
      console.log('response: ', response);
      this.users.unshift(response.data);
    }).catch(reject => {
      console.log('reject: ', reject);
    });

  }]);
