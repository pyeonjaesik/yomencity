var r_s_g = function(h_s,post_id,comment_id,rsh,index){
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
  if(h_s==1){
    h_arr.unshift({type:'4',comment_id:comment_id,post_id:post_id});      
  }
  h_i4=0;    
  h_i12=1;
  reply_s_ui();
  setTimeout(function(){
    var data = {};
    data.comment_id = comment_id;              
    if(index==0){
      rsh=rsh;
        $.ajax({
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json',
            url: url+'/getsreplyid',
            success: function(output){
                if(output.status==100){
                  rs_id=output.reply_id;
                  rs_cont = parseInt(rs_id.length/15);    
                  var data={};
                  data.rs_id=[];    
                  for(var i=0;i<15;i++){
                    data.rs_id.push(output.reply_id[i]);      
                  }      
                  $.ajax({
                    type: 'POST',
                    data: JSON.stringify(data),
                    contentType: 'application/json',
                    url: url+'/getsreply',
                    success: function(output){
                      if(output.status==100){
                        $('.myreply_s').remove();
                        for(var i=0;i<15;i++){
                          addreply_s(output.username[i],output.text[i],output.created_time[i],output.img[i],1,output.id[i],rs_id[i]);    
                        }
                        rs_btn();  
                        addreply_sh(rsh.n,rsh.txt,rsh.t,rsh.i,rsh.id);
                        $('.reply_s_sp').remove();
                        reply_s_sp();  
                      }else{
                      }
                      $('.loaderrs').remove();    
                    }  
                  });    
                }else if(output.status==101){
                  var data={};
                  data.rs_id=output.reply_id;
                  rs_id=output.reply_id;    
                  var r_leng = data.rs_id.length;   
                  $.ajax({
                    type: 'POST',
                    data: JSON.stringify(data),
                    contentType: 'application/json',
                    url: url+'/getsreply',
                    success: function(output){
                      if(output.status==100){
                        $('.myreply_s').remove();
                        for(var i=0;i<r_leng;i++){
                          addreply_s(output.username[i],output.text[i],output.created_time[i],output.img[i],1,output.id[i],rs_id[i]);    
                        }
                        addreply_sh(rsh.n,rsh.txt,rsh.t,rsh.i,rsh.id);  
                        $('.reply_s_sp').remove();  
                        reply_s_sp();  
                      }else{
                      }
                      $('.loaderrs').remove();    
                    }  
                  });                   
                }else if(output.status==102){
                  $('.loaderrs').remove();    
                  nopost_rs();   
                }else{
                  $('.loaderrs').remove();    
                }

            }
        });        
    }else{
    var data_c={};
    data_c.c_id=comment_id;        
    $.ajax({
      type:'POST',
      data: JSON.stringify(data_c),
      contentType:'application/json',
      url: url+'/getcm',
      success:function(output){
        if(output.status==100){
        rsh={n:output.n,txt:output.txt,id:output.id,t:output.t,i:output.img};    
        $.ajax({
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json',
            url: url+'/getsreplyid',
            success: function(output){
                if(output.status==100){
                  rs_id=output.reply_id;
                  rs_cont = parseInt(rs_id.length/15);    
                  var data={};
                  data.rs_id=[];    
                  for(var i=0;i<15;i++){
                    data.rs_id.push(output.reply_id[i]);      
                  }      
                  $.ajax({
                    type: 'POST',
                    data: JSON.stringify(data),
                    contentType: 'application/json',
                    url: url+'/getsreply',
                    success: function(output){
                      if(output.status==100){
                        $('.myreply_s').remove();
                        for(var i=0;i<15;i++){
                          addreply_s(output.username[i],output.text[i],output.created_time[i],output.img[i],1,output.id[i]);    
                        }
                        rs_btn();  
                        addreply_sh(rsh.n,rsh.txt,rsh.t,rsh.i,rsh.id);  
                        $('.reply_s_sp').remove();
                        reply_s_sp();  
                      }else{
                      }
                      $('.loaderrs').remove();    
                    }  
                  });    
                }else if(output.status==101){
                  var data={};
                  data.rs_id=output.reply_id;
                  rs_id=output.reply_id;    
                  var r_leng = data.rs_id.length;   
                  $.ajax({
                    type: 'POST',
                    data: JSON.stringify(data),
                    contentType: 'application/json',
                    url: url+'/getsreply',
                    success: function(output){
                      if(output.status==100){
                        $('.myreply_s').remove();
                        for(var i=0;i<r_leng;i++){
                          addreply_s(output.username[i],output.text[i],output.created_time[i],output.img[i],1,output.id[i]);    
                        }
                        addreply_sh(rsh.n,rsh.txt,rsh.t,rsh.i,rsh.id);  
                        $('.reply_s_sp').remove();  
                        reply_s_sp();  
                      }else{
                      }
                      $('.loaderrs').remove();    
                    }  
                  });                   
                }else if(output.status==102){
                  $('.loaderrs').remove();    
                  nopost_rs();   
                }else{
                  $('.loaderrs').remove();    
                }

            }
        });            
        }else{
        }  
      }    
    });        
    }
  },0);    
};