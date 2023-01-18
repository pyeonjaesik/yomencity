var tm_name2;
var tm_img2;
var t_g_pf2 = function(h_s,userid){
  tpi=1; 
  var _id =1;   // 나중에 지울 것
  $('#t_main').hide();    
  $('#e_main').hide();
  $('#reply_p').hide();
  $('#reply_s').hide();
  $('#l_main').hide();
  $('#c_main').hide();
  $('#s_main').hide();
  $('#sc_main').hide();
  $('#ep2_main').hide();    
  $('.s_sp_t2').remove(); // 만들것
  $('.t_msg2').remove();  // 만들 것
  $('.t_p_ib2').remove();    
  loader_pt2();    //만들 것
  var userid=userid;
  pid2=userid;    
  post_t_scroll_h2=210000;
  post_t2_scroll_h2=200000; 
  post_t_cont_cp2=1;
  info_t_index2=0;
  k_t2=0;
  cgi=0;    
  $('.t_add_i2').remove();
  $('.t_add_fg2').remove();
  $('.t_add_h2').remove();
  $('.toast_v').remove();
  $('#t_profile_username2').text('');
  $('#t_header_top_profile_id2').text('');
  $('#t_profile_img2').attr('src','img/unisex.png');    
  $('.l_b12').remove();  
  $('#t_main2').show();
  if(h_index !=2){
    t_h_index=h_index;      
  }
  h_index=2;
  if(h_s==1){
    h_i9=0;
    h_arr.unshift({type:'9',id:userid});      
  }
  console.dir(h_arr);
  $('.t_profile_follow2').css({'border-bottom':'2px solid white',color:'rgb(100,100,100)'});
  $('#t_profile_follow12').css({'border-bottom':'2px solid rgb(30,38,49)','color':'rgb(32,38,49)'});
  
  var left = $('<img>');
  left.attr('src','img/l_b.png');
  left.css({'position':'absolute','top':'12px','left':'7px','width':'35px','height':'35px',});
  var leftbtn = $('<div></div>');
  leftbtn.css({'position':'absolute','top':'0','left':'0','width':'50px','height':'50px'}); 
  left.addClass('l_b12');
  leftbtn.addClass('l_b12');
  $('.flb2').remove();
  var follow = $('<div>팔로우</div>');
  follow.css({'position':'absolute','top':'20px',right:'20px','font-size':'15px','height':'30px','line-hight':'30px','color':'green','text-shadow':'0px 0px 0px rgba(255,255,255,0)','font-weight':'500'});
  follow.addClass('flb2');    
   var following = $('<div>팔로잉</div>');
  following.css({'position':'absolute','top':'20px',right:'20px','font-size':'15px','height':'30px','line-hight':'30px','color':'green','text-shadow':'0px 0px 0px rgba(255,255,255,0)','font-weight':'500'});
  following.addClass('flb2');
  var t_header = $('#t_header2');
  t_header.append(follow); 
  t_header.append(following);
  follow.hide();
  following.hide();    
    var f1 = userid+'f1';
    var f2 = userid+'f2';    
    var _f1 = '.'+f1;
    var _f2 = '.'+f2;
    follow.addClass(f1);
    following.addClass(f2);    
    follow.touchstart(function(){
      $(_f1).hide();
    });
    follow.touchend(function(e){
        toast_t3('팔로우를 시작합니다.');
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
                $(_f2).show();
                mfg.unshift({id:userid,n:tm_name});  
                push1(userid);  
                  //엉뚱한 _id 가 들어와도 서버 꺼지게 안게큼 할것
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
    following.touchstart(function(){
      $(_f2).hide();
           
    });
    following.touchend(function(e){
        toast_t3('팔로우를 취소합니다.');
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
                $(_f1).show();
                function checkf2(em){
                  return em.id==userid;
                }
                var f_i2=mfg.findIndex(checkf2);
                mfg.splice(f_i2,1);                  
              }else{
                console.log('err');
              }
            }
        });
    });    
    visit_f1(userid);
  var data = {};
  data.userid = userid;    
  $.ajax({
    type: 'POST',
    data: JSON.stringify(data),
    contentType: 'application/json',
    url: url+'/userinfo',
    success: function(output){
      if(output.status ==100){
        tm_name2=output.name;
        tm_img2=output.img;
        t_msg2(pid2,tm_name2,tm_img2);  
        $('#t_profile_username2').text(output.id);
        $('#t_header_top_profile_id2').text(output.name);
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
        var t_p_img= $('<div></div>');
       t_p_img.addClass('t_p_ib2');
         t_p_img.css({'position':'absolute','top':'0','left':'60px','width':'60px','height':'60px'});
        $('#t_header2').append(t_p_img);
        t_p_img.touchend(function(){visit_f22(userid,output.img,2);console.log('t_profile_img_cliked');});          
        if(output.img =='1'){
          $('#t_profile_img2').attr('src','img/man0.png');
        }else if(output.img =='2'){
          $('#t_profile_img2').attr('src','img/woman0.png');       
        }else{
          var div = $('#t_profile_img_container2');
          var img = $('#t_profile_img2');
          img.attr('src',output.img);
          img.each(function(){
            img.load(function(){
              var nh = this.naturalHeight;
              var nw = this.naturalWidth;
              var gr = nh/nw;
              var m_w = 50;
                if(gr>=1){
                  img.css({'width':(m_w)+'px','height':(m_w*gr)+'px','top':(-1)*(m_w*gr-m_w)/2+'px','left':'0'});
                }else{
                  img.css({'width':m_w/gr+'px','height':m_w+'px','left':(-1)*(m_w/gr-m_w)/2,'top':'0'});
                }
            
            });
          });            
        } 
      }else{
        console.log('get userinfo failed')
      }    
    } 
  });
  var element2 = $('#t_header2');
  element2.append(left);
  element2.append(leftbtn);
  leftbtn.touchend(function(){          
    console.log('leftbtn touchend');
    h_arr.shift();
      console.dir(h_arr);
    h_i9=1;
    console.dir(h_arr);
     $('.l_b12').remove();
     $('.t_add_i2').remove();
     $('.t_add_fg2').remove();
     $('.t_add_h2').remove();
     $('.s_sp_t2').remove();
     $('.t_msg2').remove();
     $('.toast_v').remove();
     $('.t_p_ib2').remove();  
    if(h_arr.length>0){
      var type = h_arr[0].type;
      if(type==1){  
        if(h_i1==0){
          $('#t_main').show();
          $('#t_main2').hide();
          tpi=2;    
        }else{
          $('#t_main2').hide();    
          t_g_pf1(-1,h_arr[0].id); 
          h_i1=0;    
        } 
      }else if(type==2){
        if(h_i2==0){
          $('#t_main2').hide();
          $('#reply_p').show();    
        }else{
          $('#t_main').hide();
          r_p_g(-1,h_arr[0].post_id);    
        } 
      }else if(type ==3){
        if(h_i3==0){
          $('#t_main2').hide();
          $('#e_main').show();    
        }else{
          $('#t_main').hide();
          e_g_p(-1,h_arr[0].post_id);      
        }  
      }else if(type==4){
        if(h_i4==0){
          $('#t_main2').hide();
          $('#reply_s').show();    
        }else{
         // $('#t_main').hide();
          r_s_g(-1,h_arr[0].post_id,h_arr[0].comment_id);    
        }  
      }else if(type==5){
        if(h_i5==0){
          $('#l_main').show();
          $('#t_main2').hide();    
        }else{
        //  $('#t_main').hide();
          l_g(-1,h_arr[0].post_id);    
        }  
      }else if(type==6){
        if(h_i6==0){
          $('#c_main_c').css({'height':(w_h-125)+'px'});    
          $('#c_main').show();
          $('#t_main2').hide();    
        }else{
        //  $('#t_main').hide();
          c_g(-1,h_arr[0].id,h_arr[0].name,h_arr[0].img);    
        }  
      }else if(type==7){
        if(h_i7==0){
          $('#s_main').show();
          $('#t_main2').hide();    
        }else{
        //  $('#t_main').hide();
          s_g(-1,h_arr[0].id);   
        }
      }else if(type==8){
        if(h_i8==0){
          $('#sc_main').show();
          $('#t_main2').hide();    
        }else{
          sc_g(-1);   
        }  
      }else if(type==9){
        t_g_pf2(-1,h_arr[0].id);
        h_i9=0;  
      }else if(type==11){
        if(h_i11==0){
          $('#reply_p').show();
          $('#t_main2').hide();    
        }else{
          l_r_p_g(-1,h_arr[0].post_id);
          h_i11=0;   
        }                  
      }else if(type==12){
        if(h_i12==0){
          $('#reply_s').show();
          $('#t_main2').hide();    
        }else{
          l_r_s_g(-1,h_arr[0].post_id,h_arr[0].t,h_arr[0].nn,h_arr[0].txt,h_arr[0].pnn);
          h_i12=0;   
        }   
      }else if(type==13){
        if(h_i13==0){
          $('#t_main2').hide();
          $('#ep2_main').show();    
        }else{
          ep2_g_p(-1,h_arr[0].post_id);
          h_i13=0;    
        }  
      }
    }else{        
      h_index=t_h_index;
      $('#t_main2').hide();    
    }  
  });
  $.ajax({
    type: 'POST',
    data: JSON.stringify(data),
    contentType: 'application/json',
    url: url+'/getinfoid',
    success:function(output){
      if(output.status ==100){
          console.log('aaaaaaaaaa');
        post_t1_id2=output.post_id; //선언
        var pml = post_t1_id2.length;
        post_t_cont2 = parseInt(pml/21); //선언
        var data ={};
        data.post_id =[];
        for(var i=0;i<21;i++){
          data.post_id.push(post_t1_id2[i]);    
        }  
        $.ajax({
          type: 'POST',
          data: JSON.stringify(data),
          contentType: 'application/json',
          url: url+'/getinfoimg',
          success: function(output){
            $('.t_add_i2').remove();
            $('.t_add_fg2').remove();
            $('.t_add_h2').remove();
            $('.s_sp_t2').remove(); 
            if(output.status==100){
              for(var i=0;i<21;i+=3){
               console.log('aaa'); t_addinfo32(output.img[i],output.img[i+1],output.img[i+2],post_t1_id2[i],post_t1_id2[i+1],post_t1_id2[i+2]);    
              }
            }else{
            /// output.status가 뭔지에 따라 err상황 처리해줄 것.
            }
            $('.loader_pt2').remove();  
          }  
      });    
      }else if(output.status ==101){
        post_t1_id2=output.post_id;
        var pml = post_t1_id2.length;
        var p3 = pml%3;
        var data = {};
        data.post_id = [];    
        data.post_id = post_t1_id2;
        post_t_cont2=1;  
        $.ajax({
          type: 'POST',
          data: JSON.stringify(data),
          contentType: 'application/json',
          url: url+'/getinfoimg',
          success: function(output){
            $('.t_add_i2').remove();
            $('.t_add_fg2').remove();
            $('.t_add_h2').remove();
            $('.s_sp_t2').remove();  
            if(output.status==100){
              var pp = pml-p3;
              for(var i=0;i<pp;i+=3){
                t_addinfo32(output.img[i],output.img[i+1],output.img[i+2],post_t1_id2[i],post_t1_id2[i+1],post_t1_id2[i+2]);    
              }
              if(p3==2){
                t_addinfo22(output.img[i],output.img[i+1],post_t1_id2[i],post_t1_id2[i+1]);    
              }else if(p3 ==1){
                t_addinfo12(output.img[i],post_t1_id2[i]);    
              }

            }else{
              /// output.status가 뭔지에 따라 err상황 처리해줄 것.
            }
            $('.loader_pt2').remove();  
          }
        });    
      }else if(output.status ==102){  
        nopost_t2(1);
        $('.loader_pt2').remove();  
      }
    }    
  });
    //      
};
    ///////////////////////////////////////////////
