/**
 * Created by petur on 2014-06-12.
 */

app.controller('ToolsCtrl', ['$scope',  function($scope){

   $scope.listOfTools = [];
   $scope.number = 0;

   $scope.myFirstPopUp = function(){
      $scope.number++;
   }

}])