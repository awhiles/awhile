/**
 * Created by Weetao on 2017-06-21.
 */
angular.module('app').directive('switchover',function(){
    return {
        restrict: 'AE',
        replace: true,
        link:function (scope,el) {
            $(el).bind('click',function () {
                $(this).attr("class","active").siblings("a").attr("class","");
                $(this).parents('p').siblings("div").eq($(this).index()).show().siblings("div").hide();
            })
        }
    }
});
