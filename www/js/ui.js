var changePg1 = function(){
    $(".Pg").hide();
    $("#Pg1").show();
    $('#foot').show();
    $("#footimg2").attr("src","img/2.png");
    $("#footimg3").attr("src","img/3.png");
    $("#footimg4").attr("src","img/4.png");
    $("#footimg5").attr("src","img/5.png");
    $("#footimg1").attr("src","img/1_clicked.png");
    $('#footimg2').css({'width':'47px','left':(w_w*0.3-23.5)+'px','bottom':'3px'});
    $('#footimg3').css({'width':'45px','left':(w_w*0.5-22.5)+'px','bottom':'4.4px'});
    $('#footimg4').css({'width':'40px','left':(w_w*0.7-20)+'px','bottom':'5.65px'});
    $('#footimg5').css({'width':'40px','left':(w_w*0.9-20)+'px','bottom':'6.2px'});
    h_index=0;
    pgid=1;
  //  $('.post2').remove();
};
var changePgC = function(){
    $(".Pg").hide();
    $("#PgC").show();
    $('#foot').hide();
    h_index=1;
    pgid=7;
  //  $('.post2').remove();
};
var changePg2 = function(){
    $(".Pg").hide();
    $("#Pg2").show();
    $("#footimg1").attr("src","img/1.png");
    $("#footimg3").attr("src","img/3.png");
    $("#footimg4").attr("src","img/4.png");
    $("#footimg5").attr("src","img/5.png");
    $("#footimg2").attr("src","img/2_clicked.png");
    $('#footimg1').css({'width':'40px','left':(w_w*0.1-20)+'px','bottom':'6px'});
    $('#footimg3').css({'width':'45px','left':(w_w*0.5-22.5)+'px','bottom':'4.4px'});
    $('#footimg4').css({'width':'40px','left':(w_w*0.7-20)+'px','bottom':'5.65px'});
    $('#footimg5').css({'width':'40px','left':(w_w*0.9-20)+'px','bottom':'6.2px'});    
    h_index=1;
    pgid=2;
};
var changePg3 = function(){
    $(".Pg").hide();
    $("#Pg3").show();
    $("#footimg2").attr("src","img/2.png");
    $("#footimg1").attr("src","img/1.png");
    $("#footimg4").attr("src","img/4.png");
    $("#footimg5").attr("src","img/5.png");
    $("#footimg3").attr("src","img/3_clicked.png");
    $('#footimg1').css({'width':'40px','left':(w_w*0.1-20)+'px','bottom':'6px'});
    $('#footimg2').css({'width':'47px','left':(w_w*0.3-23.5)+'px','bottom':'3px'});
    $('#footimg4').css({'width':'40px','left':(w_w*0.7-20)+'px','bottom':'5.65px'});
    $('#footimg5').css({'width':'40px','left':(w_w*0.9-20)+'px','bottom':'6.2px'});   
    $('#foot').hide();
    pgid=3;
};
var changePg4 = function(){
    $(".Pg").hide();
    $("#Pg4").show();
    $("#footimg2").attr("src","img/2.png");
    $("#footimg3").attr("src","img/3.png");
    $("#footimg1").attr("src","img/1.png");
    $("#footimg5").attr("src","img/5.png");
    $("#footimg4").attr("src","img/4_clicked.png");
    $('#footimg1').css({'width':'40px','left':(w_w*0.1-20)+'px','bottom':'6px'});
    $('#footimg2').css({'width':'47px','left':(w_w*0.3-23.5)+'px','bottom':'3px'});
    $('#footimg3').css({'width':'45px','left':(w_w*0.5-22.5)+'px','bottom':'4.4px'});
    $('#footimg5').css({'width':'40px','left':(w_w*0.9-20)+'px','bottom':'6.2px'});
    h_index=1;
    pgid=4;
};
var changePg5 = function(){
    console.log("changePg5:호출됨");
    $(".Pg").hide();
    $("#Pg5").show();
    $("#footimg2").attr("src","img/2.png");
    $("#footimg3").attr("src","img/3.png");
    $("#footimg4").attr("src","img/4.png");
    $("#footimg1").attr("src","img/1.png");
    $("#footimg5").attr("src","img/5_clicked.png");
    $('#footimg1').css({'width':'40px','left':(w_w*0.1-20)+'px','bottom':'6px'});
    $('#footimg2').css({'width':'47px','left':(w_w*0.3-23.5)+'px','bottom':'3px'});
    $('#footimg3').css({'width':'45px','left':(w_w*0.5-22.5)+'px','bottom':'4.4px'});
    $('#footimg4').css({'width':'40px','left':(w_w*0.7-20)+'px','bottom':'5.65px'});  
    h_index=1;
    pgid=5;
};
var changePg6 = function(){
    console.log("changePg6:호출됨");
    $(".Pg").hide();
    $("#Pg6").show();
    $("#footimg1").attr("src","img/1.png");
    $("#footimg2").attr("src","img/2.png");
    $("#footimg3").attr("src","img/3_clicked.png");
    $("#footimg4").attr("src","img/4.png");
    $("#footimg5").attr("src","img/5.png");
    $('#footimg1').css({'width':'40px','left':(w_w*0.1-20)+'px','bottom':'6px'});
    $('#footimg2').css({'width':'47px','left':(w_w*0.3-23.5)+'px','bottom':'3px'});
    $('#footimg3').css({'width':'45px','left':(w_w*0.5-22.5)+'px','bottom':'4.4px'});
    $('#footimg4').css({'width':'40px','left':(w_w*0.7-20)+'px','bottom':'5.65px'});
    $('#footimg5').css({'width':'40px','left':(w_w*0.9-20)+'px','bottom':'6.2px'});
    h_index=1;
    pgid=6;
};
$(function(){
//    $('#protect').hide();
//    $("#protect2").hide();
//    $("#protect2_checkat").hide();
//    $("#protect2_checkat2").hide();
    $("#loginPg2").hide();
    $("#Pg5_post").hide();
    $('#prevent').hide();
    $("#Pg_start").hide();
    $('#Pg5_ch_profile_library_s').hide();
    $('#Pg5_ch_profile_finish_s').hide();
    $('#push').hide();
    $("#loginPg_loginbtn").touchstart(function(){
        $(this).css({'background':'rgb(220,220,220,0.1)','text-shadow':'0px 0px 0px rgb(220,220,220,0.1)'});
    });
    $("#loginPg_loginbtn").touchend(function(){
        $(this).css({'background':'rgb(22,23,27)','text-shadow':'0px 0px 0px rgb(22,23,27)'});        
        $("#loginPg2").show();
    }); 
    $("#reply_p").hide();
    $("#reply_s").hide();   
    $("#Pg5_ch_profile").hide();
    $('#Pg5_setting').hide();
    $('#t_main').hide();
    $('#t_main2').hide();
    $('#e_main').hide();
    $('#ep2_main').hide();
    $('#l_main').hide();
    $('#c_main').hide();
    $('#s_main').hide();
    $('#sc_main').hide();
    $('#search_main2').hide();
    $('#postarea2_2').hide();
    $('#Pg2_a').hide();
    $('#postarea2_4').hide();
    $('#Pg2_b').hide();
    $("#loginPg2_okbtn").touchstart(function(){
        $(this).css({'background':'green',});
    });
    $("#loginPg2_okbtn").touchend(function(){
      $(this).css({'background':'rgb(22,23,27)'});
      $('#loginPg_id').blur();
      $('#loginPg_password').blur();    
    });
    $("#loginPg2_leftbtn").touchend(function(){
       $("#loginPg2").hide(); 
    });
    $("#footdiv1").touchstart(function(){
      $("#footimg1").attr("src","img/1_clicked.png");
      $("#footimg1").css({'width':'44px','left':(w_w*0.1-22)+'px','bottom':'4px'});    
      if(p2lp.length!=0){
        post2_index = 2;    
      }
      if(post5_index==1){post5_index=2;}
      p4_index=0;
      if(post6_index==1){
        post6_index=2;  
      }
      if(pg2a.length>0){
        post2_index2=2;  
      }    
    });
    $("#footdiv1").touchend(function(){
        changePg1();
    });
    $("#footdiv2").touchstart(function(){
      $("#footimg2").attr("src","img/2_clicked.png");
      $("#footimg2").css({'bottom':'4px','width':'45px','left':(w_w*0.3-22.5)+'px'});    
        post1_index =2;
      if(pg2i==0){
//        if(post2_index == 0){
//          post2_scroll_h = 1000000;
//          $('.post2').remove();
//          post2_cont_cp =1;
//          k2 =0;
//        }
//        if(post2_index == 1 && $("#postarea2").scrollTop()<200){ 
//          post2_scroll_h = 1000000;
//          $('.post2').remove();
//          post2_cont_cp =1;
//          k2 =0;
//         }          
       }            
       if(post5_index==1){post5_index=2;}
       p4_index=0;
       if(post6_index==1){
          post6_index=2;  
       }    
    });
    $("#footdiv2").touchend(function(){
        changePg2();
    });
    $('#postarea1_s').touchstart(function(){
        $(this).attr('src','img/search2.png');
        post1_index =2;
        if(p2_a ==1){
          post2_index = 2;    
        }
        post3_scroll_h =0;
        post3_cont_cp = 1;
        k = 0;
        if(post5_index==1){post5_index=2;}
        p4_index=0;        
    });
    $('#postarea1_s').touchend(function(){
       $(this).attr('src','img/search.png'); 
    });
    $('#postarea1_s').touchend(function(){
      changePg3();  
    });
    $("#footdiv3").touchstart(function(){
      $("#footimg3").attr("src","img/3_clicked.png");
        post1_index =2;
        if(p2lp.length!=0){
          post2_index = 2;    
        }
        post3_scroll_h =0;
        post3_cont_cp = 1;
        k = 0;
        if(post5_index==1){post5_index=2;}
        p4_index=0;        
      if(pg2a.length>0){
        post2_index2=2;  
      }        
    });
    $("#footdiv3").touchend(function(){
      changePg6();    
    });
    $("#footdiv4").touchstart(function(){
        $("#footimg4").attr("src","img/4_clicked.png");
        $("#footimg4").css({'width':'44px','left':(w_w*0.7-22)+'px','bottom':'3.65px'});
        post1_index =2;
        if(p2lp.length!=0){
          post2_index = 2;    
        }
        if(post5_index==1){post5_index=2;}
        if(post6_index==1){
          post6_index=2;  
        }
      if(pg2a.length>0){
        post2_index2=2;  
      }        
    });
    $("#footdiv4").touchend(function(){
        changePg4();
    });
    $("#footdiv5").touchstart(function(){
        post1_index =2;
        if(p2lp.length!=0){
          post2_index = 2;    
        }
        $("#footimg5").attr("src","img/5_clicked.png");
        $("#footimg5").css({'width':'44px','left':(w_w*0.9-22)+'px','bottom':'4.2px'});
        p4_index=0;
        if(post6_index==1){
          post6_index=2;  
        }
        console.log('pg2a.length:'+pg2a.length);
      if(pg2a.length>0){
          
        post2_index2=2;  
      }        
    });
    $("#footdiv5").touchend(function(){
        changePg5();
    });
    ////////////////////////////////////////
    $("#Pg5_selecter_space").hide();
    $("#Pg5_selecter_container").hide();
    $('#Pg5_profile_imgbtn').touchend(function(){
        $("#foot").hide();
        $("#Pg5_ch_profile").show();
        console.log('Pg5_profile_imgbnt 클릭됨');
        $('.ch_img').remove();
        $('.loader_ch').remove();
        ch_getp_img(window.localStorage['_id']);
    });
    $("#Pg5_profile_write_btn").touchstart(function(){
      $('#Pg5_profile_write').attr('src','img/write_b2.png'); 
    });
    $("#Pg5_profile_write_btn").touchend(function(){
      $('#Pg5_profile_write').attr('src','img/write_b.png');  
    });    
    $("#Pg5_profile_write_btn").touchend(function(){
        if(n_p_ing==1){
          toast_t3('게시물 업로드 완료후 다시 시도해 주세요.');
          return;    
        }
        $("#foot").hide();
        $("#Pg5_post").show(); 
        imgData=3;
        imgData2=3;
        imgData3=3;
        imgData4=3;
        imgData_arr = [];
        idal=0;
        ch_f=0;
        p1_ne1=0;
        p1_ne2=0;
        p1_ne3=0;
        p1_ne4=0;
        $('#Pg5_post_img_c').scrollTop('0');
    });

    $("#Pg5_post_leftbtn").touchend(function(){
        $("#Pg5_post").hide();
        console.log('leftbtn 터치');
        $("#foot").show();
        $("#Pg5_post_img").attr('src','img/logo_green.png');
        $('.img_c_d').remove();
        $(".Pg5_post_img_div").css({'height':(w_w-22)+'px','border':'1px solid rgba(180,180,180,0.8)'});
        $(".Pg5_post_img_li").css({'height':(w_w)+'px'});
        $('#Pg5_profile_username').text(window.localStorage['name']);
        $("#pg5_header_top_profile_id").text(window.localStorage['id']);
    });
    $("#postarea1_write").touchstart(function(){
        p1_ne1 = 0;
        p1_ne2 = 0;
        p1_ne3 = 0;
        p1_ne4 = 0;
        imgData=3;
        imgData2=3;
        imgData3=3;
        imgData4=3;
        imgData_arr = [];
        idal = 0;
        ch_f=0;
    });    
    $("#postarea1_write").touchend(function(){
        changePg5();
        $("#foot").hide();
        $("#Pg5_post").show();        
    });
   
    $("#Pg5_post_img_i1").touchstart(function(){
        if(p1_ne1==0){loader_p1();};
        if(p1_ne2==0){loader_p2();};
        if(p1_ne3==0){loader_p3();};
        if(p1_ne4==0){loader_p4();};
        $(this).attr('src','img/img_plus_g.png');
    });
    $("#Pg5_post_img_i2").touchstart(function(){
        if(p1_ne1==0){loader_p1();};
        if(p1_ne2==0){loader_p2();};
        if(p1_ne3==0){loader_p3();};
        if(p1_ne4==0){loader_p4();};
        $(this).attr('src','img/img_plus_g.png');        
    });
    $("#Pg5_post_img_i3").touchstart(function(){
        if(p1_ne1==0){loader_p1();};
        if(p1_ne2==0){loader_p2();};
        if(p1_ne3==0){loader_p3();};
        if(p1_ne4==0){loader_p4();};
        $(this).attr('src','img/img_plus_g.png');       
    });
    $("#Pg5_post_img_i4").touchstart(function(){
        if(p1_ne1==0){loader_p1();};
        if(p1_ne2==0){loader_p2();};
        if(p1_ne3==0){loader_p3();};
        if(p1_ne4==0){loader_p4();};
        $(this).attr('src','img/img_plus_g.png');        
    });     
    $("#Pg5_post_img_i1").touchend(function(){
        upload_library1();
        $(this).attr('src','img/img_plus.png');
    });
    $("#Pg5_post_img_i2").touchend(function(){
        upload_library2();
        $(this).attr('src','img/img_plus.png');
    });
    $("#Pg5_post_img_i3").touchend(function(){
        upload_library3();
        $(this).attr('src','img/img_plus.png');
    });
    $("#Pg5_post_img_i4").touchend(function(){
        upload_library4();
        $(this).attr('src','img/img_plus.png');
    });
    $("#Pg5_post2").hide();
    $("#Pg5_post_next_btn").touchstart(function(){
        $(this).css({background:'green'});
        isc=0;
    });
    $("#Pg5_post_next_btn").touchend(function(){
         $(this).css({background:'rgb(22,23,27)'});
        if((p1_ne1+p1_ne2+p1_ne3+p1_ne4)==0){
          toast_t2('이미지를 한 장 이상 등록해 주세요.');
        }else if((p1_ne1+p1_ne2+p1_ne3+p1_ne4)>=100){
          toast_t2('잠시 후 다시 시도해 주세요.');  
        }else{
          toast_t2('오늘의 심경을 적어주세요.');    
          $("#Pg5_post2").show();
          imgdata_arr();            
        }
    });
    $("#Pg5_post2_leftbtn").touchstart(function(){
        $("#Pg5_post2").hide();
    });
    
    $("#Pg5_post2_next_btn").touchstart(function(){
         $(this).css({background:'green'});
        $('#Pg5_profile_username').text(window.localStorage['name']);
        $("#pg5_header_top_profile_id").text(window.localStorage['id']);        
    });
    $("#Pg5_post2_next_btn").touchend(function(){
        $(this).css({background:'rgb(22,23,27)'});
    });
    $("#Pg5_ch_profile_x").touchend(function(){
        $('#Pg5_ch_profile').hide();
        $('#foot').show();
    });
    $('#Pg5_ch_profile_library').touchend(function(){
      console.log('Pg5_ch_profile_library 클릭됨');
      loader_ch();
      p_upload_library();
    });
    $("#reply_p_main_h_sendbtn").touchstart(function(){
        $("#reply_p_main_h_send").attr('src','img/send_g.png');
    });
    $("#reply_p_main_h_sendbtn").touchend(function(){
        $("#reply_p_main_h_send").attr('src','img/send_b.png');
    });  
    $("#reply_s_main_h_sendbtn").touchstart(function(){
        $("#reply_s_main_h_send").attr('src','img/send_g.png');
    });
    $("#reply_s_main_h_sendbtn").touchend(function(){
        $("#reply_s_main_h_send").attr('src','img/send_b.png');
    });  
    

});