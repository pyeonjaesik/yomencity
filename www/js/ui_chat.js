$(function(){
  $('#chat_main2').hide();    
  $('#postarea1_h_img').touchstart(function(){
    $('#chat_2').css({'border-bottom':'2px solid white'});
    $('#chat_1').css({'border-bottom':'2px solid rgb(30,38,49)'});
    $(this).attr('src','img/letter2.png');  
  });
  $('#postarea1_h_img').touchend(function(){
    $(this).attr('src','img/letter.png');  
  });    
  $('#postarea1_h_img').touchend(function(){
    changePgC();
    ci1=1;  
    chat_s();
    $('#chat_main').show();
    $('#chat_main2').hide();       
  });    
    
  $('#chat_leftbtn').touchend(function(){
    $('#foot').show();
    changePg1();
    c2i=0;  
  });
  $('#chat_1').touchstart(function(){
      $(this).css({'background':'rgb(40,48,59)','color':'white','text-shadow':'0px 0px rgb(40,48,59)'});
      c2i=0;
  });    
  $('#chat_1').touchend(function(e){
    $(this).css({'border-bottom':'2px solid rgb(30,38,49)','background':'white','color':'rgb(30,38,49)','text-shadow':'0px 0px white'});
    $('#chat_2').css({'border-bottom':'2px solid white'});
    $('#chat_main').show();
    $('#chat_main2').hide(); //c2i 와 ci2 는 엄연히 다른 변수다.
    ci2=2;  
    if(ci2!=0){
      ci2=2;    
    } 
    if(ci1==1){
      if($('#chat_main').scrollTop()<100){
        chat_s();
      }else{
        $('#chat_main').scrollTop('0');     
      }    
    }else{
      ci1=1; 
    }  
  });
  $('#chat_2').touchstart(function(){
      $(this).css({'background':'rgb(40,48,59)','color':'white','text-shadow':'0px 0px rgb(40,48,59)'});
      c2i=1;
  });    
  $('#chat_2').touchend(function(e){
    $(this).css({'border-bottom':'2px solid rgb(30,38,49)','background':'white','color':'rgb(30,38,49)','text-shadow':'0px 0px white'});
    $('#chat_1').css({'border-bottom':'2px solid white'});
    $('#chat_main2').show();
    $('#chat_main').hide();
    ci1=2;
    if(ci2==0){
      ci2=1;
      chat_r();    
    }else if(ci2==1){
      if($('#chat_main2').scrollTop()<100){
        chat_r();
      }else{
        $('#chat_main2').scrollTop('0');        
      }    
    }else{
      if(ch_arr.length==0){
        chat_r();  
      }
      ci2=1;    
    }  
  });
//  $('#c_main_h_textarea').focus(function(){
//    var ss= window.localStorage['mh']-125;
//    $('#c_main_c').css({'height':ss+'px'});
//    $(this).css({'box-shadow':'0px 0px 0px white'});
//    var cst=$('#c_main_c').scrollTop()-1;
//    $('#c_main_c').scrollTop('1000000');      
//  });  
//  $('#c_main_h_textarea').blur(function(){
//    $('#c_main_c').css({'height':(w_h-125)+'px'});
//  });
    
//    $(document).on('keydown', function(event) {
//        if (event.keyCode == 27) {
//          // Prevent default (disable the back button behavior)
//            alert('backbutton');
//          event.preventDefault();
//
//          // Your code
//        }
//    });    
});