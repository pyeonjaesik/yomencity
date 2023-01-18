$(function(){
    $("#footdiv1").touchend(function(e){
        $('.no_fol').remove();
        if(post1_index == 0){
            visit_f2(window.localStorage['id']);
              if(pi1==1){
                return;  
              }
              pi1=1;
              post1_index =1;
              $('.post1').remove();
              loader1();
                e.preventDefault();
                var data = {};
                data._id = window.localStorage['_id'];
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
                                    $('.loader1').remove();
                                    $('.post1').remove();                                    
                                    if(output.status ==100){
                                        post1_scroll_h = 1000000;
                                        post1_cont_cp =1;
                                        k1 = 0;
                                        tip_f();
                                        for(var i=0;i<20;i++){
                                            addmypost(output.username[i],output.img1[i],output.img2[i],output.img3[i],output.img4[i],output.text[i],5,output.post_id[i],output.created_time[i],output.pimg[i],output.ln[i],output.cn[i],output.userid[i]);
                                        }
                                        //$('#footdiv1').show();
                                       // $('#prevent').hide();
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
                                    $('.loader1').remove();
                                    $('.post1').remove();                                    
                                    if(output.status == 100){
                                        post1_scroll_h = 1000000;
                                        post1_cont_cp =1;
                                        k1 = 0;
                                        tip_f();
                                        for(var i=0;i<pml;i++){
                                             addmypost(output.username[i],output.img1[i],output.img2[i],output.img3[i],output.img4[i],output.text[i],1,output.post_id[i],output.created_time[i],output.pimg[i],output.ln[i],output.cn[i],output.userid[i]);
                                            // 4번째 파라미터에 5를 넣지말 것. 왜냐하면, post_scroll_h가 한번 addpost당 -50000씩 되기 때문이다.
                                        }
                                        //$('#footdiv1').show();
                                       // $('#prevent').hide();
                                    }
                                    pi1=0;
                                }
                            });                                            
                        }else if(output.status == 402){
                            $('.loader1').remove();
                            tip_f();
                            nopost1();
                            post1_index=0;
                            pi1=0;
                        }
                    }
                });
        }else if(post1_index == 1){
            visit_f2(window.localStorage['id']);
            if($("#postarea1").scrollTop()<200){
              if(pi1==1){
                return;  
              }
              pi1=1;                
              $('.post1').remove();
              loader1();
//              $('#prevent').show();
                e.preventDefault();
                var data = {};
                data._id = window.localStorage['_id'];
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
                                    $('.loader1').remove();
                                    $('.post1').remove();                                    
                                    if(output.status ==100){
                                        post1_scroll_h = 1000000;
                                        post1_cont_cp =1;
                                        k1 = 0;
                                        tip_f();
                                        for(var i=0;i<20;i++){
                                            addmypost(output.username[i],output.img1[i],output.img2[i],output.img3[i],output.img4[i],output.text[i],5,output.post_id[i],output.created_time[i],output.pimg[i],output.ln[i],output.cn[i],output.userid[i]);
                                        }
                                    //    $('#prevent').hide();
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
                                    $('.loader1').remove();
                                    $('.post1').remove();                                    
                                    if(output.status == 100){
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
                                    pi1=0;
                                }
                            });                                            
                        }else if(output.status == 402){
                            $('.loader1').remove();
                            tip_f();
                            nopost1();
                            $('#postarea1').scrollTop('0');
                            pi1=0;
                        }
                    }
                });                
            }else{  
            }
            $("#postarea1").scrollTop('0');            
        }else if(post1_index == 2){
            post1_index =1;
            if(no_index==0){
                nopost1();
                $('#postarea1').scrollTop('0');
            }
        }
    });
});