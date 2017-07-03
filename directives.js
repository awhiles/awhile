/**
 * Created by Weetao on 2017-06-21.
 */
angular.module('app')
    // 选项卡切换
    .directive('switchover',function(){
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
    })
    // 轮播
    .directive('piangkeBanner',function(){
        return {
            restrict: 'AE',
            replace: true,
            templateUrl:'template/banner.html',
            scope: {
                pos: '=',
                bannerData: '='
            },
            link:function (scope,el,attr) {
                var pos = scope.pos,
                    E = $(el).find('li'),
                    Rbtn = $(el).find('.btn-right'),
                    Lbtn = $(el).find('.btn-left');
                // confirm position
                $.each(E,function(index,val){
                    E.eq(index).css('zIndex',pos[index].z).stop(true,true).animate(pos[index],0)
                });
                // right direction
                Rbtn.click(function(){
                    motionSwitch(true)
                });
                // left direction
                Lbtn.click(function(){
                    motionSwitch(false)
                });
                // motion switchover
                function motionSwitch(F){
                    if(F){
                        pos.push(pos.shift());

                    }else{
                        pos.unshift(pos.pop());

                    }
                    $.each(E,function(index,val){
                        E.eq(index).css('zIndex',pos[index].z).stop(true,true).animate(pos[index],250)
                    })
                }
            }
        }
    })
    // 导航
    .directive('piangkeNav',function(){
        return {
            restrict: 'AE',
            replace: true,
            link:function (scope,el) {
                var nav = el,
                    t = 0,
                    p = 0;
                $(window).scroll(function(){
                    p = $(this).scrollTop();
                    if(t<=p){
                        nav.css({'top':'-93px','transition':'all 0.3s'});
                    }else{
                        nav.css({'top':0,'transition':'all 0.3s'});
                    }
                    setTimeout(function(){t = p;},0);
                });
            }
        }
    })
    // 返回顶部
    .directive('goBack',function(){
        return {
            restrict: 'AE',
            replace: true,
            link:function (scope,el) {
                var rightBtnAr = el;
                $(document).scroll(function(){
                    var oscrollHeight = $(document).scrollTop();
                    if(oscrollHeight>500){
                        rightBtnAr.fadeIn();
                    }else{
                        rightBtnAr.fadeOut();
                    }
                });
                rightBtnAr.click(function(){
                    $("body").stop(true,true).animate({"scrollTop":0},0)
                })
            }
        }
    });
