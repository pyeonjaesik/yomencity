var distance = function(s_lat,s_long,e_lat,e_long){
    var distance = 0;
    var x = (s_lat-e_lat)*100000.0*0.884;
    var y = (s_long-e_long)*100000.0*1.110;
    distance = parseInt(Math.sqrt((x*x)+(y*y)))+'m';
    return distance;
}
var add_al = function(_id,text,time,e_lat,e_long,index,ln,cn,nn){
    var div = $("<li></li>");
    div.addClass('add_al');
    var text = text;
    var id=id;
    var time = time;
    var e_lat=e_lat;
    var e_long=e_long;
    var post_id=_id;
    var ln=ln;
    var cn=cn;
    var nn=nn;
    if(index==1){
      t_m='방금'  
    }else{
      var t_m=t_fun3(time);   
    }
    div.css({"position":'relative',"width":w_w+'px',"min-height":"110px","box-sizing":'border-box',"font-size":"15px",'word-break':'break-all','top':'10px','left':'0','padding-top':'0px','padding-left':'76px','padding-right':'15px','padding-bottom':'50px','margin-bottom':'60px','font-weight':'500','color':'rgb(22,23,27)','text-shadow':'0px 0px 0px rgba(255,255,255,0)'});
    if(nn.length==1){
      var nd=$('<div>'+nn[0]+'</div>');    
    }else{
      var nd=$('<div>'+nn[0]+nn[1]+'</div>');  
    }
    nd.css({'position':'absolute','top':'2px','left':'16px','width':'37px','height':'37px','border-radius':'50%','overflow':'hidden','font-size':'12px','line-height':'37px','font-weight':'600','color':'white','text-shadow':'0px 0px 0px rgba(22,23,27,0)','background':'rgb(22,23,27)','text-align':'center'});
    text=filterXSS(text);
    div.html('<b>'+nn+'</b><br>'+text);
    var ds=$('<span></span>');
    ds.css({'position':'absolute','bottom':'30px','left':'76px','height':'20px','line-height':'20px','font-size':'13px','text-shadow':'0px 0px 0px rgba(255,255,255,0)','color':'rgba(100,100,100,0.8)'});
    ds.html(t_m+' '+distance(lat,long,e_lat,e_long));
    div.append(ds);
    div.append(nd);
    var declare=$("<span>신고</span>");
    declare.css({"position":"absolute","bottom":"5px","left":'45px',"width":"90px",'color':'red','text-shadow':'0px 0px 0px rgba(22,23,27,0)','font-size':'14px','text-align':'center','height':'30px','line-height':'30px'});
    div.append(declare);
    var heart1 = $("<span>좋아요 "+ln+"</span>");
    heart1.attr("src","img/love_p.png"); heart1.css({"position":"absolute","bottom":"7px","right":'5px',"width":"90px",'color':'rgb(22,23,27)','text-shadow':'0px 0px 0px rgba(22,23,27,0)','font-size':'17px','text-align':'center','height':'30px','line-height':'30px'});
    var heart2 = $("<span>좋아요 "+ln+"</span>");
    heart2.attr("src","img/heart2.png"); heart2.css({"position":"absolute","bottom":"7px","right":'5px',"width":"90px",'color':'rgb(116,0,179)','text-shadow':'0px 0px 0px rgba(22,23,27,0)','font-size':'17px','text-align':'center','height':'30px','line-height':'30px'});
    heart1.hide();
    heart2.hide();
    div.append(heart1);
    div.append(heart2);
    var lo=lv_arr2.indexOf(post_id);
    if(lo==-1){
      heart1.show();    
    }else{
      heart2.show();    
    }
    var hc1 = post_id+'h1';
    var hc2 = post_id+'h2';
    var _hc1 = '.'+hc1;
    var _hc2 = '.'+hc2;
    heart1.addClass(hc1);
    heart2.addClass(hc2);
    var hi=0;
    var h1f=function(){
      var lo=lv_arr2.indexOf(post_id);
      if(lo!=-1){
        hi=0;  
        return;  
      }    
      var data={};
      data.post_id=post_id;
      data.user_id=window.localStorage['_id'];
      $.ajax({
        type:'POST',
        data: JSON.stringify(data),
        contentType: 'application/json',
        url: url+'/lovel1',
        success:function(output){
          if(output.status==100||output.status==420){
              lv_arr2.unshift(post_id);
            if(hi==1){
              hi=0;    
            }else if(hi==2){
              h2f();  
            }  
          }else{
            $(_hc2).hide();    
            $(_hc1).show();
            hi=0;  
          }    
        }
      });        
    };
    var h2f=function(){
      var lo=lv_arr2.indexOf(post_id);
      if(lo==-1){
        hi=0;  
        return;  
      }    
      var data={};
      data.post_id=post_id;
      data.user_id=window.localStorage['_id'];
      $.ajax({
        type:'POST',
        data: JSON.stringify(data),
        contentType: 'application/json',
        url: url+'/lovel2',
        success:function(output){
          if(output.status==100){
            lv_arr2.splice(lv_arr2.indexOf(post_id),1);
            if(hi==2){
              hi=0;    
            }else if(hi==1){
              h1f();    
            }    
          }else{
            $(_hc1).hide();  
            $(_hc2).show();  
            hi=0;  
          }    
        }
      });           
    };
    heart1.click(function(){
      var $_hc1=$(_hc1);
      var $_hc2=$(_hc2);    
      if(hi==0){
        h1f();  
      }
      hi=1;
      $_hc1.hide();
      var str=$_hc1.first().text();
      str=parseInt(str.replace(/[^0-9]/g,""));        
      $_hc2.show();    
      $_hc2.text('좋아요 '+(str+1));    
    });
    heart2.click(function(){
      var $_hc1=$(_hc1);
      var $_hc2=$(_hc2);        
      if(hi==0){
        h2f();  
      }
      hi=2;
      $_hc2.hide();
      var str=$_hc2.first().text();
      str=parseInt(str.replace(/[^0-9]/g,""));        
      $_hc1.show();    
      $_hc1.text('좋아요 '+(str-1));    
    });    
    var reply=$('<span>댓글 '+cn+'</span>');
    reply.css({"position":"absolute","bottom":"7px","right":'90px',"width":"90px",'color':'green','text-shadow':'0px 0px 0px rgba(22,23,27,0)','font-size':'17px','text-align':'center','height':'30px','line-height':'30px'});
    div.append(reply);
    var rpnc=post_id+'rn';
    reply.addClass(rpnc);
    reply.click(function(){
      l_r_p_g(1,post_id,nn);    
    });
    if(index==1){
      $('#Pg2_w').prepend(div);   
    }else{
      $postarea2_2.append(div);
    }
    declare.click(function(){
      var dc_c=$('<div></div>');
      dc_c.css({'position':'fixed','top':'0','left':'0','width':'100%','height':'100%','background':'rgba(180,180,180,0.2)'});
      var dc_m=$('<div>'+nn+'님의 플래그를 <br>정말로 신고하시겠습니까?</div>');    
      dc_m.css({'position':'absolute','top':(w_h-300)/2+'px','left':'50px','width':(w_w-100)+'px','height':'150px','background':'white','border-radius':'5px','font-size':'18px','padding-top':'50px','text-align':'center','line-height':'25px','box-shadow':'2px 2px 2px rgba(100,100,100,0.3)'});
      var dc_check=$('<div>신고<div>');
      dc_check.css({'position':'absolute','bottom':'10px','right':'10px','width':'80px','height':'40px','text-align':'center','border-radius':'2px','background':'rgb(22,23,27)','color':'white','font-size':'17px','text-shadow':'0px 0px 0px rgba(22,23,27,0)','line-height':'40px'});
      dc_m.append(dc_check);    
      $parent.append(dc_c);
      $('#parent').append(dc_m);    
      dc_c.touchend(function(){
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
        div.remove();
        toast_t5('이 게시물을 신고해주셔서 감사합니다');
        var dcpa=JSON.parse(window.localStorage['dcplag']);
        if(dcpa.indexOf(post_id)==-1){dcpa.unshift(post_id);}
        dcpa=dcpa.splice(0,50);  
        window.localStorage['dcplag']=JSON.stringify(dcpa);
        dc_check.css({'background':'rgb(22,23,27)'});
        var data={};
        data._id=post_id;
        data.id=window.localStorage['id'];    
        $.ajax({
          type:'POST',
          data: JSON.stringify(data),
          contentType: 'application/json',
          url: url+'/dcplag',
          success:function(output){
   
          }
        });          
      });    
    });    
};
//_id,text,time,e_lat,e_long,ln,cn,nn,index
var add_al2 = function(_id,text,time,e_lat,e_long,ln,cn,nn,index){
    var div = $("<li></li>");    
    var text = text;
    var id=id;
    var time = time;
    var e_lat=e_lat;
    var e_long=e_long;
    var post_id=_id;
    var ln=ln;
    var cn=cn;
    var nn=nn;
    var t_m=t_fun3(time);   
    div.css({"position":'relative',"width":w_w+'px',"min-height":"110px","box-sizing":'border-box',"font-size":"15px",'word-break':'break-all','top':'10px','left':'0','padding-top':'0px','padding-left':'76px','padding-right':'15px','padding-bottom':'50px','margin-bottom':'60px','font-weight':'500','color':'rgb(22,23,27)','text-shadow':'0px 0px 0px rgba(255,255,255,0)'});
    if(nn.length==1){
      var nd=$('<div>'+nn[0]+'</div>');    
    }else{
      var nd=$('<div>'+nn[0]+nn[1]+'</div>');  
    }
    nd.css({'position':'absolute','top':'2px','left':'16px','width':'37px','height':'37px','border-radius':'50%','overflow':'hidden','font-size':'12px','line-height':'37px','font-weight':'600','color':'white','text-shadow':'0px 0px 0px rgba(22,23,27,0)','background':'rgb(22,23,27)','text-align':'center'});
    text=filterXSS(text);
    div.html('<b>'+nn+'</b><br>'+text);
    var ds=$('<span></span>');
    ds.css({'position':'absolute','bottom':'30px','left':'76px','height':'20px','line-height':'20px','font-size':'13px','text-shadow':'0px 0px 0px rgba(255,255,255,0)','color':'rgba(100,100,100,0.8)'});
    ds.html(t_m+' '+distance(lat,long,e_lat,e_long));
    div.append(ds);
    div.append(nd);
    var heart1 = $("<span>좋아요 "+ln+"</span>");
    heart1.attr("src","img/love_p.png"); heart1.css({"position":"absolute","bottom":"7px","right":'5px',"width":"90px",'color':'rgb(22,23,27)','text-shadow':'0px 0px 0px rgba(22,23,27,0)','font-size':'17px','text-align':'center','height':'30px','line-height':'30px','border-radius':'4px'});
    var heart2 = $("<span>좋아요 "+ln+"</span>");
    heart2.attr("src","img/heart2.png"); heart2.css({"position":"absolute","bottom":"7px","right":'5px',"width":"90px",'color':'rgb(116,0,179)','text-shadow':'0px 0px 0px rgba(22,23,27,0)','font-size':'17px','text-align':'center','height':'30px','line-height':'30px'});
    heart1.hide();
    heart2.hide();
    div.append(heart1);
    div.append(heart2);
    var lo=lv_arr2.indexOf(post_id);
    if(lo==-1){
      heart1.show();    
    }else{
      heart2.show();    
    }
    var hc1 = post_id+'h1';
    var hc2 = post_id+'h2';
    var _hc1 = '.'+hc1;
    var _hc2 = '.'+hc2;
    heart1.addClass(hc1);
    heart2.addClass(hc2);
    var hi=0;
    var h1f=function(){
      var lo=lv_arr2.indexOf(post_id);
      if(lo!=-1){
        hi=0;  
        return;  
      }    
      var data={};
      data.post_id=post_id;
      data.user_id=window.localStorage['_id'];
      $.ajax({
        type:'POST',
        data: JSON.stringify(data),
        contentType: 'application/json',
        url: url+'/lovel1',
        success:function(output){
          if(output.status==100||output.status==420){
              lv_arr2.unshift(post_id);
            if(hi==1){
              hi=0;    
            }else if(hi==2){
              h2f();  
            }  
          }else{
            $(_hc2).hide();    
            $(_hc1).show();
            hi=0;  
          }    
        }
      });        
    };
    var h2f=function(){
      var lo=lv_arr2.indexOf(post_id);
      if(lo==-1){
        hi=0;  
        return;  
      }    
      var data={};
      data.post_id=post_id;
      data.user_id=window.localStorage['_id'];
      $.ajax({
        type:'POST',
        data: JSON.stringify(data),
        contentType: 'application/json',
        url: url+'/lovel2',
        success:function(output){
          if(output.status==100){
            lv_arr2.splice(lv_arr2.indexOf(post_id),1);
            if(hi==2){
              hi=0;    
            }else if(hi==1){
              h1f();    
            }    
          }else{
            $(_hc1).hide();  
            $(_hc2).show();  
            hi=0;  
          }    
        }
      });           
    };
    heart1.click(function(){
      var $_hc1=$(_hc1);
      var $_hc2=$(_hc2);    
      if(hi==0){
        h1f();  
      }
      hi=1;
      $_hc1.hide();
      var str=$_hc1.first().text();
      str=parseInt(str.replace(/[^0-9]/g,""));        
      $_hc2.show();    
      $_hc2.text('좋아요 '+(str+1));    
    });
    heart2.click(function(){
      var $_hc1=$(_hc1);
      var $_hc2=$(_hc2);        
      if(hi==0){
        h2f();  
      }
      hi=2;
      $_hc2.hide();
      var str=$_hc2.first().text();
      str=parseInt(str.replace(/[^0-9]/g,""));        
      $_hc1.show();    
      $_hc1.text('좋아요 '+(str-1));    
    });    
    var reply=$('<span>댓글 '+cn+'</span>');
    reply.css({"position":"absolute","bottom":"7px","right":'90px',"width":"90px",'color':'green','text-shadow':'0px 0px 0px rgba(22,23,27,0)','font-size':'17px','text-align':'center','height':'30px','line-height':'30px'});
    div.append(reply);
    var rpnc=post_id+'rn';
    reply.addClass(rpnc);
    reply.click(function(){
      l_r_p_g(1,post_id,nn);    
    });
    if(index==3){
      $postarea2_3.append(div);    
      div.addClass('add_al2_3');    
    }else{
      $postarea2_4.append(div);    
      div.addClass('add_al2_4');    
    }
};