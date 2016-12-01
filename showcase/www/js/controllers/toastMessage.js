angular.module('starter.controllers')
  .controller('toastMessage', function ($scope) {

    $scope.showTop = function(){
      window.plugins.toast.show('Hello there!','short','top');
    };

    $scope.showCenter = function(){
      window.plugins.toast.show('Hello there!','short','center');
    };

    $scope.showBottom = function(){
      window.plugins.toast.show('Hello there!','short','bottom');
    };

    $scope.showStyledToast = function(){
      window.plugins.toast.showWithOptions({
        message: "Hello there!",
        duration: "short", // 2000 ms
        position: "bottom",
        styling: {
          opacity: 0.75, // 0.0 (transparent) to 1.0 (opaque). Default 0.8
          backgroundColor: '#FF0000', // make sure you use #RRGGBB. Default #333333
          textColor: '#FFFF00', // Ditto. Default #FFFFFF
          textSize: 20.5, // Default is approx. 13.
          cornerRadius: 16, // minimum is 0 (square). iOS default 20, Android default 100
          horizontalPadding: 20, // iOS default 16, Android default 50
          verticalPadding: 16 // iOS default 12, Android default 30
        }
      });
    }
    
  });
