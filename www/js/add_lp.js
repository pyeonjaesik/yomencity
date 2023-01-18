var kp2i=0;
var add_lp = function(p,k2){
  if(kp2i==p){
      kp2i=0;
      pi2=0;
      $('.loader2').remove();
  }else{
      var k22=k2+kp2i;
      var id=p2lp[k22].id;
      var name=p2lp[k22].name;
      var i1=p2lp[k22].img;
      var fi=p2lp[k22].fi;     
      var div = $('<div></div>');
      div.addClass('post2');
      var img = $('<img></img>');
      var i1=i1;
      if(i1=='1'){
        img.attr('src','img/man2.png');    
      }else if(i1=='2'){
        img.attr('src','img/woman2.png');  
      }else{
        img.attr('src',i1);   
      }    
      img.load(function(){
        var nh = this.naturalHeight;
        var nw = this.naturalWidth;
        var gr=nh/nw;  
        var m_w =(w_w/2)-24;
        if(p2_l<=p2_r){
          div.css({'width':(w_w/2)+'px',position:'absolute','left':'0','top':p2_l+'px','height':(m_w*gr+30)+'px'});    
          img.css({'position':'absolute','width':(m_w)+'px','height':(m_w*gr)+'px','top':'0','left':'16px','border-radius':'10px'});
          var span=$('<span>'+name+'</span>');
          span.css({'position':'absolute','bottom':'0','left':'25px','width':(w_w/2-30)+'px','height':'30px','line-height':'30px','font-size':'15px'});
          div.append(span);
          var dot=$('<img>');
          dot.attr('src','img/3dot2.png');    
          dot.css({'position':'absolute','right':'19px','bottom':'3px','width':'25px','height':'25px'});
          div.append(dot);    
          p2_l+=(m_w*gr+30);
          post2_scroll_h+=(m_w*gr+30);
          post2_scroll_h-=10000;    
          div.append(img);    
          $postarea2.append(div);
          div.hide();    
          div.fadeIn();    
          img.click(function(){
            t_g_pf(1,id);
            np_update(id,fi);  
          });
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
                img.hide();
                var m_w=(w_w/2-24);  
                var diva_c=$('<div>취소</div>');
                diva_c.css({'position':'absolute','width':'50px','height':'50px','border-radius':'50%','background':'green','text-shadow':'0px 0px 0px rgba(255,255,255,0)','line-height':'50px','text-align':'center','top':(m_w-50)*gr/2+'px','left':(w_w/4-21)+'px','color':'white','box-shadow':'2px 2px 2px rgba(100,100,100,0.3)'});
                div.append(diva_c);    
                var dcpl=JSON.parse(window.localStorage['dcpl']);
                if(dcpl.indexOf(id)==-1){dcpl.unshift(id);}
                dcpl=dcpl.splice(0,100);  
                window.localStorage['dcpl']=JSON.stringify(dcpl);
                diva_c.click(function(){
                  diva_c.remove();    
                  img.show();
                  var dcpl=JSON.parse(window.localStorage['dcpl']);
                  dcpl.splice(dcpl.indexOf(id),1);  
                  window.localStorage['dcpl']=JSON.stringify(dcpl);            
                });  
              });          
            });
            kp2i++;
            add_lp(p,k2);
        }else{
          div.css({'width':(w_w/2)+'px',position:'absolute','right':'0','top':p2_r+'px','height':(m_w*gr+30)+'px'});    
          img.css({'position':'absolute','width':(m_w)+'px','height':(m_w*gr)+'px','top':'0','right':'16px','border-radius':'10px'});
          var span=$('<span>'+name+'</span>');
          span.css({'position':'absolute','bottom':'0','left':'17px','width':(w_w/2-30)+'px','height':'30px','line-height':'30px','font-size':'15px'});
          div.append(span);
          var dot=$('<img>');
          dot.attr('src','img/3dot2.png');    
          dot.css({'position':'absolute','right':'26px','bottom':'3px','width':'25px','height':'25px'});
          div.append(dot);        
          p2_r+=(m_w*gr+30);
          post2_scroll_h-=10000;    
          div.append(img);
          $postarea2.append(div);
          div.hide();    
          div.fadeIn();    
          img.click(function(){
            t_g_pf(1,id);
            np_update(id,fi);  
          });
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
            img.hide();
            var m_w=(w_w/2-24);  
            var diva_c=$('<div>취소</div>');
            diva_c.css({'position':'absolute','width':'50px','height':'50px','border-radius':'50%','background':'green','text-shadow':'0px 0px 0px rgba(255,255,255,0)','line-height':'50px','text-align':'center','top':(m_w-50)*gr/2+'px','right':(w_w/4-21)+'px','color':'white','box-shadow':'2px 2px 2px rgba(100,100,100,0.3)'});
            div.append(diva_c);    
            var dcpl=JSON.parse(window.localStorage['dcpl']);
            if(dcpl.indexOf(id)==-1){dcpl.unshift(id);}
            dcpl=dcpl.splice(0,100);  
            window.localStorage['dcpl']=JSON.stringify(dcpl);
            diva_c.click(function(){
              diva_c.remove();    
              img.show();
              var dcpl=JSON.parse(window.localStorage['dcpl']);
              dcpl.splice(dcpl.indexOf(id),1);  
              window.localStorage['dcpl']=JSON.stringify(dcpl);            
            });  
          });          
        });
        kp2i++;    
        add_lp(p,k2);
        }  
      });      
  }                        
}