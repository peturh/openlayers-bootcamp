app.factory('LayerService', ['ViewportService', function (ViewportService) {

   var dockplats = [55.61462, 12.98958];

   var layers = [{
      id: '1',
      name: 'Skåne',
      center: dockplats,
      defaultZoom: 9,
      overlays: []
   }, {
      id: '2',
      name: 'Malmö',
      center: dockplats,
      defaultZoom: 12,
      overlays: []
   }, {
      id: '3',
      name: 'Västra hamnen',
      center: dockplats,
      defaultZoom: 15,
      overlays: []
   }, {
      id: '4',
      name: 'Dockplats',
      center: dockplats,
      defaultZoom: 18,
      overlays: []
   }, {
      id: '5',
      name: 'Cybercom',
      center: dockplats,
      defaultZoom: 21,
      rotation: 15,
      overlays: [{
         id: '123',
         name: 'Cybercom office',
         type: 'polygon',
         points: [
            [55.61462, 12.98941],
            [55.614665, 12.989755],
            [55.614585, 12.98979],
            [55.61454, 12.98944]
         ]
      }]
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