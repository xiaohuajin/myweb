/**
 * Created by dell on 2017/2/21.
 */


    $(function () {

        //��������
        //һ�����ز���
        $(".hn_nav>li").mouseover(function () {
            //console.log(1);
            $(this).children("div").show();
        });
        $(".hn_nav>li").mouseout(function () {
            //console.log(1);
            $(this).children("div").hide();
        });

        //�������ز���
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
        //�������غ�����ɫ

        //input��ȡ�¼���Ч
        $("#top-search-kewords").focus(fn);
        var timer = setInterval(500);
        function fn() {
            $("#top-search-kewords").css("width","250");
        }
        $("#top-search-kewords").blur(function () {
            $("#top-search-kewords").css("width","110")
        })

        //��������ò�Ʒ��Ч
        $(".children-ul>li").mouseover(function () {
            var index = $(this).index();
            $(this).parent("ul").next("div").children("ul").eq(index).css({"opacity":1,color:"#000"}).siblings("ul").css("opacity",0.5);
        });


        //��ҵ�������
        $(".plan>li").eq(0).mouseenter(function () {
            console.log(1);
            $(".hn-nav-two-box>ul").eq(0).css("opacity",1);
            console.log($(".hn-nav-two-box>ul").eq(0));
        });
        $(".children-ul>li").mouseleave(function () {
            //console.log(1);
            $(".hn-nav-two-box>ul").eq(0).css("opacity",0.5);
        });


            //ҳ����ͼ�Ӿ�����
        //-��ť����
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

        //�ֲ�����
        $(".banner-bt-ul>li").mouseenter(function () {
            $(this).toggleClass("cur").siblings().removeAttr("class");
        })

        var key = 0;
        var square = 0;
        $("#btn-next").click(aotuplay);

        //var timer = setInterval(aotuplay,5000);
        //�����������ʱ�����ƿ��ڴο�����ʱ����
        //����ӵ��¼���(��ʾ���ذ�ť)
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

        //��Ʒ���ർ��
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
            //���󣺵��navLiArr�е�li��Ӧ��ʾcontLiArr�е�li��ǩҳ��
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
            //��Ʒ�׷�START
            //tab hover
            $(".js_newpro_tab li").hover(function(){
                var i=$(".js_newpro_tab li").index(this);

                var moveleft=100/4*i+"%"
                $(".js_newpro_moveline").stop().animate({left:moveleft},500);
                var this_i=$(".js_newpro_tab li").index(this);
                newpro_shownext(this_i);
            },function(){

            });


            //3�붨ʱ�ֲ�
            newpro_time=setInterval(function(){
                newpro_shownext(null)
            },1500);

            //hoverֹͣ�ֲ�
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



            //��ʾ��һ��
            function newpro_shownext(i){
                $cur=$(".js_newpro_ad .cur");
                var cur_i=$(".js_newpro_ad li").index($cur);
                if(i==null){
                    //û�в��� ������һ��
                    var max_i=$(".js_newpro_ad li").length-1;
                    var next_i=cur_i+1;
                    if(next_i>max_i){
                        next_i=0;
                    }
                }else{
                    //�в��� ���Ų���ָ������
                    var next_i=i;
                }

                var moveleft=100/4*next_i+"%"

                $(".js_newpro_ad li").eq(cur_i).slideUp(800).removeClass("cur");
                $(".js_newpro_ad li").eq(cur_i).find(".js_newpro_move").fadeOut(500);

                $(".js_newpro_ad li").eq(next_i).fadeIn(800).addClass("cur");
                $(".js_newpro_ad li").eq(next_i).find(".js_newpro_move").fadeIn(800);
                $(".js_newpro_moveline").stop().animate({left:moveleft},500);
                //�Ƴ�����

                setTimeout(function(){
                    $(".js_newpro_move").removeClass("show");
                    $(".js_newpro_ad li").eq(next_i).find(".js_newpro_move").addClass("show");
                },100);
            };
        });
        

        //���ض���С���
        $(document).scroll(function () {
            //console.log( $(document).scrollTop());
            if($(document).scrollTop()>600){

                $(".return-top").css("display","block");
            }else{
                $(".return-top").css("display","none");
            };
            leader = $(document).scrollTop();
            //ҳ�汻��ȥ��ͷ����ֵ������ҳ��������ꡣ��Ļÿ�λ���������Ϊleader��ֵ��
        })


        var timer = null;
        var target = 0;
        var leader = 0;//ҳ��������꣬��Զ���Ǳ���ȥ��ͷ����
        $(".return-top").click(function () {
            timer = setInterval(function () {
                //��ȡ����
                var step = (target-leader)/10;
                //���δ�����
                step = step>0?Math.ceil(step):Math.floor(step);
                leader = leader + step;
                //��ֵ��
                window.scrollTo(0,leader);
                console.log(1);
                //�����ʱ��
                if(target === leader){
                    clearInterval(timer);
                };
            },30);
        })

        //�̶�������
        $(window).scroll(function () {
            //�����ȥ���ִ��ڵ������֣��õ����̶���λ
            if($(".top-nav").height() <= $(document).scrollTop()){
                //console.log($(".top-nav").height());
                //console.log($(document).scrollTop());
                $(".top-nav").css({position:"fixed",top:0,left:0});
                var json2 = {"margin-top":$(".top-nav").height()};
                $(".hn-banner").css(json2);
            }else{
                //����ָ�
                var json3 = {position:"relative",top:0,left:0};
                $(".top-nav").css(json3);
                var json4 = {"margin-top": 0};
                $(".hn-banner").css(json4);
            };
        });

    });



    //�̳�ר��
    $(function () {
        //jquery�������ص㣺   1.��ʽ������   2.��ʽ��̡�
        //����1��������li�У�������li���͸����0.4����ǰli���1��
        $(".hn_mallZone-display li").mouseenter(function () {
            //                $(".wrap li").css("opacity",0.4);
            //                $(this).css("opacity",1);
            //�õ�ǰԪ�ر��1�������ı��0.4��(��ʽ��̡�)
            $(this).css("opacity", 1).siblings("li").css("opacity", 0.3);
        });

        $(".hn_mallZone-display").mouseleave(function () {
            $(".hn_mallZone-display li").css("opacity", 1);
        });

    });





    //��Ծ¥��
    $(document).scroll(function () {
        //console.log( $(document).scrollTop());
        if($(document).scrollTop()>400){

            $(".jump").css("display","block");
        }else{
            $(".jump").css("display","none");
        };
        leader = $(document).scrollTop();
        //ҳ�汻��ȥ��ͷ����ֵ������ҳ��������ꡣ��Ļÿ�λ���������Ϊleader��ֵ��
    })

    //�����ɫ

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
        //˼·�����ol�е�li������Ŀ��ֵ��Ȼ�����û����������ƶ���ָ��λ�á�
        for(var i=0;i<olLisArr.length;i++){
            //���԰󶨻�ȡ����ֵ��
            olLisArr[i].index = i;
            olLisArr[i].onclick = function () {
                for(var j=0;j<olLisArr.length;j++){
                    olLisArr[j].style.backgroundColor = "";
                }
                this.style.backgroundColor = "#32BEFF";
                //��ȡul�ж�Ӧ��li�����붥���ľ��롣
                targets = divArr[this.index].offsetTop;
                //2.�����ƶ�ҳ�档
                clearInterval(timers);
                timers = setInterval(function () {
                    //��ȡ����
                    var step = (targets - leaders)/10;
                    //���δ�����
                    step = step>0?Math.ceil(step):Math.floor(step);
                    leaders = leaders + step;
                    //��ҳ���ƶ�
                    window.scrollTo(0,leaders);
                    console.log(1);
                    //�����ʱ����
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


//�������ʣ��Ŵ�

window.onload = function () {
    //����1����������ʾ�ƺ��Ӻʹ���ӣ��ƿ����ء�
    //����2������ƶ����ƺ��Ӹ��棨����1/2��������/�ں����е����꣩��
    //����3������ж����Ҳ�Ĵ�����е�ͼƬ�ȱ����ƶ���

    //��ȡ�������Ԫ�ء�
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

        //ͼƬ�ı������⣺
        var bili = bigImg.offsetWidth/small.offsetWidth;
        var bili = (bigImg.offsetWidth - big.offsetWidth) / (small.offsetWidth - mask.offsetWidth);

        var imgx = x * bili;
        var imgy = y * bili;

        bigImg.style.marginLeft = -imgx + "px";
        bigImg.style.marginTop = -imgy + "px";

    }
}




