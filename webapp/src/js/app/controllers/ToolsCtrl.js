/**
 * Created by petur on 2014-06-12.
 */

app.controller('ToolsCtrl', ['$scope', 'socket',  function($scope,socket){

   $scope.number = 0;

   $scope.myFirstPopUp = function(){
      $scope.number++;
   }

   socket.on('send:signal', function (data) {
      $scope.signal = data.signal;
   });


   socket.on('send:time', function (data) {
      $scope.time = data.time;
   });

}])