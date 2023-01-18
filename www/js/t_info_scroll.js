var k_t=0;
var post_t_cont_cp =1;
$(document).ready(function(){
  $t_info.scroll(function(e){     
    if(info_t_index==0){
      if($t_info.scrollTop()> post_t_scroll_h-w_h+100){  
        if(post_t_cont_cp<post_t_cont){
          post_t_cont_cp++;
          loader_pt();    
          var data ={};
          data.post_id=[];
          for(var i=(21+k_t);i<(42+k_t);i++){
            data.post_id.push(post_t1_id[i]);
          }
          k_t+=21;
          post_t_scroll_h+= 210000;
          e.preventDefault();
          $.ajax({
            type: 'POST',
            data: JSON.stringify(data),
            contentType:'application/json',
            url: url+'/getinfoimg',
            success:function(output){
              if(output.status ==100){
                for(var i=0;i<21;i+=3){
                  t_addinfo3(output.img[i],output.img[i+1],output.img[i+2],post_t1_id[k_t+i],post_t1_id[k_t+i+1],post_t1_id[k_t+i+2]);    
                }                  
              }else{
                //err 상황 처리해 줄 것.
              }
              $('.loader_pt').remove();    
            }  
          });    
        }else if(post_t_cont_cp==post_t_cont){        
          var pil = post_t1_id.length;
          if(pil>21*post_t_cont){
            post_t_cont_cp++;
            loader_pt();  
            var post_t1_plus_arr=[];
            for(var i=21*post_t_cont;i<pil;i++){
              post_t1_plus_arr.push(post_t1_id[i]);    
            }
            var pml = post_t1_plus_arr.length;
            var p3 = pml%3;  
            var datam ={};
            datam.post_id=[];
            datam.post_id= post_t1_plus_arr;
            k_t+=21;
            $.ajax({
              type: 'POST',
              data: JSON.stringify(datam),
              contentType: 'application/json',
              url: url+'/getinfoimg',
              success: function(output){
                if(output.status==100){
                  var pp = pml-p3;
                  for(var i=0;i<pp;i+=3){
                    t_addinfo3(output.img[i],output.img[i+1],output.img[i+2],post_t1_id[k_t+i],post_t1_id[k_t+i+1],post_t1_id[k_t+i+2]);   
                  }
                  if(p3==2){
                    t_addinfo2(output.img[i],output.img[i+1],post_t1_id[k_t+i],post_t1_id[k_t+i+1]);    
                  }else if(p3 ==1){
                    t_addinfo1(output.img[i],post_t1_id[k_t+i]);    
                  }
                    
                }else{
                  /// output.status가 뭔지에 따라 err상황 처리해줄 것.
                } 
                $('.loader_pt').remove();  
              }    
            });  
          }else{
            post_t_cont_cp++;  
          }    
        }else{
        } 
      }      
    }else if(info_t_index==2){        
      if($t_info.scrollTop()>post_t2_scroll_h-w_h){
        if(post_t_cont_cp<post_t_cont){
          post_t_cont_cp++;
          loader_pt();    
          var data={};
          data.userid=[];    
          for(var i=(20+k_t);i<(40+k_t);i++){
            data.userid.push(post_t2_id[i]);  
          }
          k_t+=20;
          post_t2_scroll_h+=200000;
          e.preventDefault();
          $.ajax({
            type: 'POST',
            data: JSON.stringify(data),
            contentType:'application/json',
            url:url+'/getf',
            success:function(output){
              if(output.status=100){
                for(var k=0;k<20;k++){
                  t_add_fg(post_t2_id[k+k_t],output.name[k],output.img[k]);
                } 
              }else{
              }
              $('.loader_pt').remove();    
            }              
          });    
        }else if(post_t_cont_cp==post_t_cont){
          var pil = post_t2_id.length;
          if(pil>20*post_t_cont){
            post_t_cont_cp++;
            loader_pt();  
            var post_t2_plus_arr=[];
            for(var i=20*post_t_cont;i<pil;i++){
              post_t2_plus_arr.push(post_t2_id[i]);    
            }
            k_t+=20;
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
                    t_add_fg(post_t2_id[k+k_t],output.name[k],output.img[k]);
                  } 
                }else{
                }
                $('.loader_pt').remove();  
              }    
            });  
          }else{
            post_t_cont_cp++;
          }   
        }else{
        }      
      }    
    }else if(info_t_index==3){        
      if($t_info.scrollTop()>post_t2_scroll_h-w_h){
        if(post_t_cont_cp<post_t_cont){
          post_t_cont_cp++;
          loader_pt();    
          var data={};
          data.userid=[];    
          for(var i=(20+k_t);i<(40+k_t);i++){
            data.userid.push(post_t2_id[i]);  
          }
          k_t+=20;
          post_t2_scroll_h+=200000;
          e.preventDefault();
          $.ajax({
            type: 'POST',
            data: JSON.stringify(data),
            contentType:'application/json',
            url:url+'/getf',
            success:function(output){
              if(output.status=100){
                for(var k=0;k<20;k++){
                  t_add_fd(post_t2_id[k+k_t],output.name[k],output.img[k]);
                } 
              }else{
                console.log('err');
              }
              $('.loader_pt').remove();    
            }              
          });    
        }else if(post_t_cont_cp==post_t_cont){
          var pil = post_t2_id.length;
          if(pil>20*post_t_cont){
            post_t_cont_cp++;
            loader_pt();  
            var post_t2_plus_arr=[];
            for(var i=20*post_t_cont;i<pil;i++){
              post_t2_plus_arr.push(post_t2_id[i]);    
            }
            k_t+=20;
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
                    t_add_fd(post_t2_id[k+k_t],output.name[k],output.img[k]);
                  } 
                }else{
                }
                $('.loader_pt').remove();  
              }    
            });  
          }else{
            post_t_cont_cp++;
          }   
        }else{
        }      
      }    
    }else if(info_t_index==4){
      if($t_info.scrollTop()>post_t2_scroll_h-w_h){
        if(post_t_cont_cp<post_t_cont){
          post_t_cont_cp++;
          loader_pt();    
          k_t+=20;
          post_t2_scroll_h+=200000;
          var data2={};
          data2.id=[];
          var kt_2=k_t+20;    
          for(var i=k_t;i<kt_2;i++){
           data2.id.push(t_hl_arr[i].id);    
          }
          $.ajax({
            type:'POST',
            data: JSON.stringify(data2),
            contentType:'application/json',
            url: url+'/getpnarr',
            success:function(output){
              var img=output.img;
              var name=output.name;
              for(var i=k_t;i<kt_2;i++){  
                if(t_hl_arr[i].type==1){
                  t_addh1(t_hl_arr[i].id,name[i-k_t],img[i-k_t],t_hl_arr[i].ct);  
                }else if(t_hl_arr[i].type==2){
                  t_addh2(t_hl_arr[i].id,name[i-k_t],img[i-k_t],t_hl_arr[i].post_id,t_hl_arr[i].ct); 
                }else if(t_hl_arr[i].type==3){
                  t_addh3(t_hl_arr[i].id,name[i-k_t],img[i-k_t],t_hl_arr[i].post_id,t_hl_arr[i].comment_id,t_hl_arr[i].ct);  
                }else{
                  t_addh4(t_hl_arr[i].id,name[i-k_t],img[i-k_t],t_hl_arr[i].post_id,t_hl_arr[i].ct);  
                }    
              }
              $('.loader_pt').remove();    
            }    
          });   
        }else if(post_t_cont_cp==post_t_cont){
          post_t_cont_cp++;
          k_t+=20;
          var pil = t_hl_arr.length;
          if(pil>k_t){
             loader_pt();  
              var data2={};
              data2.id=[];
              for(var i=k_t;i<pil;i++){
               data2.id.push(t_hl_arr[i].id);    
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
                    if(t_hl_arr[i+k_t].type==1){
                      t_addh1(t_hl_arr[i+k_t].id,name[i],img[i],t_hl_arr[i+k_t].ct);  
                    }else if(t_hl_arr[i+k_t].type==2){
                      t_addh2(t_hl_arr[i+k_t].id,name[i],img[i],t_hl_arr[i+k_t].post_id,t_hl_arr[i+k_t].ct); 
                    }else if(t_hl_arr[i+k_t].type==3){
                      t_addh3(t_hl_arr[i+k_t].id,name[i],img[i],t_hl_arr[i+k_t].post_id,t_hl_arr[i+k_t].comment_id,t_hl_arr[i+k_t].ct);  
                    }else{
                      t_addh4(t_hl_arr[i+k_t].id,name[i],img[i],t_hl_arr[i+k_t].post_id,t_hl_arr[i+k_t].ct);  
                    }    
                  }
                  $('.loader_pt').remove();    
                }    
              });          
          } 
        }else{
        }      
      }    
    }  
  });    
});