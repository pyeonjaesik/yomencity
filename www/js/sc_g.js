$(function(){
  $('#Pg_c_sp').touchend(function(){
    sc_g(1);  
  });    
});
var sc_g=function(h_s){
  if($t_main.length!=0){$t_main.hide();}
  if($t_main2.length!=0){$t_main2.hide();}
  if($e_main.length!=0){$e_main.hide();}
  if($reply_p.length!=0){$reply_p.hide();}
  if($reply_s.length!=0){$reply_s.hide();}
  if($l_main.length!=0){$l_main.hide();}
  if($c_main.length!=0){$c_main.hide();}
  if($s_main.length!=0){$s_main.hide();}
  if($ep2_main.length!=0){$ep2_main.hide();}   
  $('.add_sc').remove();    
  $sc_main.show();
  cgi=0;    
  if(h_index !=2){
    t_h_index=h_index;      
  }
  if(h_s==1){
    h_arr.unshift({type:8});     
  }
  h_i8=0;    
  h_index=2;
  var left = $('<img>');
  left.attr('src','img/x_btn.png');
  left.css({'position':'absolute','top':'12px','right':'10px','width':'25px','height':'25px',});
  var leftbtn = $('<div></div>');
  leftbtn.css({'position':'absolute','top':'0','right':'0','width':'50px','height':'45px'});$('.l_bs').remove(); 
  left.addClass('l_bsc');
  leftbtn.addClass('l_bsc');
  $('.l_bsc').remove();    
  $('#sc_header').append(left);
  $('#sc_header').append(leftbtn);
  leftbtn.touchend(function(){
    h_arr.shift();
    h_i8=1;
    $('.add_sc').remove();
    $('.l_bsc').remove();  
    if(h_arr.length>0){
      var type = h_arr[0].type;
      if(type==1){
        if(h_i1==0){
          $sc_main.hide();    
          $t_main.show();
          tpi=2;    
        }else{
          t_g_pf1(-1,h_arr[0].id);
          h_i1=0;    
        }
      }else if(type==2){
        if(h_i2==0){
          $sc_main.hide();
          $reply_p.show();    
        }else{
          r_p_g(-1,h_arr[0].post_id);    
        } 
      }else if(type ==3){
        if(h_i3==0){
          $sc_main.hide();
          $e_main.show();    
        }else{
          e_g_p(-1,h_arr[0].post_id);      
        }  
      }else if(type==4){
        if(h_i4==0){
          $sc_main.hide();
          $reply_s.show();    
        }else{
          r_s_g(-1,h_arr[0].post_id,h_arr[0].comment_id);    
        }
      }else if(type==5){
        if(h_i5==0){
          $l_main.show();
          $sc_main.hide();    
        }else{
          l_g(-1,h_arr[0].post_id);    
        }  
      }else if(type==6){
        if(h_i6==0){
          $c_main_c.css({'height':(w_h-125)+'px'});    
          $c_main.show();
          $sc_main.hide();
          cgi=1;    
        }else{
          c_g(-1,h_arr[0].id,h_arr[0].name,h_arr[0].img);    
        }  
      }else if(type==7){
        if(h_i7==0){
          $s_main.show();
          $sc_main.hide();    
        }else{
          s_g(-1,h_arr[0].id);   
        }
      }else if(type==8){
          sc_g(-1);
          h_i8=0;
      }else if(type==9){
        if(h_i9==0){
          $sc_main.hide();
          $t_main2.show();
          tpi=1;    
        }else{
          t_g_pf2(-1,h_arr[0].id);
          h_i9=0;    
        }  
      }else if(type==11){
        if(h_i11==0){
          $reply_p.show();
          $sc_main.hide();    
        }else{
          l_r_p_g(-1,h_arr[0].post_id);
          h_i11=0;   
        }                  
      }else if(type==12){
        if(h_i12==0){
          $reply_s.show();
          $sc_main.hide();    
        }else{
          l_r_s_g(-1,h_arr[0].post_id,h_arr[0].t,h_arr[0].nn,h_arr[0].txt,h_arr[0].pnn);
          h_i12=0;   
        }   
      }else if(type==13){
        if(h_i13==0){
          $sc_main.hide();
          $ep2_main.show();    
        }else{
          ep2_g_p(-1,h_arr[0].post_id);
          h_i13=0;    
        }  
      }
    }else{        
      h_index=t_h_index;
      $sc_main.hide();    
    }  
  });    
};
$(function(){
  var input = document.getElementById("sc_p");  
  input.addEventListener("keyup", function(event){
    event.preventDefault();
    if (event.keyCode === 13){
      var str=$('#sc_p').val();
      if(str.length>0){
        var err=0;  
        for (var i=0; i<str.length; i++)  {
            var chk = str.substring(i,i+1); 
            if(!chk.match(/[가-힣]|[a-z]|[A-Z]|[0-9]/)) { 
              err = err + 1; 
            } 
        } 
        if (err > 0) {
            var err2=0;
            for (var i=0; i<str.length; i++)  {
              var chk2 = str.substring(i,i+1);    
                if(chk2.match(/[ㄱ-ㅎ|ㅏ-ㅣ]/)) { 
                  err2++; 
                } 
            }
            if(err2>0) { 
              toast_t5('한글을 제대로 입력 해주세요.');
              return;    
            }else{
              toast_t5('숫자,영문 그리고 한글만 입력해 주세요.');
              return;    
            }
        }          
        sc_f($('#sc_p').val());  
      }        
      $('#sc_p').blur();
      $('#sc_p').val('');    
    }
  });      
});
var add_sc = function(id,name,img){
    var div = $('<div></div>');
    div.css({'position':'relative','height':'75px','background':'white','overflow':'hidden'});
    div.addClass('add_sc');
    var id = id;
    var name = name;
    if(img =='1'){
      var img_s = 'img/man.png';
    }else if(img =='2'){
      var img_s = 'img/woman.png';       
    }else{
      var img_s = img;    
    }
    var img_c = $('<div></div>');
    img_c.css({'position':'absolute','top':'7.5px','left':'5px','width':'50','height':'50px','overflow':'hidden','border-radius':'50%'});
    
    var img = $('<img>');
    img.attr('src',img_s);
    img.each(function(){
        img.load(function(){
            var nh = this.naturalHeight;
            var nw = this.naturalWidth;
            var gr = nh/nw;
            img.css({'position':'absolute'});
            if(gr>=1){
                img.css({'width':'50px','height':(50*gr)+'px','top':(-1)*(50*gr-50)/2+'px','left':'0'});
            }else{
                img.css({'width':50/gr+'px','height':50+'px','left':(-1)*(50/gr-50)/2,'top':'0'});
            }

        });
        img_c.append(img);
        div.append(img_c);
        $sc_area.append(div);
    });
    var name_c = $('<span></span>');
    name_c.text(name);
    name_c.css({'position':'absolute','top':'8px','left':'80px','font-size':'17px','color':'rgb(30,38,49)','text-align':'left','height':'25px','line-height':'25px','text-shadow':'0px 0px 0px white','font-weight':'600'});
    div.append(name_c);
    
    var id_c = $('<span></span>');
    id_c.text(id);
    id_c.css({'position':'absolute','top':'38px','left':'90px','font-size':'12px','color':'rgb(40,48,59)','text-align':'left','height':'25px','line-height':'25px'});
    div.append(id_c);    
    var d_c=$('<div></div>');
    d_c.css({'position':'absolute','top':'0','left':'0','height':'75px','width':w_w+'px'});
    div.append(d_c);
    d_c.click(function(){
      c_g(1,id,name,img_s);    
    });
    sc_scroll_h-=9925;
};
var sc_f=function(k_word){
    loader_sc();
    var data={};
    data.id=window.localStorage['id'];
    data.k= k_word;
    var tkw=k_word;
    $('.add_sc').remove();
    $.ajax({
      type:'POST',
      data:JSON.stringify(data),
      contentType: 'application/json',
      url: url+'/fgs',
      success:function(output){
        if(output.status==100){
          sc_id = output.id;
          var data ={};
          data.userid =[];
          for(var q=0;q<20;q++){
            data.userid.push(sc_id[q]);    
          }
          $.ajax({
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json',
            url: url+'/getf',
            success:function(output){
              sc_cont_cp=1;
              k_sc=0;
              sc_cont=parseInt(sc_id.length/20);
              sc_scroll_h=200000;  
              $('.add_sc').remove();  
              if(output.status=100){
                for(var k=0;k<20;k++){
                  add_sc(sc_id[k],output.name[k],output.img[k]);
                }
                $('#sc_area').scrollTop('0');    
              }else{
              }
              $('.loader_sc').remove();    
            }  
          });                  
        }else if(output.status==101){
          sc_id = output.id;
          var f_leng = sc_id.length;
          var data ={};
          data.userid = sc_id;
          $.ajax({
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json',
            url: url+'/getf',
            success:function(output){
              sc_cont_cp=1;
              k_sc=0;
              sc_cont=1;
              sc_scroll_h=200000;  
              $('.add_sc').remove();  
              if(output.status=100){
                for(var k=0;k<f_leng;k++){
                  add_sc(sc_id[k],output.name[k],output.img[k]);
                }
                $('#sc_area').scrollTop('0');    
              }else{
              }
              $('.loader_sc').remove();    
            }  
          });  
        }else if(output.status==102){
          nopost_sc(tkw);
          $('.loader_sc').remove();    
        }else{
          toast_t3('서버 오류 발생');    
          $('.loader_sc').remove();    
        }
      }  
    });                
};