var t_addh1 = function(id,name,img,ct){
  var div = $('<div></div>');
  div.css({'position':'relative','top':'0','left':'0','width':'100%','height':'75px',background:'white','overflow':'hidden'});
  div.addClass('t_add_h');
  console.log('t_add_h');
  var id =id||'1';
  var name = name||'1';
  var img = img||'0';
  var ct=ct||1;
  var span = $('<span></span>');
  span.html('<b>'+name+'</b>님을'+'</br><b>팔로우</b> 합니다.');
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
  var img_c = $('<div></div>');
  img_c.css({'position':'absolute','top':'12.5px','left':'5px','width':'50px','height':'50px','overflow':'hidden','border-radius':'50%'});
    var img = $('<img>');
    img.attr('src',img_s);
    img.each(function(){
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

        });
        img_c.append(img);
        div.append(img_c);
        $t_info.append(div);
        var div_c = $('<div></div>');
        div_c.css({'position':'absolute','top':'2.5px','left':'0','width':w_w+'px','height':'70px'});
        div_c.click(function(){
          t_g_pf(1,id);
        });
        div.append(div_c);
        post_t2_scroll_h-=9925;
    });    
};
var t_addh2 = function(id,name,img,post_id,ct){ 
  var post_id = post_id;    
  var id =id;
  var name = name;
  var img = img;
  var ct = ct; 
  var div = $('<div></div>');
  div.css({'position':'relative','top':'0','left':'0','width':'100%','height':'75px',background:'white','overflow':'hidden'});
  div.addClass('t_add_h');
  var span = $('<span></span>');
  span.html('<b>'+name+'</b>님의'+'</br>게시물에 <b>댓글</b>을 남겼습니다.');   
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
  var img_c = $('<div></div>');
  img_c.css({'position':'absolute','top':'12.5px','left':'5px','width':'50px','height':'50px','overflow':'hidden','border-radius':'50%'});
    var img = $('<img>');
    img.attr('src',img_s);
    img.each(function(){
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

        });
        img_c.append(img);
        div.append(img_c);
        $t_info.append(div);
        var div_c = $('<div></div>');
        div_c.css({'position':'absolute','top':'2.5px','left':'70px','width':(w_w-70)+'px','height':'70px'});
        div_c.click(function(){
          h_i3=1;
          h_arr.unshift({type:'3',post_id:post_id}); 
          r_p_g(1,post_id);
          p_i=0;    
        });
        img.click(function(){   
          t_g_pf(1,id);    
        });        
        div.append(div_c);
        post_t2_scroll_h-=9925;
    });    
};
var t_addh3 = function(id,name,img,post_id,comment_id,ct){    
  var div = $('<div></div>');
  div.css({'position':'relative','top':'0','left':'0','width':'100%','height':'75px',background:'white','overflow':'hidden'});
  div.addClass('t_add_h');
  var id =id;
  var name = name;
  var img = img;
  var rsh={id:id,n:name,i:img};    
  var comment_id = comment_id;
  var ct = ct;   
  var span = $('<span></span>');
  span.html('<b>'+name+'</b>님의'+'</br>댓글에 <b>답글</b>을 남겼습니다.');     
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
  var img_c = $('<div></div>');
  img_c.css({'position':'absolute','top':'12.5px','left':'5px','width':'50px','height':'50px','overflow':'hidden','border-radius':'50%'});
    var img = $('<img>');
    img.attr('src',img_s);
    img.each(function(){
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

        });
        img_c.append(img);
        div.append(img_c);
        $t_info.append(div);
        var div_c = $('<div></div>');
        div_c.css({'position':'absolute','top':'2.5px','left':'70px','width':(w_w-70)+'px','height':'70px'});
        div_c.click(function(){
          h_i3=1;
          h_arr.unshift({type:'3',post_id:post_id});
          h_i2=1;
          h_arr.unshift({type:'2',post_id:post_id});
          post_id_r=post_id;
          r_s_g(1,comment_id,rsh,1);
          p_i=0;    
        });
        div.append(div_c);
        img.click(function(){   
          t_g_pf(1,id);    
        });        
        post_t2_scroll_h-=9925;
    });    
};
var t_addh4 = function(id,name,img,post_id,ct){  
  var div = $('<div></div>');
  div.css({'position':'relative','top':'0','left':'0px','width':'100%','height':'75px',background:'white','overflow':'hidden'});
  div.addClass('t_add_h');
  var id =id;
  var name = name;
  var img = img;
  var ct = ct;
  var span = $('<span></span>');
  var span = $('<span></span>');
  span.html('<b>'+name+'</b>님의'+'</br>게시물을 <b>좋아</b>합니다.');       
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
  var img_c = $('<div></div>');
  img_c.css({'position':'absolute','top':'12.5px','left':'5px','width':'50px','height':'50px','overflow':'hidden','border-radius':'50%'});
    var img = $('<img>');
    img.attr('src',img_s);
    img.each(function(){
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

        });
        img_c.append(img);
        div.append(img_c);
        $t_info.append(div);
        var div_c = $('<div></div>');
        div_c.css({'position':'absolute','top':'2.5px','left':'70px','width':(w_w-70)+'px','height':'70px'});
        div_c.click(function(){
          e_g_p(1,post_id);   
          p_i=0;    
        });
        div.append(div_c);
        img.click(function(){   
          t_g_pf(1,id);    
        });        
        post_t2_scroll_h-=9925;
    });    
};