$(function(){
  $('#t_profile_follow12').touchend(function(e){
    e.preventDefault();
    $('.t_add_i2').remove();
    $('.t_add_fg2').remove();
    $('.t_add_h2').remove();
    $('.s_sp_t2').remove(); 
    loader_pt2();
    var data = {};
    data.userid = pid2;
    $.ajax({
      type: 'POST',
      data: JSON.stringify(data),
      contentType: 'application/json',
      url: url+'/getinfoid',
      success:function(output){
          post_t_cont_cp2=1; // 선언 x
        if(output.status ==100){
            t_msg2(pid2,tm_name2,tm_img2);
            console.log('Pg5_profile_follow1: status:100');
            post_t1_id2=output.post_id;
            var pml = post_t1_id2.length;
            post_t_cont2 = parseInt(pml/21);
            var data ={};
            data.post_id =[];
            for(var i=0;i<21;i++){
              data.post_id.push(post_t1_id2[i]);    
            }  
            $.ajax({
              type: 'POST',
              data: JSON.stringify(data),
              contentType: 'application/json',
              url: url+'/getinfoimg',
              success: function(output){
                $('.t_add_i2').remove();
                $('.t_add_fg2').remove();
                $('.t_add_h2').remove();
                $('.s_sp_t2').remove();
                if(output.status==100){
                  for(var i=0;i<21;i+=3){
                   console.log('aaa'); t_addinfo32(output.img[i],output.img[i+1],output.img[i+2],post_t1_id2[i],post_t1_id2[i+1],post_t1_id2[i+2]);    
                  }
                }else{
                /// output.status가 뭔지에 따라 err상황 처리해줄 것.
                }
                $('.loader_pt2').remove();  
              }  
          });  
        }else if(output.status ==101){
          t_msg2(pid2,tm_name2,tm_img2);    
          post_t1_id2=output.post_id;
          var pml = post_t1_id2.length;
          var p3 = pml%3;
          var data = {};
          data.post_id = [];    
          data.post_id = post_t1_id2; 
          post_t_cont2=1;    
          $.ajax({
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json',
            url: url+'/getinfoimg',
            success: function(output){
              $('.t_add_i2').remove();
              $('.t_add_fg2').remove();
              $('.t_add_h2').remove();
              $('.s_sp_t2').remove();    
              if(output.status==100){
                var pp = pml-p3;
                t_msg2(pid2,tm_name2,tm_img2);  
                for(var i=0;i<pp;i+=3){
                  t_addinfo32(output.img[i],output.img[i+1],output.img[i+2],post_t1_id2[i],post_t1_id2[i+1],post_t1_id2[i+2]);    
                }
                if(p3==2){
                  t_addinfo22(output.img[i],output.img[i+1],post_t1_id2[i],post_t1_id2[i+1]);    
                }else if(p3 ==1){
                  t_addinfo12(output.img[i],post_t1_id2[i]);    
                }  

              }else{
              /// output.status가 뭔지에 따라 err상황 처리해줄 것.
              }
              $('.loader_pt2').remove();    
            }
          });    
        }else if(output.status ==102){    
          nopost_t2(1);
          $('.loader_pt2').remove();
          t_msg2(pid2,tm_name2,tm_img2);    
        }
      }    
    });      
  });
  $('#t_profile_follow22').touchend(function(e){
    $('.t_add_i2').remove();
    $('.t_add_fg2').remove();
    $('.t_add_h2').remove();
    $('.s_sp_t2').remove();
    $('.t_msg2').remove();  
    loader_pt2();  
    e.preventDefault();
    var data ={};
    data.id = pid2;
    $.ajax({
      type: 'POST',
      data: JSON.stringify(data),
      contentType: 'application/json',
      url: url+'/getfgid',    
      success:function(output){
        if(output.status ==100){
          post_t2_id2 = output.userid; 
          var data ={};
          data.userid=[];    
          for(var w=0;w<20;w++){
            data.userid.push(post_t2_id2[w]);  
          }
          post_t_cont2 = parseInt(post_t2_id2.length/20);
       //   console.log('post_t_cont:'+post_t_cont);
          $.ajax({
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json',
            url: url+'/getf',
            success:function(output){
              $('.t_add_i2').remove();
              $('.t_add_fg2').remove();
              $('.t_add_h2').remove();
              $('.s_sp_t2').remove(); 
              $('.t_msg2').remove();    
              s_sp_t2(pid2,post_t2_id2.length,1);    
              post_t_cont_cp2=1; //선언 안됨.
              if(output.status=100){
                for(var k=0;k<20;k++){
                  t_add_fg2(post_t2_id2[k],output.name[k],output.img[k]);
                } 
              }else{
                console.log('err');
              }
              $('.loader_pt2').remove();    
            }  
          });  
        }else if(output.status ==101){
          post_t2_id2 = output.userid;
          var u_leng = post_t2_id2.length;
          var data ={};
          data.userid = post_t2_id2;
          post_t_cont2=1;    
          $.ajax({
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json',
            url: url+'/getf',
            success:function(output){
              $('.t_add_i2').remove();
              $('.t_add_fg2').remove();
              $('.t_add_h2').remove();
              $('.s_sp_t2').remove();
              $('.t_msg2').remove();    
              s_sp_t2(pid2,post_t2_id2.length,1);    
              post_t_cont_cp2=1;
              if(output.status=100){
                for(var k=0;k<u_leng;k++){
                  t_add_fg2(post_t2_id2[k],output.name[k],output.img[k]);
                } 
              }else{
                console.log('err');
              }
              $('.loader_pt2').remove();    
            }  
          });    
        }else if(output.status ==102){
          nopost_t2(2);
          $('.loader_pt2').remove();
          $('.t_msg2').remove();    
        }else{
          console.log('err');
          $('.t_msg2').remove();    
        }
      }     
    });  
  });
  $('#t_profile_follow32').touchend(function(e){
    $('.t_add_i2').remove();
    $('.t_add_fg2').remove();
    $('.t_add_h2').remove();
    $('.s_sp_t2').remove(); 
    $('.t_msg2').remove();  
    loader_pt2();  
    e.preventDefault();
    var data ={};
    data.id = pid2;
    $.ajax({
      type: 'POST',
      data: JSON.stringify(data),
      contentType: 'application/json',
      url: url+'/getfdid',    
      success:function(output){
        if(output.status ==100){
          post_t2_id2 = output.userid;            
          var data ={};
          data.userid=[];    
          for(var w=0;w<20;w++){
            data.userid.push(post_t2_id2[w]);  
          }
          post_t_cont2 = parseInt(post_t2_id2.length/20);    
          $.ajax({
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json',
            url: url+'/getf',
            success:function(output){
              $('.t_add_i2').remove();
              $('.t_add_fg2').remove();
              $('.t_add_h2').remove();
              $('.s_sp_t2').remove();  
              $('.t_msg2').remove();    
              s_sp_t2(pid2,post_t2_id2.length,2);    
              post_t_cont_cp2=1; //선언 x
              if(output.status=100){
                for(var k=0;k<20;k++){
                  t_add_fd2(post_t2_id2[k],output.name[k],output.img[k]);
                } 
              }else{
                console.log('err');
              }
              $('.loader_pt2').remove();    
            }  
          }); 
        }else if(output.status ==101){
          post_t2_id2 = output.userid;
          var u_leng = post_t2_id2.length;
          var data ={};
          data.userid = post_t2_id2;
          post_t_cont2=1;    
          $.ajax({
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json',
            url: url+'/getf',
            success:function(output){
              $('.t_add_i2').remove();
              $('.t_add_fg2').remove();
              $('.t_add_h2').remove();
              $('.s_sp_t2').remove();
              $('.t_msg2').remove();    
              s_sp_t2(pid2,post_t2_id2.length,2);    
              post_t_cont_cp2=1; //선언 x
              if(output.status=100){
                for(var k=0;k<u_leng;k++){
                  t_add_fd2(post_t2_id2[k],output.name[k],output.img[k]);
                } 
              }else{
                console.log('err');
              } 
              $('.loader_pt2').remove();    
            }  
          });    
        }else if(output.status ==102){
          nopost_t2(3);    
          $('.loader_pt2').remove();    
        }else{
          console.log('err');
          $('.t_msg2').remove();    
        }
      }     
    });  
  });
  $('#t_profile_follow42').touchend(function(e){
    $('.t_add_i2').remove();
    $('.t_add_fg2').remove();
    $('.t_add_h2').remove();
    $('.s_sp_t2').remove();
    $('.t_msg2').remove();  
    loader_pt2();  
    e.preventDefault();
    var data ={};
    data.id =pid2;
    $.ajax({
      type: 'POST',
      data: JSON.stringify(data),
      contentType: 'application/json',
      url: url+'/gethl',    
      success:function(output){
        if(output.status==100){
          t_hl_arr2=output.hl;
          post_t_cont2 = parseInt(t_hl_arr2.length/20);    
          console.dir(t_hl_arr2); 
          var data2={};
          data2.id=[];
          for(var i=0;i<20;i++){
           data2.id[i]=t_hl_arr2[i].id;    
          }
          $.ajax({
            type:'POST',
            data: JSON.stringify(data2),
            contentType:'application/json',
            url: url+'/getpnarr',
            success:function(output){
              post_t_cont_cp2=1;    
              var img=output.img;
              var name=output.name;    
             $('.t_add_i2').remove();
             $('.t_add_fg2').remove();
             $('.t_add_h2').remove();
             $('.s_sp_t2').remove();
             $('.t_msg2').remove();    
              for(var i=0;i<20;i++){  
                  console.log('aaaa');
                if(t_hl_arr2[i].type==1){
                  t_addh12(t_hl_arr2[i].id,name[i],img[i],t_hl_arr2[i].ct);  
                }else if(t_hl_arr2[i].type==2){
                  console.log('type==2');
                  t_addh22(t_hl_arr2[i].id,name[i],img[i],t_hl_arr2[i].post_id,t_hl_arr2[i].ct); 
                }else if(t_hl_arr2[i].type==3){
                  t_addh32(t_hl_arr2[i].id,name[i],img[i],t_hl_arr2[i].post_id,t_hl_arr2[i].comment_id,t_hl_arr2[i].ct);  
                }else{
                  t_addh42(t_hl_arr2[i].id,name[i],img[i],t_hl_arr2[i].post_id,t_hl_arr2[i].ct);  
                }    
              }
              $('.loader_pt2').remove();    
            }    
          });           
        }else if(output.status==101){
          t_hl_arr2=output.hl;
          console.dir(t_hl_arr2);  
          var h_leng=t_hl_arr2.length;  
          var data2={};
          data2.id=[];
          for(var i=0;i<h_leng;i++){
           data2.id[i]=t_hl_arr2[i].id;    
          }
          post_t_cont2=1;
          $.ajax({
            type:'POST',
            data: JSON.stringify(data2),
            contentType:'application/json',
            url: url+'/getpnarr',
            success:function(output){
              post_t_cont_cp2=1;    
              $('.t_add_i2').remove();
              $('.t_add_fg2').remove();
              $('.t_add_h2').remove();
              $('.s_sp_t2').remove();
              $('.t_msg2').remove();    
              var img=output.img;
              var name=output.name;    
              var i_leng=img.length;
              for(var i=0;i<i_leng;i++){  
                  console.log('aaaa');
                if(t_hl_arr2[i].type==1){
                  t_addh12(t_hl_arr2[i].id,name[i],img[i],t_hl_arr2[i].ct);  
                }else if(t_hl_arr2[i].type==2){
                  console.log('type==2');
                  t_addh22(t_hl_arr2[i].id,name[i],img[i],t_hl_arr2[i].post_id,t_hl_arr2[i].ct); 
                }else if(t_hl_arr2[i].type==3){
                  t_addh32(t_hl_arr2[i].id,name[i],img[i],t_hl_arr2[i].post_id,t_hl_arr2[i].comment_id,t_hl_arr2[i].ct);  
                }else{
                  t_addh42(t_hl_arr2[i].id,name[i],img[i],t_hl_arr2[i].post_id,t_hl_arr2[i].ct);
                }    
              } 
              $('.loader_pt2').remove();    
            }    
          });            
        }else if(output.status==102){
          nopost_t2(4);
          $('.loader_pt2').remove();
          $('.t_msg2').remove();    
        }else{
          console.log('getharr err');
          $('.t_msg2').remove();    
        }
      }     
    });  
  });    
});