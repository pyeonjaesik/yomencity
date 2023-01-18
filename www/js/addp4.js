var addp41 = function(id,name,img,ct,d_i){    
  var div = $('<div></div>');
  div.css({'position':'relative','top':'0','left':'0','width':'100%','height':'75px',background:'white','overflow':'hidden'});
  div.addClass('addp4');
  var id =id;
  var name = name;
  var img = img;
  var ct=ct;
  var d_i=d_i;
  var span = $('<span></span>');
  span.html('<b>'+name+'</b>님이'+'</br>팔로우 합니다.');
  span.css({'position':'absolute','top':'12.5px','left':'80px','height':'50px','line-height':'25px','font-size':'17px'});
  div.append(span);
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
    if(img =='1'){
      var img_s = 'img/man.png';
    }else if(img =='2'){
      var img_s = 'img/woman.png';       
    }else{
      var img_s = img;    
    }
  var dot =$('<div></div>');    
  var img_c = $('<div></div>');
  img_c.css({'position':'absolute','top':'12.5px','left':'5px','width':'50px','height':'50px','overflow':'hidden','border-radius':'50%'});
    var img = $('<img>');
    img.attr('src',img_s);
    img.load(function(){
        var nh = this.naturalHeight;
        var nw = this.naturalWidth;
        var gr = nh/nw;
        img.css({'position':'absolute'});
        if(gr>=1){
            img.css({'width':'50px','height':(50*gr)+'px','top':(-1)*(50*gr-50)/2+'px','left':'0'});
        }else{
            img.css({'width':50/gr+'px','height':50+'px','left':(-1)*(50/gr-50)/2,'top':'0'});
        }
        img_c.append(img);
        div.append(img_c);
        if(d_i==1){
          dot.css({'position':'absolute','background':'red','border-radius':'50%','width':'10px','height':'10px','border':'3px solid white','top':'14px','left':'43px'});
          div.append(dot);    
        }
        $postarea4.append(div);
    });

    var div_c = $('<div></div>');
    div_c.css({'position':'absolute','top':'2.5px','left':'0','width':w_w+'px','height':'70px'});
    div_c.click(function(){
      t_g_pf(1,id);
      if(d_i==1){
        d_i=0;  
        dot.remove(); 
        aln--;  
        if(aln==0){
          $('#Pg4_header').html('새로운 소식을 모두 확인 하였습니다.');   
        }else{
          $('#Pg4_header').html(aln+'개의 새로운 소식');    
        }              
        achd1(id);  
      }    
    });
    div.append(div_c);
    img.click(function(){   
      t_g_pf(1,id);
      if(d_i==1){
        d_i=0;  
        dot.remove(); 
        aln--;  
        if(aln==0){
          $('#Pg4_header').html('새로운 소식을 모두 확인 하였습니다.');   
        }else{
          $('#Pg4_header').html(aln+'개의 새로운 소식');    
        }              
        achd1(id);  
      }    
    });        
    post_a_scroll_h-=9925;
};
var addp42 = function(id,name,img,post_id,cn,ct,d_i){ 
  var post_id = post_id;    
  var id =id;
  var name = name;
  var img = img;
  var ct = ct;
  var cn = cn;
  var d_i=d_i;    
  var div = $('<div></div>');
  div.css({'position':'relative','top':'0','left':'0','width':'100%','height':'75px',background:'white','overflow':'hidden'});   
  div.addClass('addp4');
  var span = $('<span></span>');
  if(cn==0){
    span.html('<b>'+name+'</b>님이'+'</br>새로운 댓글을 남겼습니다.');  
  }else{
    span.html('<b>'+name+'</b>님의 댓글</br>외 '+cn+'개 있습니다.');  
  }    
  
  span.css({'position':'absolute','top':'12.5px','left':'80px','height':'50px','line-height':'25px','font-size':'17px','text-shadow':'0px 0px 0px white'});
  div.append(span);
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
    if(img =='1'){
      var img_s = 'img/man.png';
    }else if(img =='2'){
      var img_s = 'img/woman.png';       
    }else{
      var img_s = img;    
    }
  var dot =$('<div></div>');    
  var img_c = $('<div></div>');
  img_c.css({'position':'absolute','top':'12.5px','left':'5px','width':'50px','height':'50px','overflow':'hidden','border-radius':'50%'});
    var img = $('<img>');
    img.attr('src',img_s);
    img.load(function(){
        var nh = this.naturalHeight;
        var nw = this.naturalWidth;
        var gr = nh/nw;
        img.css({'position':'absolute'});
        if(gr>=1){
            img.css({'width':'50px','height':(50*gr)+'px','top':(-1)*(50*gr-50)/2+'px','left':'0'});
        }else{
            img.css({'width':50/gr+'px','height':50+'px','left':(-1)*(50/gr-50)/2,'top':'0'});
        }
        img_c.append(img);
        div.append(img_c);
        if(d_i==1){
          dot.css({'position':'absolute','background':'red','border-radius':'50%','width':'10px','height':'10px','border':'3px solid white','top':'14px','left':'43px'});
          div.append(dot);    
        }
        $postarea4.append(div);            
    });
    var div_c = $('<div></div>');
    div_c.css({'position':'absolute','top':'2.5px','left':'70px','width':(w_w-75)+'px','height':'70px'});
    div_c.click(function(){
      h_i3=1;
      h_arr.unshift({type:'3',post_id:post_id}); 
      r_p_g(1,post_id);
      p_i=0;
      if(d_i==1){
        d_i=0;  
        dot.remove();  
        aln--;  
        if(aln==0){
          $('#Pg4_header').html('새로운 소식을 모두 확인 하였습니다.');   
        }else{
          $('#Pg4_header').html(aln+'개의 새로운 소식');    
        }              
        achd2(post_id);
      }            
    });
    div.append(div_c);
    img.click(function(){   
      t_g_pf(1,id);
      if(d_i==1){
        d_i=0;              
        dot.remove();
        aln--;  
        if(aln==0){
          $('#Pg4_header').html('새로운 소식을 모두 확인 하였습니다.');   
        }else{
          $('#Pg4_header').html(aln+'개의 새로운 소식');    
        }              
        achd2(post_id);
      }    
    });
    post_a_scroll_h-=9925;
};
var addp43 = function(id,name,img,post_id,comment_id,cn,ct,d_i){    
  var div = $('<div></div>');
  div.css({'position':'relative','top':'0','left':'0','width':'100%','height':'75px',background:'white','overflow':'hidden'});
  div.addClass('addp4');
  var id =id;
  var name = name;
  var img = img;
  var rsh={id:id,n:name,i:img};    
  var comment_id = comment_id;
  var ct = ct;
  var cn = cn;
  var d_i =d_i;   
  var span = $('<span></span>');
  if(cn==0){
    span.html('<b>'+name+'</b>님이'+'</br>새로운 답글을 남겼습니다.');  
  }else{
    span.html('<b>'+name+'</b>님의 답글</br>외 '+cn+'개 있습니다.');  
  }     
  
  span.css({'position':'absolute','top':'12.5px','left':'80px','height':'50px','line-height':'25px','font-size':'17px'});
  div.append(span);
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
    if(img =='1'){
      var img_s = 'img/man.png';
    }else if(img =='2'){
      var img_s = 'img/woman.png';       
    }else{
      var img_s = img;    
    }
  var dot =$('<div></div>');    
  var img_c = $('<div></div>');
  img_c.css({'position':'absolute','top':'12.5px','left':'5px','width':'50px','height':'50px','overflow':'hidden','border-radius':'50%'});
    var img = $('<img>');
    img.attr('src',img_s);
    img.load(function(){
        var nh = this.naturalHeight;
        var nw = this.naturalWidth;
        var gr = nh/nw;
        img.css({'position':'absolute'});
        if(gr>=1){
            img.css({'width':'50px','height':(50*gr)+'px','top':(-1)*(50*gr-50)/2+'px','left':'0'});
        }else{
            img.css({'width':50/gr+'px','height':50+'px','left':(-1)*(50/gr-50)/2,'top':'0'});
        }
        img_c.append(img);
        div.append(img_c);
        if(d_i==1){
          dot.css({'position':'absolute','background':'red','border-radius':'50%','width':'10px','height':'10px','border':'3px solid white','top':'14px','left':'43px'});
          div.append(dot);    
        }
        $postarea4.append(div);
    });
    var div_c = $('<div></div>');
    div_c.css({'position':'absolute','top':'2.5px','left':'70px','width':(w_w-75)+'px','height':'70px'});
    div_c.click(function(){
      h_i3=1;
      h_arr.unshift({type:'3',post_id:post_id});
      h_i2=1;
      h_arr.unshift({type:'2',post_id:post_id});
      post_id_r=post_id;
      r_s_g(1,post_id,comment_id,rsh,1);
      p_i=0;
      if(d_i==1){
        d_i=0;              
        dot.remove(); 
        aln--;  
        if(aln==0){
          $('#Pg4_header').html('새로운 소식을 모두 확인 하였습니다.');   
        }else{
          $('#Pg4_header').html(aln+'개의 새로운 소식');    
        }              
        achd3(comment_id);
      }            
    });
    div.append(div_c);
    img.click(function(){   
      t_g_pf(1,id);
      if(d_i==1){
        d_i=0;  
        dot.remove();
        aln--;  
        if(aln==0){
          $('#Pg4_header').html('새로운 소식을 모두 확인 하였습니다.');   
        }else{
          $('#Pg4_header').html(aln+'개의 새로운 소식');    
        }              
        achd3(comment_id);  
      }            
    });        
    post_a_scroll_h-=9925;
};
var addp44 = function(id,name,img,post_id,ln,ct,d_i){  
  var div = $('<div></div>');
  div.css({'position':'relative','top':'0','left':'0px','width':'100%','height':'75px',background:'white','overflow':'hidden'});
  div.addClass('addp4');
  var id =id;
  var name = name;
  var img = img;
  var ct = ct;
  var ln = ln;
  var d_i = d_i;  
  var span = $('<span></span>');
  var span = $('<span></span>');
  if(ln==0){
    span.html('<b>'+name+'</b>님이'+'</br>게시물을 좋아합니다.');  
  }else{
    span.html('<b>'+name+'</b>님 외'+ln+'명</br>게시물을 좋아합니다.');  
  }     
  span.css({'position':'absolute','top':'12.5px','left':'80px','height':'50px','line-height':'25px','font-size':'17px'});
  div.append(span);
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
    if(img =='1'){
      var img_s = 'img/man.png';
    }else if(img =='2'){
      var img_s = 'img/woman.png';       
    }else{
      var img_s = img;    
    }
  var dot =$('<div></div>');    
  var img_c = $('<div></div>');
  img_c.css({'position':'absolute','top':'12.5px','left':'5px','width':'50px','height':'50px','overflow':'hidden','border-radius':'50%'});
    var img = $('<img>');
    img.attr('src',img_s);
    img.load(function(){
        var nh = this.naturalHeight;
        var nw = this.naturalWidth;
        var gr = nh/nw;
        img.css({'position':'absolute'});
        if(gr>=1){
            img.css({'width':'50px','height':(50*gr)+'px','top':(-1)*(50*gr-50)/2+'px','left':'0'});
        }else{
            img.css({'width':50/gr+'px','height':50+'px','left':(-1)*(50/gr-50)/2,'top':'0'});
        }
        img_c.append(img);
        div.append(img_c);
        if(d_i==1){
          dot.css({'position':'absolute','background':'red','border-radius':'50%','width':'10px','height':'10px','border':'3px solid white','top':'14px','left':'43px'});
          div.append(dot);    
        }
        $postarea4.append(div);
    });
    var div_c = $('<div></div>');
    div_c.css({'position':'absolute','top':'2.5px','left':'70px','width':(w_w-75)+'px','height':'70px'});
    div_c.click(function(){
      e_g_p(1,post_id);   
      p_i=0;
      if(d_i==1){
        d_i=0;  
        dot.remove();
        aln--;  
        if(aln==0){
          $('#Pg4_header').html('새로운 소식을 모두 확인 하였습니다.');   
        }else{
          $('#Pg4_header').html(aln+'개의 새로운 소식');    
        }              
        achd4(post_id);  
      }            
    });
    div.append(div_c);
    img.click(function(){   
      t_g_pf(1,id);
      if(d_i==1){
        d_i=0;  
        dot.remove();
        aln--;  
        if(aln==0){
          $('#Pg4_header').html('새로운 소식을 모두 확인 하였습니다.');   
        }else{
          $('#Pg4_header').html(aln+'개의 새로운 소식');    
        }              
        achd4(post_id);              
      }            
    });        
    post_a_scroll_h-=9925;
};
var achd1 = function(id){
  var data={};
  data._id=window.localStorage['_id'];
  data.id=id;
  $.ajax({
    type:'POST',
    data: JSON.stringify(data),
    contentType:'application/json',
    url: url+'/achd1',
    success:function(output){
    }    
  });    
}
var achd2 = function(post_id){
  var data={};
  data._id=window.localStorage['_id'];
  data.post_id=post_id;
  $.ajax({
    type:'POST',
    data: JSON.stringify(data),
    contentType:'application/json',
    url: url+'/achd2',
    success:function(output){
    }    
  });    
}
var achd3 = function(c_id){
  var data={};
  data._id=window.localStorage['_id'];
  data.c_id=c_id;
  $.ajax({
    type:'POST',
    data: JSON.stringify(data),
    contentType:'application/json',
    url: url+'/achd3',
    success:function(output){
    }    
  });    
}
var achd4 = function(post_id){
  var data={};
  data._id=window.localStorage['_id'];
  data.post_id=post_id;
  $.ajax({
    type:'POST',
    data: JSON.stringify(data),
    contentType:'application/json',
    url: url+'/achd4',
    success:function(output){
    }    
  });    
}