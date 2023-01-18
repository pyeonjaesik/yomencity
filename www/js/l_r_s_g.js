var l_r_s_g = function(h_s,post_id,ct,nn,replytext,pnn){
  if($t_main.length!=0){$t_main.hide();}
  if($t_main2.length!=0){$t_main2.hide();}
  if($e_main.length!=0){$e_main.hide();}
  if($reply_p.length!=0){$reply_p.hide();}
  if($l_main.length!=0){$l_main.hide();}
  if($c_main.length!=0){$c_main.hide();}
  if($s_main.length!=0){$s_main.hide();}
  if($sc_main.length!=0){$sc_main.hide();}
  if($ep2_main.length!=0){$ep2_main.hide();}    
  $reply_s.show();
  $('.rs_btn').remove();
  $('.myreply_s').remove();
  $('.myreply_sh').remove();
  cgi=0;    
  loaderrs();    
  rs_cont_cp=1;    
  if(h_index !=2){
    t_h_index=h_index;      
  }
  h_index=2;
  var post_id=post_id;
  var ct=ct;    
  if(h_s==1){
    h_arr.unshift({type:'12',post_id:post_id,t:ct,nn:nn,txt:replytext,pnn:pnn});      
  }
  h_i12=0;    
  h_i4=1;
  setTimeout(function(){
    var data = {};
    data._id = post_id;
    data.ti=ct;
    data.ni=nn;  
    $.ajax({
        type: 'POST',
        data: JSON.stringify(data),
        contentType: 'application/json',
        url: url+'/gplrs', //get plag reply son;
        success: function(output){
            if(output.status==100){
              $('.loaderrs').remove();    
              var rp=output.rp;
              var rpl=rp.length;
                console.dir(rp);
              if(rpl==0){    
                nopost_rs();                  
              }else{
                for(var i=0;i<rpl;i++){
                  addreply_sl(rp[i].nn,rp[i].txt,rp[i].t,1);    
                }
                addreply_shl(h_arr[0].nn,h_arr[0].txt,h_arr[0].t);  
                $('.reply_s_sp').remove();  
                reply_s_sp();
                $("#reply_s_main_c").scrollTop('1000000');  
              }    
            }else{
              $('.loaderrs').remove();    
            }

        }
    });
  },0);   
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
        h_i12=1;
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