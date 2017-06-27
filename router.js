/**
 * Created by Weetao on 2017-06-21.
 */
var app = angular.module('app', [
    'ui.router'
]);
angular.module('app')
    .config(["$stateProvider","$urlRouterProvider",function ($stateProvider,$urlRouterProvider){
        //路由配置
        $urlRouterProvider.otherwise('/');
        $stateProvider
            //首页
            .state('index',{
                url:'/',
                views:{
                    'main':{
                        // controller:'homeCtrl',
                        templateUrl:'views/home/home.html'
                    }
                }
            })
            //阅读页
            .state('read',{
                url:'/read',
                views:{
                    'main':{
                        controller:'readCtrl',
                        templateUrl:'views/read/read.html'
                    }
                }
            })
            //电台页
            .state('radio',{
                url:'/radio',
                views:{
                    'main':{
                        // controller:'radioCtrl',
                        templateUrl:'views/radio/radio.html'
                    }
                }
            })
            //碎片页
            .state('debris',{
                url:'/debris',
                views:{
                    'main':{
                        // controller:'debrisCtrl',
                        templateUrl:'views/debris/debris.html'
                    }
                }
            })
            //客户端
            .state('client',{
                url:'/client',
                views:{
                    'main':{
                        // controller:'clientCtrl',
                        templateUrl:'views/client/client.html'
                    }
                }
            })
    }])