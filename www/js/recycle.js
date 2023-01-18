var recycle_p1=function(){
  post1_scroll_h = 1000000;  
  $('.post1').remove();
  post1_cont_cp =1;
  k1 = 0;
  loader1();
  if(pi1==1){
    return;  
  }
  pi1=1;
    var data = {};
    data._id = window.localStorage['_id'];
    $.ajax({
        type: 'POST',
        data: JSON.stringify(data),
        contentType: 'application/json',
        url: url+'/getmypostid',
        success: function(output){
            console.dir(output);
            if(output.status == 100){
                no_index=1;
                post1_cont = output.post_cont;
                post1_id = output.post_id;
                console.log(post1_id);
                console.dir(post1_id);
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
                            for(var i=0;i<20;i++){
                                addmypost(output.username[i],output.img1[i],output.img2[i],output.img3[i],output.img4[i],output.text[i],5,output.post_id[i],output.created_time[i],output.pimg[i],output.ln[i],output.cn[i],output.userid[i]);
                            }
                         //   $('#prevent').hide();
                           // $('#footdiv1').show();
                        }else if(output.status ==101){

                        }else if(output.status ==2){
                        }else{
                        }
                        pi1=0;
                    }
                });
            }else if(output.status == 101){
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
                            for(var i=0;i<pml;i++){
                                 addmypost(output.username[i],output.img1[i],output.img2[i],output.img3[i],output.img4[i],output.text[i],1,output.post_id[i],output.created_time[i],output.pimg[i],output.ln[i],output.cn[i],output.userid[i]);
                                // 4번째 파라미터에 5를 넣지말 것. 왜냐하면, post_scroll_h가 한번 addpost당 -50000씩 되기 때문이다.
                            }
                       //     $('#prevent').hide();
                           //$('#footdiv1').show();

                        }
                        pi1=0;
                    }
                });                                            
            }else if(output.status == 402){
              $('.loader1').remove();
              console.log('가져올 게시물 없음.');
              nopost1();
              $('#postarea1').scrollTop('0');
              pi1=0;    
            }else{
              $('.loader1').remove();
              pi1=0;    
            }
        }
    });    
};
$(function(){    
  $('#postarea1_r').touchend(function(){
    recycle_p1();  
  });    
});