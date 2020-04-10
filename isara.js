$(function(){
  $(".flow_title").click(function(){

    $(".flow_title").not(this).removeClass("open");
    $(".flow_title").not(this).next().slideUp(300);

    $(this).toggleClass("open");
    $(this).next().slideToggle(300);
    if($(this).hasClass("open")){
      $(".flow_title").not(this).children("a").html('<i class="fas fa-angle-down fa-lg"></i>');
      $(this).children("a").html('<i class="fas fa-angle-up fa-lg"></i>');
    }else{
      $(this).children("a").html('<i class="fas fa-angle-down fa-lg"></i>');
    }
  });

  $(".question_title").click(function(){

    $(this).toggleClass("open");
    $(this).next().slideToggle(300);
    if($(this).hasClass("open")){
      $(this).children("a").html('<i class="fas fa-angle-up fa-lg"></i>');
    }else{
      $(this).children("a").html('<i class="fas fa-angle-down fa-lg"></i>');
    }
  });

  function return_Top(pagetop){
    $(".return_top").hide();
    $(".return_top2").hide();
    $(window).scroll(function(){
      if($(this).scrollTop()>100){
        pagetop.fadeIn();
      }else{
        pagetop.fadeOut();
      }
    });
    pagetop.click(function(){
      $("body,html").animate({scrollTop:0},500);
      return false;
    });
  }

  const $page_Top=$(".return_top");
  const $page_Top2=$(".return_top2");

  if($(window).width()<768){
    return_Top($page_Top);
  }else{
    return_Top($page_Top2);
  }

  var timer=false;
  var prewidth=$(window).width();
  $(window).resize(function(){
    if(timer!==false){
      clearTimeout(timer);
    }
    timer=setTimeout(function(){
      var nowWidth=$(window).width();
      if(prewidth!==nowWidth){
        location.reload();
      }
      prewidth=nowWidth;
    },200);
  });


});
