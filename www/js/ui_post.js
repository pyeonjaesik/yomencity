var $postarea1_posting;
var $postarea1_post_img;
$(function(){
  $postarea1_posting=$('#postarea1_posting');
  $postarea1_post_img=$('#postarea1_post_img');    
  $postarea1_posting.css({'width':(w_w-140)+'px'});
  $postarea1_posting.touchstart(function(){
    $postarea1_posting.css({'background':'rgb(22,23,27)','color':'white'});  
  });
  $postarea1_posting.touchend(function(){
    $postarea1_posting.css({'background':'white','color':'rgba(22,23,27,0.8)'});  
    post1_index =2;
    if(p2lp.length!=0){
      post2_index = 2;    
    }
    $("#footimg5").attr("src","img/5_clicked.png");
    $("#footimg5").css({'width':'44px','left':(w_w*0.9-22)+'px','bottom':'4.2px'});
    p4_index=0;
    if(post6_index==1){
      post6_index=2;  
    }
    console.log('pg2a.length:'+pg2a.length);
  if(pg2a.length>0){

    post2_index2=2;  
  }      
    changePg5();
    if(post5_index==0){    
      $('.add_i').remove();
      $('.add_fg').remove();
      $('.add_h').remove();
      $('.s_sp5').remove();    
      loader_p5();
      post5_index =1;
      $('.Pg5_profile_follow').css({'border-bottom':'2px solid white'});
      $('#Pg5_profile_follow1').css({'border-bottom':'2px solid rgb(30,38,49)'});
      var data = {};
      data.userid = window.localStorage['id'];
      $.ajax({
        type: 'POST',
        data: JSON.stringify(data),
        contentType: 'application/json',
        url: url+'/getinfoid',
        success:function(output){
          if(output.status ==100){
            post51_id=output.post_id;
            var pml = post51_id.length;
            post5_cont = parseInt(pml/21);
            var data ={};
            data.post_id =[];
            for(var i=0;i<21;i++){
              data.post_id.push(post51_id[i]);    
            }  
            $.ajax({
              type: 'POST',
              data: JSON.stringify(data),
              contentType: 'application/json',
              url: url+'/getinfoimg',
              success: function(output){
                $('.add_i').remove();
                $('.add_fg').remove();
                $('.add_h').remove();
                $('.s_sp5').remove();
                $('.loader_p5').remove(); 
                if(output.status==100){
                  for(var i=0;i<21;i+=3){
                     addinfo3(output.img[i],output.img[i+1],output.img[i+2],post51_id[i],post51_id[i+1],post51_id[i+2]);
                  }                      
                }else{
                /// output.status가 뭔지에 따라 err상황 처리해줄 것.
                }    
              }  
          });    
          }else if(output.status ==101){
            post51_id=output.post_id;
            var pml = post51_id.length;
            var p3 = pml%3;
            var data = {};
            data.post_id = [];    
            data.post_id = post51_id;
            post5_cont=1;  
            $.ajax({
              type: 'POST',
              data: JSON.stringify(data),
              contentType: 'application/json',
              url: url+'/getinfoimg',
              success: function(output){
                $('.add_i').remove();
                $('.add_fg').remove();
                $('.add_h').remove();
                $('.s_sp5').remove();
                $('.loader_p5').remove();  
                if(output.status==100){
                  var pp = pml-p3;
                  for(var i=0;i<pp;i+=3){
                    addinfo3(output.img[i],output.img[i+1],output.img[i+2],post51_id[i],post51_id[i+1],post51_id[i+2]);    
                  }    
                  if(p3==2){
                    addinfo2(output.img[i],output.img[i+1],post51_id[i],post51_id[i+1]);    
                  }else if(p3 ==1){
                    addinfo1(output.img[i],post51_id[i]);    
                  }
                    
                }else{
                  /// output.status가 뭔지에 따라 err상황 처리해줄 것.
                } 
              }
            });    
          }else if(output.status ==102){             
             $('.loader_p5').remove();  
             nopost5(1);
          }
        }    
      });
        //
    }else if(post5_index==1){
        $('.infoarea').scrollTop('0');
    }else if(post5_index==2){
        post5_index=1;
    }      
    if(n_p_ing==1){
      toast_t3('게시물 업로드 완료후 다시 시도해 주세요.');
      return;    
    }
    $("#foot").hide();
    $("#Pg5_post").show(); 
    imgData=3;
    imgData2=3;
    imgData3=3;
    imgData4=3;
    imgData_arr = [];
    idal=0;
    ch_f=0;
    p1_ne1=0;
    p1_ne2=0;
    p1_ne3=0;
    p1_ne4=0;          
  });
  $postarea1_post_img.touchend(function(){
    post1_index =2;
    if(p2lp.length!=0){
      post2_index = 2;    
    }
    $("#footimg5").attr("src","img/5_clicked.png");
    $("#footimg5").css({'width':'44px','left':(w_w*0.9-22)+'px','bottom':'4.2px'});
    p4_index=0;
    if(post6_index==1){
      post6_index=2;  
    }
    console.log('pg2a.length:'+pg2a.length);
  if(pg2a.length>0){

    post2_index2=2;  
  }      
    changePg5();
    if(post5_index==0){    
      $('.add_i').remove();
      $('.add_fg').remove();
      $('.add_h').remove();
      $('.s_sp5').remove();    
      loader_p5();
      post5_index =1;
      $('.Pg5_profile_follow').css({'border-bottom':'2px solid white'});
      $('#Pg5_profile_follow1').css({'border-bottom':'2px solid rgb(30,38,49)'});
      var data = {};
      data.userid = window.localStorage['id'];
      $.ajax({
        type: 'POST',
        data: JSON.stringify(data),
        contentType: 'application/json',
        url: url+'/getinfoid',
        success:function(output){
          if(output.status ==100){
            post51_id=output.post_id;
            var pml = post51_id.length;
            post5_cont = parseInt(pml/21);
            var data ={};
            data.post_id =[];
            for(var i=0;i<21;i++){
              data.post_id.push(post51_id[i]);    
            }  
            $.ajax({
              type: 'POST',
              data: JSON.stringify(data),
              contentType: 'application/json',
              url: url+'/getinfoimg',
              success: function(output){
                $('.add_i').remove();
                $('.add_fg').remove();
                $('.add_h').remove();
                $('.s_sp5').remove();
                $('.loader_p5').remove(); 
                if(output.status==100){
                  for(var i=0;i<21;i+=3){
                     addinfo3(output.img[i],output.img[i+1],output.img[i+2],post51_id[i],post51_id[i+1],post51_id[i+2]);
                  }                      
                }else{
                /// output.status가 뭔지에 따라 err상황 처리해줄 것.
                }    
              }  
          });    
          }else if(output.status ==101){
            post51_id=output.post_id;
            var pml = post51_id.length;
            var p3 = pml%3;
            var data = {};
            data.post_id = [];    
            data.post_id = post51_id;
            post5_cont=1;  
            $.ajax({
              type: 'POST',
              data: JSON.stringify(data),
              contentType: 'application/json',
              url: url+'/getinfoimg',
              success: function(output){
                $('.add_i').remove();
                $('.add_fg').remove();
                $('.add_h').remove();
                $('.s_sp5').remove();
                $('.loader_p5').remove();  
                if(output.status==100){
                  var pp = pml-p3;
                  for(var i=0;i<pp;i+=3){
                    addinfo3(output.img[i],output.img[i+1],output.img[i+2],post51_id[i],post51_id[i+1],post51_id[i+2]);    
                  }    
                  if(p3==2){
                    addinfo2(output.img[i],output.img[i+1],post51_id[i],post51_id[i+1]);    
                  }else if(p3 ==1){
                    addinfo1(output.img[i],post51_id[i]);    
                  }
                    
                }else{
                  /// output.status가 뭔지에 따라 err상황 처리해줄 것.
                } 
              }
            });    
          }else if(output.status ==102){             
             $('.loader_p5').remove();  
             nopost5(1);
          }
        }    
      });
        //
    }else if(post5_index==1){
        $('.infoarea').scrollTop('0');
    }else if(post5_index==2){
        post5_index=1;
    }      
    $("#foot").hide();
    $("#Pg5_ch_profile").show();
    console.log('Pg5_profile_imgbnt 클릭됨');
    $('.ch_img').remove();
    $('.loader_ch').remove();
    ch_getp_img(window.localStorage['_id']);      
  });    
});