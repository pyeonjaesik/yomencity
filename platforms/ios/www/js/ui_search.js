$(function(){
  $('#search_leftbtn').touchend(function(){
    $('#foot').show();
    changePg1();
  });
  $('#search_all').touchstart(function(){
      $(this).css({'background':'rgb(40,48,59)','color':'white','text-shadow':'0px 0px rgb(40,48,59)'});
      post3_o_index =1;
  });    
  $('#search_all').touchend(function(e){
    $(this).css({'border-bottom':'2px solid rgb(30,38,49)','background':'white','color':'rgb(30,38,49)','text-shadow':'0px 0px white'});
    $('#search_near').css({'border-bottom':'2px solid white'});
    $('#search_main').show();
    $('#search_main2').hide();
  });
  $('#search_near').touchstart(function(){
      $(this).css({'background':'rgb(40,48,59)','color':'white','text-shadow':'0px 0px rgb(40,48,59)'});
      post3_o_index =2;
  });    
  $('#search_near').touchend(function(e){
    $(this).css({'border-bottom':'2px solid rgb(30,38,49)','background':'white','color':'rgb(30,38,49)','text-shadow':'0px 0px white'});
    $('#search_all').css({'border-bottom':'2px solid white'});
    $('#search_main2').show();
    $('#search_main').hide();
  });    
});