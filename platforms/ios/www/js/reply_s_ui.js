var reply_s_ui = function(){
    $('.rs_xbtn').remove();
    var reply_s_header_x = $('<img>');
    reply_s_header_x.addClass('rs_xbtn');
    reply_s_header_x.css({'position':'absolute','width':'35px','height':'35px','top':'12px','left':'7px'});
    reply_s_header_x.attr('src','img/l_b.png');
    reply_s_header_x.touchend(function(){
        $('.myreply_s').remove();
        $('.myreply_sh').remove();
        $("#reply_s_main_h_textarea").val('');
        $('.rs_xbtn').remove();
        $('.rs_btn').remove();
        h_arr.shift();
        h_i4=1;
       // $("#reply_s").hide();       
        var type = h_arr[0].type;            
        if(type==1){
          if(h_i1==0){
            $reply_s.hide();    
            $t_main.show();
            tpi=2;  
          }else{
            t_g_pf1(-1,h_arr[0].id);
            h_i1=0;  
          }             
        }else if(type==2){
          if(h_i2==0){
            $reply_s.hide();
            $reply_p.show();    
          }else{
            $t_main.hide();
            r_p_g(-1,h_arr[0].post_id);    
          }            
        }else if(type==3){
          if(h_i3==0){
            $reply_s.hide();
            $e_main.show();
          }else{
            e_g_p(-1,h_arr[0].post_id);
          }             
        }else if(type==4){
            r_s_g(-1,h_arr[0].post_id,h_arr[0].comment_id);
            h_i4=0;
        }else if(type==5){
          if(h_i5==0){
            $reply_s.hide();
            $l_main.show();
          }else{
            l_g(-1,h_arr[0].post_id);
          }             
        }else if(type==6){
          if(h_i6==0){
            $c_main_c.css({'height':(w_h-125)+'px'});  
            $reply_s.hide();
            $c_main.show(); 
            cgi=1;  
          }else{
        //  $('#t_main').hide();
            c_g(-1,h_arr[0].id,h_arr[0].name,h_arr[0].img);    
          }  
        }else if(type==7){
          if(h_i7==0){
            $s_main.show();
            $reply_s.hide();    
          }else{
          //  $('#t_main').hide();
            s_g(-1,h_arr[0].id);   
          }
        }else if(type==8){
            if(h_i8==0){
              $sc_main.show();
              $reply_s.hide();    
            }else{
              sc_g(-1);   
            }  
        }else if(type==9){
          if(h_i9==0){
            $reply_s.hide();
            $t_main2.show();
            tpi=1;  
          }else{
            t_g_pf2(-1,h_arr[0].id);
            h_i9=0;  
          }  
        }else if(type==11){
          if(h_i11==0){
            $reply_p.show();
            $reply_s.hide();    
          }else{
            l_r_p_g(-1,h_arr[0].post_id);
            h_i11=0;   
          }                  
        }else if(type==12){
          l_r_s_g(-1,h_arr[0].post_id,h_arr[0].t,h_arr[0].nn,h_arr[0].txt,h_arr[0].pnn);
          h_i12=0;   
        }else if(type==13){
          if(h_i13==0){
            $reply_s.hide();
            $ep2_main.show();    
          }else{
            ep2_g_p(-1,h_arr[0].post_id);
            h_i13=0;    
          }  
        }         
      });
    var reply_s_header = $('#reply_s_header');
    reply_s_header.append(reply_s_header_x);
    $('.myreply_s').remove();
};