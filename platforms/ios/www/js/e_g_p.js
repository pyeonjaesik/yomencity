var e_addpost = function(username,img1,img2,img3,img4,text,i,id,post_id,created_time,pimg,ln,cn){
    var element = $("#e_area");
    element.scrollTop('0');
    var post = $("<div></div>");
    post.addClass('e_addpost');
    var user_img ='img/city2.png';
    var username = username;
    var post_text = text;
    post_text=filterXSS(post_text);
    var id = id;
    var post_id = post_id;
    var pimg =pimg;
    var img1 =img1;
    var img2 =img2;
    var img3 =img3;
    var img4 =img4;
    var c_t = created_time;
    $('.rdmp').remove();
    $('.rm_c').remove();
    if(c_t==1){
      var rmdp=$('<div>삭제된 게시물 입니다.</div>');
      rmdp.addClass('rdmp');    
      rmdp.css({'position':'absolute','top':'0','left':'0','width':w_w+'px','height':w_h+'px','line-height':(w_h-80)+'px','font-size':'20px','color':'rgba(255,255,255,0.6)','text-align':'center','text-shadow':'0px 0px 0px rgba(255,255,255,0)'});
      element.append(rmdp);
      return;    
    }
    var ln=ln||0;  post.css({"position":"absolute",'top':'50px','left':'0',"width":"100%","min-height":"300px","background":"rgb(22,23,27)",'overflow':'hidden'});
    
    var header = $('<div></div>');
    header.css({"position":"relative","width":"100%","height":"59.8px","background":"rgb(22,23,27)",'over-flow':'hidden'});
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
    post.append(header);
    var profile_name =$("<div></div>");
    profile_name.css({"position":"absolute","top":"13px","left":"70px","height":"20px","line-height":"20px","font-size":"20px","color":"rgb(225,225,225)",'text-shadow':'0px 0px 0px rgb(22,23,27)','font-weight':'600'});
    profile_name.text(username);
    header.append(profile_name);  
    var foot = $('<div></div>');
    foot.css({"position":'relative',"width":'100%',height:'56px','background':'rgb(22,23,27)','over-flow':'hidden'});
    
    var post_span = $('<div></div>');
    post_span.html(post_text);
    post_span.css({position: 'relative',width:'100%','min-height':'0px',left: '0',fontSize: '15px',textShadow: '0px 0px 0px rgb(22,23,27)',color: 'rgb(225,225,225)',background:'rgb(22,23,27)','padding-left':'13px','padding-right':'13px','padding-top':'15px','padding-bottom':'5px','box-sizing':'border-box','word-break':'break-all','font-weight':'500'});
    var heart_n=$('<span></span>');
    var hn= post_id+'hn';
    heart_n.addClass(hn);
    var _hn = '.'+hn; heart_n.css({'position':'absolute','left':'10px','height':'43px','top':'0','line-height':'43px','font-size':'15px','text-shadow':'0px 0px 0px rgb(22,23,27)','font-weight':'400','color':'rgb(225,225,225)'});
    heart_n.text('좋아요 '+ln+'개')
    var heart1 = $("<img></img>");
    heart1.attr("src","img/w_heart1.png"); heart1.css({"position":"absolute","top":"1.8px","right":'5px',"width":"40px"});
    var heart2 = $("<img></img>");
    heart2.attr("src","img/heart2.png"); heart2.css({"position":"absolute","top":"4.6px","right":'7px',"width":"35px"});
    heart1.hide();
    heart2.hide();
    var addimg = function(img_s,img){
        var img_con_sp=$('<div></div>');
        img_con_sp.css({'position':'relative','width':w_w+'px','height':'5.2px','background':'rgb(22,23,27)'});
        post.append(img_con_sp);        
        var img_con = $('<div></div>');
        img_con.css({'position':'relative','top':'0',left:'0',width:w_w+'px','overflow':'hidden','height':w_w+'px'});
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
                img_con.css({'height':((m_w)*gr+5.2)+'px'});
                img_con.append(mainimg);
            }else{
                mainimg.css({'width':'100%',top:'5.2px',left:'0'});
                img_con.css({'height':((w_w)*gr+5.2)+'px'});
                img_con.append(mainimg);
            }
             // 100을 어떤값으로 두어야 하는지 수정요망...
            mainimg.pinchzoomer();
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
    reply.attr("src","img/w_reply.png"); reply.css({"position":"absolute","top":"0px","right":'50px',"width":"45px"});
    var reply_n=$('<span></span>');
    var rpnc=post_id+'rn';
    reply_n.addClass(rpnc);
    var cnl=ln+'';
    var tsl=cnl.length;
    tsl=(77+(9*tsl));
    reply_n.css({'position':'absolute','left':tsl+'px','height':'43px','top':'0px','line-height':'43px','font-size':'15px',color:'rgb(225,225,225)','text-shadow':'0px 0px 0px rgb(22,23,27)','font-weight':'400'});
    reply_n.text('댓글 '+cn+'개');    
    
    var crt_t = $('<span></span>');
    crt_t.css({'position':'absolute','top':'37px','left':'70px','color':'rgba(180,180,180,0.8)','height':'20px','line-height':'20px','font-size':'13px','text-shadow':'0px 0px 0px rgba(180,180,180,0.8)'});
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
    foot.append(reply);
    foot.append(reply_n);
    foot.append(heart_n);
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
              if(id!=window.localStorage['id']){   
                push_l(id,post_id,ln);
                hl4(id,post_id);    
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
    });    
    heart_n.click(function(){
      $('#e_main').hide();    
      l_g(1,post_id);    
    });
    post.addClass('e_post');
    element.append(post);
    reply.click(function(){
      $('#e_main').hide();    
      r_p_g(1,post_id);
    });
    reply_n.click(function(){
      r_p_g(1,post_id);
    });
    if(id==window.localStorage['id']){
      var set=$('<img>');
      set.addClass('set');
      set.attr('src','img/x_btn.png');
      set.css({'position':'absolute','top':'65px','right':'10px','width':'26px','height':'26px'});
      element.append(set);    
      set.click(function(){     
          var rm_c=$('<div></div>');
         rm_c.addClass('rm_c'); rm_c.css({'position':'fixed','width':w_w+'px','height':w_h+'px','top':'0','left':'0','background':'rgba(100,100,100,0.2)'});
          var rm_ca=$('<div></div>');
          rm_ca.css({'position':'absolute','width':(w_w-70)+'px','height':(w_h*0.4),'left':'35px','top':(w_h*0.3)+'px','background':'white','border-radius':'2px'});
          var rm_cs=$('<span>게시물을<br>삭제합니다.</span>');
          rm_cs.css({'position':'absolute','width':(w_w-70)+'px','height':'60px','font-size':'20px','line-height':'30px','color':'rgb(22,23,27)','text-align':'center','left':'0','top':'60px'});
          var rm_cy=$('<div>네</div>');
          rm_cy.css({'position':'absolute','bottom':'0',right:'0','width':(w_w-70)/2+'px','height':'50px','color':'rgb(22,23,27)','line-height':'50px','text-align':'center','font-size':'20px','background':'rgba(100,100,100,0.1)','border-radius':'2px','text-shadow':'0px 0px 0px rgba(100,100,100,0)'});
          var rm_cn=$('<div>아니요</div>');
          rm_cn.css({'position':'absolute','bottom':'0',left:'0','width':(w_w-70)/2+'px','height':'50px','color':'rgb(22,23,27)','line-height':'50px','text-align':'center','font-size':'20px','border-radius':'2px','text-shadow':'0px 0px 0px rgba(255,255,255,0)','background':'white'});    
          rm_ca.append(rm_cs);
          rm_ca.append(rm_cy);
          rm_ca.append(rm_cn);    
          rm_c.append(rm_ca);
          element.append(rm_c);
          rm_cn.touchstart(function(){
            $(this).css({'background':'rgb(22,23,27)','color':'white'});  
          });
          rm_cn.touchend(function(){
            $(this).css({'background':'white','color':'rgb(22,23,27)'});  
          });          
          rm_cy.touchstart(function(){
            $(this).css({'background':'rgb(22,23,27)','color':'white'});  
          });
          rm_cy.touchend(function(){
            $(this).css({'background':'rgba(100,100,100,0.1)','color':'rgb(22,23,27)'});  
          });          
          rm_cn.click(function(){
              console.log('rm_cn');
            rm_ca.remove();
            rm_c.remove();  
          });
          rm_cy.click(function(){
              console.log('rm_cy');
            rm_ca.remove();
            rm_c.remove();  
            rm_p(post_id);  
          });  
      });        
    }
}
var e_g_p = function(h_s,post_id){
  loader_eg();
  if($t_main.length!=0){$t_main.hide();}
  if($t_main2.length!=0){$t_main2.hide();}
  if($reply_p.length!=0){$reply_p.hide();}
  if($reply_s.length!=0){$reply_s.hide();}
  if($l_main.length!=0){$l_main.hide();}
  if($c_main.length!=0){$c_main.hide();}
  if($s_main.length!=0){$s_main.hide();}
  if($sc_main.length!=0){$sc_main.hide();}
  if($ep2_main.length!=0){$ep2_main.hide();}   
  $('.l_b2').remove();    
  $e_main.show();
  $('.e_post').remove();
  $('.set').remove();
  cgi=0;    
  if(h_index !=2){
    t_h_index=h_index;      
  }
  if(h_s==1){
    h_arr.unshift({type:'3',post_id:post_id});      
  }
  h_i3=0;    
  h_index=2;      
  var left = $('<img>');
  left.attr('src','img/l_w.png');
  left.css({'position':'absolute','top':'12px','left':'7px','width':'35px','height':'35px','background':'rgba(22,23,27,0.1)'});
  var leftbtn = $('<div></div>');
  leftbtn.css({'position':'absolute','top':'0','left':'0','width':'50px','height':'50px'});    
  left.addClass('l_b2');
  leftbtn.addClass('l_b2');    
 var data= {};
  data.post_id=post_id;    
  $.ajax({
    type: 'POST',
    data: JSON.stringify(data),
    contentType: 'application/json',
    url: url+'/onepost',
    success:function(output){
      if(output.status ==100){
        e_addpost(output.username,output.img1,output.img2,output.img3,output.img4,output.text,1,output.userid,output.post_id,output.created_time,output.pimg,output.ln,output.cn);
      }else{
          //err
      }
      $('.loader_eg').remove();    
    } 
  });
  var element2 = $('#e_header');
  element2.append(left);
  element2.append(leftbtn);
  leftbtn.touchend(function(){
    h_arr.shift();
    h_i3=1;
    $('.set').remove();
    $('.e_post').remove();
    $('.loader_eg').remove();
    $('.l_b2').remove();  
    if(h_arr.length>0){
      var type = h_arr[0].type;
      if(type==1){
        if(h_i1==0){
          $e_main.hide();    
          $t_main.show();
          tpi=2;    
        }else{
          t_g_pf1(-1,h_arr[0].id);
          h_i1=0;
        }
      }else if(type==2){
        if(h_i2==0){
          $e_main.hide();
          $reply_p.show();    
        }else{
          r_p_g(-1,h_arr[0].post_id);    
        } 
      }else if(type ==3){
          e_g_p(-1,h_arr[0].post_id);
          h_i3=0;
      }else if(type==4){
        if(h_i4==0){
          $e_main.hide();
          $reply_s.show();    
        }else{
          r_s_g(-1,h_arr[0].post_id,h_arr[0].comment_id);    
        }  
      }else if(type==5){
        if(h_i5==0){
          $e_main.hide();
          $l_main.show();   
        }else{
          l_g(-1,h_arr[0].post_id);    
        }  
      }else if(type==6){
        if(h_i6==0){
          $c_main_c.css({'height':(w_h-125)+'px'});    
          $e_main.hide();
          $c_main.show();
          cgi=1;    
        }else{
        //  $('#t_main').hide();
          c_g(-1,h_arr[0].id,h_arr[0].name,h_arr[0].img);    
        }  
      }else if(type==7){
        if(h_i7==0){
          $s_main.show();
          $e_main.hide();    
        }else{
        //  $('#t_main').hide();
          s_g(-1,h_arr[0].id);   
        }
      }else if(type==8){
        if(h_i8==0){
          $sc_main.show();
          $e_main.hide();    
        }else{
          sc_g(-1);   
        }  
      }else if(type==9){
        if(h_i9==0){
          $e_main.hide();
          $t_main2.show();
          tpi=1;  
        }else{
          t_g_pf2(-1,h_arr[0].id); 
          h_i9=0;  
        }  
      }else if(type==11){
        if(h_i11==0){
          $reply_p.show();
          $e_main.hide();    
        }else{
          l_r_p_g(-1,h_arr[0].post_id);
          h_i11=0;   
        }                  
      }else if(type==12){
        if(h_i12==0){
          $reply_s.show();
          $e_main.hide();    
        }else{
          l_r_s_g(-1,h_arr[0].post_id,h_arr[0].t,h_arr[0].nn,h_arr[0].txt,h_arr[0].pnn);
          h_i12=0;   
        }   
      }else if(type==13){
        if(h_i13==0){
          $e_main.hide();
          $ep2_main.show();    
        }else{
          ep2_g_p(-1,h_arr[0].post_id);
          h_i13=0;    
        }  
      }
    }else{       
      h_index=t_h_index;
      $e_main.hide();    
    }  
  });    
};