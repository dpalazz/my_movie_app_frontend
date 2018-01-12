const app = angular.module('MyMoviesApp', []);
app.controller('MainController', ['$http', function($http){
  this.whatevs = 'whatevs'
  console.log(this.whatevs);
// ================
// Index Route
// ================

  // $http({
  //   method: 'GET',
  //   url: 'http://localhost:3000/actors',
  // }).then(response => {
  //   console.log('the response is...', response);
  //   this.users = response.data;
  // }).catch(reject => {
  //   console.log('the rejection is...', reject);
  // });

// ==========================
// Create/Process Form Route
// ==========================

  // this.processForm = () => {
  //   console.log('Form data: ', this.formdata);
  //   $http({
  //     method: 'POST',
  //     url: 'http://localhost:3000/users',
  //     data: this.formdata
  //   }).then(response => {
  //     console.log('response: ', response);
  //     this.users.unshift(response.data);
  //   }).catch(reject => {
  //     console.log('reject: ', reject);
  //   });

// ============
// Edit Route
// ============
    //
    // this.editDates = (x) => {
    //   this.currentDatesEdit = x;
    //   $http({
    //     method: 'PUT',
    //     url: 'http://localhost:3000/users/' + this.currentDatesEdit._id,
    //     data: this.currentDatesEdit
    //   }).then((response) => {
    //     const updateByIndex = this.dates.findIndex(x => x._id === this.edittedData._id)
    //     this.dates[updateByIndex] = this.edittedData;
    //   }).catch(err => console.error('Catch', err));
    // };

  }]);
