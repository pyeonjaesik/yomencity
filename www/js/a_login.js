$(function(){
if(window.localStorage['login']==1){
    $('#Pg5_info').addClass('infoarea');
    $('div').bind('selectstart',function(){return false;});
    $('span').bind('selectstart',function(){return false;});
    $("#parent").css({"width":(w_w)+'px'});
    $("#reply_s_main_h_textarea").css({"width":w_w+10+'px',"max-height":'100px','box-shadow':'0px 0px 0px white'});
    $('#reply_s_main_h_textarea').focus(function(){
        $(this).css({'box-shadow':'0px 0px 0px white'});
        $("#reply_s_space").show();
    });
    $("#reply_p_main_c").css({'height':(w_h-110)+'px'});
    $("#reply_s_main_c").css({'height':(w_h-110)+'px'});
//    $("#protect_checkat").css({'width':(w_w-50)+'px',height:'200px','left':'25px','top':(w_h-200)/2+'px'});
//    $("#protect_checkat_img").css({'left':(w_w-90)/2+'px'});
//    $(".protect2_checkat").css({'width':(w_w-50)+'px',height:'200px','left':'25px','top':(w_h-200)/2+'px'});
//    $(".protect2_checkat_img").css({'left':(w_w-90)/2+'px'}); 
    $(".postarea").css({'height':(w_h-50)+'px','width':(w_w)+'px'});
    $("#postarea5").css({'height':(w_h-120)+'px'});
    $("#Pg5_post_img_c").css({'height':(w_h-60)+'px'});
//            $("#Pg5_post_img_ul").css({'width':(w_w)+'px'});
    $(".Pg5_post_img_li").css({'height':(w_w)+'px'});
    $(".Pg5_post_img_div").css({'height':(w_w-22)+'px','width':(w_w-22)+'px'});
    $(".Pg5_post_img_i").css({'left':(w_w-82)/2+'px','top':(w_w-82)/2+'px'});
    $('#searcharea').css({'width':w_w+'px','height':w_h+'px'});
    $('#search_main').css({'height':(w_h-100)+'px'});
    $('#search_main2').css({'height':(w_h-100)+'px'});
    $('#search_p').css({'width':(w_w-100)+'px','left':'60px'});
    $("#Pg5_ch_profile_c").css({'width':(w_w-70)+'px','height':(w_h-120)+'px'});
    $("#Pg5_ch_profile_img_c").css({'width':(w_w-70)+'px','height':(w_w-70)+'px'});
    $("#Pg5_ch_profile_footer").css({'top':(w_w-20)+'px'});
    $('#Pg5_post2').css({'height':w_h+'px'});
    $('#Pg5_info').css({'height':(w_h-170)+'px','width':w_w+'px'});
    $('#Pg5_setting').hide();
    $('#Pg5_setting_main').css({'height':(w_h-120)+'px'});
    $('#t_postarea').css({'height':(w_h-70)+'px'});
    $('#t_info').css({'height':w_h-120+'px'});
    $('#l_area').css({'height':(w_h-60)+'px'});
    $('#postarea4').css({'height':(w_h-50)+'px','width':w_w+'px'});
    $('#Pg4_header').css({'width':w_w+'px'});
    $('#Pg4_logo').css({'left':(w_w-65)/2+'px'});
    $('#Pg_start_btn').css({'left':(w_w-100)/2+'px'});
    $("#c_main_c").css({'height':(w_h-125)+'px'});
    $("#c_main_h_textarea").css({"width":w_w+10+'px','box-shadow':'0px 0px 0px white'});
    $('#c_main_h_textarea').focus(function(){
        $(this).css({'box-shadow':'0px 0px 0px white'});
        var cst=$('#c_main_c').scrollTop()-1;
        $('#c_main_c').scrollTop('1000000');
        //$("#reply_s_space").show();
    });    
    $('#s_main').css({'width':w_w+'px','height':w_h+'px'});
    $('#s_area').css({'height':(w_h-100)+'px'});
    $('#s_p').css({'width':(w_w-100)+'px','left':'60px'});
    $('#chatarea').css({'width':w_w+'px','height':w_h+'px'});
    $('#chat_main').css({'height':(w_h-100)+'px'});
    $('#chat_main2').css({'height':(w_h-100)+'px'});
    $('#chat_p').css({'width':(w_w-100)+'px','left':'60px'});
    $('#Pg_c_sp').css({'width':(w_w-50)+'px'});
    //$('#e_area').css({'height':(w_h-50)+'px'});    
    loader1();
    //                    post1_scroll_h = 1000000;
      post1_cont_cp =1;
      k1 = 0;            
    getp_img(window.localStorage['_id']);
    $("#Pg5_userid").text(window.localStorage['id']);
    $("#Pg5_profile_username").text(window.localStorage['id']);
    $("#pg5_header_top_profile_id").text(window.localStorage['name']);
    $('#Pg2_n').text(window.localStorage['nn']);
    // check_avail();
    $("#loginPg").hide();
    $("#loginPg2").hide();
    $(".Pg").hide();
    $("#Pg1").show();
    $('#t_main').hide();
    $('#e_main').hide();
    $('#l_main').hide();
    $('#c_main').hide();
    $('#postarea2_2').hide();
    $("#footimg2").attr("src","img/2.png");
    console.log('a_login: 3');
    $("#footimg3").attr("src","img/3.png");
    $("#footimg4").attr("src","img/4.png");
    $("#footimg5").attr("src","img/5.png");
    $("#footimg1").attr("src","img/1_clicked.png");
    var wilnn=window.localStorage['nn'];
    if(wilnn.length==1){$('#Pg2_ndd').text(wilnn[0]);}else{$('#Pg2_ndd').text(wilnn[0]+wilnn[1]);}
    post1_index =1;
   // e.preventDefault(); // <-- 주석 풀면 다음 코드가 진행되지 않는다. (넘어온 e가 없는데 e 를 처리해 주려니 생기는 err로 추정)
    var data = {};
    data._id = window.localStorage['_id'];
    data.li=1;
    //////////////
    $.ajax({
      type:'POST',
      data: JSON.stringify(data),
      contentType: 'application/json',
      url:url+'/lvarr',
      success: function(output){
        if(output.status==100){
            console.log('a_login: 5');
            lv_arr=output.post_id;
            lv_arr2=output.lpost_id;
            mfg=output.mfg;
            window.localStorage['i1']=output.i1;
            window.localStorage['i2']=output.i2;
            window.localStorage['i3']=output.i3;
            window.localStorage['i4']=output.i4;
            window.localStorage['i11']=output.i11;
            window.localStorage['i12']=output.i12;
            if(output.p2al>0){
              $('#Pg2_b_i').attr('src','img/p2a2.png');    
            }
            if(output.d==1){
              $("#footimg4").css({'width':'44px','left':(w_w*0.7-22)+'px','bottom':'3.65px'});    
              $('#footimg4').attr('src','img/4_a.png');    
            }
            visit_f2(window.localStorage['id']);
            vv=output.vv;
            vd=output.vd;
            var li_index=output.li;
            console.log('a_login: 6');
            chat_gr();
            visit_up();
            $.ajax({
                type: 'POST',
                data: JSON.stringify(data),
                contentType: 'application/json',
                url: url+'/getmypostid',
                success: function(output){
                    console.log('a_login: 7');
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
                             //       $('#prevent').hide();
                                   // $('#footdiv1').show();
                                }else if(output.status ==101){

                                }else if(output.status ==2){
                                }else{
                                }
                                p_check2();
            if(li_index!=window.localStorage['li']){
              var lidf=$('<div></div>');
              lidf.css({'position':'fixed','top':'0','left':'0','width':w_w+'px','height':w_h+'px','background':'rgb(22,23,27)'});
              var lidf_s=$('<span></span>');
              lidf_s.css({'position':'absolute','height':'78px','width':w_w+'px','line-height':'26px','color':'white','text-shadow':'0px 0px 0px rgba(255,255,255,0)','font-size':'18px','color':'rgb(100,100,100)','top':(w_h-100)/2+'px','left':'0','text-align':'center'});   
              lidf_s.html('다른 디바이스에서 로그인이 감지되었습니다.</br> 앱을 완전히 <b>삭제후</b> </br>다시 로그인 해주시기 바랍니다.');
              lidf.append(lidf_s);
              $('#parent').append(lidf);                  
            }else{
           //  chtk();     
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
                                   // $('#prevent').hide();
                                  //  $('#footdiv1').show();
                                }
                                p_check2();
            if(li_index!=window.localStorage['li']){
              var lidf=$('<div></div>');
              lidf.css({'position':'fixed','top':'0','left':'0','width':w_w+'px','height':w_h+'px','background':'rgb(22,23,27)'});
              var lidf_s=$('<span></span>');
              lidf_s.css({'position':'absolute','height':'78px','width':w_w+'px','line-height':'26px','color':'white','text-shadow':'0px 0px 0px rgba(255,255,255,0)','font-size':'18px','color':'rgb(100,100,100)','top':(w_h-100)/2+'px','left':'0','text-align':'center'});   
              lidf_s.html('다른 디바이스에서 로그인이 감지되었습니다.</br> 앱을 완전히 <b>삭제후</b> </br>다시 로그인 해주시기 바랍니다.');
              lidf.append(lidf_s);
              $('#parent').append(lidf);                  
            }else{
           //  chtk();     
            }                                
                            }
                        });                                            
                    }else if(output.status == 402){
                        $('.loader1').remove();
                        tip_f();
                        nopost1();
                        var element = $('#postarea1');
                        p_check2();
                    }
                }
            });            
        }else{
          // failed시 처리 해줄것 ex)prevent.hide();
        }      
      }
    });
    ///////////////////           
};    
});