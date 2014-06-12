app.factory('ViewportService', [function () {

   var dockplats = [55.61462, 12.98958];
   
   var viewports = [{
      name: 'Malmö',
      bounds: [
         [55.63885, 12.93915],
         [55.56592, 13.09845]
      ],
      center: dockplats,
      minZoom: 9,
      maxZoom: 11,
      parentLayer: '1',
      targetLayer: '2'
   }, {
      name: 'Västra hamnen',
      bounds: [
         [55.62334, 12.97142],
         [55.60512, 13.01331]
      ],
      center: dockplats,
      minZoom: 12,
      maxZoom: 14,
      parentLayer: '2',
      targetLayer: '3'
   }, {
      name: 'Dockplats',
      bounds: [
         [55.61535, 12.98803],
         [55.61401, 12.99159]
      ],
      center: dockplats,
      minZoom: 15,
      maxZoom: 17,
      parentLayer: '3',
      targetLayer: '4'
   }, {
      name: 'Cybercom',
      bounds: [
         [55.61478, 12.98929],
         [55.6145, 12.99027]
      ],
      center: dockplats,
      minZoom: 18,
      maxZoom: 20,
      parentLayer: '4',
      targetLayer: '5'
   }];

   function getViewportsFromZoom(zoom) {
      var vp = [];
      for (var i = 0, l = viewports.length; i < l; i++) {
         if (viewports[i].minZoom <= zoom && viewports[i].maxZoom >= zoom) {
            vp.push(viewports[i]);
         }
      }
      return vp;
   }

   function getViewports(layerId) {
      var vp = [];
      for (var i = 0, l = viewports.length; i < l; i++) {
         if (viewports[i].parentLayer == layerId) {
            vp.push(viewports[i]);
         }
      }
      return vp;
   }
   
   return {
      getViewports: getViewports
   }

} ])