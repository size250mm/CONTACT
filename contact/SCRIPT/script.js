

$(document).ready(function(){
   
})
    $('.ham-list').eq(0).click(function(){
        
    })


var X =0;
$('.ham-btn').click(function(){
    X++;
    X=X%2;
//    
//    $('.ham-line').eq(0).toggleClass('.ham-toggle1');
//    $('.ham-line').eq(1).toggleClass('.ham-toggle2');
//    $('.ham-line').eq(2).toggleClass('.ham-toggle3');
    console.log(X);
    if(X == 1){
        $('.ham-nav').stop().animate({left:'120'+'px'},1000);
        $('.nav-line').css({background:'black'});
        $('.ham-line').css({background:'black'});
        $('.indi').css({color:'black'});
        $('.nav-bg-slide').animate({top:'0'})
    }else if(X == 0){
        $('.ham-nav').stop().animate({left:'-120'+'%'},1000);
        $('.nav-line').css({background:'white'});
        $('.ham-line').css({background:'white'});
        $('.indi').css({color:'white'});
        $('.nav-bg-slide').animate({top:'-100'+'%'})
    }
})


var slide_num = 0;
    $('html').on('mousewheel',function(event){
        delta=event.originalEvent.wheelDelta
        has_animate=$('html').is(':animated');
        console.log(slide_num)
//        console.log(textframe_text1)
//        console.log(textframe_text2)
//        console.log(textframe_text3)
//        console.log(textframe_text4)
      if(!has_animate && delta<0 && slide_num>-25){
          slide_num--;
          slide_move();
      }else if(!has_animate && delta>0 && slide_num<0){
          slide_num++;
          slide_move();
      }
      }
    )




function slide_move (){
    var slide_width = $('.slide').width();
    var window_width = $(window).width();
//    console.log(slide_width);
    console.log(window_width);
    $('.slide').stop().animate({left:slide_num*(window_width/20)})
}
















