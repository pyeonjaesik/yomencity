var add_fgs = function(id,name,img){
    var div = $('<div></div>');
    div.css({'position':'relative','height':'90px','background':'white','width':'100%','overflow':'hidden'});
    div.addClass('add_fgs');
    var id = id;
    var name = name;
    if(img =='1'){
      var img_s = 'img/man2.png';
    }else if(img=='2'){
       var img_s = 'img/woman2.png'; 
    }else{
      var img_s = img;    
    }
    var img_c = $('<div></div>');
    img_c.css({'position':'absolute','bottom':'3px','left':'0','width':'87px','height':'87px','overflow':'hidden'});
    var img = $('<img>');
    img.attr('src',img_s);
    img.each(function(){
        img.load(function(){
            var nh = this.naturalHeight;
            var nw = this.naturalWidth;
            var gr = nh/nw;
            img.css({'position':'absolute'});
            if(gr>=1){
                img.css({'width':'88px','height':(87*gr)+'px','top':(-1)*(87*gr-87)/2+'px','left':'0'});
            }else{
                img.css({'width':87/gr+'px','height':87+'px','left':(-1)*(87/gr-87)/2,'top':'0'});
            }

        });
        img_c.append(img);
        div.append(img_c);
    });
    var name_c = $('<span></span>');
    name_c.text(name);
    name_c.css({'position':'absolute','top':'16px','left':'120px','font-size':'20px','color':'rgb(30,38,49)','text-align':'left','height':'25px','line-height':'25px','text-shadow':'0px 0px 0px white'});
    div.append(name_c);
    
    var id_c = $('<span></span>');
    id_c.text(id);
    id_c.css({'position':'absolute','top':'46px','left':'130px','font-size':'15px','color':'rgb(40,48,59)','text-align':'left','height':'25px','line-height':'25px'});
    div.append(id_c);    
    var d_c=$('<div></div>');
    d_c.css({'position':'absolute','top':'0','left':'0','height':'90px','width':w_w+'px'});
    div.append(d_c);
    d_c.click(function(){
      t_g_pf(1,id);    
    });    
    $s_area.append(div);
    fs_scroll_h-=9925;
};

