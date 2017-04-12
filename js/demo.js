/**
 * Created by dell on 2017/2/21.
 */


    $(function () {

        //导航部分
        //一级隐藏部分
        $(".hn_nav>li").mouseover(function () {
            //console.log(1);
            $(this).children("div").show();
        });
        $(".hn_nav>li").mouseout(function () {
            //console.log(1);
            $(this).children("div").hide();
        });

        //二级隐藏部分
        $(".children-ul").eq(2).children("li").mouseover(function () {
            //console.log(1);
            $(".hn-nav-three-box").show();
        });
        $(".children-ul").eq(2).children("li").mouseout(function () {
            //console.log(1);
            $(".hn-nav-three-box").hide();
        });

        $(".children-ul").eq(1).children("li").mouseover(function () {
            //console.log(1);
            $(".hn-nav-two-box").show();
        });
        $(".children-ul").eq(1).children("li").mouseout(function () {
            //console.log(1);
            $(".hn-nav-two-box").hide();
        });
        $(".children-ul").eq(0).children("li").mouseover(function () {
            //console.log(1);
            $(".hn-nav-one-box").show();
        });
        $(".children-ul").eq(0).children("li").mouseout(function () {
            //console.log(1);
            $(".hn-nav-one-box").hide();
        });

        $(".hn-nav-one-box,.hn-nav-two-box,.hn-nav-three-box").mouseenter(function () {
            $(this).show();
        });
        //二级隐藏后点击变色

        //input获取事件特效
        $("#top-search-kewords").focus(fn);
        var timer = setInterval(500);
        function fn() {
            $("#top-search-kewords").css("width","250");
        }
        $("#top-search-kewords").blur(function () {
            $("#top-search-kewords").css("width","110")
        })

        //个人与家用产品特效
        $(".children-ul>li").mouseover(function () {
            var index = $(this).index();
            $(this).parent("ul").next("div").children("ul").eq(index).css({"opacity":1,color:"#000"}).siblings("ul").css("opacity",0.5);
        });


        //商业解决方案
        $(".plan>li").eq(0).mouseenter(function () {
            console.log(1);
            $(".hn-nav-two-box>ul").eq(0).css("opacity",1);
            console.log($(".hn-nav-two-box>ul").eq(0));
        });
        $(".children-ul>li").mouseleave(function () {
            //console.log(1);
            $(".hn-nav-two-box>ul").eq(0).css("opacity",0.5);
        });


            //页面视图视觉部分
        //-按钮部分
        $("#btn-prve").hide();
        $("#btn-next").hide();
        $(".banner-bt-box").mouseover(function () {
            $("#btn-prve").show();
            $("#btn-next").show();
        });
        $(".banner-bt-box").mouseout(function () {
            $("#btn-prve").hide();
            $("#btn-next").hide();
        });

        //轮播部分
        $(".banner-bt-ul>li").mouseenter(function () {
            $(this).toggleClass("cur").siblings().removeAttr("class");
        })

        var key = 0;
        var square = 0;
        $("#btn-next").click(aotuplay);

        //var timer = setInterval(aotuplay,5000);
        //鼠标进入清除定时器，移开在次开启定时器。
        //大盒子的事件：(显示隐藏按钮)
        $(".banner-bt-box").mouseenter(function () {
            $("#btn-prve").show();
            $("#btn-next").show();
            clearInterval(timer);
        });
        $(".banner-bt-box").mouseout(function () {
            $("#btn-prve").hide();
            $("#btn-next").hide();
            //timer = setInterval(aotuplay,5000);

        });


        function aotuplay() {
            key++;
            if(key===5){
                $(".hn-banner-box").css("left",0);
                key = 1;
            }
            square++;
            if(square === 4){
                square = 0;
            }
            console.log(key);
            $(".banner-bt-ul>li").eq(square).addClass("cur").siblings("li").removeClass("cur");
            $(".hn-banner-box").animate({left:-1519*key},1000);
        }


        $("#btn-prve").click(function () {
            key--;
            if(key===-1){
                $(".hn-banner-box").css("left", - 4*1519 +"px");
                key = 4;
            }
            square--;
            if(square === -1){
                square = 4;
            }
            console.log(key);
            $(".banner-bt-ul>li").eq(square).addClass("cur").siblings("li").removeClass("cur");
            $(".hn-banner-box").animate({left:-1519*key},1000);
        });

        //商品分类导航
        function animate(obj,target) {
            clearInterval(obj.timer);
            obj.timer = setInterval(function () {
                var leader = obj.offsetLeft;
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style.left = leader + "px";
                if (target == leader) {
                    clearInterval(obj.timer);
                }
            }, 8);
        }

        function animates(obj,target) {
            clearInterval(obj.timer);
            obj.timer = setInterval(function () {
                var leader = obj.offsetLeft;
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style.left = leader + "px";
                if (target == leader) {
                    clearInterval(obj.timer);
                }
            }, 8);
        }

        function getStyle(ele,attr){
            if(window.getComputedStyle!=undefined){
                return window.getComputedStyle(ele,null)[attr];
            }else{
                return ele.currentStyle[attr];
            }
        }



        var navLiArr = $("#productHud").children("li");
        var contLiArr = $(".shopping-nav-cont>ul").children("li");
        var index = null;
        var banLiArr = $(".shopping-l-box-probanner>ul").children("li");
        var spArr = $(".shopping-l-box-probanner>.l-box-probanner-nav").children("span");
        var imgWidth =
            //需求：点击navLiArr中的li对应显示contLiArr中的li标签页面
            navLiArr.mouseenter(function () {
                index = $(this).index();

                for(var i = 0; i <navLiArr.length;i++ ){
                    contLiArr.eq(i).hide();
                }
                contLiArr.eq(index).show();


            })
        navLiArr.mouseleave(function () {
            contLiArr.eq(index).show();
        })

        for(var i=0;i<navLiArr.length;i++) {
            navLiArr[i].onmouseover = function () {
                for (var j = 0; j < navLiArr.length; j++) {
                    navLiArr[j].style.backgroundColor = "";
                    navLiArr[j].style.borderTop = "";
                }
                this.style.backgroundColor = "#f6f6f6";
                this.style.borderTop = "2px solid #32BEFF";
            }
        }

        for(var i=0;i<navLiArr.length;i++){
            navLiArr[i].index = i;
            navLiArr[i].onmouseenter = function () {
                for(var j=0;j<navLiArr.length;j++){
                    $(navLiArr[j]).find("span").css("color","");
                }
                $(this).find("span").css("color","#32BEFF") ;
            }
        }

        var boxul = document.getElementsByClassName("boxul")[0];
        var lis = boxul.children;
        var liwidth = lis[0].offsetWidth;
        var spansParent = document.getElementsByClassName("l-box-probanner-nav")[0];
        var spans = spansParent.children;

        for (var i = 0; i < spans.length; i++) {
            spans[i].index = i;
            spans[i].onmouseenter = function () {
                for (var j = 0; j < spans.length; j++) {
                    spans[j].children[0].style.backgroundColor = "";
                }
                this.children[0].style.backgroundColor = "red";
                var target = -liwidth * this.index;
                animate(boxul, target);
                console.log(target);
//                animate({left:target},)
            }
        }

        var boxul2 = document.getElementsByClassName("boxul2")[0];
        var lis2 = boxul2.children;
        var li2width = lis2[0].offsetWidth;
        var spans2Parent = document.getElementsByClassName("l-box-probanner-nav-1")[0];
        var spans2 = spans2Parent.children;

        for (var i = 0; i < spans2.length; i++) {
            spans2[i].index = i;
            spans2[i].onmouseenter = function () {
                for (var j = 0; j < spans2.length; j++) {
                    spans2[j].children[0].style.backgroundColor = "";
                }
                this.children[0].style.backgroundColor = "red";
                var target = -li2width * this.index;
                animate(boxul2, target);
                console.log(target);
            }
        }

        var iceul = document.getElementsByClassName("iceul")[0];
        var liArr = iceul.children;
        var iceLiWidth = liArr[0].offsetWidth;
        var spanParent = document.getElementsByClassName("icebox-1-2-nav")[0];
        var spanArr = spanParent.children;

        for (var i = 0; i < spanArr.length; i++) {
            spanArr[i].index = i;
            spanArr[i].onmouseenter = function () {
                for (var j = 0; j < spanArr.length; j++) {
                    spanArr[j].children[0].style.backgroundColor = "";
                }
                this.children[0].style.backgroundColor = "red";
                var target = -iceLiWidth * this.index;
                animates(iceul,target);
                console.log(target);

            }

        }



        var newpro_time;
        $().ready(function(){
            //新品首发START
            //tab hover
            $(".js_newpro_tab li").hover(function(){
                var i=$(".js_newpro_tab li").index(this);

                var moveleft=100/4*i+"%"
                $(".js_newpro_moveline").stop().animate({left:moveleft},500);
                var this_i=$(".js_newpro_tab li").index(this);
                newpro_shownext(this_i);
            },function(){

            });


            //3秒定时轮播
            newpro_time=setInterval(function(){
                newpro_shownext(null)
            },1500);

            //hover停止轮播
            $(".js_newpro").hover(function(){
                clearInterval(newpro_time);
                newpro_time=null;
            },function(){
                if(newpro_time==null){
                    newpro_time=setInterval(function(){
                        newpro_shownext(null)
                    },2000);
                }
            })



            //显示下一个
            function newpro_shownext(i){
                $cur=$(".js_newpro_ad .cur");
                var cur_i=$(".js_newpro_ad li").index($cur);
                if(i==null){
                    //没有参数 播放下一个
                    var max_i=$(".js_newpro_ad li").length-1;
                    var next_i=cur_i+1;
                    if(next_i>max_i){
                        next_i=0;
                    }
                }else{
                    //有参数 播放参数指定动画
                    var next_i=i;
                }

                var moveleft=100/4*next_i+"%"

                $(".js_newpro_ad li").eq(cur_i).slideUp(800).removeClass("cur");
                $(".js_newpro_ad li").eq(cur_i).find(".js_newpro_move").fadeOut(500);

                $(".js_newpro_ad li").eq(next_i).fadeIn(800).addClass("cur");
                $(".js_newpro_ad li").eq(next_i).find(".js_newpro_move").fadeIn(800);
                $(".js_newpro_moveline").stop().animate({left:moveleft},500);
                //移除动画

                setTimeout(function(){
                    $(".js_newpro_move").removeClass("show");
                    $(".js_newpro_ad li").eq(next_i).find(".js_newpro_move").addClass("show");
                },100);
            };
        });
        

        //返回顶部小火箭
        $(document).scroll(function () {
            //console.log( $(document).scrollTop());
            if($(document).scrollTop()>600){

                $(".return-top").css("display","block");
            }else{
                $(".return-top").css("display","none");
            };
            leader = $(document).scrollTop();
            //页面被卷去的头部的值，就是页面的纵坐标。屏幕每次缓动，重新为leader赋值。
        })


        var timer = null;
        var target = 0;
        var leader = 0;//页面的纵坐标，永远都是被卷去的头部。
        $(".return-top").click(function () {
            timer = setInterval(function () {
                //获取步长
                var step = (target-leader)/10;
                //二次处理步长
                step = step>0?Math.ceil(step):Math.floor(step);
                leader = leader + step;
                //赋值。
                window.scrollTo(0,leader);
                console.log(1);
                //清除定时器
                if(target === leader){
                    clearInterval(timer);
                };
            },30);
        })

        //固定导航栏
        $(window).scroll(function () {
            //如果卷去部分大于导航部分，让导航固定定位
            if($(".top-nav").height() <= $(document).scrollTop()){
                //console.log($(".top-nav").height());
                //console.log($(document).scrollTop());
                $(".top-nav").css({position:"fixed",top:0,left:0});
                var json2 = {"margin-top":$(".top-nav").height()};
                $(".hn-banner").css(json2);
            }else{
                //否则恢复
                var json3 = {position:"relative",top:0,left:0};
                $(".top-nav").css(json3);
                var json4 = {"margin-top": 0};
                $(".hn-banner").css(json4);
            };
        });

    });



    //商城专区
    $(function () {
        //jquery的两大特点：   1.隐式迭代。   2.链式编程。
        //需求1：鼠标进入li中，让所有li变成透明度0.4，当前li变成1；
        $(".hn_mallZone-display li").mouseenter(function () {
            //                $(".wrap li").css("opacity",0.4);
            //                $(this).css("opacity",1);
            //让当前元素变成1，其他的变成0.4；(链式编程。)
            $(this).css("opacity", 1).siblings("li").css("opacity", 0.3);
        });

        $(".hn_mallZone-display").mouseleave(function () {
            $(".hn_mallZone-display li").css("opacity", 1);
        });

    });





    //跳跃楼层
    $(document).scroll(function () {
        //console.log( $(document).scrollTop());
        if($(document).scrollTop()>400){

            $(".jump").css("display","block");
        }else{
            $(".jump").css("display","none");
        };
        leader = $(document).scrollTop();
        //页面被卷去的头部的值，就是页面的纵坐标。屏幕每次缓动，重新为leader赋值。
    })

    //点击变色

    //$(".jump>li").mouseenter(function () {
    //    $(this).css("background","#27bbff");
    //});

    $(function () {
        var body = document.body;
        var divArr = body.children;
        var ols = document.getElementById("jump");
        var olLisArr = ols.children;
        var targets = 0;
        var timers  = null;
        var leaders = 0;

        window.onscroll = function () {
            leaders = scroll().top;
        }
        //思路：点击ol中的li，设置目标值，然后利用缓动动画，移动到指定位置。
        for(var i=0;i<olLisArr.length;i++){
            //属性绑定获取索引值。
            olLisArr[i].index = i;
            olLisArr[i].onclick = function () {
                for(var j=0;j<olLisArr.length;j++){
                    olLisArr[j].style.backgroundColor = "";
                }
                this.style.backgroundColor = "#32BEFF";
                //获取ul中对应的li，距离顶部的距离。
                targets = divArr[this.index].offsetTop;
                //2.缓动移动页面。
                clearInterval(timers);
                timers = setInterval(function () {
                    //获取步长
                    var step = (targets - leaders)/10;
                    //二次处理步长
                    step = step>0?Math.ceil(step):Math.floor(step);
                    leaders = leaders + step;
                    //让页面移动
                    window.scrollTo(0,leaders);
                    console.log(1);
                    //清除定时器。
                    if(Math.abs(targets-leaders) <= Math.abs(step)){
                        window.scrollTo(0,targets);
                        clearInterval(timers);
                    }
                },30);
            }
        }

        function scroll(){
            return {
                top: window.pageYOffset || document.documentElement.scrollTop,
                left: window.pageXOffset || document.documentElement.scrollLeft
            }
        }

    })


