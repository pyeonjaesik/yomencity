var addlpost = function(username,img1,img2,img3,img4,text,i,post_id,created_time,pimg,ln,cn,userid){
    var post_id = post_id;
    if(post_id=='-1'){
      post2_scroll_h -= 50000;
      return;    
    }
    var post = $("<li></li>");
    if(userid==window.localStorage['id']){
      post.addClass(post_id+'if2');    
    }
    var sss= $('<div></div>');
    sss.css({'position':'absolute','top':'0','left':'0','width':'100%','background':'white'})
    post.append(sss);    
    var username = username;
    var post_text = text;
    post_text=filterXSS(post_text);
    var userid=userid;
    var pimg =pimg;
    var img1 =img1;
    var img2 =img2;
    var img3 =img3;
    var img4 =img4;
    var c_t = created_time;
    var ln= ln||0;
    var cn=cn||0;
    post.css({"position":"relative","width":"100%","min-height":"300px","background":"white",'overflow':'hidden'});
    var header = $('<div></div>');
header.css({"position":"relative","width":"100%","height":"59.8px","background":"rgba(255,255,255,0.1)",'overflow':'hidden'});
    var pimg_c = $('<div></div>');
    pimg_c.css({'position':'absolute','top':'12.5px','left':'13px','width':'40px','height':'40px',"border-radius":"1.5px",'overflow':'hidden','border':'1px solid rgba(100,100,100,0.15)'});
    header.append(pimg_c);
    var profile_img = $("<img>");
    profile_img.css({'position':'absolute'});
    if(pimg=='1'){
      profile_img.attr('src','img/man.png');    
    }else if(pimg=='2'){
      profile_img.attr('src','img/woman.png');  
    }else{
      profile_img.attr('src',pimg);   
    }
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
    profile_img.click(function(){
        t_g_pf(1,userid);
    });    
    post.append(header);
    var profile_name =$("<div></div>");
    profile_name.css({"position":"absolute","top":"13px","left":"70px","height":"20px","line-height":"20px","font-size":"20px","color":"rgb(30,38,49)","text-shadow":"0px 0px 0px rgba(255,255,255,0))",'font-weight':'600','padding-right':'90px'});
    var follow = $('<div> •팔로우</div>');
    follow.css({'position':'absolute','top':'0',right:'0','font-size':'15px','width':'80px','height':'20px','line-height':'20px','color':'green','font-weight':'500'});
    var following = $('<div> •팔로잉</div>');
    following.css({'position':'absolute','top':'0',right:'0','font-size':'15px','width':'80px','height':'20px','line-height':'20px','color':'green','font-weight':'500'});    
    profile_name.text(username);
    follow.hide();
    following.hide();    
    profile_name.append(follow);
    profile_name.append(following);
    if(userid!=window.localStorage['id']){
      function checkf1(em){
        return em.id==userid;
      }
      var f_i=mfg.findIndex(checkf1);
      if(f_i==-1){
        follow.show();
      }else{
        following.show();   
      }        
    }   
    header.append(profile_name);  
    var foot = $('<div></div>');
     foot.css({"position":'relative',"width":'100%',height:'56px','background':'rgba(255,255,255,0.1)','overflow':'hidden'});
    
    var post_span = $('<div></div>');
    post_span.html(post_text);
    post_span.css({position: 'relative',width:'100%','min-height':'0px','left': '0','font-size': '15px','text-shadow': '0px 0px 0px rgba(255,255,255,0.1)',color: 'rgb(32,38,49)',background:'rgba(255,255,255,0.1)','padding-left':'13px','padding-right':'13px','padding-top':'16px','padding-bottom':'5px','box-sizing':'border-box','word-break':'break-all','font-weight':'500'}); 
    var heart_n=$('<span></span>');
    var hn= post_id+'hn';
    heart_n.addClass(hn);
    var _hn = '.'+hn; heart_n.css({'position':'absolute','left':'10px','height':'43px','top':'0','line-height':'43px','font-size':'18px','text-shadow':'0px 0px 0px rgba(255,255,255,0.1)','color':'rgb(22,23,27)'});
    heart_n.text('좋아요 '+ln+'개');
    var heart1 = $("<img></img>");
    heart1.attr("src","img/heart1.png"); heart1.css({"position":"absolute","top":"2.7px","right":'5px',"width":"40px"});
    var heart2 = $("<img></img>");
    heart2.attr("src","img/heart2.png"); heart2.css({"position":"absolute","top":"5px","right":'7.5px',"width":"35px"});
    heart1.hide();
    heart2.hide();


    var addimg = function(img_s,img){       
        var img_con = $('<div></div>');
        img_con.css({'position':'relative','top':'0',left:'0',width:w_w+'px','overflow':'hidden','background':'white','height':w_w+'px','background':'rgba(250,250,250,0.6)'});
        var img_sc= $('<div></div>');
        img_sc.css({'position':'absolute','width':(w_w/3)+'px','height':(w_w/3)+'px','border-radius':'50%','border':'2px solid rgba(100,100,100,0.3)','top':(w_w/3)+'px','left':(w_w/3)+'px'});
        img_con.append(img_sc);
        post.append(img_con);
        var img_s = img_s;
        var mainimg = $('<img src="'+img+'"/>');
        mainimg.css({position:'absolute'});    
        mainimg.load(function(){
            var nh = this.naturalHeight;
            var nw = this.naturalWidth;
            var gr = nh/nw;
            var imh;
            if(gr>=2){
                /// 책 참고///
                var m_w = (w_w)/(gr/2);
                mainimg.css({'width':m_w+'px',top:'5.2px',left:(w_w-m_w)/2+'px'});
                img_con.css({'height':((m_w)*gr+5.2)+'px','background':'white'});
                img_con.append(mainimg);
                imh = m_w*gr+5.2;
            }else{
                mainimg.css({'width':'100%',top:'5.2px',left:'0'});
                img_con.css({'height':((w_w)*gr+5.2)+'px','background':'white'});
                img_con.append(mainimg);
                imh = w_w*gr+5.2;
            }
            if(img_s ==1){
                post2_scroll_h +=imh;
            }else{
                post2_scroll_h +=(imh+108);
                if(i == 5){  
                    post2_scroll_h -= 50000;
                }                    
            }
            img_sc.remove();
            var dbl=0;
            mainimg.tap(function(){
              if(dbl==1){
                e_g_p2(1,username,img1,img2,img3,img4,text,userid,post_id,created_time,pimg,ln,cn);  
              }else{
                dbl=1;
                setTimeout(function(){dbl=0;},250);  
              }    
            });            
         });
    };
       if(img1 !='0'){
        addimg(0,img1);
        if(img2 !='0'){
            addimg(1,img2);
            if(img3 !='0'){
                addimg(1,img3);
                if(img4 !='0'){
                    addimg(1,img4);
                }
            }
        }
    }
    var reply = $("<img></img>");
    reply.attr("src","img/reply.png"); reply.css({"position":"absolute","top":"0px","right":'50px',"width":"45px"});
    var reply_n=$('<span></span>');
    var rpnc=post_id+'rn';
    reply_n.addClass(rpnc);
    var cnl=ln+'';
    var tsl=cnl.length;
    tsl=(92+(9*tsl));
    reply_n.css({'position':'absolute','left':tsl+'px','height':'43px','top':'0px','line-height':'43px','font-size':'18px',color:'rgb(22,23,27)','text-shadow':'0px 0px 0px rgba(255,255,255,0.1)'});
    reply_n.text('댓글 '+cn+'개');    
    var crt_t = $('<span></span>');
    crt_t.css({'position':'absolute','top':'37px','left':'70px','color':'rgba(100,100,100,0.8)','height':'20px','line-height':'20px','font-size':'13px','text-shadow':'0px 0px 0px rgba(255,255,255,0.1)'});
    var rc=parseInt(Date.now())-c_t;
    if(rc<60000){
      rc = parseInt(rc/1000)+'초';
    }else if(rc <3600000 && rc>=60000){
      rc = parseInt(rc/60000)+'분';
    }else if(rc <86400000 && rc>= 3600000){
      rc = parseInt(rc/3600000)+'시간';
    }else{
      var d = new Date(c_t);
      var h=d.getHours();
      var m=d.getMinutes();
      if(m<10){
        m='0'+m;  
      }    
      if(h>=13){
        h=' 오후 '+(h-12)+':'+m;  
      }else if(h>0){
        h=' 오전 '+h+':'+m;  
      }else{
        h=' 오후 '+'12'+':'+m;  
      }    
      rc = (d.getMonth()+1)+'월'+d.getDate()+'일'+h;
    }    
    crt_t.text(rc);
    if(post_text.length>1){
      post.append(post_span);   
    }
    header.append(crt_t);
    foot.append(heart_n);
    foot.append(reply);
    foot.append(reply_n);
    foot.append(heart1);
    foot.append(heart2);
    post.append(foot);
    var lo=lv_arr.indexOf(post_id);
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
      var lo=lv_arr.indexOf(post_id);
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
        url: url+'/love1',
        success:function(output){
          if(output.status==100||output.status==420){
              lv_arr.unshift(post_id);
            if(hi==1){
              if(userid!=window.localStorage['id']){   
                push_l(userid,post_id,ln);
                hl4(userid,post_id);    
              }
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
      var lo=lv_arr.indexOf(post_id);
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
        url: url+'/love2',
        success:function(output){
          if(output.status==100){
            lv_arr.splice(lo,1);
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
      var $_hn=$(_hn);    
      if(hi==0){
        h1f();  
      }
      hi=1;
      var str=$_hn.first().text();
      str=parseInt(str.replace(/[^0-9]/g,""));         
      $_hn.text('좋아요 '+(str+1)+'개');        
      $(_hc1).hide();
      $(_hc2).show();
      ln++;    
    });
    heart2.click(function(){
      var $_hn=$(_hn);    
      if(hi==0){
        h2f();  
      }
      hi=2;
      var str=$_hn.first().text();
      str=parseInt(str.replace(/[^0-9]/g,""));         
      $_hn.text('좋아요 '+(str-1)+'개');        
      $(_hc2).hide();
      $(_hc1).show(); 
      ln--;    
    });   
    heart_n.click(function(){
      l_g(1,post_id);    
    });
    post.addClass('post2');
    $postarea2.append(post);
    reply.click(function(){
      r_p_g(1,post_id);
    });
    reply_n.click(function(){
      r_p_g(1,post_id);
    });
    var f1 = userid+'f1';
    var f2 = userid+'f2';
    follow.addClass(f1);
    following.addClass(f2);
    follow.click(function(e){
        toast_t3('팔로우를 시작합니다.')
        follow.hide();
        var data = {};
        data.id2=userid; //followedid
        data._id1= window.localStorage['_id']; //followingid
        data.n1=window.localStorage['name'];
        e.preventDefault();
        $.ajax({
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json',
            url: url+'/follow',
            success:function(output){    
              if(output.status ==100){
                following.show();
                mfg.unshift({id:userid,n:username});
                push1(userid);
                hl1(userid);
              }else if(output.status ==102){
                toast_t2('이미 팔로우 하고 있습니다.');
              }else if(output.status ==103){
                toast_t2('사용자가 회원탈퇴 하였습니다.')
              }else{
                toast_t2('팔로우 시도 중 에러 발생.')
              }
              post1_index = 0;    
            }
        });
    });
    following.click(function(e){
        toast_t3('팔로우를 취소합니다.');
        following.hide();
        var data = {};
        data.id2=userid; //followedid
        data._id1= window.localStorage['_id']; //followingid
        data.id1=window.localStorage['id'];
        e.preventDefault();
        $.ajax({
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json',
            url: url+'/unfollow',
            success:function(output){
              if(output.status==100){
                follow.show();
                function checkf2(em){
                  return em.id==userid;
                }
                var f_i2=mfg.findIndex(checkf2);
                mfg.splice(f_i2,1);  
              }else{
              }
            }
        });
    });    
}