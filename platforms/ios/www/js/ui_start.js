$(function(){
  $('#Pg_start_btn').click(function(){
    $('#Pg_start').hide();
    window.localStorage['login']=1;   
      window.FirebasePlugin.getToken(function(token) {
      var data={};
      data.tk = token;
      window.localStorage['tk']=token;
      data._id = window.localStorage['_id'];
      data.id=window.localStorage['id'];      
      $.ajax({
        type:'POST',
        data: JSON.stringify(data),
        contentType: 'application/json',  
        url:url+'/stk',
        success:function(output){
          if(output.status==100){

          }else{
            alert('token update failed');
          }      
        }  
      });
}, function(error) {
    console.error(error);
});                        
  });   
});