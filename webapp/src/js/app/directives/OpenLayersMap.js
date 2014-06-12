app
.directive('openLayersMap', ['OpenLayersService', 'LayerService',
function (OpenLayersService, LayerService) {

   return {
      restrict: 'A',
      link: function (scope, element, attr) {

         var el = element[0];
         var layerId = attr.layer;
         var map;
         scope.$watch('initialized', function (value) {
            console.log("init in directive")
            console.log('map directive - initialized ' + value);
            if (value === true) {
               console.log("value?")
               createMap();
            }
         });

         function createMap() {
            var data = LayerService.getLayer(layerId);
            console.log('data', data);
            //map = L.map(el).setView(data.center, data.defaultZoom);


            map = new ol.Map({
               interactions: ol.interaction.defaults().extend([
                  new ol.interaction.DragRotateAndZoom()
               ]),
               layers: [
                  new ol.layer.Tile({
                     source: new ol.source.OSM()//({layer: 'sat'})
                  })
               ],
               renderer: 'dom', //exampleNS.getRendererFromQueryString(),
               target: el,
               view: new ol.View2D({
                  center: ol.proj.transform([data.center[1], data.center[0]], 'EPSG:4326', 'EPSG:3857'),
                  zoom: data.defaultZoom
               })
            });
         }
      }
   };

} ]);