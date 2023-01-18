var ep2_addpost = function(_id,text,time,e_lat,e_long,ln,cn,nn){
    $('.ep2_addpost').remove();
    var div = $("<div></div>");
    var element = $("#ep2_area");
    div.addClass('ep2_addpost');
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
    div.css({"position":'relative',"width":w_w+'px',"min-height":"110px","box-sizing":'border-box',"font-size":"15px",'word-break':'break-all','top':'100px','left':'0','padding-top':'0px','padding-left':'76px','padding-right':'15px','padding-bottom':'50px','margin-bottom':'60px','font-weight':'500','color':'rgb(225,225,225)','text-shadow':'0px 0px 0px rgba(22,23,27,0)'});
    if(nn.length==1){
      var nd=$('<div>'+nn[0]+'</div>');    
    }else{
      var nd=$('<div>'+nn[0]+nn[1]+'</div>');  
    }
    nd.css({'position':'absolute','top':'0','left':'13px','width':'50px','height':'50px','border-radius':'8px','background':'white','line-height':'50px','color':'rgb(22,23,27)','font-size':'18px','text-align':'center','border':'2px solid rgb(22,23,27)','font-weight':'900','box-sizing':'border-box'});
    text=filterXSS(text);
    div.html('<b>'+nn+'</b><br>'+text);
    var ds=$('<span></span>');
    ds.css({'position':'absolute','bottom':'30px','left':'76px','height':'20px','line-height':'20px','font-size':'13px','text-shadow':'0px 0px 0px rgba(255,255,255,0)','color':'rgba(120,120,120)'});
    ds.html(t_m+' '+distance(lat,long,e_lat,e_long));
    div.append(ds);
    div.append(nd);
    var heart1 = $("<span>좋아요 "+ln+"</span>");
    heart1.attr("src","img/love_p.png"); heart1.css({"position":"absolute","bottom":"7px","right":'5px',"width":"90px",'color':'rgb(225,225,225)','text-shadow':'0px 0px 0px rgba(22,23,27,0)','font-size':'15px','text-align':'center','height':'30px','line-height':'30px','border-radius':'4px','font-weight':'800'});
    var heart2 = $("<span>좋아요 "+ln+"</span>");
    heart2.attr("src","img/heart2.png"); heart2.css({"position":"absolute","bottom":"7px","right":'5px',"width":"90px",'color':'orange','text-shadow':'0px 0px 0px rgba(22,23,27,0)','font-size':'15px','text-align':'center','height':'30px','line-height':'30px','border-radius':'4px','font-weight':'800'});
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
    reply.css({"position":"absolute","bottom":"7px","right":'80px',"width":"90px",'color':'rgb(225,225,225)','text-shadow':'0px 0px 0px rgba(22,23,27,0)','font-size':'15px','text-align':'center','height':'30px','line-height':'30px','border-radius':'4px','font-weight':'800'});
    div.append(reply);
    var rpnc=post_id+'rn';
    reply.addClass(rpnc);
    reply.click(function(){
      l_r_p_g(1,post_id,nn);    
    });
    element.append(div);
};
var ep2_g_p = function(h_s,post_id){
  loader_ep2();
  if($t_main.length!=0){$t_main.hide();}
  if($t_main2.length!=0){$t_main2.hide();}
  if($e_main.length!=0){$e_main.hide();}
  if($reply_p.length!=0){$reply_p.hide();}
  if($reply_s.length!=0){$reply_s.hide();}
  if($l_main.length!=0){$l_main.hide();}
  if($c_main.length!=0){$c_main.hide();}
  if($s_main.length!=0){$s_main.hide();}
  if($sc_main.length!=0){$sc_main.hide();}
  $ep2_main.show();
  $('.l_b_ep2').remove();
  $('.ep2_addpost').remove();    
  if(h_index !=2){
    t_h_index=h_index;      
  }
  if(h_s==1){
    h_arr.unshift({type:'13',post_id:post_id});      
  }
  h_i13=0;    
  h_index=2;      
  var left = $('<img>');
  left.attr('src','img/l_w.png');
  left.css({'position':'absolute','top':'12px','left':'7px','width':'35px','height':'35px','background':'rgba(22,23,27,0.1)'});
  var leftbtn = $('<div></div>');
  leftbtn.css({'position':'absolute','top':'0','left':'0','width':'50px','height':'50px'});    
  left.addClass('l_b_ep2');
  leftbtn.addClass('l_b_ep2');    
  var data= {};
  data.post_id=post_id;    
  $.ajax({
    type: 'POST',
    data: JSON.stringify(data),
    contentType: 'application/json',
    url: url+'/oneplag',
    success:function(output){
      if(output.status ==100){
          //_id,text,time,e_lat,e_long,ln,cn,nn
          ep2_addpost(output.p._id,output.p.s,output.p.t,output.p.l,output.p.r,output.p.ln,output.p.cn,output.p.nn);;
      }else{
          //err
      }
      $('.loader_ep2').remove();    
    } 
  });
  var element2 = $('#ep2_header');
  element2.append(left);
  element2.append(leftbtn);
  leftbtn.touchend(function(){
    h_arr.shift();
    h_i13=1;
    $('.ep2_addpost').remove();
    $('.l_b_ep2').remove();  
    if(h_arr.length>0){
      var type = h_arr[0].type;
      if(type==1){
        if(h_i1==0){
          $ep2_main.hide();    
          $t_main.show();
          tpi=2;    
        }else{
          t_g_pf1(-1,h_arr[0].id);
          h_i1=0;
        }
      }else if(type==2){
        if(h_i2==0){
          $ep2_main.hide();
          $reply_p.show();    
        }else{
          r_p_g(-1,h_arr[0].post_id);    
        } 
      }else if(type ==3){
        if(h_i3==0){
          $ep2_main.hide();
          $e_main.show();    
        }else{
          e_g_p(-1,h_arr[0].post_id);      
        }
      }else if(type==4){
        if(h_i4==0){
          $ep2_main.hide();
          $reply_s.show();    
        }else{
          r_s_g(-1,h_arr[0].post_id,h_arr[0].comment_id);    
        }  
      }else if(type==5){
        if(h_i5==0){
          $ep2_main.hide();
          $l_main.show();   
        }else{
          l_g(-1,h_arr[0].post_id);    
        }  
      }else if(type==6){
        if(h_i6==0){
          $c_main_c.css({'height':(w_h-125)+'px'});    
          $ep2_main.hide();
          $c_main.show();
          cgi=1;    
        }else{
          c_g(-1,h_arr[0].id,h_arr[0].name,h_arr[0].img);    
        }  
      }else if(type==7){
        if(h_i7==0){
          $s_main.show();
          $ep2_main.hide();    
        }else{
          s_g(-1,h_arr[0].id);   
        }
      }else if(type==8){
        if(h_i8==0){
          $sc_main.show();
          $ep2_main.hide();    
        }else{
          sc_g(-1);   
        }  
      }else if(type==9){
        if(h_i9==0){
          $ep2_main.hide();
          $t_main2.show();
          tpi=1;  
        }else{
          t_g_pf2(-1,h_arr[0].id); 
          h_i9=0;  
        }  
      }else if(type==11){
        if(h_i11==0){
          $reply_p.show();
          $ep2_main.hide();    
        }else{
          l_r_p_g(-1,h_arr[0].post_id);
          h_i11=0;   
        }                  
      }else if(type==12){
        if(h_i12==0){
          $reply_s.show();
          $ep2_main.hide();    
        }else{
          l_r_s_g(-1,h_arr[0].post_id,h_arr[0].t,h_arr[0].nn,h_arr[0].txt,h_arr[0].pnn);
          h_i12=0;   
        }   
      }else if(type==13){
        ep2_g_p(-1,h_arr[0].post_id);
        h_i13=0;  
      }
    }else{       
      h_index=t_h_index;
      $ep2_main.hide();    
    }  
  });    
};