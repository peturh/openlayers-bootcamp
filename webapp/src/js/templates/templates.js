angular.module('templates', ['left.tpl.html', 'main.tpl.html']);

angular.module("left.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("left.tpl.html",
    "");
}]);

angular.module("main.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("main.tpl.html",
    "");
}]);
