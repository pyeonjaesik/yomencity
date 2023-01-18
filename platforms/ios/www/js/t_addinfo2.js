var t_addinfo2 = function(i1,i2,post_id1,post_id2){
  var div = $('<div></div>');
  div.addClass('t_add_i');    
  div.css({'width':w_w+'px','height':(w_w/3)+'px','position':'relative'});
  var i1 = i1;
  var i2 = i2;
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
      $('#t_main').hide();
      e_g_p(1,post_id1)
  });      
  }
  if(i2!='-1'){
  var img2_c =$('<div></div>');
  img2_c.addClass(post_id2+'if');      
  img2_c.css({'position':'absolute','top':(2/3)+'px','left':(w_w/3+2/3)+'px','width':(w_w/3-4/3)+'px','height':(w_w/3-4/3)+'px','overflow':'hidden'});
  var img2 = $('<img></img>');
  img2.attr('src',i2);
img2.load(function(){
  var nh = this.naturalHeight;
  var nw = this.naturalWidth;
  var gr = nh/nw;
  var m_w =(w_w/3)-(4/3);
  if(gr>=1){
    img2.css({'position':'absolute','width':(m_w)+'px','height':(m_w*gr)+'px','top':(-1)*(m_w*gr-m_w)/2+'px','left':'0'});
   }else{
     img2.css({'position':'absolute','width':m_w/gr+'px','height':m_w+'px','left':(-1)*(m_w/gr-m_w)/2,'top':'0'});
   }

});
  img2_c.append(img2);
  div.append(img2_c);              
  img2.click(function(){
      $('#t_main').hide();
      e_g_p(1,post_id2)
  });      
  }    
  $t_info.append(div);    
}