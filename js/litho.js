;(function(){

    var litho = {

        init:function(){
            this.headerFn();
            this.section1Fn();
            this.section4Fn();
            this.section5Fn();
        },

        headerFn:function(){

            var lithoNav = {
                sub1:[
                    {sub:["Corporate","Startup","Business","Corporate","Finance","Application","Consulting","Digital agency","SEO agency","Events & conference","Marketing agency"]},
                    {sub:["Specialized","Restaurant","Architecture","Hotel & resort","Travel agency","Yoga & meditation","Gym & fitness","Spa salon","Cafe","Home decor","Interior design"]},
                    {sub:["Portfolio","Design agency","Web agency","Creative agency","Freelancer","Branding agency","Photography","Personal portfolio","Vertical portfolio","Interactive portfolio","Split portfolio","Creative portfolio"]},
                    {sub:["Other","Furniture shop","Fashion shop","Magazine","Lifestyle blog","Classic blog","Blog metro"]}
                ],
                sub2:[
                    {sub:"About", subsub:["About me","About us","Our story","Who we are"]},
                    {sub:"Services", subsub:["Our services","What we offer","Our process"]},
                    {sub:"Contact", subsub:["Contact simple","Contact classic","Contact modern"]},
                    {sub:"Additional pages", subsub:["Our team","Latest news","Pricing packages","Error 404","Maintenance","Coming soon","Coming soon - V2","FAQ's","Search result"]}
                ],
                sub3:[
                    {sub:"Portfolio classic", subsub:["Classic 2 column","Classic 3 column","Classic 4 column","Classic masonry","Classic metro"]},
                    {sub:"Portfolio boxed", subsub:["Boxed 2 column","Boxed 3 column","Boxed 4 column","Boxed masonry","Boxed metro"]},
                    {sub:"Portfolio colorful", subsub:["Colorful 2 column","Colorful 3 column","Colorful 4 column","Colorful masonry","Colorful metro"]},
                    {sub:"Portfolio bordered", subsub:["Bordered 2 column","Bordered 3 column","Bordered 4 column","Bordered masonry","Bordered metro"]},
                    {sub:"Portfolio overlay", subsub:["Overlay 2 column","Overlay 3 column","Overlay 4 column","Overlay masonry","Overlay metro"]},
                    {sub:"Portfolio switch image", subsub:["Switch 2 column","Switch 3 column","Switch 4 column","Switch masonry","Switch metro"]},
                    {sub:"Portfolio other", subsub:["Portfolio scattered","Justified gallery","Portfolio slider"]},
                    {sub:"Single project page", subsub:["Single project page 01","Single project page 02","Single project page 03","Single project page 04","Single project page 05"]},
                ],
                sub4:[
                    {sub:["General","Accordions","Buttons","Team","Team carousel","Clients","Client carousel","Subscribe","Call to action","Tab","Google map","Contact form","Image gallery"]},
                    {sub:["Content & infographics","Progress bar","Icon with text","Over line icon box","Custom icon with text","Counters","Countdown","Pie charts","Fancy text box","Text box","Fancy text"]},
                    {sub:["Interactive","Testimonials","Testimonials carousel","Video","Interactive banners","Services","Info banner","Rotate box","Process step","Instagram","Parallax scrolling","Text slider"]},
                    {sub:["Text & containers","Heading","Drop caps","Columns","Blockquote","Highlights","Message box","Social icons","Lists","Separators","Pricing table"]}
                ],
                sub5:[
                    {
                        sub:"Header and menu",
                        subsub:["Transparent header","White header","Dark header","Header with top bar","Header with push","Center navigation","Center logo","Top logo","One page navigation","Hamburger menu","Left menu","Header type","Mobile menu"],
                        subsubsub:{
                            subsubsub1:["Hamburger menu","Hamburger menu modern","Hamburger menu half"],
                            subsubsub2:["Left menu classic","Left menu modern"],
                            subsubsub3:["Always fixed","Disable fixed","Reverse scroll","Responsive sticky"],
                            subsubsub4:["Classic","Modern","Full screen"]
                        }
                    },
                    {
                        sub:"Footer",
                        subsub:["Footer style 01","Footer style 02","Footer style 03","Footer style 04","Footer style 05","Footer style 06","Footer style 07","Footer style 08","Footer style 09","Footer style 10","Footer style 11","Footer style 12"]
                    },
                    {
                        sub:"Page title",
                        subsub:["Left alignment","Right alignment","Center alignment","Colorful style","Big typography","Parallax background","Separate breadcrumbs","Gallery background","Background video","Mini version"]
                    },
                    {
                        sub:"Modal popup",
                        subsub:["Simple modal","Subscription","Contact form","Youtube video","Vimeo video","Google map"]
                    },
                    {
                        sub:"Icon packs",
                        subsub:["Icons mind line","Icons mind solid","Feather","Font awesome","ET line","Themify","Simple line"]
                    },
                    {sub:"Animations"}
                ],
                sub6:[
                    {sub:"Blog grid"},
                    {sub:"Blog masonry"},
                    {sub:"Blog classic"},
                    {sub:"Blog simple"},
                    {sub:"Blog side image"},
                    {sub:"Blog metro"},
                    {sub:"Blog overlay image"},
                    {sub:"Blog modern"},
                    {sub:"Blog clean"},
                    {sub:"Blog clean"},
                    {sub:"Blog standard"},
                    {sub:"Post layout", subsub:["Blog post layout 01","Blog post layout 02","Blog post layout 03","Blog post layout 04","Blog post layout 05"]},
                    {sub:"Post layout", subsub:["Standard post","Gallery post","Slider post","HTML5 video post","Youtube video post","Vimeo video post","Audio post","Blockquote post","Full width post"]}
                ],
                sub7:[
                    {sub:["Shop layout","Shop wide","Left sidebar","Right sidebar","Only categories","Single product","Utility pages","Shopping cart","Checkout","Login / Register"]},
                    {sub:["menu-banner-01.jpg"]},
                    {sub:["menu-banner-02.jpg"]}
                ]
            }

            // 서브메뉴1
            var $subMenu1 = $('#nav .sub1 .sub-menu');
            var txt = '';

                for(var i in lithoNav.sub1){
                    for(var j in lithoNav.sub1[i].sub){
                        if(j==0){
                            txt = "<dt>" + lithoNav.sub1[i].sub[0] + "</dt>";
                        }
                        else{
                            txt = "<dd><a href='#'>" + lithoNav.sub1[i].sub[j] + "</a></dd>";
                        }
                    }
                    $subMenu1.eq(i).html(txt);
                    txt = '';
                    
                }

            //서브메뉴4
            var $subMenu4 = $('.sub4 .sub-menu');
            var txt = '';

                for(var i in lithoNav.sub4){
                    for(var j in lithoNav.sub4[i].sub){
                        if(j==0){
                            txt = "<dt>" + lithoNav.sub4[i].sub[0] + "</dt>";
                        }
                        else{
                            txt = "<dd><a href='#'>" + lithoNav.sub4[i].sub[j] + "</a></dd>";
                        }
                    }
                    $subMenu4.eq(i).html(txt);
                    txt = '';
                    
                }

        },

        section1Fn(){
            var $window = $(window)
            var $winW = $(window).width();
            var $winH = $(window).height();
            var $slide = $('#section1 .slide')
            var $slideView = $('#section1 .slide-view')
            var $slideWrap = $('#section1 .slide-wrap')
            var $section1 = $('#section1')
            var $pageBtn = $('#section1 .page-btn')
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
                        $winH = 600;
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
                $pageBtn.removeClass('addpage');
                $pageBtn.eq(cnt>n-1 ? 0 : cnt).addClass('addpage');
            }
            pageBtnColorEventFn();

            $pageBtn.each(function(idx){
                $(this).on({
                    click:function(){
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


        },

        section5Fn(){
            var $slide = $('#section5 .slide')
            var $slideWrap = $('#section5 .slide-wrap')
            var $slideView = $('#section5 .slide-view')
            var $slideW = 981.5;
            var cnt = 0;
            var n = $('#section5 .slide').length-9;
            var setId = null;
            var setId2 = null;

            function mainSlideFn(){
                $slideWrap.stop().animate({left:-$slideW*cnt},600, function(){
                    if(cnt>n){cnt=0}
                    if(cnt<0){cnt=n}
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