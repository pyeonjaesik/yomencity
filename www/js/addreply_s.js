var addreply_sh = function(username,text,time,img,id){
    $('.myreply_sh').remove();
    var reply = $("<div></div>");
    reply.addClass('myreply_sh');
    if(time==1){
      reply.css({'position':'relative','width':'100%','height':'60px','font-size':'20px','line-height':'60px','background':'rgba(240,240,240,0.5)','color':'rgba(100,100,100,0.8)','text-shadow':'0px 0px 0px rgba(255,255,255,0)','text-align':'center'});
      reply.text('삭제된 댓글 입니다.');
      $reply_s_main_c.prepend(reply);
      return;    
    }    
    var username = username;
    var replytext = text;
    var time = t_fun1(time);
    var pimg = img;
    var id=id||0;
    reply.css({"position":'relative',"width":"100%","background":"white","min-height":"50px","padding-left":"80px","padding-top":"30px","padding-bottom":"50px","padding-right":"30px","box-sizing":'border-box',"font-size":"15px",'word-break':'break-all'});
    replytext=filterXSS(replytext);
    reply.html('<b>'+username+' </b>'+replytext);
    var reply_nt =$('<span><span>');
    reply_nt.text(time);
    reply_nt.css({'position':'absolute',"left":'80px','bottom':'5px','color':'rgba(100,100,100,0.5)','font-size':'11px'});
    reply.append(reply_nt);
    var pimg_c = $('<div></div>');
    pimg_c.css({'position':'absolute','top':'32px','left':'8px','width':'45px','height':'45px',"border-radius":"1.5px",'overflow':'hidden'});    
    var profile_img = $("<img>");
    profile_img.css({'position':'absolute'});
    if(pimg=='1'){
      profile_img.attr('src','img/man.png');    
    }else if(pimg=='2'){
      profile_img.attr('src','img/woman.png');  
    }else{
      profile_img.attr('src',pimg);   
    }
    profile_img.each(function(){
        profile_img.load(function(){
            var nh = this.naturalHeight;
            var nw = this.naturalWidth;
            var gr = nh/nw;
            var m_w =45;
            if(gr>=1){
                profile_img.css({'width':(m_w)+'px','height':(m_w*gr)+'px','top':(-1)*(m_w*gr-m_w)/2+'px','left':'0'});
            }else{
                profile_img.css({'width':m_w/gr+'px','height':m_w+'px','left':(-1)*(m_w/gr-m_w)/2,'top':'0'});
            }

        });
        pimg_c.append(profile_img);
        reply.append(pimg_c);              
    });
    profile_img.click(function(){
      $('#reply_s').hide();  
      t_g_pf(1,id);
    });
    $reply_s_main_c.prepend(reply);   
};
var addreply_s = function(username,text,time,img,index,id,scomment_id){
    var reply = $("<div></div>");
    reply.addClass('myreply_s');
    var username = username;
    var replytext = text;
    if(time==1){
      return;    
    }    
    var time = t_fun1(time);
    var pimg = img;
    var id=id||0;
    reply.css({"position":'relative',"width":"100%","background":"white","min-height":"50px","padding-left":"80px","padding-top":"30px","padding-bottom":"50px","padding-right":"30px","box-sizing":'border-box',"font-size":"15px",'word-break':'break-all'});
    replytext=filterXSS(replytext);
    reply.html('<b>'+username+' </b>'+replytext);
    var reply_nt =$('<span><span>');
    reply_nt.text(time);
    reply_nt.css({'position':'absolute',"left":'80px','bottom':'5px','color':'rgba(100,100,100,0.5)','font-size':'11px'});
    reply.append(reply_nt);
    if(id==window.localStorage['id']){
      var rmr=$('<div>삭제</div>');
      rmr.css({'position':'absolute','right':'25px','bottom':'5px','color':'red','font-size':'12px','height':'15px','line-height':'15px','text-shadow':'0px 0px 0px rgba(255,255,255,0)'});
      reply.append(rmr);
      var rmrb=$('<div></div>');
      rmrb.css({'position':'absolute','right':'10px','bottom':'2px','width':'45px','height':'28px'});        
      reply.append(rmrb);
      rmrb.click(function(){
        var rm_c=$('<div></div>');
        rm_c.css({'position':'fixed','width':w_w+'px','height':w_h+'px','top':'0','left':'0','background':'rgba(100,100,100,0.2)'});
        var rm_ca=$('<div></div>');
        rm_ca.css({'position':'absolute','width':(w_w-70)+'px','height':(w_h*0.4),'left':'35px','top':(w_h*0.3)+'px','background':'white','border-radius':'2px'});
        var rm_cs=$('<span>댓글을<br>삭제합니다.</span>');
        rm_cs.css({'position':'absolute','width':(w_w-70)+'px','height':'60px','font-size':'20px','line-height':'30px','color':'rgb(22,23,27)','text-align':'center','left':'0','top':'60px'});
        var rm_cy=$('<div>네</div>');
        rm_cy.css({'position':'absolute','bottom':'0',right:'0','width':(w_w-70)/2+'px','height':'50px','color':'rgb(22,23,27)','line-height':'50px','text-align':'center','font-size':'20px','background':'rgba(100,100,100,0.1)','border-radius':'2px','text-shadow':'0px 0px 0px rgba(100,100,100,0)'});
        var rm_cn=$('<div>아니요</div>');
        rm_cn.css({'position':'absolute','bottom':'0',left:'0','width':(w_w-70)/2+'px','height':'50px','color':'rgb(22,23,27)','line-height':'50px','text-align':'center','font-size':'20px','border-radius':'2px','text-shadow':'0px 0px 0px rgba(255,255,255,0)'});    
        rm_ca.append(rm_cs);
        rm_ca.append(rm_cy);
        rm_ca.append(rm_cn);    
        rm_c.append(rm_ca);
        $('#reply_s').append(rm_c);
        rm_cn.touchstart(function(){
          rm_cn.css({'background':'rgb(22,22,27)','color':'white'});    
        });
        rm_cn.touchend(function(){
          rm_cn.css({'background':'white','color':'rgb(22,23,27)'});
        });
        rm_cy.touchstart(function(){
          rm_cy.css({'background':'rgb(22,23,27)','color':'white'});
        });
        rm_cy.touchend(function(){
          rm_cy.css({'background':'rgba(100,100,100,0.1)','color':'rgb(22,23,27)'})    
        });          
        rm_cn.click(function(){rm_c.remove();});
        rm_cy.click(function(){
          rm_c.remove();    
          rmrs(scomment_id);
          var rmrc=$('<div>답글이 삭제 되었습니다.</div>');
          rmrc.css({'position':'absolute','width':'100%','height':'100%','top':'0','left':'0','background':'rgba(100,100,100,0.5)','font-size':'18px','color':'white','text-align':'center','line-height':'100px','text-shadow':'0px 0px 0px rgba(100,100,100,0)'});
          reply.append(rmrc);            
        });    
      });        
    }    
    var pimg_c = $('<div></div>');
    pimg_c.css({'position':'absolute','top':'32px','left':'16px','width':'37px','height':'37px',"border-radius":"50%",'overflow':'hidden'});    
    var profile_img = $("<img>");
    profile_img.css({'position':'absolute'});
    if(pimg=='1'){
      profile_img.attr('src','img/man.png');    
    }else if(pimg=='2'){
      profile_img.attr('src','img/woman.png');  
    }else{
      profile_img.attr('src',pimg);   
    }
    profile_img.each(function(){
        profile_img.load(function(){
            var nh = this.naturalHeight;
            var nw = this.naturalWidth;
            var gr = nh/nw;
            var m_w =37;
            if(gr>=1){
                profile_img.css({'width':(m_w)+'px','height':(m_w*gr)+'px','top':(-1)*(m_w*gr-m_w)/2+'px','left':'0'});
            }else{
                profile_img.css({'width':m_w/gr+'px','height':m_w+'px','left':(-1)*(m_w/gr-m_w)/2,'top':'0'});
            }

        });
        pimg_c.append(profile_img);
        reply.append(pimg_c);              
    });
    profile_img.click(function(){
      if(index ==1){
        $('#reply_s').hide();  
        t_g_pf(1,id);          
      }
    });
    if(index==1){
      $reply_s_main_c.prepend(reply);   
    }else{
      $reply_s_main_c.append(reply);
      reply.css({'background':'rgba(150,150,150,0.1)'});    
    } 
};