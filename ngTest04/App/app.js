(function () {
    "use strict";

    angular.module('ngTest04', ['ui.router', 'ngAnimate', 'ui.bootstrap'])
        .config(config);

    function config($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('home', {
                url: '/home',
                template: 'Select a menu item.'
            })
            .state('testAreaOne', {
                url: '/test/area/one',
                templateUrl: 'App/Views/TestArea01/test.html'
            })
            .state('testAreaTwo', {
                url: '/test/area/two',
                templateUrl: 'App/Views/TestArea02/test.html'
            });

    };

})();