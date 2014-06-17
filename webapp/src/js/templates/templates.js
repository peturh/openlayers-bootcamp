angular.module('templates', ['left.tpl.html', 'main.tpl.html']);

angular.module("left.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("left.tpl.html",
    "<div class=\"col-md-4 left-column\" ng-controller=\"ToolsCtrl\">\n" +
    "\n" +
    "\n" +
    "   <h3>Here should the tools be placed</h3>\n" +
    "\n" +
    "   <button type=\"button\" class=\"btn btn-primary btn-lg\" ng-click=\"myFirstPopUp()\">Click me</button>\n" +
    "   You've pressed the button {{number}} times\n" +
    "\n" +
    "<div class=\"socket-signals\">\n" +
    "\n" +
    "  <h3> Here will we display socket signals</h3>\n" +
    "\n" +
    "   Time: {{time}}\n" +
    "   Signal: {{signal}}\n" +
    "\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "</div>");
}]);

angular.module("main.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("main.tpl.html",
    "<div class=\"col-md-8 map-size\" ng-controller=\"MainCtrl\" ng-init=\"init()\">\n" +
    "   <div class=\"main-map\" open-layers-map data-zoom=\"9\" data-layer=\"1\"></div>\n" +
    "</div>");
}]);
