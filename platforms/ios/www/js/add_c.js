var add_c1 = function(id,name,img){
    var div = $('<div></div>');
    div.css({'position':'relative','height':'75px','background':'white','overflow':'hidden'});
    div.addClass('add_c1');
    var id = id;
    var name = name;
    if(img =='1'){
      var img_s = 'img/man.png';
    }else if(img =='2'){
      var img_s = 'img/woman.png';       
    }else{
      var img_s = img;    
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
        $chat_main.append(div);
    });
    var name_c = $('<span></span>');
    name_c.text(name);
    name_c.css({'position':'absolute','top':'8px','left':'80px','font-size':'17px','color':'rgb(30,38,49)','text-align':'left','height':'25px','line-height':'25px','text-shadow':'0px 0px 0px white','font-weight':'600'});
    div.append(name_c);
    
    var id_c = $('<span></span>');
    id_c.text(id);
    id_c.css({'position':'absolute','top':'38px','left':'90px','font-size':'12px','color':'rgb(40,48,59)','text-align':'left','height':'25px','line-height':'25px'});
    div.append(id_c);    
    var d_c=$('<div></div>');
    d_c.css({'position':'absolute','top':'0','left':'0','height':'75px','width':w_w+'px'});
    div.append(d_c);
    d_c.click(function(){
      c_g(1,id,name,img_s);    
    });
    c_scroll_h-=9925;
};
var add_c2 = function(txt,b_i){
  var div = $("<div></div>");
  div.addClass('add_c2');
  var txt = txt;
  div.css({'position':'relative',width:w_w+'px','min-height':'20px','display':'inline-block'});
  var span = $('<div></div>');
  var space = $('<div></div>');
  var b_i=b_i;    
  span.html(txt.t);
  if(txt.ci==ci){
    span.css({position: 'relative','height':'auto','max-width':'62%','min-height':'20px','right':'15px',fontSize: '15px','line-height':'18px',textShadow: '0px 0px rgb(22,23,27)',color: 'white','padding':'9px','background':'rgb(22,23,27)','word-wrap':'break-word','display':'inline-block','border-radius':'20px','margin':'5px','float':'right','clear':'both'});
    space.css({'position':'absolute','bottom':'17px','left':'-52px','color':'rgb(22,23,27)','background':'white','font-size':'12px','height':'13px','line-height':'13px','padding-left':'15px','width':'34px'});
  }else{
    span.css({position: 'relative','height':'auto','max-width':'62%',fontSize: '15px','line-height':'18px',textShadow: '0px 0px 0px rgba(180,180,180,0.5)',color: 'black','padding':'9px','background':'rgba(200,200,200,0.2)','word-wrap':'break-word','display':'inline-block','border-radius':'20px','margin':'5px','float':'left','clear':'both','bottom':'auto'});
    space.css({'position':'absolute','bottom':'17px','right':'-44.5px','color':'rgb(22,23,27)','background':'white','font-size':'12px','height':'13px','line-height':'13px','text-align':'left','width':'40px'});  
  }
    var d = new Date(txt.ct);
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
    space.text(h);
    if(b_i==1){
      var read = $('<div><b>1 </b></div>');
      read.addClass('ch_rd');    
      read.css({'position':'absolute','top':'0','left':'0','width':'15px','height':'13px','color':'red','font-size':'12px'});
      space.append(read);         
    }    
  span.append(space);    
  div.append(span);
  $c_main_c.prepend(div);    
};
var add_cm = function(txt){
  var div = $("<div></div>");
  div.addClass('add_c2');
  div.addClass('add_cm');    
  var txt = txt;
  txt = txt.replace(/(\n|\r\n)/g, '<br>');    
  div.css({'position':'relative',width:w_w+'px','min-height':'20px','display':'inline-block'});
  var span = $('<div></div>');
  var space = $('<div></div>');    
  span.html(txt);
//  space.text('aaaa');
  span.css({position: 'relative','height':'auto','max-width':'62%','min-height':'20px','right':'15px',fontSize: '15px','line-height':'18px',textShadow: '0px 0px rgb(22,23,27)',color: 'white','padding':'9px','background':'rgb(22,23,27)','word-wrap':'break-word','display':'inline-block','border-radius':'20px','margin':'5px','float':'right','clear':'both'});
  space.css({'position':'absolute','bottom':'17px','left':'-51px','color':'rgb(22,23,27)','background':'white','font-size':'12px','height':'13px','line-height':'13px','padding-left':'15px','width':'33px'});
  var nt = parseInt(Date.now());
  var d = new Date(nt);
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
  space.text(h);
  var read = $('<div><b>1 </b></div>');
  read.css({'position':'absolute','top':'0','left':'0','width':'15px','height':'13px','color':'red','font-size':'12px'});
  read.addClass('ch_rd');    
  space.append(read); 
  read.click(function(){$(this).remove();});
  span.append(space);    
  div.append(span);
  $c_main_c.append(div); 
  $c_main_c.scrollTop('10000000');    
};
var add_cy = function(txt){
  var div = $("<div></div>");
  div.addClass('add_c2');
  div.addClass('add_cy')    
  var txt = txt;
  div.css({'position':'relative',width:w_w+'px','min-height':'20px','display':'inline-block'});
  var span = $('<div></div>');
  var space = $('<div></div>');    
  span.html(txt);
  span.css({position: 'relative','height':'auto','max-width':'62%',fontSize: '15px','line-height':'18px',textShadow: '0px 0px 0px rgba(180,180,180,0.5)',color: 'black','padding':'9px','background':'rgba(180,180,180,0.2)','word-wrap':'break-word','display':'inline-block','border-radius':'20px','margin':'5px','float':'left','clear':'both','bottom':'auto'});
  space.css({'position':'absolute','bottom':'17px','right':'-44.5px','color':'rgb(22,23,27)','background':'white','font-size':'12px','height':'13px','line-height':'13px','text-align':'left','width':'40px'});  
  var nt = parseInt(Date.now());
  var d = new Date(nt);
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
  space.text(h);
  span.append(space);    
  div.append(span);
  $c_main_c.append(div);    
  $c_main_c.scrollTop('10000000');
  $('.ch_rd').remove();    
};
var add_cn=function(c_t){
  var div=$('<div></div>');
  div.addClass('add_c2');    
  div.css({'position':'relative','width':w_w+'px','height':'25px','font-size':'15px','line-height':'25px','color':'rgb(97,100,105)','text-align':'center','background':'rgba(97,100,105,0.06)','text-shadow':'0px 0px rgba(255,255,255,0)'});
  var d = new Date(c_t);    
  div.text(d.getFullYear()+'년 '+(d.getMonth()+1)+'월 '+d.getDate()+'일');
  $c_main_c.prepend(div);    
}
var add_cn2=function(c_t){
  var div=$('<div></div>');
  div.addClass('add_c2');    
  div.css({'position':'relative','width':w_w+'px','height':'25px','font-size':'15px','line-height':'25px','color':'rgb(97,100,105)','text-align':'center','background':'rgba(97,100,105,0.06)','text-shadow':'0px 0px rgba(255,255,255,0)'});
  var d = new Date(c_t);    
  div.text(d.getFullYear()+'년 '+(d.getMonth()+1)+'월 '+d.getDate()+'일');
  $c_main_c.append(div);    
}