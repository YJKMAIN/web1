$(document).ready(function(){
    
    /*메뉴*/
        $(".submenu").hide();
        document.querySelector(".sub_bg").innerText = "";
        $("#header .sub_bg").hide();
            
        $(".mainmenu > li").mouseover(function(){
            $(this).find('.submenu').stop().slideDown(200);
            $("#header .sub_bg").stop().slideDown(200);
        });
        
        $(".mainmenu > li").mouseout(function(){
            $(this).find('.submenu').stop().slideUp(200);
            $("#header .sub_bg").stop().slideUp(200);
        });
    
        $('.toggle_bar').click(function(){
            $('#header .menu_wrap').toggle();
        });
        
        /*page2*/
        document.querySelector('.arrow-next').addEventListener('click', function(){    
            document.querySelector('.slide_wrap').style.transform = 'translateX(-40%)';
            document.querySelector('.slide_wrap').style.transition = 'all 0.8s';
        });

        document.querySelector('.arrow-prev').addEventListener('click', function(){    
            document.querySelector('.slide_wrap').style.transform = 'translateX(0%)';
            document.querySelector('.slide_wrap').style.transition = 'all 0.8s';
        });
            
        /*메인배너 슬라이드*/
        var slideWidth = Number(window.innerWidth);
        var slideCount = $(".slideImg").length;
        var currentIndex = 0;
        var slidePosition;

        setInterval(function(){
            if(currentIndex < slideCount - 1){
                currentIndex++;
            } else {
                currentIndex = 0;
            }
            slidePosition = currentIndex * (-slideWidth)+"px";
            
            $(".slideList").animate({ left: slidePosition},400);
        },3000);
        
    
      
        /*반응형*/
        $(window).resize(function(){
            var windowWidth = $(window).width();
            
            if(windowWidth < 960){
                /*서브메뉴*/
               $('.mainmenu > li').hover(function(){
                    $(this).find('.submenu').stop().slideDown(200);
                   $("#header .sub_bg").remove();
               },function(){
                    $(this).find('.submenu').stop().slideUp(200);
                   $("#header .sub_bg").remove();
               });
                
                
                /*page2*/
                document.querySelector('.arrow-next').addEventListener('click', function(){    
                    document.querySelector('.slide_wrap').style.transform = 'translateX(-57.5%)';
                    document.querySelector('.slide_wrap').style.transition = 'all 0.8s';
                });

                document.querySelector('.arrow-prev').addEventListener('click', function(){    
                    document.querySelector('.slide_wrap').style.transform = 'translateX(0%)';
                    document.querySelector('.slide_wrap').style.transition = 'all 0.8s';
                });
                
               
            }
        });
    

            
    });