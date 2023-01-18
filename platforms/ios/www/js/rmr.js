var rmrp = function(c_id){
  window.FirebasePlugin.getToken(function(token) {
    var data={};
    data.tk = token;
    data._id = window.localStorage['_id'];
    data.name=window.localStorage['name'];
    data.p_id=h_arr[0].post_id;  
    data.c_id=c_id;  
      $.ajax({
        type:'POST',
        data: JSON.stringify(data),
        contentType: 'application/json',  
        url:url+'/rmrp',
        success:function(output){
          if(output.status==100){
            var rpnc='.'+data.p_id+'rn'
            $(rpnc).text('댓글 '+output.cn+'개');
          }else{
            alert('token rmrp failed');
          }      
        }  
      });
    }, function(error) {
  });         
};
var rmrs = function(c_id){
  window.FirebasePlugin.getToken(function(token) {
    var data={};
    data.tk = token;
    data._id = window.localStorage['_id'];
    data.name=window.localStorage['name'];
    data.c_id=c_id;
    data.co_id=h_arr[0].comment_id;  
      $.ajax({
        type:'POST',
        data: JSON.stringify(data),
        contentType: 'application/json',
        url:url+'/rmrs',
        success:function(output){
          if(output.status==100){
            var cnrc='.'+data.co_id+'rs';
            if(output.cn==0){
              $(cnrc).text('답글 달기');  
            }else{
              $(cnrc).text('답글 '+output.cn+'개 보기');    
            }  
          }else{
            alert('token rmrp failed');
          }      
        }  
      });
    }, function(error) {
  });         
};