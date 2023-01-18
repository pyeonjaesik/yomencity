var k = 0;
var post2_cont_cp = 1; //// 위 변수들은 footdiv3를 누를때마다 위 값으로 초기화 되어야 하므로 ... 나중에 ui.js 에서 이 값에대한 초기화를 꼭 해주자.
var post1_cont_cp = 1;
var k1 = 0;
var k2 = 0;
var post1_n=0;
$(document).ready(function(){
    $postarea2.scroll(function(e){
        if(post2_index ==1){
           if($postarea2.scrollTop()> post2_scroll_h - (2*w_h)){
               if(post2_cont_cp < post2_cont){
                   post2_cont_cp++;
                   loader22(post2_scroll_h);
                   k2+=40;
                   add_lp(40,k2);                  
                   post2_scroll_h += 400000;
               }else if(post2_cont_cp == post2_cont){
                   var p1l = p2lp.length;
                   if(p1l>40*post2_cont){
                       k2+=40;   
                       post2_cont_cp++;
                       loader22(post2_scroll_h);
                       var post2_plus_arr = [];
                       var p21=40*post2_cont;
                       add_lp((p1l-k2),k2);
                   }  
                   post2_cont_cp++;
               }else{
               }
           }
       }
        });
        /////////////////////////////
    $postarea1.scroll(function(e){
        if(post1_index == 1){
           if($postarea1.scrollTop()> post1_scroll_h - 4000){
               if(post1_cont_cp < post1_cont){
                   post1_cont_cp++;
                   loader11();
                   var data1 ={};
                   data1.post_id = [];
                   for(var j= (20+k1); j<(40+k1);j++){
                       
                       data1.post_id.push(post1_id[j]);
                       
                   }
                   k1+=20;
                   post1_scroll_h += 1000000;
                   e.preventDefault();
                   $.ajax({
                       type: 'POST',
                       data: JSON.stringify(data1),
                       contentType: 'application/json',
                       url: url+'/getpost',
                       success:function(output){
                           $('.loader1').remove();
                           if(output.status == 100){
                               for(var i=0;i<20;i++){
                                    addmypost(output.username[i],output.img1[i],output.img2[i],output.img3[i],output.img4[i],output.text[i],5,output.post_id[i],output.created_time[i],output.pimg[i],output.ln[i],output.cn[i],output.userid[i]);
                               }
                           }
                       }
                   });
               }else if(post1_cont_cp == post1_cont){
                   var p1l = post1_id.length;
                   post1_cont_cp++;
                   if(p1l>20*post1_cont){
                    //   post1_cont_cp++;
                       loader11();
                       var post1_plus_arr = [];
                       for(var i=20*post1_cont;i<p1l;i++){
                           post1_plus_arr.push(post1_id[i]);
                       }
                       var datam1={};
                       datam1.post_id =[];
                       datam1.post_id = post1_plus_arr;
                       var pml = post1_plus_arr.length;
                           $.ajax({
                                type: 'POST',
                                data: JSON.stringify(datam1),
                                contentType: 'application/json',
                                url: url+'/mgetpost',
                                success: function(output){
                                    $('.loader1').remove();
                                    if(output.status == 100){
                                        for(var i=0;i<pml;i++){
                             addmypost(output.username[i],output.img1[i],output.img2[i],output.img3[i],output.img4[i],output.text[i],1,output.post_id[i],output.created_time[i],output.pimg[i],output.ln[i],output.cn[i],output.userid[i]);                
                                            
//                                            addmypost(output.username[i],output.img1[i],output.img2[i],output.img3[i],output.img4[i],output.text[i],1,output.post_id[i],output.created_time[i],output.pimg[i],output.ln[i],output.cn[i],output.userid[i]);
                                            // 4번째 파라미터에 5를 넣지말 것. 왜냐하면, post_scroll_h가 한번 addpost당 -50000씩 되기 때문이다.
                                        }
                                    }
                                }
                            }); 
                    }  
                   
               }else{
               }
           }
       }
  });        
        ////////////////////////
    
});