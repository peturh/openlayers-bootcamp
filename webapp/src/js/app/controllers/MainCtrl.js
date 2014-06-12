/**
 * Created by petur on 2014-06-12.
 */
app.controller('MainCtrl',['$scope', function($scope) {




   var cybercom = [
      [55.61462, 12.98941],
      [55.614665, 12.989755],
      [55.614585, 12.98979],
      [55.61454, 12.98944]
   ];

   var currentViewData;
   //$scope.previousViewData = [];

   $scope.initialized = false;

   $scope.init = function () {
      $scope.initialized = true;
      console.log("init in ctrl")

   };


}]);