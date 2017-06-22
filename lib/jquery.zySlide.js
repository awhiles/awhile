

//-------------------------------------------------------------------------//
(function ($) {
    // 创建构造函数
    function Slide(ele, options) {
        this.$ele = $(ele)//this. 构造函数的实例对象
        this.options = $.extend({
            speed: 1000,
            delay: 3000
        }, options)//拓展
        this.states = [
            { '&zIndex': 1, width: 120, height: 150, top: 71, left: 134, $opacity: 0.5 },
            { '&zIndex': 2, width: 130, height: 170, top: 61, left: 0, $opacity: 0.6 },
            { '&zIndex': 3, width: 170, height: 218, top: 37, left: 110, $opacity: 0.7 },
            { '&zIndex': 4, width: 224, height: 288, top: 0, left: 262, $opacity: 1 },
            { '&zIndex': 3, width: 170, height: 218, top: 37, left: 468, $opacity: 0.7 },
            { '&zIndex': 2, width: 130, height: 170, top: 61, left: 620, $opacity: 0.6 },
            { '&zIndex': 1, width: 120, height: 150, top: 71, left: 496, $opacity: 0.5 }
        ]
        this.lis = this.$ele.find('li')
        this.interval
        // 点击切换到下一张

        this.$ele.find('section:nth-child(2)').on('click', function () {
            this.stop()
            this.next()
            this.play()
        }.bind(this))
        // 点击切换到上一张
        this.$ele.find('section:nth-child(1)').on('click', function () {
            this.stop()
            this.prev()
            this.play()
        }.bind(this))
        this.move()
        // 让轮播图开始自动播放
        this.play()
    }


    Slide.prototype = {


        // 原型是一个对象，所以写成一个花括号

        // move()方法让轮播图到达states指定的状态
        // <1>当页面打开时将轮播图从中心点展开
        // <2>当轮播图已经展开时，会滚动轮播图(需要翻转states数组中的数据)
        move: function () {

            this.lis.each(function (i, el) {
                $(el)
                    .css('z-index', this.states[i]['&zIndex'])
                    .finish().animate(this.states[i], this.options.speed)
                    // .stop(true,true).animate(states[i], 1000)
                    .find('img').css('opacity', this.states[i].$opacity)
            }.bind(this))
        },
        // 让轮播图切换到下一张
        next: function () {

            this.states.unshift(this.states.pop())
            this.move()
        },
        // 让轮播图滚动到上一张
        prev: function () {

            this.states.push(this.states.shift())
            this.move()
        },
        play: function () {

            this.interval = setInterval(function () {//这个this指window
                // setInterval、setTimeOut 中的this指向window

                // states.unshift(states.pop())       //从后往前走
                // states.push(states.shift())     //从前往后走
                this.next()
            }.bind(this), this.options.delay)
        },
        // 停止自动播放
        stop: function () {
            // var _this = this
            clearInterval(this.interval)
        }

    }
    $.fn.zySlide = function (options) {
        this.each(function (i, ele) {
            new Slide(ele, options)
        })
        return this
    }
})(jQuery)
//--------------------------------------------------------------------------------------//
    // var $ = jQuery
    // 需要立即调用匿名函数()
    // 本函数每次调用时可以创建一个函数作用域
    // 这个函数作用域只能分配给一个轮播图
    // 所以现在要求调用本函数的时候，必须把
    // 轮播图根标签元素通过参数传过来
    // 调用函数时每次调用都会创造全新的作用域，无论闭包还是不闭包
    // var Slide = function (ele, options) {
    //     // 给函数的参数设置默认值 用|| 3000 1000 都是默认值
    //     // var delay = d || 3000
    //     // var speed = s || 1000
    //     var $ele = $(ele)

        // var options = $.extend({
        //     delay: 3000,
        //     speed: 1000
        // }, options)

    //     var states = [
    //         { '&zIndex': 1, width: 120, height: 150, top: 71, left: 134, $opacity: 0.5 },
    //         { '&zIndex': 2, width: 130, height: 170, top: 61, left: 0, $opacity: 0.6 },
    //         { '&zIndex': 3, width: 170, height: 218, top: 37, left: 110, $opacity: 0.7 },
    //         { '&zIndex': 4, width: 224, height: 288, top: 0, left: 262, $opacity: 1 },
    //         { '&zIndex': 3, width: 170, height: 218, top: 37, left: 468, $opacity: 0.7 },
    //         { '&zIndex': 2, width: 130, height: 170, top: 61, left: 620, $opacity: 0.6 },
    //         { '&zIndex': 1, width: 120, height: 150, top: 71, left: 496, $opacity: 0.5 }
    //     ]
    //     var lis = $ele.find('li')
    //     var interval

    //     // move()方法让轮播图到达states指定的状态
    //     // <1>当页面打开时将轮播图从中心点展开
    //     // <2>当轮播图已经展开时，会滚动轮播图(需要翻转states数组中的数据)
    //     function move() {
    //         lis.each(function (i, el) {
    //             // end():将匹配元素列表变为前一次的状态
    //             // .end()
    //             $(el)
    //                 .css('z-index', states[i]['&zIndex'])
    //                 .finish().animate(states[i], options.speed)
    //                 // .stop(true,true).animate(states[i], 1000)
    //                 .find('img').css('opacity', states[i].$opacity)
    //         })
    //     }
    //     function next() {
    //         states.unshift(states.pop())
    //         move()
    //     }
    //     // 让轮播图滚动到上一张
    //     function prev() {
    //         states.push(states.shift())
    //         move()
    //     }
    //     // 自动播放
    //     function play() {
    //         interval = setInterval(function () {
    //             // states.unshift(states.pop())       //从后往前走
    //             // states.push(states.shift())     //从前往后走
    //             next()
    //         }, options.delay)
    //     }
    //     // 停止自动播放
    //     function stop() {
    //         clearInterval(interval)
    //     }
    //     // 让轮播图从中心点展开
    //     move()
    //     play()

    //     $ele.find('section:nth-child(2)').on('click', function () {
    //         stop()
    //         next()
    //         play()
    //     })
    //     // 点击切换到上一张
    //     $ele.find('section:nth-child(1)').on('click', function () {
    //         stop()
    //         prev()
    //         play()
    //     })
    // }

//     $.fn.zySlide = function () {
//         this.each(function (i, ele, options) {
//             Slide(ele, options)
//         })
//         return this
//     }
// })(jQuery)//单独使用匿名函数时应立即调用匿名函数()
//-------------------------------------------------------------------------//


//-------------------------------------------------------------------------//
// alert(typeof $('body'));




// $.hello = function(){
//     alert('sss')
// }
// $.hello()

// var name = '123';
// console.log(name);
// window.name = '456';
// console.log(name);
// console.log($ele.name);
// $ele.name = 'abc';
// console.log(name);
// function test(){
//     $ele.name = 'xyz';
// }
// // 在全局作用域里，$ele指向的是window
// // 在全局作用域里定义一个函数，
// // <1>非普通方法调用:$ele指向新创建的对象
// // <2>普通方法调用:$ele指向window
// new test()//非普通方法调用
// console.log(name)
// test()//普通方法调用
// console.log(name)

// var testObj = {}
// test.call(testObj)

// console.log(name)
// console.log(testObj.name)
//-------------------------------------------------------------------------//