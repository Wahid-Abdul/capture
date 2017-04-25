angular.module('starter.controllers', ['ionic', 'ngCordova'])

.controller('HomeCtrl', function($scope, $cordovaCamera, $ionicPopup, $timeout, $http) {
    $scope.getting = function() {
        $http.post('http://headers.jsontest.com/', data, config)
            .success(function(data, status, headers, config) {
                $scope.PostDataResponse = data;
                console.log($scope.PostDataResponse);
            })
            .error(function(data, status, header, config) {
                $scope.ResponseDetails = "Data: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
            });
    }

    $scope.CallNumber = function(inp) {
        console.log(inp)
        var number = inp;
        window.plugins.CallNumber.callNumber(function() {
            //success logic goes here
        }, function() {
            //error logic goes here
        }, number)

    };


    //initialize the image position with a default image 
    $scope.pictureUrl = './img/300x300.png';
    // This variable is under development,this will be updated after I complete this
    $scope.pictureBool = true;


    $scope.revertPicture = function() {
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
            correctOrientation: true
        }).then(function(imageData) {
            var image = document.getElementById('myImage');
            image.src = "data:image/jpeg;base64," + imageData;
            pictureBool = false;

        }, function(err) {
            console.log(err)
        });
        console.log("success")
    }


    // Triggered on a button click, or some other target
    $scope.showPopup = function() {
        $scope.data = {}

        // An elaborate, custom popup
        var myPopup = $ionicPopup.show({
            template: '<input type="password" ng-model="data.wifi">',
            title: 'Enter Wi-Fi Password',
            subTitle: 'Please use normal things',
            scope: $scope,
            buttons: [
                { text: 'Cancel' },
                {
                    text: '<b>Save</b>',
                    type: 'button-positive',
                    onTap: function(e) {
                        if (!$scope.data.wifi) {
                            //don't allow the user to close unless he enters wifi password
                            e.preventDefault();
                        } else {
                            return $scope.data.wifi;
                        }
                    }
                },
            ]
        });
        myPopup.then(function(res) {
            console.log('Tapped!', res);
        });
        $timeout(function() {
            myPopup.close(); //close the popup after 3 seconds for some reason
        }, 3000);
    };



    // An alert dialog
    $scope.showAlert = function() {
        console.log($scope.inputNumber);
        $scope.valueee = 92929;
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