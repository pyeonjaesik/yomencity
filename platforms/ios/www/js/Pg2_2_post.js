$(function(){
    // pg2_2_check();
    var maxLimit=280;
  var Pg2_write=$('#Pg2_write');   
  var input = document.getElementById("Pg2_write");
    input.addEventListener("keyup", function(event) {
      event.preventDefault();
    var lc = this.value.length;              
    if (lc > maxLimit) {
        this.value = this.value.substring(0, maxLimit);
        var cl = maxLimit - lc + 1;
    }else {                   
      var cl = maxLimit - lc;                
    } 
    if(cl<0){cl=0};    
      $Pg2_t_left.text(cl);    
      var tl=this.value.length*w_w/280;
      if(tl>w_w){tl=w_w};    
      $Pg2_t_count.css({'width':tl+'px'});    
      if (event.keyCode === 13) {
        pg2_2_check();
      }
  });
  var pg2_2_post = function(){
    var str= Pg2_write.val(); 
    if(str.length<5){
      toast_t5('다섯 글자 이상 적어주시기 바랍니다.');   
      Pg2_write.blur();
      return;  
    }
    Pg2_write.blur();  
    Pg2_write.val('');
    $Pg2_t_left.text('280');
    $Pg2_t_count.css({'width':'0'});  
    var data={};
    data._id=window.localStorage['_id'];
    data.lat=lat;
    data.long=long;
    data.text=str;
    data.tk=window.localStorage['tk'];  
    $.ajax({
      type:'POST',
      data:JSON.stringify(data),
      contentType: 'application/json',
      url: url+'/lpost',
      success:function(output){
        if(output.status==100){
          $('.nopost_pl').remove();    
          add_al(output._id,data.text,1,lat,long,1,0,0,window.localStorage['nn']);
          mylhup(output.post_id);
          pg2_index2=0;
        }else if(output.status==102){
          toast_t5('오늘은 더이상 플래그를 남기지 못합니다.');    
        }else if(output.status==999){    
          toast_dc('다수의 사용자로부터 신고를 당하여</br> 당분간 게시물을 올리지 못합니다.')       
        }else{
          toast_t5('서버 오류');
        }  

      }    
    });      
  };
  var pg2_2_check=function(){
    $('.pg2_2_check').remove();  
    var div=$('<div>정말로 플래그를 올리시겠습니까?</div>');
    div.addClass('pg2_2_check');  
    div.css({'position':'fixed','width':(w_w-40)+'px','height':'90px','font-size':'17px','line-height':'22px','color':'rgb(22,23,27)','font-weight':'600','top':'100px','left':'20px','box-shadow':'2px 2px 10px rgb(100,100,100,0.3)','border-radius':'15px','background':'white','padding-top':'20px','text-align':'center'});
    var c1=$('<div>확인</div>');
    c1.css({'position':'absolute','right':'20px','bottom':'10px','width':'80px','height':'35px','line-height':'35px','background':'rgb(22,23,27)','color':'white','text-shadow':'0px 0px 0px rgb(22,23,27,0)','border-radius':'4px'});
    div.append(c1);
    c1.touchstart(function(){
      c1.css({'background':'green'});    
    });
    c1.touchend(function(){
      c1.css({'background':'rgb(22,23,27)'});    
    });
    c1.click(function(){
      div.remove();
      pg2_2_post();        
    });  
    var c2=$('<div>취소</div>');
    c2.css({'position':'absolute','right':'120px','bottom':'10px','width':'80px','height':'35px','line-height':'35px','background':'white','color':'rgb(22,23,27)','text-shadow':'0px 0px 0px rgb(255,255,255,0)'});
    div.append(c1);
    div.append(c2);  
    c2.touchstart(function(){
      c2.css({'color':'rgb(116,0,179)'});    
    });
    c2.touchend(function(){
      c2.css({'color':'rgb(22,23,27)'});        
    });
    c2.click(function(){
      div.remove();
      Pg2_write.blur();        
    });  
    $('#postarea2_2').append(div);  
  };    
}); 