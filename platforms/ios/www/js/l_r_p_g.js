var l_r_p_g = function(h_s,post_id,nn){
  if($t_main.length!=0){$t_main.hide();}
  if($t_main2.length!=0){$t_main2.hide();}
  if($e_main.length!=0){$e_main.hide();}
  if($reply_s.length!=0){$reply_s.hide();}
  if($l_main.length!=0){$l_main.hide();}
  if($c_main.length!=0){$c_main.hide();}
  if($s_main.length!=0){$s_main.hide();}
  if($sc_main.length!=0){$sc_main.hide();}
  if($ep2_main.length!=0){$ep2_main.hide();}    
  $reply_p.show();    
  $('.rp_btn').remove();
  $('.myreply').remove();
  loaderrp();
  cgi=0;    
  if(h_index !=2){
    t_h_index=h_index;      
  }    
  h_index=2; 
  if(h_s==1){
    h_arr.unshift({type:'11',post_id:post_id,nn:nn});  
  }
  h_i11=0;    
  h_i2=1;
  var reply_p = $("#reply_p");
  var reply_p_main_h_textarea = $("#reply_p_main_h_textarea");
  reply_p_main_h_textarea.css({'height':'50px'});
  reply_p_main_h_textarea.css({"width":w_w+10+'px',"max-height":'70px','box-shadow':'0px 0px 0px white'});
  reply_p_main_h_textarea.focus(function(){
    $(this).css({'box-shadow':'0px 0px 0px white'});
  });
  setTimeout(function(){
    var data = {};
    data._id = post_id;    
    $.ajax({
        type: 'POST',
        data: JSON.stringify(data),
        contentType: 'application/json',
        url: url+'/gplrp', //get plag reply parent
        success: function(output){
            if(output.status==100){
              $('.loaderrp').remove();    
              var rp=output.rp;
              var rpl=rp.length;
                console.dir(rp);
              if(rpl==0){    
                nopost_rp();                  
              }else{
                for(var i=0;i<rpl;i++){
                  addreply_pl(rp[i].nn,rp[i].txt,rp[i].t,rp[i].cn,1,nn);    
                }        
                $('.reply_p_sp').remove();  
                reply_p_sp();
                $("#reply_p_main_c").scrollTop('1000000');  
              }    
            }else{
              $('.loaderrp').remove();    
            }

        }
    });
  },0);
    
    $('.rp_xbtn').remove();
    var reply_p_header_x = $('<img>');
    reply_p_header_x.addClass('rp_xbtn');  reply_p_header_x.css({'position':'absolute','width':'35px','height':'35px','top':'12px','left':'7px'});
    reply_p_header_x.attr('src','img/l_b.png');
    
    var reply_p_header = $('#reply_p_header');
    reply_p_header.append(reply_p_header_x);  
    reply_p_header_x.touchend(function(){
      $('.rp_btn').remove();        
      $('.myreply').remove();
      $("#reply_p_main_h_textarea").val('');
      $('.rp_xbtn').remove();
      h_arr.shift();
      h_i11=1;
      if(h_arr.length>0){
        var type = h_arr[0].type;            
        if(type==1){
          if(h_i1==0){
            $reply_p.hide();    
            $t_main.show();
            tpi=2;    
          }else{
            t_g_pf1(-1,h_arr[0].id);
            h_i1=0;    
          }             
        }else if(type==2){ 
          r_p_g(-1,h_arr[0].post_id);
          h_i2=0;  
        }else if(type==3){
          if(h_i3==0){
            $reply_p.hide();  
            $e_main.show();
          }else{
            e_g_p(-1,h_arr[0].post_id);
            h_i3=0;  
          }             
        }else if(type==4){
          if(h_i4==0){
            $reply_p.hide();   
            $reply_s.show();
          }else{
            r_s_g(-1,h_arr[0].post_id,h_arr[0].comment_id);
            h_i4=0;  
          }             
        }else if(type==5){
          if(h_i5==0){
            $reply_p.hide();
            $l_main.show();
          }else{
            l_g(-1,h_arr[0].post_id);
            h_i5=0;  
          }             
        }else if(type==6){
          if(h_i6==0){
            $c_main_c.css({'height':(w_h-125)+'px'});    
            $reply_p.hide();
            $c_main.show(); 
            cgi=1;    
          }else{
            c_g(-1,h_arr[0].id,h_arr[0].name,h_arr[0].img);
            h_i6=0;  
          }  
        }else if(type==7){
          if(h_i7==0){
            $s_main.show();
            $reply_p.hide();    
          }else{
            s_g(-1,h_arr[0].id);   
          }
        }else if(type==8){
          if(h_i8==0){
            $sc_main.show();
            $reply_p.hide();    
          }else{
            sc_g(-1);   
          }  
        }else if(type==9){
          if(h_i9==0){
            $reply_p.hide();
            $t_main2.show();
            tpi=1;    
          }else{
            t_g_pf2(-1,h_arr[0].id);
            h_i9=0;    
          }  
        }else if(type==11){
            l_r_p_g(-1,h_arr[0].post_id);
            h_i11=0;    
        }else if(type==12){
          if(h_i12==0){
            $reply_s.show();
            $reply_p.hide();    
          }else{
            l_r_s_g(-1,h_arr[0].post_id,h_arr[0].t,h_arr[0].nn,h_arr[0].txt,h_arr[0].pnn);
            h_i12=0;   
          }   
        }else if(type==13){
          if(h_i13==0){
            $reply_p.hide();
            $ep2_main.show();    
          }else{
            ep2_g_p(-1,h_arr[0].post_id);
            h_i13=0;    
          }  
        }           
      }else{            
        h_index=t_h_index;
        $reply_p.hide();    
      }        

});    
};