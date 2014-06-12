app.factory('LayerService', ['ViewportService', function (ViewportService) {

   var dockplats = [55.61462, 12.98958];

   var layers = [{
      id: '1',
      name: 'Skåne',
      center: dockplats,
      defaultZoom: 9,
      overlays: []
   }];


   function getLayers() {
      return layers;
   }

   function getLayer(id) {
      var layer;
      for (var i = 0; i < layers.length; i++) {
         if (layers[i].id == id) {
            layer = layers[i];
            break;
         }
      }
      return layer;
   }


   return {
      getLayers: getLayers,
      getLayer: getLayer,
      getViewports: ViewportService.getViewports
   }

} ])