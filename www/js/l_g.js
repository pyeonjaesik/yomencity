var add_lv = function(id,name,img){
    var div = $('<div></div>');
    div.css({'position':'relative','height':'75px','background':'white','overflow':'hidden'});
    div.addClass('add_lv');
    var id = id;
    var name = name;
    if(img =='1'){
      var img_s = 'img/man.png';
    }else if(img=='2'){
      var img_s = 'img/woman.png';  
    }else{
      var img_s = img;    
    }
    var img_c = $('<div></div>');
    img_c.css({'position':'absolute','top':'7.5px','left':'5px','width':'50','height':'50px','overflow':'hidden','border-radius':'50%','border':'1px solid rgba(100,100,100,0.15)'});
    div.append(img_c);
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
            img_c.css({'border':'0px solid rgb(255,255,255,0)'});
            img_c.append(img);
        });
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
      $('#l_main').hide();    
      t_g_pf(1,id);    
    });    
    $l_area.append(div);
    post_l_scroll_h-=9925;
};
var l_g= function(h_s,post_id){
  k_l=0;
  post_l_scroll_h=200000;
  if($t_main.length!=0){$t_main.hide();}
  if($t_main2.length!=0){$t_main2.hide();}
  if($e_main.length!=0){$e_main.hide();}
  if($reply_p.length!=0){$reply_p.hide();}
  if($reply_s.length!=0){$reply_s.hide();}
  if($c_main.length!=0){$c_main.hide();}
  if($s_main.length!=0){$s_main.hide();}
  if($sc_main.length!=0){$sc_main.hide();}
  if($ep2_main.length!=0){$ep2_main.hide();}   
  var post_id=post_id;
  $('.l_b5').remove();    
  $l_main.show();
  $('.add_lv').remove();
  cgi=0;    
  loader_lv();    
  if(h_index !=2){
    t_h_index=h_index;
  }
  if(h_s==1){
    h_arr.unshift({type:'5',post_id:post_id});      
  }
  h_i5=0;    
  h_index=2;      
  var left = $('<img>');
  left.attr('src','img/l_b.png');
  left.css({'position':'absolute','top':'12px','left':'7px','width':'35px','height':'35px','background':'white'});
  var leftbtn = $('<div></div>');
  leftbtn.css({'position':'absolute','top':'0','left':'0','width':'50px','height':'50px'});    
  left.addClass('l_b5');
  leftbtn.addClass('l_b5');
  var data={};
  data.post_id=post_id;
  var element2 = $('#l_header');
  element2.append(left);
  element2.append(leftbtn);                
  leftbtn.touchend(function(){
    h_arr.shift();
    h_i5=1;
    $('.add_lv').remove();
    $('.l_b5').remove();  
    if(h_arr.length>0){
    var type = h_arr[0].type;            
      if(type==1){
        if(h_i1==0){
          $l_main.hide();    
          $t_main.show();
          tpi=2;    
        }else{
          t_g_pf1(-1,h_arr[0].id);
          h_i1=0;    
        }             
      }else if(type==2){
          if(h_i2==0){
            $l_main.hide();
            $reply_p.show();    
          }else{
            r_p_g(-1,h_arr[0].post_id);    
          }             
      }else if(type==3){
        if(h_i3==0){
          $l_main.hide();
          $e_main.show();
        }else{
          e_g_p(-1,h_arr[0].post_id);
        }             
      }else if(type==4){
        if(h_i4==0){
          $l_main.hide();
          $reply_s.show();
        }else{
          r_s_g(-1,h_arr[0].post_id,h_arr[0].comment_id);
        }             
      }else if(type==5){
          l_g(-1,h_arr[0].post_id);
          h_i5=0;
      }else if(type==6){
        if(h_i6==0){
          $c_main_c.css({'height':(w_h-125)+'px'});    
          $l_main.hide();
          $c_main.show();
          cgi=1;    
        }else{
        //  $('#t_main').hide();
          c_g(-1,h_arr[0].id,h_arr[0].name,h_arr[0].img);    
        }  
      }else if(type==7){
        if(h_i7==0){
          $s_main.show();
          $l_main.hide();    
        }else{
          s_g(-1,h_arr[0].id);   
        }
      }else if(type==8){
        if(h_i8==0){
          $sc_main.show();
          $l_main.hide();    
        }else{
          sc_g(-1);   
        }  
      }else if(type==9){
        if(h_i9==0){
          $l_main.hide();
          $t_main2.show();
          tpi=1;    
        }else{
          t_g_pf2(-1,h_arr[0].id);
          h_i9=0;    
        }  
      }else if(type==11){
        if(h_i11==0){
          $reply_p.show();
          $l_main.hide();    
        }else{
          l_r_p_g(-1,h_arr[0].post_id);
          h_i11=0;   
        }                  
      }else if(type==12){
        if(h_i12==0){
          $reply_s.show();
          $l_main.hide();    
        }else{
          l_r_s_g(-1,h_arr[0].post_id,h_arr[0].t,h_arr[0].nn,h_arr[0].txt,h_arr[0].pnn);
          h_i12=0;   
        }   
      }else if(type==13){
        if(h_i13==0){
          $l_main.hide();
          $ep2_main.show();    
        }else{
          ep2_g_p(-1,h_arr[0].post_id);
          h_i13=0;    
        }  
      }
    }else{       
      h_index=t_h_index;
      $l_main.hide();    
    }  
  });    
  $.ajax({
    type:'POST',
    data: JSON.stringify(data),
    contentType: 'application/json',
    url: url+'/lgid',
    success:function(output){
      if(output.status==100){
          luid = output.userid;
          var data ={};
          data.userid=[];
          for(var i=0;i<20;i++){
            data.userid.push(luid[i]);  
          }
          p_l_cont = parseInt(luid.length/20);
          $.ajax({
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json',
            url: url+'/getf',
            success:function(output){
              p_l_cont_cp=1;
              if(output.status=100){
                for(var k=0;k<20;k++){
                  add_lv(luid[k],output.name[k],output.img[k]);
                } 
              }else{
              }
              $('.loader_lv').remove();    
            }  
          });
      }else if(output.status==101){
          luid = output.userid;
          var u_leng = luid.length;
          var data ={};
          data.userid=[];
          data.userid = luid;
          $.ajax({
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json',
            url: url+'/getf',
            success:function(output){
              p_l_cont_cp=1;
              if(output.status=100){
                for(var k=0;k<u_leng;k++){
                  add_lv(luid[k],output.name[k],output.img[k]);
                } 
              }else{
              }
              $('.loader_lv').remove();    
            }  
          });            
      }else if(output.status==102){
        $('.loader_lv').remove();  
        nopost_l();
      }else{
        $('.loader_lv').remove();  
      }    
    }  
  });    
};