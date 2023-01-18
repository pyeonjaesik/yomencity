var addreply = function(username,text,time,comment_id,img,index,cn,id){
    var reply = $("<div></div>");
    reply.addClass('myreply');
    var username = username;
    var replytext = text;
    var id=id;
    var time = time;
    if(time==1){
      return;    
    }
    var comment_id = comment_id;
    var pimg=img;
    var cn = cn||0;
    t_m=t_fun1(time);
    comment_id_r = comment_id; 
    reply.css({"position":'relative',"width":"100%","background":"white","min-height":"50px","padding-left":"80px","padding-top":"30px","padding-bottom":"50px","padding-right":"30px","box-sizing":'border-box',"font-size":"15px",'word-break':'break-all'});
    replytext=filterXSS(replytext);
    reply.html('<b>'+username+' </b>'+replytext);
    var reply_nt =$('<div></div>');
    reply_nt.text(t_m);
    reply_nt.css({'position':'absolute',"left":'80px','bottom':'5px','color':'rgba(100,100,100,0.5)','font-size':'12px','height':'15px','line-height':'15px','padding-right':'110px'});
    var reply_s = $("<div></div>");
    reply_s.css({"position":"absolute","top":"0px",'right':'0px','width':'100px',"color":"green","font-size":"12px",'height':'15px','line-height':'15px'});
    var rs =comment_id+'rs';
    var _rs = '.'+rs;
    reply_s.addClass(rs);
    if(cn==0){
      reply_s.text('답글 달기');  
    }else{
      reply_s.text('답글 '+cn+'개 보기');  
    }
    reply_nt.append(reply_s);
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
        rm_cn.css({'position':'absolute','bottom':'0',left:'0','width':(w_w-70)/2+'px','height':'50px','color':'rgb(22,23,27)','line-height':'50px','text-align':'center','font-size':'20px','border-radius':'2px','text-shadow':'0px 0px 0px rgba(100,100,100,0)','background':'white'});    
        rm_ca.append(rm_cs);
        rm_ca.append(rm_cy);
        rm_ca.append(rm_cn);    
        rm_c.append(rm_ca);
        $('#reply_p').append(rm_c);
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
          rmrp(comment_id);
          var rmrc=$('<div>댓글이 삭제 되었습니다.</div>');
          rmrc.css({'position':'absolute','width':'100%','height':'100%','top':'0','left':'0','background':'rgba(100,100,100,0.5)','font-size':'18px','color':'white','text-align':'center','line-height':'100px','text-shadow':'0px 0px 0px rgba(100,100,100,0)'});
          reply.append(rmrc);            
        });    
      });    
    }
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
    if(index==1){
      $reply_p_main_c.prepend(reply);   
    }else{
      $reply_p_main_c.append(reply);
      reply.css({'background':'rgba(150,150,150,0.1)'});
    }    
    reply_s.click(function(){
      $('#reply_p').hide();
      rsh={n:username,txt:replytext,id:id,t:time,i:pimg};    
      r_s_g(1,h_arr[0].post_id,comment_id,rsh,0);
    });  
};