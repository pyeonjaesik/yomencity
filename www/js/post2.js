function getTextLength(str) {
    var len = 0;
    for (var i = 0; i < str.length; i++) {
        if (escape(str.charAt(i)).length == 6) {
            len++;
        }
        len++;
    }
    return len;
}
var pi22=0;
$(function(){    
    $("#footdiv2").touchend(function(e){   
      if(pg2i==0){
        $('.no_fol2').remove();
        if(post2_index ==1){
          if($("#postarea2").scrollTop()>=200){
            $("#postarea2").scrollTop('0');
          }else{
            if(lat!=0){
              if((parseInt(Date.now())-lupt)<550000){
                post2_lp();   
              }else{
                if(lupt==1){
                  geotest_pp();    
                }else{
                  checkAvailability_p();  
                }  
              }    
            }else{
              checkAvailability_p();  
            }  
          }          
        }else if(post2_index ==0){
          if(lat==0){
            checkAvailability_p();  
          }else{
            if((parseInt(Date.now())-lupt)<550000){
              post2_lp();   
            }else{
              if(lupt==1){
                geotest_pp();  
              }else{
                checkAvailability_p();  
              }    
            }              
          }    
          post2_index = 1;
        }else if(post2_index == 2){
          post2_index = 1;
        }          
      }else{
        if(post2_index2==1){
          if($("#postarea2_2").scrollTop()>=200){
            $("#postarea2_2").scrollTop('0');
          }else{      
           post2_2();                  
          }            
        }else if(post2_index2==2){
          post2_index2=1;    
        }  
      }
    });
    $('#Pg2_s').touchstart(function(){
      $(this).css({'font-size':'22px','color':'rgb(22,23,27)'});
      $('#Pg2_s2').css({'font-size':'18px','color':'rgba(22,23,27,0.3)'});
      post2_index = 1;
//      if(no_index2==0){
//        nopost2(glids);
//        $('#postarea2').scrollTop('0');              
//      }        
    });
    $('#Pg2_s').touchend(function(){
      $(this).css({'font-size':'22px','color':'rgb(22,23,27)'});
      $('#Pg2_s2').css({'font-size':'18px','color':'rgba(22,23,27,0.3)'});
      $('#postarea2').show();
      $('#postarea2_2').hide();
      pg2i=0;    
    });
    $('#Pg2_s2').touchstart(function(){
      $(this).css({'font-size':'22px','color':'rgb(22,23,27)'});
      $('#Pg2_s').css({'font-size':'18px','color':'rgba(22,23,27,0.3)'}); 
      post2_index2=1    
    });
    $('#Pg2_s2').touchend(function(){
      $(this).css({'font-size':'22px','color':'rgb(22,23,27)'});
      $('#Pg2_s').css({'font-size':'18px','color':'rgba(22,23,27,0.3)'});
      $('#postarea2_2').show();
      $('#postarea2').hide();
      if(pg2a.length==0){
        post2_2(0,1);  
      }
      pg2i=1;    
    });
    $('#Pg2_nc').touchstart(function(){
      $(this).attr('src','img/set2.png');    
    });
    $('#Pg2_nc').touchend(function(){
      $(this).attr('src','img/set.png');
      ch_nn();
    });
});
var ch_nn_input;
var ch_nn=function(){
  var element=$('#Pg2');
  var div=$('<div>플래그에서만 사용할 가명을 설정합니다.</div>');
  div.css({'position':'fixed','width':w_w+'px','height':'180px','top':'0px','left':'0px','background':'white','border-radius':'20px','box-shadow':'2px 2px 10px rgba(100,100,100,0.3)','color':'rgb(22,23,27)','text-align':'center','font-size':'17px','font-weight':'600','padding-top':'10px'});
  ch_nn_input=$('<input  type="text" id="Pg2_nni" placeholder="가명">');
  ch_nn_input.css({'position':'absolute','width':(w_w-150)+'px','left':'75px','top':'60px','padding':'12px 20px','margin':'8px 0','box-sizing':'border-box','border':'0px solid white','border-bottom':'2px solid rgb(22,23,27)','border-radius':'0%','background':'white','outline':'none','height':'30px','color':'rgb(22,23,27)','text-shadow':'0px 0px 0px rgba(255,255,255,0)'});
  div.append(ch_nn_input);
  c1=$('<div>변경</div>');
  c1.css({'position':'absolute','bottom':'20px','right':'30px','width':'80px','height':'35px','background':'rgb(22,23,27)','color':'white','text-shadow':'0px 0px 0px rgba(22,23,27,0)','font-size':'17px','line-height':'35px','border-radius':'3px'});
  div.append(c1);
  c11=$('<div>변경</div>');
  c11.css({'position':'absolute','bottom':'20px','right':'30px','width':'80px','height':'35px','background':'green','color':'white','text-shadow':'0px 0px 0px rgba(22,23,27,0)','font-size':'17px','line-height':'35px','border-radius':'3px'});
  div.append(c11);
  c11.hide();    
  c2=$('<div>취소</div>');
  c2.css({'position':'absolute','bottom':'20px','right':'120px','width':'80px','height':'35px','color':'rgb(22,23,27)','text-shadow':'0px 0px 0px rgba(255,255,255,0)','font-size':'18px','line-height':'35px'});
  div.append(c2);
  c2.touchstart(function(){
    c2.css({'color':'rgb(116,0,179)'});  
  });
  c2.touchend(function(){
    c2.css({'color':'rgb(22,23,27)'});
    div.remove();  
  });   
  element.append(div);
  var inputs = document.getElementById("Pg2_nni");
  inputs.addEventListener("keyup", function(event) {
    var str=ch_nn_input.val();
    var err = 0;  
    if(getTextLength(str) > 0 && getTextLength(str)<17){
      for (var i=0; i<str.length; i++)  {
        var chk = str.substring(i,i+1); 
        if(!chk.match(/[가-힣]|[a-z]|[A-Z]/)) { 
          err = err + 1; 
        } 
      } 
      if (err > 0) {
        c1.show();                
        c11.hide();
      }else{
        c11.show();
        c1.hide();
      }            
    }else{
      c1.show();                
      c11.hide();
    }
  });
  c1.touchend(function(){
    var str=ch_nn_input.val();
    var err = 0;  
    if(getTextLength(str) > 0 && getTextLength(str)<17){
        for (var i=0; i<str.length; i++)  {
            var chk = str.substring(i,i+1); 
            if(!chk.match(/[가-힣]|[a-z]|[A-Z]/)) { 
              err++; 
            } 
        } 
        if (err > 0) {
            var str2=ch_nn_input.val();
            var err2=0;
            for (var i=0; i<str2.length; i++)  {
              var chk2 = str2.substring(i,i+1);    
                if(chk2.match(/[ㄱ-ㅎ|ㅏ-ㅣ]/)) { 
                  err2++; 
                } 
            }
            if(err2>0) { 
              toast_t5('한글을 제대로 입력 해주세요.') 
            }else{
              toast_t5('한글과 영문만 입력 해주세요.');  
            }               
        }           
    }else if(getTextLength(str)==0){
      toast_t5('플래그에서 사용될 가명을 입력 해주세요.');
    }else{
      toast_t5('플래그에서 사용될 가명이 너무 길어요.');  
    }      
  });    
  c11.touchend(function(){
    var data={};
    data._id=window.localStorage['_id'];
    data.nn=ch_nn_input.val();
    $.ajax({
      type:'POST',
      data: JSON.stringify(data),
      contentType: 'application/json',  
      url:url+'/chnn',
      success:function(output){
        if(output.status==100){
          window.localStorage['nn']=data.nn;
          $('#Pg2_n').text(data.nn);
          if(data.nn.length==1){$('#Pg2_ndd').text(data.nn[0]);}else{$('#Pg2_ndd').text(data.nn[0]+data.nn[1]);}
    post1_index =1;    
          div.remove();    
        }else if(output.status==101){
          toast_t5('이미 사용되고 있는 가명 입니다.')    
        }else if(output.status==102){
          toast_t5(t_fun4((86400000-output.cc))+' 후 다시 시도해 주세요.');   div.remove(); 
        }else{
           console.log(output.status);
          console.log('chnn err');    
        }      
      }  
    });        
  });    
};
var post2_2=function(glid,li){
  if(pi22==1){return;}    
  pi22=1;
  $('.add_al').remove();
  $('.p2_btn').remove();
  loader2_2();
  var data={};
  data.lat=lat;
  data.long=long;    
  data._id=window.localStorage['_id'];    
  $.ajax({
    type:'POST',
    data: JSON.stringify(data),
    contentType:'application/json',
    url: url+'/getlaa',
    success:function(output){
     if(output.status==100){
       $('.loader2_2').remove();      
       $('.add_al').remove();
       $('.toast').remove();     
       var t_pg2a=output.pl;
       t_pg2a.sort(function(a, b) {
         return parseFloat(b.d) - parseFloat(a.d);
       });
       var tpl=t_pg2a.length;     
       pg2a=[];
       var dcpa=JSON.parse(window.localStorage['dcplag']);     
       for(var i=0;i<tpl;i++){
         if(dcpa.indexOf(t_pg2a[i]._id)==-1){
           pg2a.push(t_pg2a[i]);
         }   
       }
       var pll=pg2a.length;     
       p2_cont_cp=1;
       p2_cont=parseInt(pll/30);
       kp2i=0;
       $('.p2_btn').remove();      
       if(pll>40){
         for(var i=0;i<30;i++){
           add_al(pg2a[i]._id,pg2a[i].s,pg2a[i].t,pg2a[i].l,pg2a[i].r,0,pg2a[i].ln,pg2a[i].cn,pg2a[i].nn);   
         }
         p2_btn();                      
       }else if(pll>0){
         for(var i=0;i<pll;i++){
           add_al(pg2a[i]._id,pg2a[i].s,pg2a[i].t,pg2a[i].l,pg2a[i].r,0,pg2a[i].ln,pg2a[i].cn,pg2a[i].nn);   
         }   
       }else{
         nopost_pl();   
       }
       pi22=0;     
     }else{
       $('.loader2_2').remove();
       pi22=0;     
     }   
    } 
  });    
};
var post2_lp = function() {
  if(pi2==1){
    return;  
  }    
  pi2=1;    
  $('.post2').remove();
  loader2();
  var data = {};
  data._id = window.localStorage['_id'];
  data.lat=lat;
  data.long=long;
  $.ajax({
    type: 'POST',
    data: JSON.stringify(data),
    contentType: 'application/json',
    url: url+'/getlpp',
    success: function(output){
      $('.loader2').remove();
      $('.toast').remove();
      $('.post2').remove();
      if(output.status==100){
        var t_p2lp=output.ff;
        var t_p2lp_l=t_p2lp.length;
        p2lp=[];
        var dcpl=JSON.parse(window.localStorage['dcpl']);
        for(var k=0;k<t_p2lp_l;k++){
          function checkf1(em){
            return em.id==t_p2lp[k].id;
          }
          var f_i=mfg.findIndex(checkf1);                            
          if(t_p2lp[k].id!=window.localStorage['id']&&f_i==-1){
            if(dcpl.indexOf(t_p2lp[k].id)==-1){
              p2lp.push(t_p2lp[k]);  
            }  
          }    
        }
        p2lp_l=p2lp.length;
        p2_l=20;
        p2_r=20;  
        post2_cont_cp=1;
        post2_cont=parseInt(p2lp_l/40);
        post2_scroll_h = 400000;  
        k2=0;
        $('.post2').remove();
        if(p2lp_l>40){
          add_lp(40,k2);                             
        }else if(p2lp_l>0){
          add_lp(p2lp_l,k2);                          
        }else{
          nopost2();  
        }          
      }else{
        console.log('getlp error');
        pi2=0;  
      }    
    }
  });
};
var geotest_pp = function(){
  lupt=parseInt(Date.now());
  var data = {};
  data.location=location;
  data._id = window.localStorage['_id'];
  data.lat=lat;
  data.long=long;
  $.ajax({
    type: 'POST',
    data: JSON.stringify(data),
    contentType: 'application/json',
    url: url+'/getlp',
    success: function(output){
      $('.loader2').remove();
      $('.toast').remove();
      $('.post2').remove();
      if(output.status==100){
        var t_p2lp=output.ff;
        var t_p2lp_l=t_p2lp.length;
        p2lp=[];
        var dcpl=JSON.parse(window.localStorage['dcpl']);
        for(var k=0;k<t_p2lp_l;k++){
          function checkf1(em){
            return em.id==t_p2lp[k].id;
          }
          var f_i=mfg.findIndex(checkf1);                            
          if(t_p2lp[k].id!=window.localStorage['id']&&f_i==-1){
            if(dcpl.indexOf(t_p2lp[k].id)==-1){
              p2lp.push(t_p2lp[k]);  
            }  
          }    
        }                                    
        p2lp_l=p2lp.length;
        p2_l=20;
        p2_r=20;  
        post2_cont_cp=1;
        post2_cont=parseInt(p2lp_l/40);
        post2_scroll_h = 400000;  
        k2=0;
        $('.post2').remove();
        if(p2lp_l>40){
          add_lp(40,k2);                             
        }else if(p2lp_l>0){
          add_lp(p2lp_l,k2);                          
        }else{
          nopost2();  
        }
      }else{
        console.log('getlp error');
        pi2=0;  
      }                        
    }
  });
};