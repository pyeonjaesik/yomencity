$(function(){
  $("#reply_p_main_h_sendbtn").touchend(function(e){
    if(h_arr[0].type==2){
        $('.nopost_rp').remove();
        var retext = $("#reply_p_main_h_textarea");
        retext.blur();
        var re_v = retext.val();
        if(re_v.length<1){
          return;
        }
        e.preventDefault();
        var data = {};
        data.post_id = h_arr[0].post_id;
        re_v = re_v.replace(/(\n|\r\n)/g, '<br>');
        data.text = re_v;
        retext.val('');
        $("#reply_p_main_h_textarea").css({'height':'50px'});
        data.user_id = window.localStorage['_id'];
        data.id=window.localStorage['id'];
        toast_t3('댓글을 업로드 합니다.');
      window.FirebasePlugin.getToken(function(token) {
        data.tk=token;
        $.ajax({
          type:'POST',
          data:JSON.stringify(data),
          contentType: 'application/json',
          url: url+'/reply',
          success:function(output){
            if(output.status == 100){
                var rpnc = '.'+h_arr[0].post_id+'rn';
                $(rpnc).html('<b>댓글</b> '+output.cn+'개');
                $('.reply_p_sp').remove();
                re_v = re_v.replace(/(\n|\r\n)/g, '<br>');
                addreply(window.localStorage['name'],re_v,parseInt(Date.now()),output.comment_id,output.img,0,0,window.localStorage['id']);
                reply_p_sp();
                $("#reply_p_main_c").scrollTop('1000000');
                if(window.localStorage['id']!=output.tk_s[0]){
                  hl2(output.tk_s[0],h_arr[0].post_id);  
                }
                push_rp(output.tk_s,h_arr[0].post_id,output.img,output.cn);
            }else if(output.status==500){
                toast_t2('오늘은 더이상 댓글을 달지 못합니다.');
            }else{
                toast_t3('서버 오류가 있습니다.');
            }              
          }    
        });  
        }, function(error) {
       });          
    }else{
        $('.nopost_rp').remove();
        var retext = $("#reply_p_main_h_textarea");
        retext.blur();
        var re_v = retext.val();
        if(re_v.length<1){
          return;
        }
        e.preventDefault();
        var data = {};
        data.post_id = h_arr[0].post_id;
        data.text = re_v;
        retext.val('');
        $("#reply_p_main_h_textarea").css({'height':'50px'});
        data.user_id = window.localStorage['_id'];
        toast_t3('댓글을 업로드 합니다.');
      window.FirebasePlugin.getToken(function(token) {
        data.tk=token;
        $.ajax({
          type:'POST',
          data:JSON.stringify(data),
          contentType: 'application/json',
          url: url+'/replypl',
          success:function(output){
            if(output.status == 100){
                if(window.localStorage['nn']!=h_arr[0].nn){
                  pg2_index1=0;
                  colhup(h_arr[0].post_id);
                  p2al1();    
                }                
                var rpnc = '.'+h_arr[0].post_id+'rn';
                $(rpnc).html('댓글 '+output.cn);
                $('.reply_p_sp').remove();                addreply_pl(window.localStorage['nn'],re_v,output.ct,0,2,h_arr[0].nn);
                reply_p_sp();
                $("#reply_p_main_c").scrollTop('1000000');
            }else if(output.status==500){
                toast_t2('오늘은 더이상 댓글을 달지 못합니다.');
            }else{
                toast_t3('서버 오류가 있습니다.');
            }              
          }    
        });  
        }, function(error) {
       });          
    } 
  });
});