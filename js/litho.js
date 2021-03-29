;(function(){

    var litho = {

        init:function(){
            this.scrollFn();
            this.headerFn();
            this.section1Fn();
            this.section4Fn();
            this.section5Fn();
        },
        scrollFn:function(){

            var scrollOld = 0;
            var scrollNew = 0;
            var $win = $(window);
            var result = null;
            var $header = $('#header');
            var that = this;

                function scrollFn(){
                    scrollNew = $win.scrollTop()
                    var scr = function(){
                        result = scrollOld - scrollNew > 0 ? 'UP' : 'DOWN';
                    }
                    scr();

                    if( $win.scrollTop() == 0 ){
                        $header.removeClass('addshow');
                        $header.removeClass('addMobile');
                        $header.removeClass('addHide');
                    }
                    else{
                        if(result == 'UP' ){
                            if( that.btn==1 ){
                                $header.removeClass('addHide');
                                $header.addClass('addshow');
                                $header.addClass('addMobile');
                            }
                            else{
                                $header.addClass('addshow');
                                $header.removeClass('addHide');
                                $header.removeClass('addMobile');
                            }


                        }
                        if(result == 'DOWN'){
                            if( that.btn==1 ){
                                $header.removeClass('addshow');
                                $header.removeClass('addHide');
                                $header.addClass('addMobile');
                            }
                            else{
                                $header.removeClass('addshow');
                                $header.removeClass('addMobile');
                                $header.addClass('addHide');
                            }
                            
                        }
                    }
                    scrollOld = scrollNew;
                }
                $win.scroll(function(){
                    scrollFn();
                });

        },

        headerFn:function(){

            var $window = $(window);
            var $mainBtn = $('#header .main-btn');
            var $subBtn = $('#header .sub-btn');
            var $subSubBtn = $('#header .sub-sub-btn');
            var $sub = $('#header .sub');
            var $subSub = $('#header .sub-sub');
            var $subSubSub = $('#header .sub-sub-sub');
            var $navUlLi = $('#header  #nav > ul > li');
            var $mobileBtn = $('.mobile-btn');
            var $bar = $('.bar');
            var $nav = $('#nav');
            var pc = 0;
            var mobile = 0;
            var $logoImg = $('#header #logo a img')
            var that = this;


            function pcEventFn(){

                $nav.stop().show();
                $sub.stop().hide();
                $subSub.stop().hide();
                $subSubSub.stop().hide();
                $nav.css({display:'inline-block'});

                $logoImg.attr('src','./img/logo-white.png');

                // 메인메뉴 이벤트
                $mainBtn.on({
                    mouseenter:function(e){
                        e.preventDefault();
                        $(this).next().stop().show();
                    }
                });
                $navUlLi.on({
                    mouseleave:function(e){
                        e.preventDefault();
                        $sub.stop().hide();
                    }
                });

                // 서브메뉴 이벤트
                $subBtn.on({
                    mouseenter:function(e){
                        e.preventDefault();
                        $subSub.stop().hide();
                        $(this).next().stop().show();
                    }
                });
                $navUlLi.on({
                    mouseleave:function(e){
                        e.preventDefault();
                        $subSub.stop().hide();
                    }
                });

                // 서브서브메뉴 이벤트
                $subSubBtn.on({
                    mouseenter:function(e){
                        e.preventDefault();
                        $subSubSub.stop().hide();
                        $(this).next().stop().show();
                    }
                });
                $navUlLi.on({
                    mouseleave:function(e){
                        e.preventDefault();
                        $subSubSub.stop().hide();
                    }
                });
            }

            function mobileEventFn(){
                
                $sub.stop().hide();
                $subSub.stop().show();
                $subSubSub.stop().show();  
  
                $bar.removeClass('addMobile');
                $nav.stop().slideUp(0);
  
                $logoImg.attr('src','./img/logo-black.png');
  
  
                //이벤트 삭제
                $mainBtn.off('mouseenter')
                $navUlLi.off('mouseleave')
                $subBtn.off('mouseenter')
                $navUlLi.off('mouseleave')
                $subSubBtn.off('mouseenter')
                $subSub.off('mouseleave')
  
  
  
              }


            function pcMobileFn(){
                if($window.innerWidth()>980){
                    pc=1;
                    mobile=0;
                    pcEventFn();
                    that.btn=0;
                }
                else{
                    pc=0;
                    mobile=1;
                    mobileEventFn();
                }
            }
            setTimeout(pcMobileFn,100);
            
            $window.resize(function(){
                pcMobileFn();
            });
            mobileEventFn();

            $mainBtn.on({
                click:function(e){
                    e.preventDefault();
                    if(mobile==1){
                        $sub.stop().slideUp(300);
                        $(this).next().stop().slideToggle(300);
                    }
                }
            });
            $mobileBtn.on({
                click:function(e){
                    e.preventDefault();
                    $bar.toggleClass('addMobile');
                    $nav.stop().slideToggle(300);

                    that.btn == 0 ? that.btn = 1 : that.btn = 0;
                    
                }
            });






        },

        section1Fn(){
            var $window = $(window)
            var $winW = $(window).width();
            var $winH = $(window).height();
            var $slide = $('#section1 .slide')
            var $slideView = $('#section1 .slide-view')
            var $slideWrap = $('#section1 .slide-wrap')
            var $section1 = $('#section1')
            var $pageBtn = $('#section1 .page-btn-wrap .page-btn')
            var cnt = 0;
            var n = $('#section1 .slide').length-2;
            var setId = null;
            var setId2 = null;

            // 반응형
            function resizeFn(){
                $winW = $(window).width();
                $slide.css({width:$winW,height:$winH});
                //세로형
                if( window.orientation == 0 || window.orientation == 180 ){
                    $winH = $(window).height();
                }
                else if( window.orientation == 90 || window.orientation == -90 ){
                    if($winW>980){
                        $winH = $(window).height();
                    }
                    else{
                        $winH = 500;
                    }
                }
                $section1.css({width:$winW,height:$winH});
                mainSlideFn();
            }
            resizeFn();
            setTimeout(resizeFn,100);

            $window.resize(function(){
                resizeFn()
            });
            


            //1.메인슬라이드
            function mainSlideFn(){
                $slideWrap.stop().animate({left:-$winW*cnt}, 600, function(){
                    if(cnt>2){cnt=0}
                    if(cnt<0){cnt=2}
                    $slideWrap.animate({left:-$winW*cnt}, 0,);
                });
                pageBtnColorEventFn();
            }

            function nextSlideCountFn(){
                cnt++;
                mainSlideFn();
            }
            function prevSlideCountFn(){
                cnt--;
                mainSlideFn();
            }

            function autoSlideFn(){
                setInterval(nextSlideCountFn,4000)
            }
            autoSlideFn();


            $slideView.swipe({
                swipeLeft:function(){
                    if(!$slideWrap.is('.animated')){
                        timerFn();
                        nextSlideCountFn();
                    }
                },
                swipeRight:function(){
                    if(!$slideWrap.is('.animated')){
                        timerFn();
                        prevSlideCountFn();
                    }
                }
            });

            //타이머

            function timerFn(){
                var t = 0;
                clearInterval(setId);
                clearInterval(setId2);
                setId = setInterval(function(){
                    t++;
                    if(t>=4){
                        clearInterval(setId);
                        clearInterval(setId2);
                        nextSlideCountFn();
                        autoSlideFn();
                        
                    }
                },4000);
            }


            // 페이지버튼
            function pageBtnColorEventFn(){
                $pageBtn.removeClass('addPage');
                $pageBtn.eq( cnt > n-1 ? 0 : cnt).addClass('addPage');
                // console.log(cnt);
            }
            pageBtnColorEventFn();

            $pageBtn.each(function(idx){
                $(this).on({
                    click:function(){
                        pauseTimerFn();
                        cnt=idx;
                        mainSlideFn();
                    }
                });                
            })

        },

        section4Fn(){
            var $number = $('.number');
            var cnt = [0,0,0,0];
            var setId = [null,null,null,null];    
                
                function count0Fn(){
                    cnt[0]++;
                    if(cnt[0]>220){
                        clearInterval(setId[0]);
                    }
                    else{
                        $number.eq(0).text(cnt[0]);
                    }
                    
                }  
                
                function count1Fn(){

                    cnt[1]++;
                    if(cnt[1]>380){
                        clearInterval(setId[1]);
                    }
                    else{
                        $number.eq(1).text(cnt[1]);
                    }   
                     
                }  
                
                function count2Fn(){
                    
                    cnt[2]++;
                    if(cnt[2]>700){
                        clearInterval(setId[2]);
                    }
                    else{
                        $number.eq(2).text(cnt[2]);
                    }   
                     
                }  
                
                function count3Fn(){
                    
                                    
                    cnt[3]++;
                    if(cnt[3]>240){
                        clearInterval(setId[3]);
                    }
                    else{
                        $number.eq(3).text(cnt[3]);
                    }  
                     
                }  
                
                setId[0] = setInterval(count0Fn,36.3636364);
                setId[1] = setInterval(count1Fn,21.0526316);
                setId[2] = setInterval(count2Fn,11.4285714);
                setId[3] = setInterval(count3Fn,33.3333333);

                var t=0;
                var st1=0;
                var st2=0;
                var $ul = $('#section4 .count-box > ul');
    
                $(window).scroll(function(){
                    if( $(window).scrollTop() >= $('#section4').offset().top ){
                        if(t==0){
                            t=1;
                            $('#section4 .wrap .gap .container .count-box > ul').addClass('addCount');
                            st1 = setTimeout(formatFn,100);
                            st2 = setTimeout(count1Fn,1000);
                        }
                    }
                    if( $(window).scrollTop() == 0){
                        t=0;
                        cnt = [0,0,0,0];
                        $('#section4 .wrap .gap .container .count-box > ul').removeClass('addCount');
                    }
                });

                function formatFn(){
                    $ul.css({top:0});
                }
                st1 = setTimeout(formatFn,100);
                    clearTimeout(st1);
                st2 = setTimeout(formatFn,1000);
                    clearTimeout(st2);



        },
        section5Fn(){
            var $window = $(window);
            var $section5 = $('#section5');
            var $slide = $('#section5 .slide');
            var $slideWrap = $('#section5 .slide-wrap')
            var $slideView = $('#section5 .slide-view')
            var $slideW = $('#section5 .slide-wrap .slide').width();
            var $slideH = $('#section5 .slide-wrap .slide').height();
            var $winW = $(window).width();
            var $winH = $(window).height();
            var cnt = 0;
            var n = $('#section5 .slide').length-9;
            var setId = null;
            var setId2 = null;

            // function resize5Fn(){
            //     $slideW = $('.slide').width;
            //     $winW = $(window).width();
            //     $slide.css({width:$slideW,height:$slideH});


            //     if( window.orientation == 0 || window.orientation == 180 ){
            //         $slideH = $('.slide').height();
            //     }
            //     else if( window.orientation == 90 || window.orientation == -90 ){
            //         if(980>$slideW){
            //             $slideH = $('.slide').height();
            //         }
            //         else{
            //             $slideH = 570;
            //         }

            //     }
            //     $section5.css({width:$winW,height:$winH});
            //     mainSlideFn();
            // }
            // resize5Fn();
            // setTimeout(resize5Fn,100);

            // $window.resize(function(){
            //     resize5Fn();
            // });

            function mainSlideFn(){
                $slideWrap.stop().animate({left:-$slideW*cnt},600, function(){
                    if(cnt>3){cnt=0}
                    if(cnt<0){cnt=3}
                    $slideWrap.stop().animate({left:-$slideW*cnt},0)
                });
                
            }

            function nextSlideCountFn(){
                cnt++;
                mainSlideFn();
            }
            function prevSlideCountFn(){
                cnt--;
                mainSlideFn();
            }

            function autoSlideFn(){
                setInterval(nextSlideCountFn,4000);
            }
            autoSlideFn();

            $slideView.swipe({
                swipeLeft:function(){
                    if(!$slideWrap.is('animated')){
                        timerFn();
                        nextSlideCountFn();
                    }
                },
                swipeRight:function(){
                    if(!$slideWrap.is('animated')){
                        timerFn();
                        prevSlideCountFn();
                    }
                }
            });

            function timerFn(){
                var t = 0;
                clearInterval(setId)
                clearInterval(setId2)
                setId2 = setInterval(function(){
                    t++;
                    if(t>=4){
                        clearInterval(setId)
                        clearInterval(setId2)
                        nextSlideCountFn();
                        autoSlideFn();
                    }
                },4000);
            }
        }

    }

    litho.init();

})(jQuery);