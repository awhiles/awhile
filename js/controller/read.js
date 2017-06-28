angular.module('app')
    .controller('readCtrl',['$scope',function($scope){
        $scope.readPos = [
            {left:150,top:0,width:640,height:375,z:8},
            {left:0,top:33,width:493,height:289,z:6},
            {left:300,top:53,width:410,height:240,z:4},
            {left:320,top:73,width:341,height:200,z:2},
            {left:50,top:93,width:256,height:150,z:0},
            {left:467,top:33,width:493,height:289,z:6}
        ]
    }]);