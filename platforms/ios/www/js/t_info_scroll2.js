$(document).ready(function(){
  $t_info2.scroll(function(e){     
    if(info_t_index2==0){
      if($t_info2.scrollTop()> post_t_scroll_h2-w_h+100){  
        if(post_t_cont_cp2<post_t_cont2){
          post_t_cont_cp2++;
          loader_pt2();    
          var data ={};
          data.post_id=[];
          for(var i=(21+k_t2);i<(42+k_t2);i++){
            data.post_id.push(post_t1_id2[i]);
          }
          k_t2+=21;
          post_t_scroll_h2+= 210000;
          e.preventDefault();
          $.ajax({
            type: 'POST',
            data: JSON.stringify(data),
            contentType:'application/json',
            url: url+'/getinfoimg',
            success:function(output){
              if(output.status ==100){
                for(var i=0;i<21;i+=3){
                  t_addinfo32(output.img[i],output.img[i+1],output.img[i+2],post_t1_id2[k_t2+i],post_t1_id2[k_t2+i+1],post_t1_id2[k_t2+i+2]);    
                }                  
              }else{
                //err 상황 처리해 줄 것.
              }
              $('.loader_pt2').remove();    
            }  
          });    
        }else if(post_t_cont_cp2==post_t_cont2){        
          var pil = post_t1_id2.length;
          if(pil>21*post_t_cont2){
            post_t_cont_cp2++;
            loader_pt2();  
            var post_t1_plus_arr=[];
            for(var i=21*post_t_cont2;i<pil;i++){
              post_t1_plus_arr.push(post_t1_id2[i]);    
            }
            var pml = post_t1_plus_arr.length;
            var p3 = pml%3;  
            var datam ={};
            datam.post_id=[];
            datam.post_id= post_t1_plus_arr;
            k_t2+=21;
            $.ajax({
              type: 'POST',
              data: JSON.stringify(datam),
              contentType: 'application/json',
              url: url+'/getinfoimg',
              success: function(output){
                if(output.status==100){
                  var pp = pml-p3;
                  for(var i=0;i<pp;i+=3){
                    t_addinfo32(output.img[i],output.img[i+1],output.img[i+2],post_t1_id2[k_t2+i],post_t1_id2[k_t2+i+1],post_t1_id2[k_t2+i+2]);   
                  }
                  if(p3==2){
                    t_addinfo22(output.img[i],output.img[i+1],post_t1_id2[k_t2+i],post_t1_id2[k_t2+i+1]);    
                  }else if(p3 ==1){
                    t_addinfo12(output.img[i],post_t1_id2[k_t2+i]);    
                  }
                    
                }else{
                  /// output.status가 뭔지에 따라 err상황 처리해줄 것.
                } 
                $('.loader_pt2').remove();  
              }    
            });  
          }else{
            post_t_cont_cp2++;  
          }    
        }else{
        } 
      }      
    }else if(info_t_index2==2){      
      if($t_info2.scrollTop()>post_t2_scroll_h2-w_h){
        if(post_t_cont_cp2<post_t_cont2){
          post_t_cont_cp2++;
          loader_pt2();    
          var data={};
          data.userid=[];    
          for(var i=(20+k_t2);i<(40+k_t2);i++){
            data.userid.push(post_t2_id2[i]);  
          }
          k_t2+=20;
          post_t2_scroll_h2+=200000;
          e.preventDefault();
          $.ajax({
            type: 'POST',
            data: JSON.stringify(data),
            contentType:'application/json',
            url:url+'/getf',
            success:function(output){
              if(output.status=100){
                for(var k=0;k<20;k++){
                  t_add_fg2(post_t2_id2[k+k_t2],output.name[k],output.img[k]);
                } 
              }else{
              }
              $('.loader_pt2').remove();    
            }              
          });    
        }else if(post_t_cont_cp2==post_t_cont2){
          var pil = post_t2_id2.length;
          if(pil>20*post_t_cont2){
            post_t_cont_cp2++;
            loader_pt2();  
            var post_t2_plus_arr=[];
            for(var i=20*post_t_cont2;i<pil;i++){
              post_t2_plus_arr.push(post_t2_id2[i]);    
            }
            k_t2+=20;
            var pml = post_t2_plus_arr.length;
            var datam={};
            datam.userid=[];
            datam.userid= post_t2_plus_arr;
            $.ajax({
              type: 'POST',
              data: JSON.stringify(datam),
              contentType: 'application/json',
              url:url+'/getf',
              success:function(output){
                if(output.status=100){
                  for(var k=0;k<pml;k++){
                    t_add_fg2(post_t2_id2[k+k_t2],output.name[k],output.img[k]);
                  } 
                }else{
                }
                $('.loader_pt2').remove();  
              }    
            });  
          }else{
            post_t_cont_cp2++;
          }   
        }else{
        }      
      }    
    }else if(info_t_index2==3){        
      if($t_info2.scrollTop()>post_t2_scroll_h2-w_h){
        if(post_t_cont_cp2<post_t_cont2){
          post_t_cont_cp2++;
          loader_pt2();    
          var data={};
          data.userid=[];    
          for(var i=(20+k_t2);i<(40+k_t2);i++){
            data.userid.push(post_t2_id2[i]);  
          }
          k_t2+=20;
          post_t2_scroll_h2+=200000;
          e.preventDefault();
          $.ajax({
            type: 'POST',
            data: JSON.stringify(data),
            contentType:'application/json',
            url:url+'/getf',
            success:function(output){
              if(output.status=100){
                for(var k=0;k<20;k++){
                  t_add_fd2(post_t2_id2[k+k_t2],output.name[k],output.img[k]);
                } 
              }else{
              }
              $('.loader_pt2').remove();    
            }              
          });    
        }else if(post_t_cont_cp2==post_t_cont2){
          var pil = post_t2_id2.length;
          if(pil>20*post_t_cont2){
            post_t_cont_cp2++;
            loader_pt2();  
            var post_t2_plus_arr=[];
            for(var i=20*post_t_cont2;i<pil;i++){
              post_t2_plus_arr.push(post_t2_id2[i]);    
            }
            k_t2+=20;
            var pml = post_t2_plus_arr.length;
            var datam={};
            datam.userid=[];
            datam.userid= post_t2_plus_arr;
            $.ajax({
              type: 'POST',
              data: JSON.stringify(datam),
              contentType: 'application/json',
              url:url+'/getf',
              success:function(output){
                if(output.status=100){
                  for(var k=0;k<pml;k++){
                    t_add_fd2(post_t2_id2[k+k_t2],output.name[k],output.img[k]);
                  } 
                }else{
                }
                $('.loader_pt2').remove();  
              }    
            });  
          }else{
            post_t_cont_cp2++;
          }   
        }else{
        }      
      }    
    }else if(info_t_index2==4){
      if($t_info2.scrollTop()>post_t2_scroll_h2-w_h){
        if(post_t_cont_cp2<post_t_cont2){
          post_t_cont_cp2++;
          loader_pt2();    
          k_t2+=20;
          post_t2_scroll_h2+=200000;
          var data2={};
          data2.id=[];
          var kt_2=k_t2+20;    
          for(var i=k_t2;i<kt_2;i++){
           data2.id.push(t_hl_arr2[i].id);    
          }
          $.ajax({
            type:'POST',
            data: JSON.stringify(data2),
            contentType:'application/json',
            url: url+'/getpnarr',
            success:function(output){
              var img=output.img;
              var name=output.name;
              for(var i=k_t2;i<kt_2;i++){  
                if(t_hl_arr2[i].type==1){
                  t_addh12(t_hl_arr2[i].id,name[i-k_t2],img[i-k_t2],t_hl_arr2[i].ct);  
                }else if(t_hl_arr2[i].type==2){
                  t_addh22(t_hl_arr2[i].id,name[i-k_t2],img[i-k_t2],t_hl_arr2[i].post_id,t_hl_arr2[i].ct); 
                }else if(t_hl_arr2[i].type==3){
                  t_addh32(t_hl_arr2[i].id,name[i-k_t2],img[i-k_t2],t_hl_arr2[i].post_id,t_hl_arr2[i].comment_id,t_hl_arr2[i].ct);  
                }else{
                  t_addh42(t_hl_arr2[i].id,name[i-k_t2],img[i-k_t2],t_hl_arr2[i].post_id,t_hl_arr2[i].ct);  
                }    
              }
              $('.loader_pt2').remove();    
            }    
          });   
        }else if(post_t_cont_cp2==post_t_cont2){
          post_t_cont_cp2++;
          k_t2+=20;
          var pil = t_hl_arr2.length;
          if(pil>k_t2){
             loader_pt2();  
              var data2={};
              data2.id=[];
              for(var i=k_t2;i<pil;i++){
               data2.id.push(t_hl_arr2[i].id);    
              }
              $.ajax({
                type:'POST',
                data: JSON.stringify(data2),
                contentType:'application/json',
                url: url+'/getpnarr',
                success:function(output){          
                  var img=output.img;
                  var name=output.name;    
                  var i_leng=img.length;
                  for(var i=0;i<i_leng;i++){  
                    if(t_hl_arr2[i+k_t2].type==1){
                      t_addh12(t_hl_arr2[i+k_t2].id,name[i],img[i],t_hl_arr2[i+k_t2].ct);  
                    }else if(t_hl_arr2[i+k_t2].type==2){
                      t_addh22(t_hl_arr2[i+k_t2].id,name[i],img[i],t_hl_arr2[i+k_t2].post_id,t_hl_arr2[i+k_t2].ct); 
                    }else if(t_hl_arr2[i+k_t2].type==3){
                      t_addh32(t_hl_arr2[i+k_t2].id,name[i],img[i],t_hl_arr2[i+k_t2].post_id,t_hl_arr2[i+k_t2].comment_id,t_hl_arr2[i+k_t2].ct);  
                    }else{
                      t_addh42(t_hl_arr2[i+k_t2].id,name[i],img[i],t_hl_arr2[i+k_t2].post_id,t_hl_arr2[i+k_t2].ct);  
                    }    
                  }
                  $('.loader_pt2').remove();    
                }    
              });          
          } 
        }else{
        }      
      }    
    }  
  });    
});