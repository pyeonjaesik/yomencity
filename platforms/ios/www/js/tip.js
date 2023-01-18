var tip_f=function(){    
  $('.tip1').remove();
  if(window.localStorage['tip']=='1'){
    return;  
  }    
  var post = $("<li></li>");
  post.css({"position":"relative","width":"100%","background":"rgba(245,245,245,0.1)",'overflow':'hidden'});
  var element = $("#postarea1");
  post.addClass('tip1');
  var header = $('<div></div>');
  header.css({"position":"relative","width":"100%","height":"65px","background":"rgba(245,245,245,0.1)",'overflow':'hidden'});
  var pimg_c = $('<div></div>');
  pimg_c.css({'position':'absolute','top':'12.5px','left':'13px','width':'40px','height':'40px',"border-radius":"1.5px",'overflow':'hidden','border':'1px solid rgba(100,100,100,0.15)'});
  header.append(pimg_c);
  var profile_img = $("<img>");
  profile_img.css({'position':'absolute'});
  profile_img.attr('src','img/logo_green.png');
  profile_img.load(function(){
    var nh = this.naturalHeight;
    var nw = this.naturalWidth;
    var gr = nh/nw;
    var m_w =40;
    if(gr>=1){
      profile_img.css({'width':(m_w)+'px','height':(m_w*gr)+'px','top':(-1)*(m_w*gr-m_w)/2+'px','left':'0'});
    }else{
      profile_img.css({'width':m_w/gr+'px','height':m_w+'px','left':(-1)*(m_w/gr-m_w)/2,'top':'0'});
    }
    pimg_c.css({'border':'0px solid rgb(255,255,255,0)'});    
    pimg_c.append(profile_img);
  });
  var profile_name =$("<span>이용 Tip</span>");
  profile_name.css({"position":"absolute","top":"0px","left":"70px","height":"65px","line-height":"65px","font-size":"20px","color":"rgb(30,38,49)","text-shadow":"0px 0px 0px rgba(255,255,255,0))",'font-weight':'500'});
  header.append(profile_name);
  var main=$('<div></div>');
  main.css({'position':'relative','width':w_w+'px','background':'rgb(51,51,51)','height':'150px'});
  var main_s=$('<span></span>');
  main_s.css({'position':'absolute','width':w_w+'px','text-align':'center','line-height':'26px','left':'0','top':'49px','text-shadow':'0px 0px 0px rgba(255,255,255,0)','color':'white','font-size':'18px','height':'52px'});
  main_s.html('하단의 홈,위치 버튼을 연속해서 클릭하면<br>새로운 게시물을 받아올 수 있습니다.');
  main.append(main_s);
  var xbtn=$('<div>이제 그만 볼래요</div>');
  xbtn.css({'position':'relative','width':w_w+'px','height':'60px','line-height':'60px','font-size':'20px','color':'rgb(22,23,27)','text-align':'center','text-shadow':'0px 0px 0px rgba(255,255,255,0)','font-weight':'700','border-bottom':'13px solid rgb(10,15,65)'});
  post.append(header);    
  post.append(main);    
  post.append(xbtn);
  xbtn.touchstart(function(){
    $(this).css({'background':'rgb(150,150,150,0.1)'});  
  });
  xbtn.touchend(function(){
    $(this).css({'background':'white'});  
  });
  xbtn.click(function(){
    post.remove();
    window.localStorage['tip']='1';  
  });    
  element.append(post);
};