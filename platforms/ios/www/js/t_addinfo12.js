var t_msg2=function(id,name,img){
  if(window.localStorage['id']!=id){
    $('.t_msg2').remove();
    var id=id;
    var div= $('<div>메시지 보내기</div>');
    div.css({'position':'relative','width':w_w+'px','height':'50px','font-size':'20px','line-height':'50px','color':'rgb(22,23,27)','text-align':'center','border-bottom':'1px solid rgba(180,180,180,0.2)'});
    div.addClass('t_msg2');    
    $('#t_info2').prepend(div);
    div.touchend(function(){      
      c_g(1,id,name,img);  
    });      
  }else{
    $('.t_msg2').remove();  
  }        
}
var t_addinfo12 = function(i1,post_id1){
  var div = $('<div></div>');
  div.addClass('t_add_i2');    
  div.css({'width':w_w+'px','height':(w_w/3)+'px','position':'relative'});
  var i1 = i1;
  if(i1!='-1'){
  var img1_c =$('<div></div>');
  img1_c.addClass(post_id1+'if');      
  img1_c.css({'position':'absolute','top':(2/3)+'px','left':'0','width':(w_w/3-4/3)+'px','height':(w_w/3-4/3)+'px','overflow':'hidden'});
  var img1 = $('<img></img>');
  img1.attr('src',i1);
img1.load(function(){
  var nh = this.naturalHeight;
  var nw = this.naturalWidth;
  var gr = nh/nw;
  var m_w =(w_w/3)-(4/3);
  if(gr>=1){
    img1.css({'position':'absolute','width':(m_w)+'px','height':(m_w*gr)+'px','top':(-1)*(m_w*gr-m_w)/2+'px','left':'0'});
   }else{
     img1.css({'position':'absolute','width':m_w/gr+'px','height':m_w+'px','left':(-1)*(m_w/gr-m_w)/2,'top':'0'});
   }

});
  img1_c.append(img1);
  div.append(img1_c);              
  img1.click(function(){
      $('#t_main2').hide();
      e_g_p(1,post_id1)
  });      
  }    
  $t_info2.append(div);    
}