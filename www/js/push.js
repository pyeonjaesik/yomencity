$(function() {
  $(document).on('deviceready', function() {
    window.FirebasePlugin.onNotificationOpen(function(data) {
      if(data.type==1){
        add_push1(data.id,data.name,data.img);        
      }else if(data.type==2){
        add_push2(data.id,data.name,data.img,data.post_id);    
      }else if(data.type==3){
        add_push3(data.id,data.name,data.img,data.post_id,data.comment_id);    
      }else if(data.type==4){
        add_push4(data.id,data.name,data.img,data.post_id);    
      }else if(data.type==11){
        add_push11(data.post_id,data.nn,data.pnn);  
      }else if(data.type==12){
        add_push12(data.post_id,data.nn,data.pnn,data.ni,data.ti,data.txt);  
      }
    if(data.type==6){
      if(send_id==data.id){
        add_cy(data.txt);       
      }else{
        var data_ms={};
        data_ms.id=data.id;
        $.ajax({
          type:'POST',
          data: JSON.stringify(data_ms),    
          contentType: 'application/json',
          url:url+'/getpn',
          success:function(output){
            if(output.status==100){
              add_push6(data.id,output.name,output.img);    
            }else{
            }  
          }    
        });  
      }
      if(c2i==1){
        var data2={};
        data2.id=data.id;  
        $.ajax({
         type:'POST',
         data: JSON.stringify(data2),
         contentType: 'application/json',
         url: url+'/getpn',
         success: function(output){
           if(output.status==100){
             var _cnc='.'+data.id+'cr';
             $(_cnc).remove();
             var img = output.img;
             if(img =='1'){
               img = 'img/man2.png';
             }else if(img=='2'){
               img='img/woman2.png'         
             }else{
               img = img;    
             }            
             add_cr(data.id,output.name,img,-1,0);     
            }else{

            }
          }  
        });          
      }          
    }        
}, function(error) {
});  

  });    
});
var push1 = function(id2){
  var data ={};
  data.id1 = window.localStorage['id'];    
  data._id1 = window.localStorage['_id'];
  data.id2 = id2;  //상대꺼
  $.ajax({
    type:'POST',
    data: JSON.stringify(data),
    contentType: 'application/json',
    url: url+'/push1',
    success: function(output){
        //return;
    }  
  });    
};
var push_rp = function(tk_arr,post_id,img,cn){
  var data={};
  data._id1 = window.localStorage['_id'];
  data.id1=window.localStorage['id'];    
  data.tk_arr = [];
  data.tk_arr = tk_arr;
  data.name = window.localStorage['name'];
  data.post_id=post_id;
  data.img =img;
  data.cn=cn;
  $.ajax({
    type:'POST',
    data: JSON.stringify(data),
    contentType: 'application/json',
    url: url+'/pushrp',
    success: function(output){
        
    }  
  });    
};
var push_rs = function(tk_arr,post_id,comment_id,img,cn){
  var data={};
  data._id1 = window.localStorage['_id'];
  data.id1=window.localStorage['id'];    
  data.tk_arr = [];
  data.tk_arr = tk_arr;
  data.name = window.localStorage['name'];
  data.post_id=post_id;
  data.comment_id=comment_id;    
  data.img =img;
  data.cn=cn;
  $.ajax({
    type:'POST',
    data: JSON.stringify(data),
    contentType: 'application/json',
    url: url+'/pushrs',
    success: function(output){
        
    }  
  });    
};
var push_l = function(id2,post_id,ln){
  var data ={}; 
  data._id1 = window.localStorage['_id'];
  data.id1=window.localStorage['id'];    
  data.id2 = id2;  //상대꺼
  data.post_id=post_id; 
  data.ln=(ln-1);    
  $.ajax({
    type:'POST',
    data: JSON.stringify(data),
    contentType: 'application/json',
    url: url+'/pushl',
    success: function(output){
        //return;
    }  
  });    
};