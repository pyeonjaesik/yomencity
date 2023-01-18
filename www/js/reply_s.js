$(function(){
  $("#reply_s_main_h_sendbtn").touchend(function(e){
    if(h_arr[0].type==4){
        $('.nopost_rs').remove();
        var retext = $("#reply_s_main_h_textarea");
        retext.blur();
        var re_v = retext.val();
        if(re_v.length<1){
          return;
        }        
        e.preventDefault();
        var data = {};
        data.comment_id = h_arr[0].comment_id;
        re_v = re_v.replace(/(\n|\r\n)/g, '<br>');
        data.text = re_v;
        retext.val('');
        $("#reply_s_main_h_textarea").css({'height':'50px'});
        data.user_id = window.localStorage['_id'];
        data.id=window.localStorage['id'];
        toast_t3('답글을 업로드 합니다.');
      window.FirebasePlugin.getToken(function(token) {
        data.tk=token;
        $.ajax({
          type:'POST',
          data:JSON.stringify(data),
          contentType: 'application/json',
          url: url+'/sreply',
          success:function(output){
            if(output.status == 100){
                var _rs = '.'+h_arr[0].comment_id+'rs';
                $(_rs).text('답글 '+output.cn+'개 보기')
                $('.reply_s_sp').remove();
                re_v = re_v.replace(/(\n|\r\n)/g, '<br>');
                addreply_s(window.localStorage['name'],re_v,parseInt(Date.now()),output.img,0,window.localStorage['id'],output.rs_id);
                reply_s_sp();
                $("#reply_s_main_c").scrollTop('1000000');
                push_rs(output.tk_s,h_arr[0].post_id,h_arr[0].comment_id,output.img,output.cn);
                if(window.localStorage['id']!=output.tk_s[0]){
                  hl3(output.tk_s[0],post_id_r,h_arr[0].comment_id);  
                } 
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
        $('.nopost_rs').remove();
        var retext = $("#reply_s_main_h_textarea");
        retext.blur();
        var re_v = retext.val();
        if(re_v.length<1){
          return;
        }    
        e.preventDefault();
        var data = {};
        data.post_id = h_arr[0].post_id;
        data.ni=h_arr[0].nn;
        data.ti=h_arr[0].t;
        data.text = re_v;
        retext.val('');
        $("#reply_s_main_h_textarea").css({'height':'50px'});
        data.user_id = window.localStorage['_id'];
        console.dir(data);
        toast_t3('답글을 업로드 합니다.');
      window.FirebasePlugin.getToken(function(token) {
        data.tk=token;
        $.ajax({
          type:'POST',
          data:JSON.stringify(data),
          contentType: 'application/json',
          url: url+'/replysl',
          success:function(output){
            if(output.status == 100){
                if(window.localStorage['nn']!=h_arr[0].pnn){
                  pg2_index1=0;
                  colhup(h_arr[0].post_id);    
                }
                var _rs = '.'+h_arr[0].t+h_arr[0].nn;
                $(_rs).text('답글 '+output.cn+'개 보기')
                $('.reply_s_sp').remove();
                re_v = re_v.replace(/(\n|\r\n)/g, '<br>');
                addreply_sl(window.localStorage['nn'],re_v,parseInt(Date.now()),2);
                reply_s_sp();
                $("#reply_s_main_c").scrollTop('1000000');
                p2al2();
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