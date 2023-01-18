var r_p_g = function(h_s,post_id){
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
  rp_cont_cp=1;
  cgi=0;    
  if(h_index !=2){
    t_h_index=h_index;      
  }    
  h_index=2; 
  if(h_s==1){
    h_arr.unshift({type:'2',post_id:post_id});  
  }
  h_i2=0;    
  h_i11=1;    
  var reply_p = $("#reply_p");
    
  var reply_p_main_h_textarea = $("#reply_p_main_h_textarea");
  reply_p_main_h_textarea.css({'height':'50px'});
  reply_p_main_h_textarea.css({"width":w_w+10+'px',"max-height":'70px','box-shadow':'0px 0px 0px white'});
  reply_p_main_h_textarea.focus(function(){
    $(this).css({'box-shadow':'0px 0px 0px white'});
  });
  reply_p_ui();
  setTimeout(function(){
    var data = {};
    data.post_id = post_id;    
    $.ajax({
        type: 'POST',
        data: JSON.stringify(data),
        contentType: 'application/json',
        url: url+'/getreplyid',
        success: function(output){
            if(output.status==100){
              rp_id=output.reply_id;
              rp_cont = parseInt(rp_id.length/15);
              var data={};
              data.rp_id=[];    
              for(var i=0;i<15;i++){
                data.rp_id.push(output.reply_id[i]);      
              } 
              $.ajax({
                type: 'POST',
                data: JSON.stringify(data),
                contentType: 'application/json',
                url: url+'/getreply',
                success: function(output){
                  $('.myreply').remove();
                  $('.rp_btn').remove();    
                  if(output.status==100){
                    for(var i=0;i<15;i++){
                      addreply(output.username[i],output.text[i],output.created_time[i],output.comment_id[i],output.img[i],1,output.cn[i],output.id[i]);    
                    }
                    rp_btn();
                    $('.reply_p_sp').remove();  
                    reply_p_sp();  
                  }else{
                  }
                  $('.loaderrp').remove();   
                }  
              });    
            }else if(output.status==101){
              var data={};
              data.rp_id=output.reply_id;
              rp_id=output.reply_id;    
              var r_leng = data.rp_id.length;   
              $.ajax({
                type: 'POST',
                data: JSON.stringify(data),
                contentType: 'application/json',
                url: url+'/getreply',
                success: function(output){
                  if(output.status==100){
                    $('.myreply').remove();
                    $('.rp_btn').remove();
                    for(var i=0;i<r_leng;i++){
                      addreply(output.username[i],output.text[i],output.created_time[i],output.comment_id[i],output.img[i],1,output.cn[i],output.id[i]);    
                    }
                    $('.reply_p_sp').remove();  
                    reply_p_sp();  
                  }else{
                  }
                  $('.loaderrp').remove();    
                }  
              });                   
            }else if(output.status==102){
              $('.loaderrp').remove();    
              nopost_rp();    
            }else{
              $('.loaderrp').remove();    
            }

        }
    });
  },0);    
};