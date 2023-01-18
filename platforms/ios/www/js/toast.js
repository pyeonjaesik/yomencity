var toast_t = function(txt){
  $('.toast').remove();
  $('.addpush').remove();    
  var tst=$('<div></div>');
  tst.addClass('toast');    
  tst.text(txt);
  tst.css({'position':'fixed','top':'0','left':'0','height':'30px','width':w_w+'px','background':'rgb(22,23,27)','color':'white','text-shadow':'0px 0px 0px rgba(255,255,255,0)','text-align':'center','line-height':'30px'});
  $('#parent').append(tst);
  setTimeout(function(){tst.fadeOut();},3000);
  setTimeout(function(){tst.remove();},6000);    
}
var toast_b = function(txt){
  $('.toast').remove();
  $('.addpush').remove();    
  var tst=$('<div></div>');
  tst.addClass('toast');    
  tst.text(txt);
  tst.css({'position':'fixed','bottom':'0','left':'0','height':'30px','width':w_w+'px','background':'rgb(22,23,27)','color':'white','text-shadow':'0px 0px 0px rgba(255,255,255,0)','text-align':'center','line-height':'30px'});
  $('#parent').append(tst);
  setTimeout(function(){tst.fadeOut();},3000);
  setTimeout(function(){tst.remove();},6000);    
}
var toast_t2 = function(txt){
  $('.toast').remove();
  $('.addpush').remove();    
  var tst=$('<div></div>');
  tst.addClass('toast');    
  tst.html(txt);
  tst.css({'position':'fixed','top':'0','left':'0','height':'60px','width':w_w+'px','background':'rgb(22,23,27)','color':'white','text-shadow':'0px 0px 0px rgba(255,255,255,0)','text-align':'center','line-height':'60px'});
  $('#parent').append(tst);
  setTimeout(function(){tst.fadeOut();},3000);
  setTimeout(function(){tst.remove();},6000);    
}
var toast_w2 = function(txt){
  $('.toast').remove();
  $('.addpush').remove();    
  var tst=$('<div></div>');
  tst.addClass('toast');    
  tst.html(txt);
  tst.css({'position':'fixed','top':'0','left':'0','height':'60px','width':w_w+'px','background':'rgb(22,23,27)','color':'white','text-shadow':'0px 0px 0px rgba(255,255,255,0)','text-align':'center','line-height':'60px'});
  $('#parent').append(tst);
  setTimeout(function(){tst.fadeOut();},10000);
  setTimeout(function(){tst.remove();},12000);    
}
var toast_t3 = function(txt){
  $('.toast').remove();
  $('.addpush').remove();    
  var tst=$('<div></div>');
  tst.addClass('toast');    
  tst.text(txt);
  tst.css({'position':'fixed','top':'0','left':'0','height':'60px','width':w_w+'px','background':'rgb(22,23,27)','color':'white','text-shadow':'0px 0px 0px rgba(255,255,255,0)','text-align':'center','line-height':'60px'});
  $('#parent').append(tst);
  setTimeout(function(){tst.fadeOut();},2000);
  setTimeout(function(){tst.remove();},6000);    
}
var toast_t4 = function(txt){
  $('.toast').remove();
  $('.addpush').remove();    
  var tst=$('<div></div>');
  tst.addClass('toast');    
  tst.text(txt);
  tst.css({'position':'fixed','top':'0','left':'0','height':'70px','width':w_w+'px','background':'rgb(22,23,27)','color':'white','text-shadow':'0px 0px 0px rgba(255,255,255,0)','text-align':'center','line-height':'70px'});
  $('#parent').append(tst);
  setTimeout(function(){tst.fadeOut();},2000);
  setTimeout(function(){tst.remove();},6000);    
}
var toast_t5 = function(txt){
  $('.toast').remove();
  $('.addpush').remove();    
  var tst=$('<div></div>');
  tst.addClass('toast');    
  tst.html(txt);
  tst.css({'position':'fixed','top':'0','left':'0','height':'50px','width':w_w+'px','background':'rgb(22,23,27)','color':'white','text-shadow':'0px 0px 0px rgba(255,255,255,0)','text-align':'center','line-height':'50px'});
  $('#parent').append(tst);
  setTimeout(function(){tst.fadeOut();},3000);
  setTimeout(function(){tst.remove();},6000);    
}
var toast_dc = function(txt){
  $('.toast').remove();
  $('.addpush').remove();    
  var tst=$('<div></div>');
  tst.addClass('toast');    
  tst.html(txt);
  tst.css({'position':'fixed','top':'0','left':'0','height':'80px','width':w_w+'px','background':'rgb(22,23,27)','color':'white','text-shadow':'0px 0px 0px rgba(255,255,255,0)','text-align':'center','line-height':'25px','font-size':'17px','padding-top':'15px'});
  $('#parent').append(tst);
  setTimeout(function(){tst.fadeOut();},3000);
  setTimeout(function(){tst.remove();},6000);    
}
var toast_t6 = function(txt){
  $('.toast').remove();
  $('.addpush').remove();    
  var tst=$('<div></div>');
  tst.addClass('toast');    
  tst.text(txt);
  tst.css({'position':'fixed','top':'0','left':'0','height':'60px','width':w_w+'px','background':'rgb(22,23,27)','color':'white','text-shadow':'0px 0px 0px rgba(255,255,255,0)','text-align':'center','line-height':'60px'});
  $('#parent').append(tst);
  setTimeout(function(){tst.fadeOut();},5000);
  setTimeout(function(){tst.remove();},8000);    
}
var toast_v1 = function(txt,img){
  $('.toast').remove();
  $('.addpush').remove();
  $('.toast_v').remove();    
  var div=$('<div></div>');
  div.addClass('toast_v');    
  div.css({'position':'fixed','width':'90%','height':'120px','top':'150px','left':'5%','background':'white','border-radius':'3px','box-shadow':'2px 2px 2px rgba(100,100,100,0.2)'});
  var img_s=img;
  var img_c = $('<div></div>');
  img_c.css({'position':'absolute','top':'10px','left':'10px','border-radius':'2px','width':'100px','height':'100px','overflow':'hidden'});
  var img = $('<img>');
    if(img_s =='1'){
      img.attr('src','img/man2.png');
      img.css({'position':'absolute','top':'0','left':'0','width':'100px','height':'100px'});
      img_c.append(img);
      div.append(img_c);        
    }else if(img_s =='2'){
      img.attr('src','img/woman2.png');
      img.css({'position':'absolute','top':'0','left':'0','width':'100px','height':'100px'});    
      img_c.append(img);
      div.append(img_c);        
    }else{
      img.attr('src',img_s);
      img.each(function(){
        img.load(function(){
          var nh = this.naturalHeight;
          var nw = this.naturalWidth;
          var gr = nh/nw;
          var m_w = 100;
            if(gr>=1){
              img.css({'width':(m_w)+'px','height':(m_w*gr)+'px','top':(-1)*(m_w*gr-m_w)/2+'px','left':'0'});
            }else{
              img.css({'width':m_w/gr+'px','height':m_w+'px','left':(-1)*(m_w/gr-m_w)/2,'top':'0'});
            }
          img_c.append(img);
          div.append(img_c);    
        });
      });            
    }
    var span=$('<span></span>');
    span.css({'position':'absolute','left':'120px','top':'34px','height':'52px','line-height':'26px','font-size':'18px','font-weight':'700','text-align':'center','color':'rgb(22,23,27)','text-shadow':'0px 0px 0px rgba(255,255,255,0)','width':(w_w*0.9-130)+'px'});
    span.html(txt);
    div.append(span);
    var xbtn=$('<img>');
    xbtn.attr('src','img/x2.png');
    xbtn.css({'position':'absolute','top':'3px','right':'2px','width':'35px','height':'35px'});
    xbtn.click(function(){
      div.remove();    
    });
    div.append(xbtn);
  $('#t_main').append(div);    
}
var toast_v2 = function(txt,img){
  $('.toast').remove();
  $('.addpush').remove();
  $('.toast_v').remove();
  var div=$('<div></div>');
  div.addClass('toast_v');    
  div.css({'position':'fixed','width':'90%','height':'120px','top':'150px','left':'5%','background':'white','border-radius':'3px','box-shadow':'2px 2px 2px rgba(100,100,100,0.2)'});
  var img_s=img;
  var img_c = $('<div></div>');
  img_c.css({'position':'absolute','top':'10px','left':'10px','border-radius':'2px','width':'100px','height':'100px','overflow':'hidden'});
  var img = $('<img>');
    if(img_s =='1'){
      img.attr('src','img/man.png');
      img.css({'position':'absolute','top':'0','left':'0','width':'100px','height':'100px'});
      img_c.append(img);
      div.append(img_c);        
    }else if(img_s =='2'){
      img.attr('src','img/woman.png');
      img.css({'position':'absolute','top':'0','left':'0','width':'100px','height':'100px'});    
      img_c.append(img);
      div.append(img_c);        
    }else{
      img.attr('src',img_s);
      img.each(function(){
        img.load(function(){
          var nh = this.naturalHeight;
          var nw = this.naturalWidth;
          var gr = nh/nw;
          var m_w = 100;
            if(gr>=1){
              img.css({'width':(m_w)+'px','height':(m_w*gr)+'px','top':(-1)*(m_w*gr-m_w)/2+'px','left':'0'});
            }else{
              img.css({'width':m_w/gr+'px','height':m_w+'px','left':(-1)*(m_w/gr-m_w)/2,'top':'0'});
            }
          img_c.append(img);
          div.append(img_c);    
        });
      });            
    }
    var span=$('<span></span>');
    span.css({'position':'absolute','left':'120px','top':'34px','height':'52px','line-height':'26px','font-size':'18px','font-weight':'700','text-align':'center','color':'rgb(22,23,27)','text-shadow':'0px 0px 0px rgba(255,255,255,0)','width':(w_w*0.9-130)+'px'});
    span.html(txt);
    div.append(span);
    var xbtn=$('<img>');
    xbtn.attr('src','img/x2.png');
    xbtn.css({'position':'absolute','top':'3px','right':'2px','width':'35px','height':'35px'});
    xbtn.click(function(){
      div.remove();    
    });
    div.append(xbtn);
  $('#t_main2').append(div);    
}
var toast_i2 = function(txt){
  $('.toast').remove();
  $('.addpush').remove();    
  var tst=$('<div></div>');
  tst.addClass('toast');    
  tst.html(txt);
  tst.css({'position':'fixed','top':'0','left':'0','height':'50px','width':w_w+'px','background':'rgb(22,23,27)','color':'white','text-shadow':'0px 0px 0px rgba(255,255,255,0)','text-align':'center','line-height':'50px'});
  $('#Pg2').append(tst);
  setTimeout(function(){tst.html('다소 시간이 걸립니다. 잠시만 기다려 주세요.');},3000);    
  setTimeout(function(){tst.fadeOut();},6000);
  setTimeout(function(){tst.remove();},9000);    
}
var toast_tt2 = function(txt){
  $('.toast').remove();
  $('.addpush').remove();    
  var tst=$('<div></div>');
  tst.addClass('toast');    
  tst.html(txt);
  tst.css({'position':'fixed','top':'0','left':'0','height':'50px','width':w_w+'px','background':'rgb(22,23,27)','color':'white','text-shadow':'0px 0px 0px rgba(255,255,255,0)','text-align':'center','line-height':'50px'});
  $('#Pg2').append(tst);
  setTimeout(function(){tst.html('새로운 위치를 받아오고 있습니다.');},3000);    
  setTimeout(function(){tst.fadeOut();},60000);
  setTimeout(function(){tst.remove();},63000);    
}
var toast_tt22 = function(txt){
  $('.toast').remove();
  $('.addpush').remove();    
  var tst=$('<div></div>');
  tst.addClass('toast');    
  tst.html(txt);
  tst.css({'position':'fixed','top':'0','left':'0','height':'50px','width':w_w+'px','background':'rgb(22,23,27)','color':'white','text-shadow':'0px 0px 0px rgba(255,255,255,0)','text-align':'center','line-height':'50px'});
  $('#Pg2').append(tst);
  setTimeout(function(){tst.html('새로운 위치를 받아오고 있습니다.2');},3000);    
  setTimeout(function(){tst.fadeOut();},60000);
  setTimeout(function(){tst.remove();},63000);    
}