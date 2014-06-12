/**
 * Created by petur on 2014-06-12.
 */
app.controller('MainCtrl',['$scope', function($scope) {


   $scope.initialized = false;

   $scope.init = function () {
      $scope.initialized = true;
   };


}]);