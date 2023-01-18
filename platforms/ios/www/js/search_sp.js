var s_sp5= function(id,n,index){
  var id=id;    
  var n =n||0;    
  var index = index;
  var div=$('<div></div>');
  div.addClass('s_sp5');    
  div.css({'position':'relative','width':w_w+'px','height':'50px','text-align':'center','line-height':'47px','font-size':'17px','color':'white','text-shadow':'0px 0px 0px rgba(255,255,255,0)'});
  if(index==1){
    div.text(n+'개의 팔로잉 검색');
    div.css({'background':'rgb(29,162,241)'});  
  }else{
    div.text(n+'명의 팔로워 검색');
    div.css({'background':'green'});  
  }
  var s_s=$('<div></div>');
  s_s.css({'position':'absolute','bottom':'0','left':'0','width':'100%','height':'3px','background':'white'});
  div.append(s_s);    
  var element=$('#Pg5_info');
  element.prepend(div);
  div.touchend(function(){
    s_g(1,id,index);
  });      
};
var s_sp_t= function(id,n,index){
  var id=id;    
  var n =n||0;
  var index = index;
  var div=$('<div></div>');
  div.addClass('s_sp_t');    
  div.css({'position':'relative','width':w_w+'px','height':'50px','text-align':'center','line-height':'47px','font-size':'17px','color':'white','text-shadow':'0px 0px 0px rgba(255,255,255,0)'});
  if(index==1){
    div.text(n+'개의 팔로잉 검색');
    div.css({'background':'rgb(29,162,241)'});  
  }else{
    div.text(n+'명의 팔로워 검색');
    div.css({'background':'green'});  
  }
  var s_s=$('<div></div>');
  s_s.css({'position':'absolute','bottom':'0','left':'0','width':'100%','height':'3px','background':'white'});
  div.append(s_s);
  var element=$('#t_info');
  element.prepend(div);
  div.touchend(function(){
    s_g(1,id,index);
  });      
};
var s_sp_t2= function(id,n,index){
  var id=id;    
  var n =n||0;
  var index = index;
  var div=$('<div></div>');
  div.addClass('s_sp_t2');    
  div.css({'position':'relative','width':w_w+'px','height':'50px','text-align':'center','line-height':'47px','font-size':'17px','color':'white','text-shadow':'0px 0px 0px rgba(255,255,255,0)'});
  if(index==1){
    div.text(n+'개의 팔로잉 검색');
    div.css({'background':'rgb(29,162,241)'});  
  }else{
    div.text(n+'명의 팔로워 검색');
    div.css({'background':'green'});  
  }
  var s_s=$('<div></div>');
  s_s.css({'position':'absolute','bottom':'0','left':'0','width':'100%','height':'3px','background':'white'});
  div.append(s_s);
  var element=$('#t_info2');
  element.prepend(div);
  div.touchend(function(){
    s_g(1,id,index);
  });      
};