var s_g =function(h_s,id,index){
  $('.add_fgs').remove();
  if($t_main.length!=0){$t_main.hide();}
  if($t_main2.length!=0){$t_main2.hide();}
  if($e_main.length!=0){$e_main.hide();}
  if($reply_p.length!=0){$reply_p.hide();}
  if($reply_s.length!=0){$reply_s.hide();}
  if($l_main.length!=0){$l_main.hide();}
  if($c_main.length!=0){$c_main.hide();}
  if($sc_main.length!=0){$sc_main.hide();}
  if($ep2_main.length!=0){$ep2_main.hide();}    
  $('.l_bs').remove();    
  $s_main.show();
  cgi=0;    
  fsid =id;
  f_k='';    
  var id=id;   
  if(h_index !=2){
    t_h_index=h_index;      
  }
  if(h_s==1){
    h_arr.unshift({type:7,id:id});     
  }
  h_i7=0;    
  if(index==1){
    fs_i=0;
    $('#s_1').css({'border-bottom':'2px solid rgb(30,38,49)'});
    $('#s_2').css({'border-bottom':'2px solid white'});
    if(window.localStorage['id']==id){
      $('#s_p').attr('placeholder','팔로잉 검색');     
    }else{
      $('#s_p').attr('placeholder',id+'님의 팔로잉 검색');  
    }
  }else{
    fs_i=1;
    $('#s_2').css({'border-bottom':'2px solid rgb(30,38,49)'});
    $('#s_1').css({'border-bottom':'2px solid white'});
    if(window.localStorage['id']==id){
      $('#s_p').attr('placeholder','팔로워 검색');     
    }else{
      $('#s_p').attr('placeholder',id+'님의 팔로워 검색');  
    }      
  }    
  h_index=2;
  var left = $('<img>');
  left.attr('src','img/x_btn.png');
  left.css({'position':'absolute','top':'12px','right':'10px','width':'25px','height':'25px',});
  var leftbtn = $('<div></div>');
  leftbtn.css({'position':'absolute','top':'0','right':'0','width':'50px','height':'45px'});$('.l_bs').remove(); 
  left.addClass('l_bs');
  leftbtn.addClass('l_bs');
  $('#s_header').append(left);
  $('#s_header').append(leftbtn);    
  leftbtn.touchend(function(){
    h_arr.shift();
    h_i7=1;
    $('.add_fgs').remove();
    $('.l_bs').remove();  
    if(h_arr.length>0){
      var type = h_arr[0].type;
      if(type==1){
        if(h_i1==0){
          $s_main.hide();    
          $t_main.show();
          tpi=2;    
        }else{
          t_g_pf1(-1,h_arr[0].id);
          h_i1=0;    
        }
      }else if(type==2){
        if(h_i2==0){
          $s_main.hide();
          $reply_p.show();    
        }else{
          r_p_g(-1,h_arr[0].post_id);    
        } 
      }else if(type ==3){
        if(h_i3==0){
          $s_main.hide();
          $e_main.show();    
        }else{
          e_g_p(-1,h_arr[0].post_id);      
        }  
      }else if(type==4){
        if(h_i4==0){
          $s_main.hide();
          $reply_s.show();    
        }else{
          r_s_g(-1,h_arr[0].post_id,h_arr[0].comment_id);    
        }  
      }else if(type==5){
        if(h_i5==0){
          $l_main.show();
          $s_main.hide();    
        }else{
          l_g(-1,h_arr[0].post_id);    
        }  
      }else if(type==6){
        if(h_i6==0){
          $c_main_c.css({'height':(w_h-125)+'px'});    
          $c_main.show();
          $s_main.hide();
          cgi=1;    
        }else{
          c_g(-1,h_arr[0].id,h_arr[0].name,h_arr[0].img);    
        }  
      }else if(type==7){
        s_g(-1,h_arr[0].id);
        h_i7=0  
      }else if(type==8){
        if(h_i8==0){
          $sc_main.show();
          $s_main.hide();    
        }else{
          sc_g(-1);   
        }  
      }else if(type==9){
        if(h_i9==0){
          $s_main.hide();
          $t_main2.show();
          tpi=1;    
        }else{
          t_g_pf2(-1,h_arr[0].id);
          h_i9=0;    
        }  
      }else if(type==11){
        if(h_i11==0){
          $reply_p.show();
          $s_main.hide();    
        }else{
          l_r_p_g(-1,h_arr[0].post_id);
          h_i11=0;   
        }                  
      }else if(type==12){
        if(h_i12==0){
          $reply_s.show();
          $s_main.hide();    
        }else{
          l_r_s_g(-1,h_arr[0].post_id,h_arr[0].t,h_arr[0].nn,h_arr[0].txt,h_arr[0].pnn);
          h_i12=0;   
        }   
      }else if(type==13){
        if(h_i13==0){
          $s_main.hide();
          $ep2_main.show();    
        }else{
          ep2_g_p(-1,h_arr[0].post_id);
          h_i13=0;    
        }  
      }
    }else{       
      h_index=t_h_index;
      $s_main.hide();    
    }  
  });
  $('#s_1').touchstart(function(){
      $(this).css({'background':'rgb(40,48,59)','color':'white','text-shadow':'0px 0px rgb(40,48,59)'});
      fs_i=0;
  });    
  $('#s_1').touchend(function(e){
    $(this).css({'border-bottom':'2px solid rgb(30,38,49)','background':'white','color':'rgb(30,38,49)','text-shadow':'0px 0px white'});
    $('#s_2').css({'border-bottom':'2px solid white'});
    if(f_k.length>0){
      fs_f(f_k);  
    }
    if(window.localStorage['id']==id){
      $('#s_p').attr('placeholder','팔로잉 검색');     
    }else{
      $('#s_p').attr('placeholder',id+'님의 팔로잉 검색');  
    }      
  });
  $('#s_2').touchstart(function(){
      $(this).css({'background':'rgb(40,48,59)','color':'white','text-shadow':'0px 0px rgb(40,48,59)'});
      fs_i=1;
  });    
  $('#s_2').touchend(function(e){
    $(this).css({'border-bottom':'2px solid rgb(30,38,49)','background':'white','color':'rgb(30,38,49)','text-shadow':'0px 0px white'});
    $('#s_1').css({'border-bottom':'2px solid white'});
    if(f_k.length>0){
      fs_f(f_k);  
    }
    if(window.localStorage['id']==id){
      $('#s_p').attr('placeholder','팔로워 검색');     
    }else{
      $('#s_p').attr('placeholder',id+'님의 팔로워 검색');  
    }      
  });    
};

