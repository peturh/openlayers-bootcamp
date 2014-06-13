/**
 * Created by petur on 2014-06-12.
 */
app.controller('MainCtrl',['$scope', function($scope) {


   $scope.styles = [
      'Road',
      'Aerial',
      'AerialWithLabels',
      'collinsBart',
      'ordnanceSurvey'
   ];

   $scope.initialized = false;
   $scope.init = function () {
      $scope.currentStyle = 'Aerial';
      $scope.initialized = true;
   };


}]);