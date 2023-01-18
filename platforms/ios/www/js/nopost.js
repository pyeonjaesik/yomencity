var nopost1 = function(){
  $('.post1').remove();    
  var element = $("#postarea1");
  var div=$('<div>가져올 게시물이 없습니다.</div>');
  div.addClass('post1');    
  div.css({'position':'relative','width':w_w+'px','height':'180px','line-height':'180px','text-align':'center','font-size':'20px','color':'rgba(30,38,49,0.4)','text-shadow':'0px 0px white','overflow':'hidden'});
  element.append(div);      
};
var nopost2 = function(){
  $('.post2').remove();    
  var element = $("#postarea2");
  var div=$('<div>추천 친구가 없습니다.</div>');
  div.addClass('post2');    
  div.css({'position':'absolute','width':w_w+'px','height':'180px','line-height':'180px','text-align':'center','font-size':'20px','color':'rgba(30,38,49,0.4)','text-shadow':'0px 0px white','overflow':'hidden'});
  element.append(div);      
};
var nopost3 = function(k,i){
  $('.post3').remove();    
  var element = $("#search_main");
  var div=$("<div></div>");
  var span = $('<span>다음 검색어와 일치하는 결과가 없음</br>'+"<b>'"+k+"'</b>"+'</span>');  
  div.addClass('add_p');
  div.css({'position':'absolute','width':w_w+'px','height':'180px','text-align':'center','font-size':'20px','color':'rgba(30,38,49,0.4)','text-shadow':'0px 0px white','overflow':'hidden'});
  span.css({'position':'absolute','width':w_w+'px','height':'70px','line-height':'35px','top':'55px','left':'0'});
  div.append(span);    
  element.append(div);      
};
var nopost32 = function(k,i){
  $('.post3').remove();    
  var element = $("#search_main2");
  var div=$("<div></div>");
  var span = $('<span>관심 장소에서</br>다음 검색어와 일치하는 결과가 없음</br>'+"<b>'"+k+"'</b>"+'</span>');  
  div.addClass('add_pl');
  div.css({'position':'absolute','width':w_w+'px','height':'180px','text-align':'center','font-size':'20px','color':'rgba(30,38,49,0.4)','text-shadow':'0px 0px white','overflow':'hidden'});
  span.css({'position':'absolute','width':w_w+'px','height':'70px','line-height':'35px','top':'55px','left':'0'});
  div.append(span);    
  element.append(div);      
};
var nopost4 = function(){
  $('.add4').remove();    
  var element = $("#postarea4");
  var div=$('<div>가져올 소식이 없습니다.</div>');
  div.addClass('addp4');    
  div.css({'position':'absolute','width':w_w+'px','height':'180px','line-height':'180px','text-align':'center','font-size':'20px','color':'rgba(30,38,49,0.4)','text-shadow':'0px 0px white','overflow':'hidden'});
  element.append(div);      
};
var nopost6 = function(){
cordova.plugins.diagnostic.getContactsAuthorizationStatus(function(status){
    if(status === cordova.plugins.diagnostic.permissionStatus.GRANTED){
      $('.add_ph').remove();    
      var element = $("#postarea6");
      var div=$('<div>아직 <b>연락처</b>에 </br>요멘시티 가입자가 없습니다.</div>');
      div.addClass('add_ph');    
      div.css({'position':'absolute','width':w_w+'px','height':'120px','line-height':'30px','text-align':'center','font-size':'20px','color':'rgba(30,38,49,0.4)','text-shadow':'0px 0px white','overflow':'hidden','padding-top':'90px'});
      element.append(div);
    }else{
      $('.add_ph').remove();    
      var element = $("#postarea6");
      var div=$('<div>설정에서 앱의 <b>연락처 접근 권한</b>에 대하여</br>허용해 주시기 바랍니다.</div>');
      div.addClass('add_ph');    
      div.css({'position':'absolute','width':w_w+'px','height':'120px','line-height':'30px','text-align':'center','font-size':'20px','color':'rgba(30,38,49,0.4)','text-shadow':'0px 0px white','overflow':'hidden','padding-top':'90px'});
      element.append(div);        
    }
}, function(error){
    console.error("The following error occurred: "+error);
});          
};
var nopost5 = function(i){
  $('.add_i').remove();
  $('.add_fg').remove();
  $('.add_h').remove();
  $('.s_sp5').remove();    
  var element = $('.infoarea');
  if(i==1){
    var div=$('<div>가져올 게시물이 없습니다.</div>');  
  }else if(i==4){
    var div=$('<div>가져올 히스토리가 없습니다.</div>');  
  }else if(i==2){
    var div=$('<div>아무도 팔로우하지 않습니다.</div>');  
  }else{
    var div=$('<div>팔로워가 없습니다.</div>');  
  } 
  div.addClass('add_i');
  div.addClass('nopost5');    
  div.css({'position':'absolute','width':w_w+'px','height':'180px','line-height':'180px','text-align':'center','font-size':'20px','color':'rgba(30,38,49,0.4)','text-shadow':'0px 0px white','overflow':'hidden'});
  element.append(div);      
};
var nopost_t = function(i){
  $('.t_add_i').remove();
  $('.t_add_fg').remove();
  $('.t_add_h').remove();
  $('.s_sp_t').remove();    
  var element = $('#t_info');
  if(i==1){
    var div=$('<div>가져올 게시물이 없습니다.</div>');  
  }else if(i==4){
    var div=$('<div>가져올 히스토리가 없습니다.</div>');  
  }else if(i==2){
    var div=$('<div>아무도 팔로우하지 않습니다.</div>');  
  }else{
    var div=$('<div>팔로워가 없습니다.</div>');  
  } 
  div.addClass('t_add_i');    
  div.css({'position':'absolute','width':w_w+'px','height':'180px','line-height':'180px','text-align':'center','font-size':'20px','color':'rgba(30,38,49,0.4)','text-shadow':'0px 0px white','overflow':'hidden'});
  element.append(div);      
};
var nopost_t2 = function(i){
  $('.t_add_i2').remove();
  $('.t_add_fg2').remove();
  $('.t_add_h2').remove();
  $('.s_sp_t2').remove();    
  var element = $('#t_info2');
  if(i==1){
    var div=$('<div>가져올 게시물이 없습니다.</div>');  
  }else if(i==4){
    var div=$('<div>가져올 히스토리가 없습니다.</div>');  
  }else if(i==2){
    var div=$('<div>아무도 팔로우하지 않습니다.</div>');  
  }else{
    var div=$('<div>팔로워가 없습니다.</div>');  
  } 
  div.addClass('t_add_i2');    
  div.css({'position':'absolute','width':w_w+'px','height':'180px','line-height':'180px','text-align':'center','font-size':'20px','color':'rgba(30,38,49,0.4)','text-shadow':'0px 0px white','overflow':'hidden'});
  element.append(div);      
};
var nopost_l = function(){
  $('.add_lv').remove();    
  var element = $("#l_area");
  var div=$('<div>좋아요가 없습니다.</div>');
  div.addClass('add_lv');    
  div.css({'position':'absolute','width':w_w+'px','height':'180px','line-height':'180px','text-align':'center','font-size':'20px','color':'rgba(30,38,49,0.4)','text-shadow':'0px 0px white','overflow':'hidden'});
  element.append(div);      
};
var nopost_rp = function(){
  $('.myreply').remove();    
  var element = $("#reply_p_main_c");
  var div=$('<div>댓글이 없습니다.</div>');
  div.addClass('myreply');
  div.addClass('nopost_rp');
  div.css({'position':'absolute','width':w_w+'px','height':'180px','line-height':'180px','text-align':'center','font-size':'20px','color':'rgba(30,38,49,0.4)','text-shadow':'0px 0px white','overflow':'hidden'});
  element.append(div);      
};
var nopost_rs = function(){
  $('.myreply_s').remove();    
  var element = $("#reply_s_main_c");
  var div=$('<div>답글이 없습니다.</div>');
  div.addClass('myreply_s');
  div.addClass('nopost_rs');
  div.css({'position':'absolute','width':w_w+'px','height':'180px','line-height':'180px','text-align':'center','font-size':'20px','color':'rgba(30,38,49,0.4)','text-shadow':'0px 0px white','overflow':'hidden'});
  element.append(div);      
};
var nopost_fgs = function(k,i){
  $('.add_fgs').remove();    
  var element = $("#s_area");
  var div=$("<div></div>");
  if(i==0){
    var span = $('<span>팔로우 하는 사람 중에</br>다음 검색어와 일치하는 결과가 없음</br>'+"<b>'"+k+"'</b>"+'</span>');  
  }else{
    var span = $('<span>팔로워 중에</br>다음 검색어와 일치하는 결과가 없음</br>'+"<b>'"+k+"'</b>"+'</span>');  
  } 
  div.addClass('add_fgs');
  div.css({'position':'absolute','width':w_w+'px','height':'180px','text-align':'center','font-size':'20px','color':'rgba(30,38,49,0.4)','text-shadow':'0px 0px white','overflow':'hidden'});
  span.css({'position':'absolute','width':w_w+'px','height':'70px','line-height':'35px','top':'55px','left':'0'});
  div.append(span);    
  element.append(div);      
};
var nopost_sc = function(k){
  $('.add_sc').remove();    
  var element = $("#sc_area");
  var div=$("<div></div>");
  var span = $('<span>팔로우 하는 사람 중에</br>다음 검색어와 일치하는 결과가 없음</br>'+"<b>'"+k+"'</b>"+'</span>');  
  div.addClass('add_sc');
  div.css({'position':'absolute','width':w_w+'px','height':'180px','text-align':'center','font-size':'20px','color':'rgba(30,38,49,0.4)','text-shadow':'0px 0px white','overflow':'hidden'});
  span.css({'position':'absolute','width':w_w+'px','height':'70px','line-height':'35px','top':'55px','left':'0'});
  div.append(span);    
  element.append(div);      
};
var nopost_ch1 = function(){
  $('.add_c1').remove();    
  var element = $("#chat_main");
  var div=$('<div>아무도 팔로우 하고 있지 않습니다.</div>');
  div.addClass('add_c1');    
  div.css({'position':'absolute','width':w_w+'px','height':'180px','line-height':'180px','text-align':'center','font-size':'20px','color':'rgba(30,38,49,0.4)','text-shadow':'0px 0px white','overflow':'hidden'});
  element.append(div);      
};
var nopost_ch2 = function(){
  $('.add_cr').remove();    
  var element = $('#chat_main2');
  var div=$('<div>대화 상대가 없습니다.</div>');
  div.addClass('add_c1');
  div.addClass('nopost_ch2');    
  div.css({'position':'absolute','width':w_w+'px','height':'180px','line-height':'180px','text-align':'center','font-size':'20px','color':'rgba(30,38,49,0.4)','text-shadow':'0px 0px white','overflow':'hidden'});
  element.append(div);      
};
var nopost_pl = function(){
  $('.add_al').remove();    
  var element = $("#postarea2_2");
  var div=$('<div>가져올 플래그가 없습니다.</div>');
  div.addClass('add_al');
  div.addClass('nopost_pl');    
  div.css({'position':'absolute','width':w_w+'px','height':'180px','line-height':'35px','text-align':'center','font-size':'20px','color':'rgba(30,38,49,0.4)','text-shadow':'0px 0px white','overflow':'hidden','padding-top':'50px'});
  element.append(div);      
}
var nopost_p2a = function(){
  $('.addp2a').remove();    
  var element = $("#postarea2_5");
  var div=$('<div>새로운 알림이 없습니다.</div>');
  div.addClass('addp2a');    
  div.css({'position':'absolute','width':w_w+'px','height':'180px','line-height':'180px','text-align':'center','font-size':'20px','color':'rgba(30,38,49,0.4)','text-shadow':'0px 0px white','overflow':'hidden'});
  element.append(div);      
}
var nopost_copl = function(){
  $('.add_al2_3').remove();    
  var element = $("#postarea2_3");
  var div=$('<div>아직 관심있는 플래그가 없습니다.</div>');
  div.addClass('add_al2_3');    
  div.css({'position':'absolute','width':w_w+'px','height':'180px','line-height':'180px','text-align':'center','font-size':'20px','color':'rgba(30,38,49,0.4)','text-shadow':'0px 0px white','overflow':'hidden'});
  element.append(div);      
}
var nopost_mypl = function(){
  $('.add_al2_4').remove();    
  var element = $("#postarea2_4");
  var div=$('<div>아직 작성한 플래그가 없습니다.</div>');
  div.addClass('add_al2_4');    
  div.css({'position':'absolute','width':w_w+'px','height':'180px','line-height':'180px','text-align':'center','font-size':'20px','color':'rgba(30,38,49,0.4)','text-shadow':'0px 0px white','overflow':'hidden'});
  element.append(div);      
}