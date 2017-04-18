angular.module('starter.controllers', ['ionic','ngCordova'])

.controller('HomeCtrl', function($scope,$cordovaCamera) {

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

    //console.log($scope.textBool);

  


})


.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
