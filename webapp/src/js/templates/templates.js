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
    "\n" +
    "\n" +
    "\n" +
    "</div>");
}]);

angular.module("main.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("main.tpl.html",
    "<div class=\"col-md-8\"><openlayers></openlayers></div>");
}]);
