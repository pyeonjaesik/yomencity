$(function(){
  $('#Pg5_profile_follow1').touchstart(function(){
    $(this).css({'background':'rgb(40,48,59)','color':'white','text-shadow':'rgb(40,48,59)'});
    k5=0;
    post5_scroll_h=210000;
    info_index=0;
  });
  $('#Pg5_profile_follow1').touchend(function(){
    $('.Pg5_profile_follow').css({'border-bottom':'2px solid white',color:'rgb(100,100,100)'}); 
    $(this).css({'background':'white','color':'rgb(30,38,49)','text-shadow':'white','border-bottom':'2px solid rgb(30,38,49)'});
  });
  $('#Pg5_profile_follow2').touchstart(function(){
   k5=0;
   post52_scroll_h=200000;
   info_index=2;
      $(this).css({'background':'rgb(40,48,59)','color':'white','text-shadow':'rgb(40,48,59)'});
   // post5_cont_cp=1;  
  });
  $('#Pg5_profile_follow2').touchend(function(){
    $('.Pg5_profile_follow').css({'border-bottom':'2px solid white',color:'rgb(100,100,100)'});  
    $(this).css({'background':'white','color':'rgb(30,38,49)','text-shadow':'white','border-bottom':'2px solid rgb(30,38,49)'});
  });    
  $('#Pg5_profile_follow3').touchstart(function(){
    $(this).css({'background':'rgb(40,48,59)','color':'white','text-shadow':'rgb(40,48,59)'});
    k5=0;
    post52_scroll_h=200000;
    info_index=3;      
  });
  $('#Pg5_profile_follow3').touchend(function(){
    $('.Pg5_profile_follow').css({'border-bottom':'2px solid white',color:'rgb(100,100,100)'});  
    $(this).css({'background':'white','color':'rgb(30,38,49)','text-shadow':'white','border-bottom':'2px solid rgb(30,38,49)'});
  });
  $('#Pg5_profile_follow4').touchstart(function(){
    $(this).css({'background':'rgb(40,48,59)','color':'white','text-shadow':'rgb(40,48,59)'});
    k5=0;
    post52_scroll_h=200000;
    info_index=4;      
  });
  $('#Pg5_profile_follow4').touchend(function(){
    $('.Pg5_profile_follow').css({'border-bottom':'2px solid white',color:'rgb(100,100,100)'});  
    $(this).css({'background':'white','color':'rgb(30,38,49)','text-shadow':'white','border-bottom':'2px solid rgb(30,38,49)'});
  });    
  
  $('#t_profile_follow1').touchstart(function(){
    $(this).css({'background':'rgb(40,48,59)','color':'white','text-shadow':'rgb(40,48,59)'});
    k_t=0;
    post_t_scroll_h=210000; //선언
    info_t_index=0; //선언
  });
  $('#t_profile_follow1').touchend(function(){
    $('.t_profile_follow').css({'border-bottom':'2px solid white',color:'rgb(100,100,100)'}); 
    $(this).css({'background':'white','color':'rgb(30,38,49)','text-shadow':'white','border-bottom':'2px solid rgb(30,38,49)'});
  });
  $('#t_profile_follow2').touchstart(function(){
   k_t=0;
   post_t2_scroll_h=200000; //선언
   info_t_index=2;  //선언
      $(this).css({'background':'rgb(40,48,59)','color':'white','text-shadow':'rgb(40,48,59)'});
   // post5_cont_cp=1;  
  });
  $('#t_profile_follow2').touchend(function(){
    $('.t_profile_follow').css({'border-bottom':'2px solid white',color:'rgb(100,100,100)'});  
    $(this).css({'background':'white','color':'rgb(30,38,49)','text-shadow':'white','border-bottom':'2px solid rgb(30,38,49)'});
  });    
  $('#t_profile_follow3').touchstart(function(){
    $(this).css({'background':'rgb(40,48,59)','color':'white','text-shadow':'rgb(40,48,59)'});
    k_t=0;
    post_t2_scroll_h=200000; //선언
    info_t_index=3;  //선언
  });
  $('#t_profile_follow3').touchend(function(){
    $('.t_profile_follow').css({'border-bottom':'2px solid white',color:'rgb(100,100,100)'});  
    $(this).css({'background':'white','color':'rgb(30,38,49)','text-shadow':'white','border-bottom':'2px solid rgb(30,38,49)'});
  });
  $('#t_profile_follow4').touchstart(function(){
    $(this).css({'background':'rgb(40,48,59)','color':'white','text-shadow':'rgb(40,48,59)'});
    k_t=0;
    post_t2_scroll_h=200000; //선언
    info_t_index=4;  //선언      
  });
  $('#t_profile_follow4').touchend(function(){
    $('.t_profile_follow').css({'border-bottom':'2px solid white',color:'rgb(100,100,100)'});  
    $(this).css({'background':'white','color':'rgb(30,38,49)','text-shadow':'white','border-bottom':'2px solid rgb(30,38,49)'});
  }); 
///////
  $('#t_profile_follow12').touchstart(function(){
    $(this).css({'background':'rgb(40,48,59)','color':'white','text-shadow':'rgb(40,48,59)'});
    k_t2=0;
    post_t_scroll_h2=210000; //선언
    info_t_index2=0; //선언
  });
  $('#t_profile_follow12').touchend(function(){
    $('.t_profile_follow2').css({'border-bottom':'2px solid white',color:'rgb(100,100,100)'}); 
    $(this).css({'background':'white','color':'rgb(30,38,49)','text-shadow':'white','border-bottom':'2px solid rgb(30,38,49)'});
  });
  $('#t_profile_follow22').touchstart(function(){
   k_t2=0;
   post_t2_scroll_h2=200000; //선언
   info_t_index2=2;  //선언
      $(this).css({'background':'rgb(40,48,59)','color':'white','text-shadow':'rgb(40,48,59)'});
   // post5_cont_cp=1;  
  });
  $('#t_profile_follow22').touchend(function(){
    $('.t_profile_follow2').css({'border-bottom':'2px solid white',color:'rgb(100,100,100)'});  
    $(this).css({'background':'white','color':'rgb(30,38,49)','text-shadow':'white','border-bottom':'2px solid rgb(30,38,49)'});
  });    
  $('#t_profile_follow32').touchstart(function(){
    $(this).css({'background':'rgb(40,48,59)','color':'white','text-shadow':'rgb(40,48,59)'});
    k_t2=0;
    post_t2_scroll_h2=200000; //선언
    info_t_index2=3;  //선언
  });
  $('#t_profile_follow32').touchend(function(){
    $('.t_profile_follow2').css({'border-bottom':'2px solid white',color:'rgb(100,100,100)'});  
    $(this).css({'background':'white','color':'rgb(30,38,49)','text-shadow':'white','border-bottom':'2px solid rgb(30,38,49)'});
  });
  $('#t_profile_follow42').touchstart(function(){
    $(this).css({'background':'rgb(40,48,59)','color':'white','text-shadow':'rgb(40,48,59)'});
    k_t2=0;
    post_t2_scroll_h2=200000; //선언
    info_t_index2=4;  //선언      
  });
  $('#t_profile_follow42').touchend(function(){
    $('.t_profile_follow2').css({'border-bottom':'2px solid white',color:'rgb(100,100,100)'});  
    $(this).css({'background':'white','color':'rgb(30,38,49)','text-shadow':'white','border-bottom':'2px solid rgb(30,38,49)'});
  });    
});