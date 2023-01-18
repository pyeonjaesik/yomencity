var add_cr = function(id,name,img,b2,pa){
  var div=$('<div></div>');    
  div.css({'position':'relative','height':'75px','background':'white','overflow':'hidden'});
  div.addClass('add_cr');    
  var id = filterXSS(id);
  var crc=id+'cr';
  div.addClass(crc);    
  var name = filterXSS(name); 
  var b2=b2;
  var pa=pa;
  if(pa==0){
    img_s=img;
    c_scroll_h2+=75;   
  }else{
    c_scroll_h2-=9925;   
    if(img =='1'){
      var img_s = 'img/man.png';
    }else if(img =='2'){
      var img_s = 'img/woman.png';       
    }else{
      var img_s = img;    
    }      
  }    
  var img_c = $('<div></div>');
  img_c.css({'position':'absolute','top':'7.5px','left':'5px','width':'50','height':'50px','overflow':'hidden','border-radius':'50%'});
    
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
    if(pa==1){
      $chat_main2.append(div);  
    }else{
      $chat_main2.prepend(div);    
    }
    
  });
  var name_c = $('<span></span>');
  name_c.text(name);
  name_c.css({'position':'absolute','top':'8px','left':'80px','font-size':'17px','color':'rgb(30,38,49)','text-align':'left','height':'25px','line-height':'25px','text-shadow':'0px 0px 0px white','font-weight':'600'});
  if(b2>0){
    if(b2<9){
      var b2_c=$('<span>'+b2+'</span>');
      var bcs=id+'bc';    
      b2_c.addClass(bcs); b2_c.css({'position':'absolute','top':'7px','right':'10px','background':'green','border-radius':'50%','height':'16px','width':'16px','line-height':'16px','font-size':'15px','color':'white','text-shadow':'0px 0px green','text-align':'center','padding':'8px','box-shadow':'2px 1px 2px rgba(100,100,100,0.4)'});   
    }else if(b2<99){
      var b2_c=$('<span>'+b2+'</span>');
      var bcs=id+'bc';    
      b2_c.addClass(bcs);        b2_c.css({'position':'absolute','top':'7px','right':'10px','background':'green','border-radius':'25px','height':'16px','line-height':'16px','font-size':'15px','color':'white','text-shadow':'0px 0px green','text-align':'center','padding':'8px','box-shadow':'2px 1px 2px rgba(100,100,100,0.4)'});
    }else{
      if(b2>999){
        b2='999+'  
      }
      var b2_c=$('<span>'+b2+'</span>');    
      var bcs=id+'bc';    
      b2_c.addClass(bcs);      b2_c.css({'position':'absolute','top':'7px','right':'10px','background':'green','border-radius':'20px','height':'16px','line-height':'16px','font-size':'15px','color':'white','text-shadow':'0px 0px green','text-align':'center','padding':'8px','box-shadow':'2px 1px 2px rgba(100,100,100,0.4)'});        
    }
    div.append(b2_c);  
  }else if(b2==-1){
      var b2_c=$('<span>N</span>');
      var bcs=id+'bc';    
      b2_c.addClass(bcs); b2_c.css({'position':'absolute','top':'7px','right':'10px','background':'green','border-radius':'50%','height':'16px','width':'16px','line-height':'16px','font-size':'15px','color':'white','text-shadow':'0px 0px green','text-align':'center','padding':'8px','box-shadow':'2px 1px 2px rgba(100,100,100,0.4)'});
      div.append(b2_c);
  }
  div.append(name_c);    
  var d_c=$('<div></div>');
  d_c.css({'position':'absolute','top':'0','left':'0','height':'75px','width':w_w+'px'});
  div.append(d_c);
  d_c.click(function(){
    c_g(1,id,name,img_s);    
  });
  $('.nopost_ch2').remove();   
}