/**
 *
 * Non-working example
 * Build this into angular!?
 *
 * Try it out: http://ol3js.org/en/master/examples/drag-rotate-and-zoom.html
 */

var map = new ol.Map({
   interactions: ol.interaction.defaults().extend([
      new ol.interaction.DragRotateAndZoom()
   ]),
   layers: [
      new ol.layer.Tile({
         source: new ol.source.MapQuest({layer: 'sat'})
      })
   ],
   renderer: exampleNS.getRendererFromQueryString(),
   target: 'map',
   view: new ol.View2D({
      center: [0, 0],
      zoom: 2
   })
});