var add_push1 = function(id,name,img){  
  $('.addpush').remove();
  $('.toast').remove();    
  var div = $('<div></div>');
  div.css({'position':'fixed','top':'0','left':'0','width':w_w+'px','height':'70px',background:'white','overflow':'hidden','box-shadow':'2px 0px 10px rgb(100,100,100,0.3)'});
  div.addClass('addpush');
  var id =id;
  var name = name;
  var img = img;
  var span = $('<span></span>');  
  span.html(filterXSS('<b>'+name+'</b>님이'+'</br><b>팔로우</b> 합니다.'));
  span.css({'position':'absolute','top':'5px','left':'100px','height':'60px','line-height':'30px','font-size':'20px'});
  div.append(span);    
    if(img =='1'){
      var img_s = 'img/man.png';
    }else if(img =='2'){
      var img_s = 'img/woman.png';       
    }else{
      var img_s = img;    
    }
  var img_c = $('<div></div>');
  img_c.css({'position':'absolute','bottom':'0px','left':'0','width':'70px','height':'70px','overflow':'hidden'});
    var img = $('<img>');
    img.attr('src',img_s);
    img.load(function(){
        var nh = this.naturalHeight;
        var nw = this.naturalWidth;
        var gr = nh/nw;
        img.css({'position':'absolute'});
        if(gr>=1){
            img.css({'width':'70px','height':(70*gr)+'px','top':(-1)*(70*gr-70)/2+'px','left':'0'});
        }else{
            img.css({'width':70/gr+'px','height':70+'px','left':(-1)*(70/gr-70)/2,'top':'0'});
        }

    });
    img_c.append(img);
    div.append(img_c);
    $parent.append(div);
    var div_c = $('<div></div>');
    div_c.css({'position':'absolute','top':'0','left':'0','width':(w_w-60)+'px','height':'70px'});
    div_c.touchend(function(){
      div.remove();
      t_g_pf(1,id);
    });
    div.append(div_c);
    var xbtn = $('<img>');
    xbtn.attr('src','img/x2.png');
    xbtn.css({'position':'absolute','top':'5px','right':'5px','width':'40px'});
    div.append(xbtn);
    xbtn.touchend(function(){
      div.remove();
    });
    setTimeout(function(){div.fadeOut();}, 5000);
    setTimeout(function(){div.remove();}, 7000);
};
var add_push2 = function(id,name,img,post_id){
  if(h_arr.length>0){
    if(h_arr[0].type==2||h_arr[0].type==4||h_arr[0].type==11||h_arr[0].type==12){
      return;  
    }      
  }    
  var post_id = post_id;    
  var id =id;
  var name = name;
  var img = img;   
  $('.addpush').remove();
  $('.toast').remove();    
  var div = $('<div></div>');
  div.css({'position':'fixed','top':'0','left':'0','width':w_w+'px','height':'70px',background:'white','overflow':'hidden','box-shadow':'2px 0px 10px rgb(100,100,100,0.3)'});
  div.addClass('addpush');
  var span = $('<span></span>');    
  span.html(filterXSS('<b>'+name+'</b>님의'+'</br>새로운 <b>댓글</b>'));
  span.css({'position':'absolute','top':'5px','left':'100px','height':'60px','line-height':'30px','font-size':'20px'});
  div.append(span);    
    if(img =='1'){
      var img_s = 'img/man.png';
    }else if(img =='2'){
      var img_s = 'img/woman.png';       
    }else{
      var img_s = img;    
    }
  var img_c = $('<div></div>');
  img_c.css({'position':'absolute','bottom':'0px','left':'0','width':'70px','height':'70px','overflow':'hidden'});
var img = $('<img>');
img.attr('src',img_s);
    img.load(function(){
        var nh = this.naturalHeight;
        var nw = this.naturalWidth;
        var gr = nh/nw;
        img.css({'position':'absolute'});
        if(gr>=1){
            img.css({'width':'70px','height':(70*gr)+'px','top':(-1)*(70*gr-70)/2+'px','left':'0'});
        }else{
            img.css({'width':70/gr+'px','height':70+'px','left':(-1)*(70/gr-70)/2,'top':'0'});
        }

    });
    img_c.append(img);
    div.append(img_c);
    $parent.append(div);
    var div_c = $('<div></div>');
    div_c.css({'position':'absolute','top':'0','left':'0','width':(w_w-60)+'px','height':'70px'});
    div_c.touchend(function(){
      div.remove();    
      h_i3=1;
      h_arr.unshift({type:'3',post_id:post_id}); 
      r_p_g(1,post_id);
    });
    div.append(div_c);
    var xbtn = $('<img>');
    xbtn.attr('src','img/x2.png');
    xbtn.css({'position':'absolute','top':'5px','right':'5px','width':'40px'});
    div.append(xbtn);
    xbtn.touchend(function(){
      div.remove();
    });
    setTimeout(function(){div.fadeOut();}, 5000);
    setTimeout(function(){div.remove();}, 8000);
};
var add_push3 = function(id,name,img,post_id,comment_id){
  if(h_arr.length>0){
    if(h_arr[0].type==2||h_arr[0].type==4||h_arr[0].type==11||h_arr[0].type==12){
      p_i=0;
      return;  
    }      
  }        
  $('.addpush').remove();
  $('.toast').remove();    
  var div = $('<div></div>');
  div.css({'position':'fixed','top':'0','left':'0','width':w_w+'px','height':'70px',background:'white','overflow':'hidden','box-shadow':'2px 0px 10px rgb(100,100,100,0.3)'});
  div.addClass('addpush');
  var id =id;
  var name = name;
  var img = img;
  var rsh={id:id,n:name,i:img};    
  var comment_id = comment_id;    
  var span = $('<span></span>');    
  span.html(filterXSS('<b>'+name+'</b>님의'+'</br>새로운 <b>답글</b>'));
  span.css({'position':'absolute','top':'5px','left':'100px','height':'60px','line-height':'30px','font-size':'20px'});
  div.append(span);    
    if(img =='1'){
      var img_s = 'img/man.png';
    }else if(img =='2'){
      var img_s = 'img/woman.png';       
    }else{
      var img_s = img;    
    }
  var img_c = $('<div></div>');
  img_c.css({'position':'absolute','bottom':'0px','left':'0','width':'70px','height':'70px','overflow':'hidden'});
    var img = $('<img>');
    img.attr('src',img_s);
    img.load(function(){
        var nh = this.naturalHeight;
        var nw = this.naturalWidth;
        var gr = nh/nw;
        img.css({'position':'absolute'});
        if(gr>=1){
            img.css({'width':'70px','height':(70*gr)+'px','top':(-1)*(70*gr-70)/2+'px','left':'0'});
        }else{
            img.css({'width':70/gr+'px','height':70+'px','left':(-1)*(70/gr-70)/2,'top':'0'});
        }

    });
    img_c.append(img);
    div.append(img_c);
    $parent.append(div);
    var div_c = $('<div></div>');
    div_c.css({'position':'absolute','top':'0','left':'0','width':(w_w-60)+'px','height':'70px'});
    div_c.touchend(function(){
      div.remove();
      h_i3=1;
      h_arr.unshift({type:'3',post_id:post_id});
      h_i2=1;
      h_arr.unshift({type:'2',post_id:post_id});
      r_s_g(1,post_id,comment_id,rsh,1);
    });
    div.append(div_c);
    var xbtn = $('<img>');
    xbtn.attr('src','img/x2.png');
    xbtn.css({'position':'absolute','top':'5px','right':'5px','width':'40px'});
    div.append(xbtn);
    xbtn.touchend(function(){
      div.remove();
    });
    setTimeout(function(){div.fadeOut();}, 5000);
    setTimeout(function(){div.remove();}, 8000);
};
var add_push4 = function(id,name,img,post_id){
  $('.addpush').remove();
  $('.toast').remove();    
  var div = $('<div></div>');
  div.css({'position':'fixed','top':'0','left':'0','width':w_w+'px','height':'70px',background:'white','overflow':'hidden','box-shadow':'2px 0px 10px rgb(100,100,100,0.3)'});
  div.addClass('addpush');
  var id =id;
  var name = name;
  var img = img;
  var span = $('<span></span>');    
  span.html(filterXSS('<b>'+name+'</b>님의'+'</br>새로운 <b>좋아요</b>'));
  span.css({'position':'absolute','top':'5px','left':'100px','height':'60px','line-height':'30px','font-size':'20px'});
  div.append(span);    
    if(img =='1'){
      var img_s = 'img/man.png';
    }else if(img =='2'){
      var img_s = 'img/woman.png';       
    }else{
      var img_s = img;    
    }
  var img_c = $('<div></div>');
  img_c.css({'position':'absolute','bottom':'0px','left':'0','width':'70px','height':'70px','overflow':'hidden'});
var img = $('<img>');
img.attr('src',img_s);
    img.load(function(){
        var nh = this.naturalHeight;
        var nw = this.naturalWidth;
        var gr = nh/nw;
        img.css({'position':'absolute'});
        if(gr>=1){
            img.css({'width':'70px','height':(70*gr)+'px','top':(-1)*(70*gr-70)/2+'px','left':'0'});
        }else{
            img.css({'width':70/gr+'px','height':70+'px','left':(-1)*(70/gr-70)/2,'top':'0'});
        }

    });
    img_c.append(img);
    div.append(img_c);
    $parent.append(div);
    var div_c = $('<div></div>');
    div_c.css({'position':'absolute','top':'0','left':'0','width':(w_w-60)+'px','height':'70px'});
    div_c.touchend(function(){
      div.remove();
      h_i1=1;
      h_arr.unshift({type:'1',id:id});
      e_g_p(1,post_id);   
    });
    div.append(div_c);
    var xbtn = $('<img>');
    xbtn.attr('src','img/x2.png');
    xbtn.css({'position':'absolute','top':'5px','right':'5px','width':'40px'});
    div.append(xbtn);
    xbtn.touchend(function(){
      div.remove();
    });
    setTimeout(function(){div.fadeOut();}, 5000);
    setTimeout(function(){div.remove();}, 8000);
};
var add_push6 = function(id,name,img){
  $('.addpush').remove();
  $('.toast').remove();    
  var div = $('<div></div>');
  div.css({'position':'fixed','top':'0','left':'0','width':w_w+'px','height':'70px',background:'white','overflow':'hidden','box-shadow':'2px 0px 10px rgb(100,100,100,0.3)'});
  div.addClass('addpush');
  var id =id;
  var name = name;
  var img = img;
  var span = $('<span></span>');    
  span.html(filterXSS('<b>'+name+'</b>님의'+'</br>새로운 <b>메시지</b>'));
  span.css({'position':'absolute','top':'5px','left':'100px','height':'60px','line-height':'30px','font-size':'20px'});
  div.append(span);    
    if(img =='1'){
      var img_s = 'img/man.png';
    }else if(img =='2'){
      var img_s = 'img/woman.png';       
    }else{
      var img_s = img;    
    }
  var img_c = $('<div></div>');
  img_c.css({'position':'absolute','bottom':'0px','left':'0','width':'70px','height':'70px','overflow':'hidden'});
var img = $('<img>');
img.attr('src',img_s);
    img.load(function(){
        var nh = this.naturalHeight;
        var nw = this.naturalWidth;
        var gr = nh/nw;
        img.css({'position':'absolute'});
        if(gr>=1){
            img.css({'width':'70px','height':(70*gr)+'px','top':(-1)*(70*gr-70)/2+'px','left':'0'});
        }else{
            img.css({'width':70/gr+'px','height':70+'px','left':(-1)*(70/gr-70)/2,'top':'0'});
        }

    });
    img_c.append(img);
    div.append(img_c);
    $parent.append(div);
    var div_c = $('<div></div>');
    div_c.css({'position':'absolute','top':'0','left':'0','width':(w_w-60)+'px','height':'70px'});
    div_c.touchend(function(){
      div.remove();
      c_g(1,id,name,img_s);   
      p_i=0;    
    });
    div.append(div_c);
    var xbtn = $('<img>');
    xbtn.attr('src','img/x2.png');
    xbtn.css({'position':'absolute','top':'5px','right':'5px','width':'40px'});
    div.append(xbtn);
    xbtn.touchend(function(){
      div.remove();    
    });
    setTimeout(function(){div.fadeOut();}, 5000);
    setTimeout(function(){div.remove();}, 8000);
};
var add_push11 = function(post_id,nn,pnn){
  if(h_arr.length>0){
    if(h_arr[0].type==2||h_arr[0].type==4||h_arr[0].type==11||h_arr[0].type==12){
      return;  
    }      
  }    
  $('.addpush').remove();
  $('.toast').remove();    
  var div = $('<div></div>');
  div.css({'position':'fixed','top':'0','left':'0','width':w_w+'px','height':'70px',background:'white','overflow':'hidden','box-shadow':'2px 0px 10px rgb(100,100,100,0.3)'});
  div.addClass('addpush');
  var nn = nn;
  var pnn=pnn;    
  var span = $('<span></span>');    
  span.html(filterXSS('<b>'+nn+'</b>님의'+'</br>플래그 <b>댓글</b>'));
  span.css({'position':'absolute','top':'5px','left':'100px','height':'60px','line-height':'30px','font-size':'20px'});
  div.append(span);    
  var img_s = 'img/man.png';       
  var img_c = $('<div></div>');
  img_c.css({'position':'absolute','bottom':'0px','left':'0','width':'70px','height':'70px','overflow':'hidden'});
var img = $('<img>');
img.attr('src',img_s);
    img.load(function(){
        var nh = this.naturalHeight;
        var nw = this.naturalWidth;
        var gr = nh/nw;
        img.css({'position':'absolute'});
        if(gr>=1){
            img.css({'width':'70px','height':(70*gr)+'px','top':(-1)*(70*gr-70)/2+'px','left':'0'});
        }else{
            img.css({'width':70/gr+'px','height':70+'px','left':(-1)*(70/gr-70)/2,'top':'0'});
        }

    });
    img_c.append(img);
    div.append(img_c);
    $parent.append(div);
    var div_c = $('<div></div>');
    div_c.css({'position':'absolute','top':'0','left':'0','width':(w_w-60)+'px','height':'70px'});
    div_c.touchend(function(){
      div.remove();
      h_i13=1;
      h_arr.unshift({type:'13',post_id:post_id});
      l_r_p_g(1,post_id,pnn);   
      p_i=0;    
    });
    div.append(div_c);
    var xbtn = $('<img>');
    xbtn.attr('src','img/x2.png');
    xbtn.css({'position':'absolute','top':'5px','right':'5px','width':'40px'});
    div.append(xbtn);
    xbtn.touchend(function(){
      div.remove();    
    });
    setTimeout(function(){div.fadeOut();}, 5000);
    setTimeout(function(){div.remove();}, 8000);
};
var add_push12 = function(post_id,nn,pnn,ni,ti,txt){
  if(h_arr.length>0){
    if(h_arr[0].type==2||h_arr[0].type==4||h_arr[0].type==11||h_arr[0].type==12){
      return;  
    }      
  }    
  $('.addpush').remove();
  $('.toast').remove();    
  var div = $('<div></div>');
  div.css({'position':'fixed','top':'0','left':'0','width':w_w+'px','height':'70px',background:'white','overflow':'hidden','box-shadow':'2px 0px 10px rgb(100,100,100,0.3)'});
  div.addClass('addpush');
  var nn = nn;
  var pnn=pnn;    
  var span = $('<span></span>');    
  span.html(filterXSS('<b>'+nn+'</b>님의'+'</br>플래그 <b>답글</b>'));
  span.css({'position':'absolute','top':'5px','left':'100px','height':'60px','line-height':'30px','font-size':'20px'});
  div.append(span);    
  var img_s = 'img/man.png';       
  var img_c = $('<div></div>');
  img_c.css({'position':'absolute','bottom':'0px','left':'0','width':'70px','height':'70px','overflow':'hidden'});
var img = $('<img>');
img.attr('src',img_s);
    img.load(function(){
        var nh = this.naturalHeight;
        var nw = this.naturalWidth;
        var gr = nh/nw;
        img.css({'position':'absolute'});
        if(gr>=1){
            img.css({'width':'70px','height':(70*gr)+'px','top':(-1)*(70*gr-70)/2+'px','left':'0'});
        }else{
            img.css({'width':70/gr+'px','height':70+'px','left':(-1)*(70/gr-70)/2,'top':'0'});
        }

    });
    img_c.append(img);
    div.append(img_c);
    $parent.append(div);
    var div_c = $('<div></div>');
    div_c.css({'position':'absolute','top':'0','left':'0','width':(w_w-60)+'px','height':'70px'});
    div_c.touchend(function(){
      div.remove();
      h_i13=1;
      h_arr.unshift({type:'13',post_id:post_id});
      h_i11=1;
      h_arr.unshift({type:'11',post_id:post_id,nn:pnn});    
      l_r_s_g(1,post_id,ti,ni,txt,pnn);   
      p_i=0;    
    });
    div.append(div_c);
    var xbtn = $('<img>');
    xbtn.attr('src','img/x2.png');
    xbtn.css({'position':'absolute','top':'5px','right':'5px','width':'40px'});
    div.append(xbtn);
    xbtn.touchend(function(){
      div.remove();    
    });
    setTimeout(function(){div.fadeOut();}, 5000);
    setTimeout(function(){div.remove();}, 8000);
};