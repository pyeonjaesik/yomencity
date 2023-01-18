var add_rc=function(left,id,name,img){
  var id=id;
  var name=name;
  var pimg=img;
  var left=(left*105);    
  var div=$('<div></div>');
  div.css({'position':'absolute','top':'0','left':left+'px','width':'105px','height':'135px','background':'white'});
  var pimg_c = $('<div></div>');
  pimg_c.css({'position':'absolute','top':'5px','left':'5px','width':'100px','height':'100px',"border-radius":"2px",'overflow':'hidden','border':'1px solid rgba(100,100,100,0.15)','border':'1px solid rgba(100,100,100,0.3)','box-shadow':'2px 2px 2px rgba(100,100,100,0.2)'});
  div.append(pimg_c);
  var profile_img = $("<img>");
  profile_img.css({'position':'absolute'});
  if(pimg=='1'){
    profile_img.attr('src','img/man3.png');    
  }else if(pimg=='2'){
    profile_img.attr('src','img/woman3.png');  
  }else{
    profile_img.attr('src',pimg);   
  }
  profile_img.load(function(){
    var nh = this.naturalHeight;
    var nw = this.naturalWidth;
    var gr = nh/nw;
    var m_w =100;
    if(gr>=1){
      profile_img.css({'width':(m_w)+'px','height':(m_w*gr)+'px','top':(-1)*(m_w*gr-m_w)/2+'px','left':'0'});
    }else{
      profile_img.css({'width':m_w/gr+'px','height':m_w+'px','left':(-1)*(m_w/gr-m_w)/2,'top':'0'});
    }
    pimg_c.css({'border':'0px solid rgb(255,255,255,0)'});    
    pimg_c.append(profile_img);
    profile_img.click(function(){t_g_pf(1,id);});
  });
  var span=$('<span>'+name+'</span>');
  span.css({'position':'absolute','bottom':'0','left':'0','width':'97px','height':'20px','line-height':'20px','font-size':'12px','color':'rgb(22,23,27)','text-shadow':'0px 0px 0px rgba(255,255,255,0)','font-weight':'500','padding-left':'13px'});
  div.append(span);
  var dot=$('<img>');
  dot.attr('src','img/3dot2.png');    
  dot.css({'position':'absolute','right':'5px','bottom':'3px','width':'20px','height':'20px'});
  div.append(dot);
    dot.click(function(){
      var dc_c=$('<div></div>');
      dc_c.css({'position':'fixed','top':'0','left':'0','width':'100%','height':'100%','background':'rgba(180,180,180,0.2)'});
      var dc_m=$('<div>이제는 '+name+'님을<br>추천받고 싶지 않습니다.</div>');    
      dc_m.css({'position':'absolute','top':(w_h-300)/2+'px','left':'50px','width':(w_w-100)+'px','height':'150px','background':'white','border-radius':'5px','font-size':'18px','padding-top':'50px','text-align':'center','line-height':'25px','box-shadow':'2px 2px 2px rgba(100,100,100,0.3)'});
      var dc_check=$('<div>확인<div>');
      dc_check.css({'position':'absolute','bottom':'10px','right':'10px','width':'80px','height':'40px','text-align':'center','border-radius':'2px','background':'rgb(22,23,27)','color':'white','font-size':'17px','text-shadow':'0px 0px 0px rgba(22,23,27,0)','line-height':'40px'});
      dc_m.append(dc_check);    
      $parent.append(dc_c);
      $('#parent').append(dc_m);    
      dc_c.click(function(){
        dc_c.remove();
        dc_m.remove();  
      });
      dc_check.touchstart(function(){
        dc_check.css({'background':'green'});  
      });    
      dc_check.touchend(function(){
        dc_check.css({'background':'rgb(22,23,27)'});  
      });        
      dc_check.click(function(){
        dc_c.remove();
        dc_m.remove();
        pimg_c.hide();
        var diva_c=$('<div>취소</div>');
        diva_c.css({'position':'absolute','width':'40px','height':'40px','border-radius':'50%','background':'green','text-shadow':'0px 0px 0px rgba(255,255,255,0)','line-height':'40px','text-align':'center','top':'35px','left':'35px','color':'white','box-shadow':'2px 2px 2px rgba(100,100,100,0.3)'});
        div.append(diva_c);    
        var dcreco=JSON.parse(window.localStorage['dcreco']);
        if(dcreco.indexOf(id)==-1){dcreco.unshift(id);}
        dcreco=dcreco.splice(0,100);  
        window.localStorage['dcreco']=JSON.stringify(dcreco);
        diva_c.click(function(){
          diva_c.remove();    
          pimg_c.show();
          var dcreco=JSON.parse(window.localStorage['dcreco']);
          dcreco.splice(dcreco.indexOf(id),1);  
          window.localStorage['dcreco']=JSON.stringify(dcreco);            
        });  
      });          
    });    
  $add_r_c.append(div);    
};
var add_rc1=function(id,name,img){
  var id=id;
  var name=name;
  var pimg=img;
  var div=$('<div></div>');
  div.css({'position':'relative','width':w_w+'px','height':(w_w/2+95)+'px','background':'white','over-flow':'hidden','background':'rgba(230,230,230,0.3)'});
  var reco1=$('<div></div>');
  reco1.css({'position':'absolute','width':(w_w/2)+'px','height':(w_w/2+40)+'px','top':'10px','left':(w_w/4)+'px'});
  var pimg_c = $('<div></div>');
  pimg_c.css({'position':'absolute','top':'0','left':'0','width':(w_w/2)+'px','height':(w_w/2)+'px',"border-radius":"2px",'overflow':'hidden','border':'1px solid rgba(100,100,100,0.15)','box-shadow':'3px 3px 3px rgba(100,100,100,0.2)'});
  reco1.append(pimg_c);
  var profile_img = $("<img>");
  profile_img.css({'position':'absolute'});
  if(pimg=='1'){
    profile_img.attr('src','img/man3.png');    
  }else if(pimg=='2'){
    profile_img.attr('src','img/woman3.png');  
  }else{
    profile_img.attr('src',pimg);   
  }
  profile_img.load(function(){
    var nh = this.naturalHeight;
    var nw = this.naturalWidth;
    var gr = nh/nw;
    var m_w =(w_w/2);
    if(gr>=1){
      profile_img.css({'width':(m_w)+'px','height':(m_w*gr)+'px','top':(-1)*(m_w*gr-m_w)/2+'px','left':'0'});
    }else{
      profile_img.css({'width':m_w/gr+'px','height':m_w+'px','left':(-1)*(m_w/gr-m_w)/2,'top':'0'});
    }
    pimg_c.css({'border':'0px solid rgb(255,255,255,0)'});    
    pimg_c.append(profile_img);
  });
  var rco_n=$('<span>'+name+'</span>');
  rco_n.css({'position':'absolute','bottom':'0','width':(w_w/2)+'px','heght':'40px','left':'0','text-align':'center','font-size':'20px','color':'rgb(22,23,27)','line-height':'40px','font-weight':'700','text-shadow':'0px 0px 0px rgba(255,255,255,0)','margin-right':'0px'});
  reco1.append(rco_n);
    console.log(name);
  div.append(reco1);
  var link=$('<div></div>');
  link.text('추천');
  link.css({'position':'absolute','left':'0','bottom':'0','height':'40px','width':(w_w-30)+'px','color':'white','line-height':'40px','text-shadow':'0px 0px 0px rgba(116,0,179,0)','background':'rgb(116,0,179)','padding-left':'30px','font-size':'18px'});
  div.append(link);
  profile_img.click(function(){
    t_g_pf(1,id);
  });    
  $postarea1.prepend(div);    
}