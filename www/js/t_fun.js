var t_fun1=function(c_t){   
  var rc=parseInt(Date.now())-c_t;
  if(rc==0){
    rc='지금';   
  }else if(rc<60000){
    rc = parseInt(rc/1000)+'초';
  }else if(rc <3600000 && rc>=60000){
    rc = parseInt(rc/60000)+'분';
  }else if(rc <86400000 && rc>= 3600000){
    rc = parseInt(rc/3600000)+'시간';
  }else{
    var d = new Date(c_t);
    var h=d.getHours();
    var m=d.getMinutes();
    if(m<10){
      m='0'+m;  
    }    
    if(h>=13){
      h=' 오후 '+(h-12)+':'+m;  
    }else if(h>0){
      h=' 오전 '+h+':'+m;  
    }else{
      h=' 오후 '+'12'+':'+m;  
    }    
    rc = (d.getMonth()+1)+'월'+d.getDate()+'일'+h;
  }
  return rc;    
}
var t_fun2=function(c_t){
  var d = new Date(c_t); 
  var rc = (d.getMonth()+1)+'월'+d.getDate()+'일';
  return rc;    
}
var t_fun3=function(c_t){   
  var rc=parseInt(Date.now())-c_t;
  if(rc==0){
    rc='지금';   
  }else if(rc<60000){
    rc = parseInt(rc/1000)+'초';
  }else if(rc <3600000 && rc>=60000){
    rc = parseInt(rc/60000)+'분';
  }else if(rc <86400000 && rc>= 3600000){
    rc = parseInt(rc/3600000)+'시간';
  }else if(rc <1209600000 && rc>=86400000){
    rc = parseInt(rc/86400000) +'일'; 
  }else{
    rc = parseInt(rc/604800000)
  }
  return rc;    
}
var t_fun4=function(rc){   
  var rc=rc
  if(rc<60000){
    rc = parseInt(rc/1000)+'초';
  }else if(rc <3600000 && rc>=60000){
    rc = parseInt(rc/60000)+'분';
  }else{
    rc = parseInt(rc/3600000)+'시간 '+parseInt((rc%3600000)/60000)+'분';
  }
  return rc;    
}