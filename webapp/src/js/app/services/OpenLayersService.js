app.factory('OpenLayersService', [function () {

   
   var cloudmadeApiKey = 'fabef1cdde8b4c6888ad26dcf16efcfe'; // defualt '8ee2a50541944fb9bcedded5165f09d9';
   var mapServiceUrls = {
      osm: {
         url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
         attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      },
      cloudmade: {
         url: 'http://{s}.tile.cloudmade.com/' + cloudmadeApiKey + '/997/256/{z}/{x}/{y}.png',
         attribution: '&copy; <a href="http://cloudmade.com">CloudMade</a>',
         attribution2: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors,'
            + ' <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>'
      }
   };
   var mapService = mapServiceUrls.osm;
   var defaultZoom = 9;
   var maxZoom = 20;
   var maxNativeZoom = 18;

   L.Icon.Default.imagePath = 'assets/images/leaflet/';


   return {
      getConfig: function () {
         return {
            mapService: mapService,
            maxZoom: maxZoom,
            maxNativeZoom: maxNativeZoom
         };
      }
   }

} ])