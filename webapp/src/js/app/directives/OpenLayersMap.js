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
            if (value === true) {
               createMap();
            }
         });
         scope.$watch('currentStyle', function(value) {
            if(value == true){
               map == null;            }
         })

         function createMap() {
            var data = LayerService.getLayer(layerId);
            map = new ol.Map({
               interactions: ol.interaction.defaults().extend([
                  new ol.interaction.DragRotateAndZoom()
               ]),
              /*
               OpenStreetMap.org
              layers: [
                  new ol.layer.Tile({
                     source: new ol.source.OSM()//({layer: 'sat'})
                  })
               ],*/
               /*BingMaps*/
               layers:[
                  new ol.layer.Tile({
                     source: new ol.source.BingMaps({
                        //key: 'Ak-dzM4wZjSqTlzveKz5u0d4IQ4bRzVI309GxmkgSVr1ewS6iPSrOvOKhA-CJlm3', (EXTRA KEY, NOT SURE IF USABLE)
                        key: 'ApIoyYsERVp3k4qSR6QjvmUirGLg3W3z4dOTl0oHxht3Molu2AozfsSoJyZsNrhD',
                        imagerySet: 'Aerial'
                     })
                  })
               ],
               renderer: 'dom',
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