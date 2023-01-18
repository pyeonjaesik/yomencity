var c_g= function(h_s,id,name,img){
  loader_cg();
  $('.c_l').remove();    
  $('.add_c2').remove();
  $('.chs').remove();
  $('.c_main_i_c').remove(); 
  $('.c_main_n').remove();
  $('.c_btn').remove();
  if($t_main.length!=0){$t_main.hide();}
  if($t_main2.length!=0){$t_main2.hide();}
  if($e_main.length!=0){$e_main.hide();}
  if($reply_p.length!=0){$reply_p.hide();}
  if($reply_s.length!=0){$reply_s.hide();}
  if($l_main.length!=0){$l_main.hide();}
  if($s_main.length!=0){$s_main.hide();}
  if($sc_main.length!=0){$sc_main.hide();}
  if($ep2_main.length!=0){$ep2_main.hide();}   
  $('#c_main_c').css({'height':(w_h-125)+'px'});   
  s_i=0;
  s_h=0;
  cgi=1;    
  var id2=filterXSS(id)||'0';
  var _bcs='.'+id2+'bc';
  $(_bcs).remove();    
  send_id=id2;
  var name = filterXSS(name)||'0';    
  var img = img;
  if(img=='1'){
    img='img/man.png';  
  }else if(img=='2'){
    img='img/woman.png';  
  }
  $c_main.show();
  $('#c_main_n').text(name);
  var header = $('#c_main_header'); 
   var div = $('#c_main_i_c');
   var span = $('<span>'+name+'</span>');
   span.addClass('c_main_n');
   span.css({'position':'absolute','text-align':'center','top':'0','left':'120px','line-height':'60px','height':'60px','font-size':'20px','color':'rgb(22,23,27)','font-weight':'800','text-shadow':'0px 0px white'});
   header.append(span);    
   var img_c =$('<div></div>');
   img_c.css({'position':'absolute','top':'5px','left':'60px','width':'50px','height':'50px','overflow':'hidden','border-radius':'50%'});
   img_c.addClass('c_main_i_c');    
   var img2 = $('<img>');
    img2.addClass('c_main_i')
    img2.attr('src',img);
    img2.each(function(){
      img2.load(function(){
        var nh = this.naturalHeight;
        var nw = this.naturalWidth;
        var gr = nh/nw;
        var m_w = 50;
          if(gr>=1){
            img2.css({'position':'absolute','width':(m_w)+'px','height':(m_w*gr)+'px','top':(-1)*(m_w*gr-m_w)/2+'px','left':'0'});
          }else{        
            img2.css({'position':'absolute','width':m_w/gr+'px','height':m_w+'px','left':(-1)*(m_w/gr-m_w)/2,'top':'0'});
          }
        img_c.append(img2);
        header.append(img_c);  
      });
    });
    img2.touchend(function(){t_g_pf(1,id2)});
  if(h_index !=2){
    t_h_index=h_index;      
  }
  if(h_s==1){
    h_arr.unshift({type:6,id:id2,name:name,img:img});      
  }
  h_i6=0;    
  h_index=2;      
  var left = $('<img>');
  left.attr('src','img/l_b.png');
  left.css({'position':'absolute','top':'12px','left':'7px','width':'35px','height':'35px','background':'white'});
  var leftbtn = $('<div></div>');
  leftbtn.css({'position':'absolute','top':'0','left':'0','width':'50px','height':'50px'});    
  left.addClass('c_l');
  leftbtn.addClass('c_l');
  var data={};
  data._id1=window.localStorage['_id'];
  data.id1=window.localStorage['id'];    
  data.id2=id2;    
  $.ajax({
    type:'POST',
    data: JSON.stringify(data),
    contentType: 'application/json',
    url: url+'/cget',
    success:function(output){
      $('.add_c2').remove();
      $('.c_btn').remove();    
      cg_cont_cp=1;
      kcg=0;
      if(output.status==101||output.status==100){
        ci=output.ci;
        c_arr=output.txt;
        var b1=output.b1;  
        var c_leng=c_arr.length;
        var b_i=0;
        cg_cont=1;  
        for(var i=0;i<c_leng;i++){
          if(i<b1){
            b_i=1;
          }else{
            b_i=0;  
          }
          add_c2(c_arr[i],b_i);
          if(i<(c_arr.length-1)){
            var d = new Date(c_arr[i].ct);
            var d2 = new Date(c_arr[i+1].ct);
            var cmc1=c_arr[i].ct-c_arr[i+1].ct;  
            if(d.getDate()!=d2.getDate()||cmc1>86400000){
              add_cn(c_arr[i].ct);    
            }  
          }else{
            add_cn(c_arr[i].ct);          
          }            
        }  
      }else if(output.status==102){
      }else{
        
      } 
      $('#c_main_c').scrollTop('100000');
      $('.loader_cg').remove();    
    }  
  });
  header.append(left);
  header.append(leftbtn);
  leftbtn.touchend(function(){
    $('.loader_cg').remove();
    $('.c_l').remove();    
    $('.add_c2').remove();
    $('.chs').remove();
    $('.c_main_i_c').remove(); 
    $('.c_main_n').remove();
    $('.c_btn').remove();
    cgi=0;  
    if(s_i==1){
//      var _crc='.'+send_id+'cr';
//      $(_crc).remove();
//      add_cr(send_id,name,img,0,0);        
    }  
    send_id='';  
    h_arr.shift();
    h_i6=1; 
    if(h_arr.length>0){
      var type = h_arr[0].type;
      if(type==1){
        if(h_i1==0){
          $c_main.hide();    
          $t_main.show();
          tpi=2;    
        }else{
          t_g_pf1(-1,h_arr[0].id);
          h_i1=0;    
        }
      }else if(type==2){
        if(h_i2==0){
          $c_main.hide();
          $reply_p.show();    
        }else{
          r_p_g(-1,h_arr[0].post_id);    
        } 
      }else if(type ==3){
        if(h_i3==0){
          $c_main.hide();
          $e_main.show();    
        }else{
          e_g_p(-1,h_arr[0].post_id);      
        }       
      }else if(type==4){
        if(h_i4==0){
          $c_main.hide();
          $reply_s.show();    
        }else{
          r_s_g(-1,h_arr[0].post_id,h_arr[0].comment_id);    
        }  
      }else if(type==5){
        if(h_i5==0){
          $c_main.hide();
          $l_main.show();   
        }else{
          l_g(-1,h_arr[0].post_id);    
        }  
      }else if(type==6){
        c_g(-1,h_arr[0].id,h_arr[0].name,h_arr[0].img);
        h_i6=0;  
      }else if(type==7){
        if(h_i7==0){
          $s_main.show();
          $c_main.hide();    
        }else{
        //  $('#t_main').hide();
          s_g(-1,h_arr[0].id);   
        }
      }else if(type==8){
        if(h_i8==0){
          $sc_main.show();
          $c_main.hide();    
        }else{
          sc_g(-1);   
        }  
      }else if(type==9){
        if(h_i9==0){
          $c_main.hide();
          $t_main2.show();
          tpi=1;    
        }else{
          t_g_pf2(-1,h_arr[0].id);
          h_i9=0;    
        }  
      }else if(type==11){
        if(h_i11==0){
          $reply_p.show();
          $c_main.hide();    
        }else{
          l_r_p_g(-1,h_arr[0].post_id);
          h_i11=0;   
        }                  
      }else if(type==12){
        if(h_i12==0){
          $reply_s.show();
          $c_main.hide();    
        }else{
          l_r_s_g(-1,h_arr[0].post_id,h_arr[0].t,h_arr[0].nn,h_arr[0].txt,h_arr[0].pnn);
          h_i12=0;   
        }   
      }else if(type==13){
        if(h_i13==0){
          $c_main.hide();
          $ep2_main.show();    
        }else{
          ep2_g_p(-1,h_arr[0].post_id);
          h_i13=0;    
        }  
      }
    }else{       
      h_index=t_h_index;
      $c_main.hide();    
    }
  });
};