var chtk= function(){
  window.FirebasePlugin.getToken(function(token) {
    var token=token||'n';  
    if(token.length<10){
      chtk();
      return;    
    }  
    var data={};  
    data.tk = token;
    window.localStorage['tk']=token;
    data._id = window.localStorage['_id'];
    data.id=window.localStorage['id'];
    data.name=window.localStorage['name']; 
    $.ajax({
      type:'POST',
      data: JSON.stringify(data),
      contentType: 'application/json',  
      url:url+'/stk',
      success:function(output){
        if(output.status==100){
        }else if(output.status==500){
          alert('token update failed1');
        }else{
          alert('token update failed1');  
        }      
      }  
    });
  }, function(error) {
      alert(JSON.stringify(error));
    console.error(error);
  });    
}