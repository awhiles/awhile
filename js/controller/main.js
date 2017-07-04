/**
 * Created by Weetao on 2017-06-29.
 */
  app.controller('mainCtrl',['$scope',function($scope){
        $scope.loginS=false;
        $scope.openLogin=function(){
            $scope.loginS=true;
            $('html').css({'overflow':'hidden'});
        };
        $scope.closeLogin=function(){
            $scope.loginS=false;
            $('html').css({'overflow':'auto'});
        }
    }]);