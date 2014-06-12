app
.directive('OpenLayersMap', ['OpenLayersService', 'LayerService',
function (OpenLayersService, LayerService) {

   return {
      restrict: 'A',
      link: function (scope, element, attr) {

         var el = element[0];
         var config = OpenLayersService.getConfig();
         var defaultZoom = parseInt(attr.zoom, 10);
         var layerId = attr.layer;
         var map;
         var viewportsLayer,
             overlaysLayer;

         console.log('leaflet map directive, layer ' + layerId);

         scope.$watch('initialized', function (value) {
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


            var source = new ol.source.GeoJSON({
               projection: 'EPSG:3857',
               url: 'assets/geojson/viewports.json'
            });
            console.log('source', source)
            var style = new ol.style.Style({
               fill: new ol.style.Fill({
                  color: 'rgba(255, 255, 255, 0.6)'
               }),
               stroke: new ol.style.Stroke({
                  color: '#319FD3',
                  width: 1
               }),
               image: new ol.style.Circle({
                 radius: 5,
                 fill: new ol.style.Fill({
                    color: 'rgba(255, 255, 255, 0.6)'
                 }),
                 stroke: new ol.style.Stroke({
                    color: '#319FD3',
                    width: 1
                 })
              })
            });
            var vectorLayer = new ol.layer.Vector({
               source: source,
               style: style
            });
            console.log('vectorLayer',vectorLayer)

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
            //console.log(map.getView().getView2D());

            //map.getView().getView2D().setRotation(10);

            window.Map = map;

            //map.getView().getView2D().setCenter(va);

            //renderTiles();
            //createLayerGroups();
            //renderLayerGroups(data);

            //scope.setCurrentViewData(data);
            //map.on('click', onMapClick);
            //map.on('zoomend', onZoomEnd);
         };

         function renderTiles() {
            //L.tileLayer(config.mapService.url, {
            //attribution: config.mapService.attribution,
            //maxZoom: config.maxZoom,
            //maxNativeZoom: config.maxNativeZoom
            //}).addTo(map);
         }

         function onZoomEnd() {
            var data = LayerService.getLayer(layerId);
            scope.setCurrentViewData(data);
            clearLayerGroups();
            renderLayerGroups(data);
         }

         function createLayerGroups() {
            //viewportsLayer = new L.LayerGroup();
            //viewportsLayer.addTo(map);            
            //overlaysLayer = new L.LayerGroup();
            //overlaysLayer.addTo(map);

         }

         function renderLayerGroups(data) {
            renderViewports();
            renderOverlays(data);
         }

         function clearLayerGroups() {
            //viewportsLayer.clearLayers();
            //overlaysLayer.clearLayers();
         }

         function renderViewports(data) {
            var viewports = LayerService.getViewports(layerId);
            angular.forEach(viewports, function (vp) {
               //marker = L.marker(vp.center);
               //marker.on('click', function () {
               //layerId = vp.targetLayer;
               //map.fitBounds(vp.bounds);
               //});
               //viewportsLayer.addLayer(marker);
            });
         }

         function renderOverlays(data) {
            var overlay;
            console.log('render overlays', data);
            angular.forEach(data.overlays, function (o) {
               //overlay = L.polygon(o.points);
               //overlay.on('click', function () {
               //map.setView(data.center, o.zoomTo);
               //});
               //overlaysLayer.addLayer(overlay);
            });
         }

         function onMapClick(e) {
            popup = L.popup();
            popup.setLatLng(e.latlng)
            .setContent("You clicked the map at " + e.latlng.toString())
            .openOn(map);
         }

      }
   };

} ]);