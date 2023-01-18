var e_g_p2 = function(h_s,username,img1,img2,img3,img4,text,id,post_id,created_time,pimg,ln,cn){
  if($t_main.length!=0){$t_main.hide();}
  if($t_main2.length!=0){$t_main2.hide();}
  if($reply_p.length!=0){$reply_p.hide();}
  if($reply_s.length!=0){$reply_s.hide();}
  if($l_main.length!=0){$l_main.hide();}
  if($c_main.length!=0){$c_main.hide();}
  if($s_main.length!=0){$s_main.hide();}
  if($sc_main.length!=0){$sc_main.hide();}
  if($ep2_main.length!=0){$ep2_main.hide();}   
  $('.l_b2').remove();    
  $e_main.show();
  $('.e_post').remove();
  $('.set_c').remove();
  $('.set').remove();
  cgi=0;    
  if(h_index !=2){
    t_h_index=h_index;      
  }
  if(h_s==1){
    h_arr.unshift({type:'3',post_id:post_id});      
  }
  h_i3=0;    
  h_index=2;      
  var left = $('<img>');
  left.attr('src','img/l_w.png');
  left.css({'position':'absolute','top':'12px','left':'7px','width':'35px','height':'35px','background':'rgba(22,23,27,0.1)'});
  var leftbtn = $('<div></div>');
  leftbtn.css({'position':'absolute','top':'0','left':'0','width':'50px','height':'50px'});    
  left.addClass('l_b2');
  leftbtn.addClass('l_b2');    
  e_addpost(username,img1,img2,img3,img4,text,1,id,post_id,created_time,pimg,ln,cn);
  visit_f1(id);    
  var element2 = $('#e_header');
  element2.append(left);
  element2.append(leftbtn);
  leftbtn.touchend(function(){
    h_arr.shift();
    h_i3=1;
    $('.set_c').remove();
    $('.set').remove();
    $('.e_post').remove();
    $('.l_b2').remove();  
    if(h_arr.length>0){
      var type = h_arr[0].type;
      if(type==1){
        if(h_i1==0){
          $e_main.hide();    
          $t_main.show();
          tpi=2;    
        }else{
          t_g_pf1(-1,h_arr[0].id);
          h_i1=0;
        }
      }else if(type==2){
        if(h_i2==0){
          $e_main.hide();
          $reply_p.show();    
        }else{
          r_p_g(-1,h_arr[0].post_id);    
        } 
      }else if(type ==3){
          e_g_p(-1,h_arr[0].post_id);
          h_i3=0;
      }else if(type==4){
        if(h_i4==0){
          $e_main.hide();
          $reply_s.show();    
        }else{
          r_s_g(-1,h_arr[0].post_id,h_arr[0].comment_id);    
        }  
      }else if(type==5){
        if(h_i5==0){
          $e_main.hide();
          $l_main.show();   
        }else{
          l_g(-1,h_arr[0].post_id);    
        }  
      }else if(type==6){
        if(h_i6==0){
          $e_main.hide();
          $c_main.show();
          cgi=1;    
        }else{
        //  $('#t_main').hide();
          c_g(-1,h_arr[0].id,h_arr[0].name,h_arr[0].img);    
        }  
      }else if(type==7){
        if(h_i7==0){
          $s_main.show();
          $e_main.hide();    
        }else{
        //  $('#t_main').hide();
          s_g(-1,h_arr[0].id);   
        }
      }else if(type==8){
        if(h_i8==0){
          $sc_main.show();
          $e_main.hide();    
        }else{
          sc_g(-1);   
        }  
      }else if(type==9){
        if(h_i9==0){
          $e_main.hide();
          $t_main2.show();
          tpi=1;  
        }else{
          t_g_pf2(-1,h_arr[0].id); 
          h_i9=0;  
        }  
      }else if(type==11){
        if(h_i11==0){
          $reply_p.show();
          $e_main.hide();    
        }else{
          l_r_p_g(-1,h_arr[0].post_id);
          h_i11=0;   
        }                  
      }else if(type==12){
        if(h_i12==0){
          $reply_s.show();
          $e_main.hide();    
        }else{
          l_r_s_g(-1,h_arr[0].post_id,h_arr[0].t,h_arr[0].nn,h_arr[0].txt,h_arr[0].pnn);
          h_i12=0;   
        }   
      }else if(type==13){
        if(h_i13==0){
          $e_main.hide();
          $ep2_main.show();    
        }else{
          ep2_g_p(-1,h_arr[0].post_id);
          h_i13=0;    
        }  
      }
    }else{        
      h_index=t_h_index;
      $e_main.hide();    
    }  
  });    
};