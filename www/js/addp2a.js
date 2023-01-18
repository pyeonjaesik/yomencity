var addp2a1 = function(post_id,n,nn,ct,pnn){ 
  var post_id = post_id;
  var nn=nn;    
  var ct = ct;
  var n = n;
  var pnn=pnn;    
  var div = $('<div></div>');
  div.css({'position':'relative','width':(w_w-80)+'px','height':'60px',background:'white','overflow':'hidden','padding-left':'80px','font-size':'17px','line-height':'22px','text-shadow':'0px 0px 0px white','color':'rgb(22,23,27)','padding-top':'15px'});   
  div.addClass('addp2a');
  if(n==1){
    div.html('<b>'+nn+'</b>님이'+'</br>새로운 댓글을 남겼습니다.');  
  }else{
    div.html('<b>'+nn+'</b>님의 댓글</br>외 '+(n-1)+'개 있습니다.');  
  }
  if(nn.length==1){
    var nd=$('<div>'+nn[0]+'</div>');    
  }else{
    var nd=$('<div>'+nn[0]+nn[1]+'</div>');  
  }
  nd.css({'position':'absolute','top':'15px','left':'8px','width':'45px','height':'45px','border-radius':'2px','overflow':'hidden','font-size':'16px','line-height':'45px','font-weight':'700','color':'white','text-shadow':'0px 0px 0px rgba(22,23,27,0)','background':'rgb(22,23,27)','text-align':'center'});
  div.append(nd);    
  ct = parseInt(Date.now())-ct;
  if(ct<60000){
    ct = parseInt(ct/1000)+'초';
  }else if(ct <3600000 && ct>=60000){
    ct = parseInt(ct/60000)+'분';
  }else if(ct <86400000 && ct>= 3600000){
    ct = parseInt(ct/3600000)+'시간';
  }else if(ct <604800000 && ct>= 86400000){
    ct = parseInt(ct/86400000)+'일';  
  }else{
    ct = parseInt(ct/604800000)+'주';   
  }
  var time = $('<span>'+ct+'</span>');
  time.css({'position':'absolute','right':'17px','bottom':'16.5px','font-size':'13.5px','color':'rgba(100,100,100,0.7)','background':'white'});
  div.append(time);
    var div_c = $('<div></div>');
    div_c.css({'position':'absolute','top':'0','left':'0','width':w_w+'px','height':'75px'});
    div_c.click(function(){
      h_i13=1;
      h_arr.unshift({type:'13',post_id:post_id});
      l_r_p_g(1,post_id,pnn);
      remp2a1(post_id);    
    });
  div.append(div_c);
  $postarea2_5.append(div);    
};
var addp2a2 = function(post_id,n,nn,ct,pnn,txt,ni,ti){ 
  var post_id = post_id;
  var nn=nn;    
  var ct = ct;
  var n = n;
  var div = $('<div></div>');
  div.css({'position':'relative','width':(w_w-80)+'px','height':'60px',background:'white','overflow':'hidden','padding-left':'80px','font-size':'17px','line-height':'22px','text-shadow':'0px 0px 0px white','color':'rgb(22,23,27)','padding-top':'15px'});   
  div.addClass('addp2a');
  if(n==1){
    div.html('<b>'+nn+'</b>님이'+'</br>새로운 답글을 남겼습니다.');  
  }else{
    div.html('<b>'+nn+'</b>님의 답글</br>외 '+(n-1)+'개 있습니다.');  
  }
  if(nn.length==1){
    var nd=$('<div>'+nn[0]+'</div>');    
  }else{
    var nd=$('<div>'+nn[0]+nn[1]+'</div>');  
  }
  nd.css({'position':'absolute','top':'20px','left':'16px','width':'37px','height':'37px','border-radius':'50%','overflow':'hidden','font-size':'12px','line-height':'37px','font-weight':'600','color':'white','text-shadow':'0px 0px 0px rgba(22,23,27,0)','background':'rgb(22,23,27)','text-align':'center'});
  div.append(nd);    
  ct = parseInt(Date.now())-ct;
  if(ct<60000){
    ct = parseInt(ct/1000)+'초';
  }else if(ct <3600000 && ct>=60000){
    ct = parseInt(ct/60000)+'분';
  }else if(ct <86400000 && ct>= 3600000){
    ct = parseInt(ct/3600000)+'시간';
  }else if(ct <604800000 && ct>= 86400000){
    ct = parseInt(ct/86400000)+'일';  
  }else{
    ct = parseInt(ct/604800000)+'주';   
  }
  var time = $('<span>'+ct+'</span>');
  time.css({'position':'absolute','right':'17px','bottom':'16.5px','font-size':'13.5px','color':'rgba(100,100,100,0.7)','background':'white'});
  div.append(time);
    var div_c = $('<div></div>');
    div_c.css({'position':'absolute','top':'0','left':'0','width':w_w+'px','height':'75px'});
    div_c.click(function(){
      h_i13=1;
      h_arr.unshift({type:'13',post_id:post_id});
      h_i11=1;
      h_arr.unshift({type:'11',post_id:post_id,nn:pnn});    
      l_r_s_g(1,post_id,ti,ni,txt,pnn);
      remp2a2(post_id,ni,ti);    
    });
  div.append(div_c);
  $postarea2_5.append(div);    
};
var remp2a1=function(post_id){
  var data={};
  data._id=window.localStorage['_id'];
  data.post_id=post_id;    
  $.ajax({
    type: 'POST',
    data: JSON.stringify(data),
    contentType: 'application/json',
    url: url+'/remp2a1', 
    success: function(output){
    }
  });      
};
var remp2a2=function(post_id,ni,ti){
  var data={};
  data._id=window.localStorage['_id'];
  data.post_id=post_id;
  data.ni=ni;
  data.ti=ti    
  $.ajax({
    type: 'POST',
    data: JSON.stringify(data),
    contentType: 'application/json',
    url: url+'/remp2a2', 
    success: function(output){
    }
  });      
};