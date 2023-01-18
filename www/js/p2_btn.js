var p2_btn = function(){
  var div= $('<div></div>');
  div.addClass('p2_btn');    
  div.css({'position':'relative','top':'0','left':'0','width':w_w+'px','height':'60px','background':'white','overflow':'hidden','border-top':'1px solid rgba(100,100,100,0.2)','box-sizing':'border-box'});
  var img = $('<img>');
  img.attr('src','img/bottom.png');
  img.css({'position':'absolute','top':'0px','width':'60px','height':'60px','left':(w_w-60)/2+'px'});
  div.append(img);    
  var element = $("#postarea2_2");
  element.append(div);
  div.touchstart(function(){
    img.attr('src','img/bottom2.png');  
  });    
  div.touchend(function(){
    $('.p2_btn').remove();
    if(p2_cont_cp<p2_cont){
        kp2i+=30;
        for(var i=kp2i;i<30+kp2i;i++){
          add_al(pg2a[i]._id,pg2a[i].s,pg2a[i].t,pg2a[i].l,pg2a[i].r,0,pg2a[i].ln,pg2a[i].cn,pg2a[i].nn);    
        }
        p2_cont_cp++;
        if(pg2a.length>kp2i){
          p2_btn();  
        }
    }else if(p2_cont_cp==p2_cont){
        kp2i+=30;
        var p2l=pg2a.length;
        for(var i=kp2i;i<p2l;i++){
          add_al(pg2a[i]._id,pg2a[i].s,pg2a[i].t,pg2a[i].l,pg2a[i].r,0,pg2a[i].ln,pg2a[i].cn,pg2a[i].nn);    
        }
    } 
  });    
};