//发现新鲜：放大镜

window.onload = function () {
    //需求1：鼠标进入显示黄盒子和大盒子，移开隐藏。
    //需求2：鼠标移动，黄盒子跟随（案例1/2：鼠标跟随/在盒子中的坐标）；
    //需求3：鼠标有动，右侧的大盒子中的图片等比例移动；

    //获取所有相关元素。
    var box = document.getElementById("hn-discovery-show");
    var small = box.children[0];
    var big = document.getElementById("hn-discovery-1-big")
    var mask = small.children[0];
    var bigImg = big.children[0];



    small.onmouseenter = function () {
        //$(".mask").css("display","block");
        big.style.display = "block";
        big.style.zIndex = "1";

        mask.style.display = "block";

    }

    small.onmouseleave = function () {
        $(".mask").css("display","none");
        big.style.display = "none";

    }


    small.onmousemove = function (event) {
        event = event || window.event;
        var pagex = event.pageX || scroll().left + event.clientX;
        var pagey = event.pageY || scroll().top + event.clientY;
        var boxx = box.offsetLeft;
        var boxy = box.offsetTop;
        var x = pagex - boxx - mask.offsetWidth/2;
        var y = pagey - boxy - mask.offsetHeight/2;
        if (x < 0) {
            x = 0;
        } else if (x > small.offsetWidth - mask.offsetWidth) {
            x = small.offsetWidth - mask.offsetWidth;
        }
        if (y < 0) {
            y = 0;
        } else if (y > small.offsetHeight - mask.offsetHeight) {
            y = small.offsetHeight - mask.offsetHeight;
        }

        //$(".mask").css("left",""+x+"+'px'");
        //$(".mask").css("top",""+y+"+'px'");
        mask.style.top = y + "px";
        mask.style.left = x + "px";
        console.log(x);
        console.log(y);

        //图片的比例问题：
        var bili = bigImg.offsetWidth/small.offsetWidth;
        var bili = (bigImg.offsetWidth - big.offsetWidth) / (small.offsetWidth - mask.offsetWidth);

        var imgx = x * bili;
        var imgy = y * bili;

        bigImg.style.marginLeft = -imgx + "px";
        bigImg.style.marginTop = -imgy + "px";

    }
}