$(function(){
var input = document.getElementById("s_p");  
input.addEventListener("keyup", function(event){
  event.preventDefault();
  if (event.keyCode === 13){
    f_k= $('#s_p').val();
    if(f_k.length>0){
        var err=0;  
        for (var i=0; i<f_k.length; i++)  {
            var chk = f_k.substring(i,i+1); 
            if(!chk.match(/[가-힣]|[a-z]|[A-Z]|[0-9]/)) { 
              err = err + 1; 
            } 
        } 
        if (err > 0) {
            var err2=0;
            for (var i=0; i<f_k.length; i++)  {
              var chk2 = f_k.substring(i,i+1);    
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
      fs_f(f_k);  
    }
    $('#s_p').blur();
    $('#s_p').val('');  
  }
});      
});
var fs_f=function(k_word){
    $('.add_fgs').remove();
    loader_s();
    var data={};
    data.id=fsid;
    data.k= k_word;
    if(fs_i==0){
      $.ajax({
        type:'POST',
        data:JSON.stringify(data),
        contentType: 'application/json',
        url: url+'/fgs',
        success:function(output){
          if(output.status==100){
            fs_id = output.id;
            var data ={};
            data.userid =[];
            for(var q=0;q<20;q++){
              data.userid.push(fs_id[q]);    
            }
            $.ajax({
              type: 'POST',
              data: JSON.stringify(data),
              contentType: 'application/json',
              url: url+'/getf',
              success:function(output){
                fs_cont_cp=1;
                kf=0;
                fs_cont=parseInt(fs_id.length/20);
                fs_scroll_h=200000;  
                $('.add_fgs').remove();  
                if(output.status=100){
                  for(var k=0;k<20;k++){
                    add_fgs(fs_id[k],output.name[k],output.img[k]);
                  }
                  $('#s_area').scrollTop('0');    
                }else{
                }
                $('.loader_s').remove();  
              }  
            });                  
          }else if(output.status==101){
            fs_id = output.id;
            var f_leng = fs_id.length;
            var data ={};
            data.userid = fs_id;
            $.ajax({
              type: 'POST',
              data: JSON.stringify(data),
              contentType: 'application/json',
              url: url+'/getf',
              success:function(output){
                fs_cont_cp=1;
                kf=0;
                fs_cont=1;
                fs_scroll_h=200000;  
                $('.add_fgs').remove();  
                if(output.status=100){
                  for(var k=0;k<f_leng;k++){
                    add_fgs(fs_id[k],output.name[k],output.img[k]);
                  }
                  $('#s_area').scrollTop('0');    
                }else{
                }
                $('.loader_s').remove();  
              }  
            });  
          }else if(output.status==102){
            nopost_fgs(f_k,0);
            $('.loader_s').remove();  
          }else{
            toast_t3('서버 오류 발생');  
            $('.loader_s').remove();  
          }
        }  
      });            
    }else if(fs_i==1){
      $.ajax({
        type:'POST',
        data:JSON.stringify(data),
        contentType: 'application/json',
        url: url+'/fds',
        success:function(output){
          if(output.status==100){    
            fs_id = output.id;
            var data ={};
            data.userid = [];                  
            for(var q=0;q<20;q++){
              data.userid.push(fs_id[q]);    
            }    
            $.ajax({
              type: 'POST',
              data: JSON.stringify(data),
              contentType: 'application/json',
              url: url+'/getf',
              success:function(output){
                fs_cont_cp=1;
                kf=0;
                fs_cont=parseInt(fs_id.length/20);
                fs_scroll_h=200000;
                $('.add_fgs').remove();  
                if(output.status=100){
                  for(var k=0;k<20;k++){
                    add_fgs(fs_id[k],output.name[k],output.img[k]);
                  }
                  $('#s_area').scrollTop('0');    
                }else{
                }
                $('.loader_s').remove();  
              }  
            });  
          }else if(output.status==101){
            fs_id = output.id;
            var f_leng = fs_id.length;
            var data ={};
            data.userid = fs_id;
            $.ajax({
              type: 'POST',
              data: JSON.stringify(data),
              contentType: 'application/json',
              url: url+'/getf',
              success:function(output){
                fs_cont_cp=1;
                kf=0;
                fs_cont=1;
                fs_scroll_h=200000;
                $('.add_fgs').remove();  
                if(output.status=100){
                  for(var k=0;k<f_leng;k++){
                    add_fgs(fs_id[k],output.name[k],output.img[k]);
                  }
                  $('#s_area').scrollTop('0');    
                }else{
                }
                $('.loader_s').remove();  
              }  
            });  
          }else if(output.status==102){
            nopost_fgs(f_k,1);
            $('.loader_s').remove();  
          }else{
            toast_t3('서버 오류 발생.');  
            $('.loader_s').remove();  
          }
        }  
      });            
    }    
};