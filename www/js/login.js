var logwai=0;
var login_fuc=function(liv,lpv){
if(logwai!=0){console.log('login block');return;}
    console.log('log');
logwai=1;
$('.add_cr').remove();
$('.add_c1').remove();
$('#add_r_c').remove();    
var liv =liv;
var lpv =lpv;
var ph =ph;    
if(liv.length<1){
    toast_t4('아이디를 입력해 주세요');
    return;
}
if(lpv.length<1){
    toast_t4('비밀번호를 입력해 주세요');
    return;
}    
var data = {};
data.id = liv;
data.password =lpv;
$.ajax({
    type: 'POST',
    data: JSON.stringify(data),
    contentType: 'application/json',
    url: url+'/login',
    success: function(output){
        if(output.status == 1){
            loader1();
            post1_cont_cp =1;
            k1 = 0;            
            window.localStorage['_id'] = output._id;
            window.localStorage['name'] = output.name;
            window.localStorage['id'] = output.id;
            window.localStorage['nn']=output.nn;
            if(output.nn.length==1){$('#Pg2_ndd').text(output.nn[0]);}else{$('#Pg2_ndd').text(output.nn[0]+output.nn[1]);}
            var dcplag=[];
            window.localStorage['dcplag']=JSON.stringify(dcplag);
            var dcpl=[];
            window.localStorage['dcpl']=JSON.stringify(dcpl);
            var dcreco=[];
            window.localStorage['dcreco']=JSON.stringify(dcreco);            
           // p_update(ph,output._id,output.id,output.name);
            p_load(output._id);
            getp_img(output._id);
            visit_upf(output._id);
            $("#Pg5_userid").text(output.id);
            $("#Pg5_profile_username").text(output.id);
            $("#pg5_header_top_profile_id").text(output.name);
            $('#Pg2_n').text(output.nn);
            $("#loginPg").hide();
            $("#loginPg2").hide();
            changePg1();
            post1_index =1;
            var data={};
            data._id=output._id;
            data.li=0;
            $.ajax({
              type:'POST',
              data: JSON.stringify(data),
              contentType: 'application/json',
              url: url+'/lvarr',
              success: function(output){
                  $('.loader_sign').remove();
                if(output.status==100){
                    window.localStorage['login']=1;
                    chtk()
                    lv_arr=output.post_id;
                    lv_arr2=output.lpost_id;
                    mfg=output.mfg;
                    window.localStorage['i1']=output.i1;
                    window.localStorage['i2']=output.i2;
                    window.localStorage['i3']=output.i3;
                    window.localStorage['i4']=output.i4;
                    window.localStorage['i11']=output.i11;
                    window.localStorage['i12']=output.i12;
                    window.localStorage['li']=output.li;
                    if(output.d==1){
                      $("#footimg4").css({'width':'44px','left':(w_w*0.7-22)+'px','bottom':'3.65px'});    
                      $('#footimg4').attr('src','img/4_a.png');    
                    }
                    visit_f2(window.localStorage['id']);
                    vv=output.vv;
                    vd=output.vd;
                    chat_gr();           
                    $.ajax({
                        type: 'POST',
                        data: JSON.stringify(data),
                        contentType: 'application/json',
                        url: url+'/getmypostid',
                        success: function(output){
                            if(output.status == 100){
                                no_index=1;
                                post1_id = output.post_id;
                                post1_cont=parseInt(post1_id.length/20);
                                var data2 ={};
                                data2.post_id =[];
                                for(var i=0;i<20;i++){
                                    data2.post_id[i] = post1_id[i];
                                }
                                $.ajax({
                                    type: 'POST',
                                    data: JSON.stringify(data2),
                                    contentType: 'application/json',
                                    url: url+'/getpost',
                                    success:function(output){
                                        if(output.status ==100){
                                            $('.loader1').remove();
                                            $('.post1').remove();
                                            post1_scroll_h = 1000000;
                                            post1_cont_cp =1;
                                            k1 = 0;
                                            tip_f();
                                            for(var i=0;i<20;i++){
                                                addmypost(output.username[i],output.img1[i],output.img2[i],output.img3[i],output.img4[i],output.text[i],5,output.post_id[i],output.created_time[i],output.pimg[i],output.ln[i],output.cn[i],output.userid[i]);
                                            }
                                        }else if(output.status ==101){

                                        }else if(output.status ==2){
                                        }else{
                                        }
                                    }
                                });
                            }else if(output.status ==101){
                                no_index=1;
                                var data_m={};
                                data_m.post_id = [];
                                data_m.post_id = output.post_id;
                                post1_cont = 0;
                                var pml = output.post_id.length;
                                $.ajax({
                                    type: 'POST',
                                    data: JSON.stringify(data_m),
                                    contentType: 'application/json',
                                    url: url+'/mgetpost',
                                    success: function(output){
                                        if(output.status == 100){
                                            $('.loader1').remove();
                                            $('.post1').remove();
                                            post1_scroll_h = 1000000;
                                            post1_cont_cp =1;
                                            k1 = 0;
                                            tip_f();
                                            for(var i=0;i<pml;i++){
                                                 addmypost(output.username[i],output.img1[i],output.img2[i],output.img3[i],output.img4[i],output.text[i],1,output.post_id[i],output.created_time[i],output.pimg[i],output.ln[i],output.cn[i],output.userid[i]);
                                                // 4번째 파라미터에 5를 넣지말 것. 왜냐하면, post_scroll_h가 한번 addpost당 -50000씩 되기 때문이다.
                                            }
                                       //     $('#prevent').hide();
                                            //$('#footdiv1').show();
                                        }
                                    }
                                });                                            
                            }else if(output.status == 402){
                                $('.loader1').remove();
                                tip_f();
                                nopost1();
                                $('#postarea1').scrollTop('0');
                            }
                        }
                    });                            

                }else{
                }  
              }    
            });                   
        }else if(output.status ==100){
            post1_cont_cp =1;
            k1 = 0;            
            window.localStorage['_id'] = output._id;
            window.localStorage['name'] = output.name;
            window.localStorage['id'] = output.id;
            window.localStorage['nn']=output.nn;
            getp_img(output._id);
            visit_upf(output._id);
            $("#Pg5_userid").text(output.id);
            $("#Pg5_profile_username").text(output.id);
            $("#pg5_header_top_profile_id").text(output.name);
            $('#Pg2_n').text(output.nn);
            var dcplag=[];
            window.localStorage['dcplag']=JSON.stringify(dcplag);
            var dcpl=[];
            window.localStorage['dcpl']=JSON.stringify(dcpl);
            var dcreco=[];
            window.localStorage['dcreco']=JSON.stringify(dcreco);            
            if(output.nn.length==1){$('#Pg2_ndd').text(output.nn[0]);}else{$('#Pg2_ndd').text(output.nn[0]+output.nn[1]);}
    loader_sign();    
      var pp=[];
    var data = {};
    data._id = window.localStorage['_id'];
    data.pb=pp;       
    $.ajax({
        type: 'POST',
        data: JSON.stringify(data),
        contentType: 'application/json',
        url: url+'/pinit',
        success: function(output){    
          if(output.status==100){
            loader1();  
            changePg1();
            post1_index =1;
            var data={};
            data._id=window.localStorage['_id'];
            data.li=0;
            var ph=output.ph;  
            $.ajax({
              type:'POST',
              data: JSON.stringify(data),
              contentType: 'application/json',
              url: url+'/lvarr',
              success: function(output){                  
                  $('.loader_sign').remove();
                if(output.status==100){
                    $("#loginPg").hide();
                    $("#loginPg2").hide();                  
                    p_update(ph,window.localStorage['_id'],window.localStorage['id'],window.localStorage['name']);
                    p_load(window.localStorage['_id']);                    
                    window.localStorage['login']=1;
                    chtk()
                    lv_arr=output.post_id;
                    lv_arr2=output.lpost_id;
                    mfg=output.mfg;
                    window.localStorage['i1']=output.i1;
                    window.localStorage['i2']=output.i2;
                    window.localStorage['i3']=output.i3;
                    window.localStorage['i4']=output.i4;
                    window.localStorage['i11']=output.i11;
                    window.localStorage['i12']=output.i12;
                    window.localStorage['li']=output.li;
                    if(output.d==1){
                      $("#footimg4").css({'width':'44px','left':(w_w*0.7-22)+'px','bottom':'3.65px'});    
                      $('#footimg4').attr('src','img/4_a.png');    
                    }
                    visit_f2(window.localStorage['id']);
                    vv=output.vv;
                    vd=output.vd;
                    chat_gr();                               
                    $.ajax({
                        type: 'POST',
                        data: JSON.stringify(data),
                        contentType: 'application/json',
                        url: url+'/getmypostid',
                        success: function(output){
                            ch_start();
                            if(output.status == 100){
                                no_index=1;
                                post1_id = output.post_id;
                                post1_cont=parseInt(post1_id.length/20);
                                var data2 ={};
                                data2.post_id =[];
                                for(var i=0;i<20;i++){
                                    data2.post_id[i] = post1_id[i];
                                }
                                $.ajax({
                                    type: 'POST',
                                    data: JSON.stringify(data2),
                                    contentType: 'application/json',
                                    url: url+'/getpost',
                                    success:function(output){
                                        if(output.status ==100){
                                            $('.loader1').remove();
                                            $('.post1').remove();
                                            post1_scroll_h = 1000000;
                                            post1_cont_cp =1;
                                            k1 = 0;
                                            tip_f();
                                            for(var i=0;i<20;i++){
                                                addmypost(output.username[i],output.img1[i],output.img2[i],output.img3[i],output.img4[i],output.text[i],5,output.post_id[i],output.created_time[i],output.pimg[i],output.ln[i],output.cn[i],output.userid[i]);
                                            }
                                        }else if(output.status ==101){

                                        }else if(output.status ==2){
                                        }else{
                                        }
                                    }
                                });
                            }else if(output.status ==101){
                                no_index=1;
                                var data_m={};
                                data_m.post_id = [];
                                data_m.post_id = output.post_id;
                                post1_cont = 0;
                                var pml = output.post_id.length;
                                $.ajax({
                                    type: 'POST',
                                    data: JSON.stringify(data_m),
                                    contentType: 'application/json',
                                    url: url+'/mgetpost',
                                    success: function(output){
                                        if(output.status == 100){
                                            $('.loader1').remove();
                                            $('.post1').remove();
                                            post1_scroll_h = 1000000;
                                            post1_cont_cp =1;
                                            k1 = 0;
                                            tip_f();
                                            for(var i=0;i<pml;i++){
                                                 addmypost(output.username[i],output.img1[i],output.img2[i],output.img3[i],output.img4[i],output.text[i],1,output.post_id[i],output.created_time[i],output.pimg[i],output.ln[i],output.cn[i],output.userid[i]);
                                                // 4번째 파라미터에 5를 넣지말 것. 왜냐하면, post_scroll_h가 한번 addpost당 -50000씩 되기 때문이다.
                                            }
                                        }
                                    }
                                });                                            
                            }else if(output.status == 402){
                                $('.loader1').remove();
                                tip_f();
                                nopost1();
                                $('#postarea1').scrollTop('0');
                            }
                        }
                    });                            

                }else{
                }  
              }    
            });              
          }else{
            console.log('p_init failed');  
          }    
        }
    });             
            /////            
        }else if(output.status == 2){
          logwai=0;    
          toast_t4('사용자 정보가 맞지 않습니다.');
        }else{
          logwai=0;    
          toast_t4('서버오류 발생');
        }

    }
});    
}
$(function(){
  $('#loginPg2_okbtn').touchend(function(){
    login_fuc($('#loginPg_id').val(),$('#loginPg_password').val());   
  });
});