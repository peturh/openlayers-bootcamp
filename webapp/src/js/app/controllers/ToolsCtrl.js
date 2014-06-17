/**
 * Created by petur on 2014-06-12.
 */

app.controller('ToolsCtrl', ['$scope', 'socket',  function($scope,socket) {

   $scope.number = 0;



   $scope.myFirstPopUp = function(){
      $scope.number++;
   }

   socket.on('signal', function (data) {
      $scope.signal = data;
      console.log(data)
   });

}])