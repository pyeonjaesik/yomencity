var rm_p=function(post_id){
    toast_t2('게시물을 삭제하고 있습니다.')
    var post_id=post_id;
    h_arr.shift();
    h_i3=1;
    $('.loader_eg').remove();
    var ic='.'+post_id+'if';
    var div=$('<div>삭제된<br>게시물</div>');
    div.css({'position':'absolute','width':'100%','height':'100%','top':'0','left':'0','background':'rgba(100,100,100,0.6)','text-align':'center','color':'white','font-size':'20px','line-height':'35px','text-shadow':'rgba(100,100,100,0.6)','padding-top':'18px'});
    $(ic).append(div);
    var ic2='.'+post_id+'if2';
    $(ic2).remove();
    hl_arr.shift();
    $('.set').remove();
    $('.e_post').remove();
    $('.loader_eg').remove();
    $('.l_b2').remove();    
    if(h_arr.length>0){
      var type = h_arr[0].type;
      if(type==1){
        if(h_i1==0){
          $('#e_main').hide();    
          $('#t_main').show();
          tpi=2;    
        }else{
          t_g_pf1(-1,h_arr[0].id);
          h_i1=0;    
        }
      }else if(type==2){
        if(h_i2==0){
          $('#e_main').hide();
          $('#reply_p').show();    
        }else{
          r_p_g(-1,h_arr[0].post_id);    
        } 
      }else if(type ==3){
          e_g_p(-1,h_arr[0].post_id);
          h_i3=0;
      }else if(type==4){
        if(h_i4==0){
          $('#e_main').hide();
          $('#reply_s').show();    
        }else{
          r_s_g(-1,h_arr[0].comment_id);    
        }  
      }else if(type==5){
        if(h_i5==0){
          $('#e_main').hide();
          $('#l_main').show();   
        }else{
          l_g(-1,h_arr[0].post_id);    
        }  
      }else if(type==6){
        if(h_i6==0){
          $('#e_main').hide();
          $('#c_main').show();    
        }else{
        //  $('#t_main').hide();
          c_g(-1,h_arr[0].id,h_arr[0].name,h_arr[0].img);    
        }  
      }else if(type==7){
        if(h_i7==0){
          $('#s_main').show();
          $('#e_main').hide();    
        }else{
        //  $('#t_main').hide();
          s_g(-1,h_arr[0].id);   
        }
      }else if(type==8){
        if(h_i8==0){
          $('#sc_main').show();
          $('#e_main').hide();    
        }else{
          sc_g(-1);   
        }  
      }else if(type==9){
        if(h_i9==0){
          $('#e_main').hide();
          $('#t_main2').show();
          tpi=1;    
        }else{
          t_g_pf2(-1,h_arr[0].id);
          h_i9=0;    
        }  
      }
    }else{
      h_index=t_h_index;
      $('#e_main').hide();    
    }    
  window.FirebasePlugin.getToken(function(token) {
    var data = {};
    data._id=window.localStorage['_id'];
    data.post_id=post_id;
    data.tk=token;
    data.id=window.localStorage['id'];
    data.name=window.localStorage['name'];
    $.ajax({
      type:'POST',
      data:JSON.stringify(data),
      contentType: 'application/json',
      url: url+'/rmp',
      success:function(output){
        if(output.status==100){
          toast_t2('게시물 삭제를 성공 하였습니다.')    
        }else{
          toast_t2('게시물 삭제중 오류 발생')    
        }  
      }    
    });  
    }, function(error) {
   });      
}