angular.module('starter.controllers', ['ionic','ngCordova'])

.controller('HomeCtrl', function($scope,$cordovaCamera,$ionicPopup,$timeout) {

   //initialize the image position with a default image 
   $scope.pictureUrl = './img/300x300.png';
   // This variable is under development,this will be updated after I complete this
   $scope.pictureBool = true;


   $scope.revertPicture = function(){
     $scope.myText = "";
      var image = document.getElementById('myImage');
              image.src = $scope.pictureUrl;
              console.clear();
   };


   //Take a picture 
   $scope.takePicture = function() {

       $cordovaCamera.getPicture({
          quality: 50,
          destinationType: Camera.DestinationType.DATA_URL,
          sourceType: Camera.PictureSourceType.CAMERA,
          allowEdit: true,
          encodingType: Camera.EncodingType.JPEG,
          targetWidth: 300,
          targetHeight: 300,
          popoverOptions: CameraPopoverOptions,
          saveToPhotoAlbum: true,
        correctOrientation:true
       }).then(function(imageData) {
              var image = document.getElementById('myImage');
              image.src = "data:image/jpeg;base64," + imageData;
              pictureBool = false;

       }, function(err) {
          console.log(err)
       });
          console.log("success")
       }




   // An alert dialog
   $scope.showAlert = function() {
     var alertPopup = $ionicPopup.alert({
       title: 'Confirmation',
       template: '<center>Your message has been sent!  </center>'
     });
    //  alertPopup.then(function(res) {
    //    console.log('Thank you for not eating my delicious ice cream cone');
    //  });
   };

  


})


.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
