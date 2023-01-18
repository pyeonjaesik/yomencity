var n_post=function(i,post_id){
  var element = $('.infoarea');    
  var div = $('<div></div>');
  $('.nopost5').remove();    
  div.addClass('add_i');
  div.css({'width':w_w+'px','height':(w_w/2)+'px','position':'relative'});
  var i =i;  
  var img1_c =$('<div></div>');
  img1_c.css({'position':'absolute','top':(2/3)+'px','left':'0','width':(w_w/2-2)+'px','height':(w_w/2-2)+'px','overflow':'hidden'});
  var img1 = $('<img></img>');
  img1.attr('src',i);
  var m_w =(w_w/2)-2;    
  img1.each(function(){
    img1.load(function(){
      var nh = this.naturalHeight;
      var nw = this.naturalWidth;
      var gr = nh/nw;
      if(gr>=1){
        img1.css({'position':'absolute','width':(m_w)+'px','height':(m_w*gr)+'px','top':(-1)*(m_w*gr-m_w)/2+'px','left':'0'});
       }else{
         img1.css({'position':'absolute','width':m_w/gr+'px','height':m_w+'px','left':(-1)*(m_w/gr-m_w)/2,'top':'0'});
       }
       img1_c.append(img1);
       div.append(img1_c);        
    });              
  });
  img1.click(function(){
      e_g_p(1,post_id)
  });
  var span_c=$('<div></div>');
  span_c.css({'position':'absolute','width':m_w+'px','height':m_w+'px','top':'0','right':'0'});
  var span=$('<span>업로드</br>성공</span>');
  span.css({'position':'absolute','height':'50px','width':m_w+'px','line-height':'25px','text-align':'center','color':'rgb(22,23,27)','font-size':'20px','top':(m_w-50)/2+'px','right':'0','font-weight':'800'});
  span_c.append(span);
  div.append(span_c);    
  element.prepend(div);   
};