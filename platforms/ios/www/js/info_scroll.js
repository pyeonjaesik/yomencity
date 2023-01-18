var k5=0;
var post5_cont_cp =1;
$(document).ready(function(){
  $('#Pg5_info').addClass('infoarea');
  $Pg5_info.scroll(function(e){
    if(info_index==0){
      if($Pg5_info.scrollTop()> post5_scroll_h-w_h+100){  
        if(post5_cont_cp<post5_cont){
          loader_p5();    
          post5_cont_cp++;
          var data ={};
          data.post_id=[];
          for(var i=(21+k5);i<(42+k5);i++){
            data.post_id.push(post51_id[i]);
          }
          k5+=21;
          post5_scroll_h+= 210000;
          e.preventDefault();
          $.ajax({
            type: 'POST',
            data: JSON.stringify(data),
            contentType:'application/json',
            url: url+'/getinfoimg',
            success:function(output){   
              if(output.status ==100){
                for(var i=0;i<21;i+=3){
                  addinfo3(output.img[i],output.img[i+1],output.img[i+2],post51_id[k5+i],post51_id[k5+i+1],post51_id[k5+i+2]);    
                }                  
              }else{
                //err 상황 처리해 줄 것.
              }
              $('.loader_p5').remove();    
            }  
          });    
        }else if(post5_cont_cp==post5_cont){
          post5_cont_cp++;  
          var pil = post51_id.length;
          if(pil>21*post5_cont){
            loader_p5();  
            var post51_plus_arr=[];
            for(var i=21*post5_cont;i<pil;i++){
              post51_plus_arr.push(post51_id[i]);    
            }
            var pml = post51_plus_arr.length;
            var p3 = pml%3;  
            var datam ={};
            datam.post_id=[];
            datam.post_id= post51_plus_arr;
            k5+=21;
            $.ajax({
              type: 'POST',
              data: JSON.stringify(datam),
              contentType: 'application/json',
              url: url+'/getinfoimg',
              success: function(output){  
                if(output.status==100){
                  var pp = pml-p3;
                  for(var i=0;i<pp;i+=3){
                    addinfo3(output.img[i],output.img[i+1],output.img[i+2],post51_id[k5+i],post51_id[k5+i+1],post51_id[k5+i+2]);   
                  }
                  if(p3==2){
                    addinfo2(output.img[i],output.img[i+1],post51_id[k5+i],post51_id[k5+i+1]);    
                  }else if(p3 ==1){
                    addinfo1(output.img[i],post51_id[k5+i]);    
                  }
                    
                }else{
                  /// output.status가 뭔지에 따라 err상황 처리해줄 것.
                }
                $('.loader_p5').remove();  
              }    
            });  
          }  
        }else{
        } 
      }      
    }else if(info_index==2){        
      if($Pg5_info.scrollTop()>post52_scroll_h-w_h){
        if(post5_cont_cp<post5_cont){
          post5_cont_cp++;
          loader_p5();    
          var data={};
          data.userid=[];    
          for(var i=(20+k5);i<(40+k5);i++){
            data.userid.push(post52_id[i]);  
          }
          k5+=20;
          post52_scroll_h+=200000;
          e.preventDefault();
          $.ajax({
            type: 'POST',
            data: JSON.stringify(data),
            contentType:'application/json',
            url:url+'/getf',
            success:function(output){    
              if(output.status=100){
                for(var k=0;k<20;k++){
                  add_fg(post52_id[k+k5],output.name[k],output.img[k]);
                } 
              }else{
              }
              $('.loader_p5').remove();    
            }              
          });    
        }else if(post5_cont_cp==post5_cont){
          post5_cont_cp++;
          var pil = post52_id.length;
          if(pil>20*post5_cont){
            loader_p5();  
            var post52_plus_arr=[];
            for(var i=20*post5_cont;i<pil;i++){
              post52_plus_arr.push(post52_id[i]);    
            }
            k5+=20;
            var pml = post52_plus_arr.length;
            var datam={};
            datam.userid=[];
            datam.userid= post52_plus_arr;
            $.ajax({
              type: 'POST',
              data: JSON.stringify(datam),
              contentType: 'application/json',
              url:url+'/getf',
              success:function(output){  
                if(output.status=100){
                  for(var k=0;k<pml;k++){
                    add_fg(post52_id[k+k5],output.name[k],output.img[k]);
                  } 
                }else{
                }
                $('.loader_p5').remove();  
              }    
            });  
          } 
        }else{
        }      
      }    
    }else if(info_index==3){    
      if($Pg5_info.scrollTop()>post52_scroll_h-w_h){
        if(post5_cont_cp<post5_cont){
          loader_p5();    
          post5_cont_cp++;
          var data={};
          data.userid=[];    
          for(var i=(20+k5);i<(40+k5);i++){
            data.userid.push(post52_id[i]);  
          }
          k5+=20;
          post52_scroll_h+=200000;
          e.preventDefault();
          $.ajax({
            type: 'POST',
            data: JSON.stringify(data),
            contentType:'application/json',
            url:url+'/getf',
            success:function(output){    
              if(output.status=100){
                for(var k=0;k<20;k++){
                  add_fd(post52_id[k+k5],output.name[k],output.img[k]);
                } 
              }else{
              }
              $('.loader_p5').remove();    
            }              
          });    
        }else if(post5_cont_cp==post5_cont){
          post5_cont_cp++;
          var pil = post52_id.length;
          if(pil>20*post5_cont){
            loader_p5();  
            var post52_plus_arr=[];
            for(var i=20*post5_cont;i<pil;i++){
              post52_plus_arr.push(post52_id[i]);    
            }
            k5+=20;
            var pml = post52_plus_arr.length;
            var datam={};
            datam.userid=[];
            datam.userid= post52_plus_arr;
            $.ajax({
              type: 'POST',
              data: JSON.stringify(datam),
              contentType: 'application/json',
              url:url+'/getf',
              success:function(output){ 
                if(output.status=100){
                  for(var k=0;k<pml;k++){
                    add_fd(post52_id[k+k5],output.name[k],output.img[k]);
                  } 
                }else{
                }
                $('.loader_p5').remove();  
              }    
            });  
          }  
        }else{
        }      
      }    
    }else if(info_index==4){   
      if($Pg5_info.scrollTop()>post52_scroll_h-w_h){
        if(post5_cont_cp<post5_cont){
          post5_cont_cp++;
          loader_p5();    
          k5+=20;
          post52_scroll_h+=200000;
          var data2={};
          data2.id=[];
          var k5_2=k5+20;    
          for(var i=k5;i<k5_2;i++){
           data2.id.push(hl_arr[i].id);    
          }
          $.ajax({
            type:'POST',
            data: JSON.stringify(data2),
            contentType:'application/json',
            url: url+'/getpnarr',
            success:function(output){   
              var img=output.img;
              var name=output.name;
              for(var i=k5;i<k5_2;i++){  
                if(hl_arr[i].type==1){
                  addh1(hl_arr[i].id,name[i-k5],img[i-k5],hl_arr[i].ct);  
                }else if(hl_arr[i].type==2){
                  addh2(hl_arr[i].id,name[i-k5],img[i-k5],hl_arr[i].post_id,hl_arr[i].ct); 
                }else if(hl_arr[i].type==3){
                  addh3(hl_arr[i].id,name[i-k5],img[i-k5],hl_arr[i].post_id,hl_arr[i].comment_id,hl_arr[i].ct);  
                }else{
                  addh4(hl_arr[i].id,name[i-k5],img[i-k5],hl_arr[i].post_id,hl_arr[i].ct);  
                }    
              }
              $('.loader_p5').remove();    
            }    
          });   
        }else if(post5_cont_cp==post5_cont){
          post5_cont_cp++;
          k5+=20;
          var pil = hl_arr.length;
          if(pil>k5){
            loader_p5();  
              var data2={};
              data2.id=[];
              for(var i=k5;i<pil;i++){
               data2.id.push(hl_arr[i].id);    
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
                    if(hl_arr[i+k5].type==1){
                      addh1(hl_arr[i+k5].id,name[i],img[i],hl_arr[i+k5].ct);  
                    }else if(hl_arr[i+k5].type==2){
                      addh2(hl_arr[i+k5].id,name[i],img[i],hl_arr[i+k5].post_id,hl_arr[i+k5].ct); 
                    }else if(hl_arr[i+k5].type==3){
                      addh3(hl_arr[i+k5].id,name[i],img[i],hl_arr[i+k5].post_id,hl_arr[i+k5].comment_id,hl_arr[i+k5].ct);  
                    }else{
                      addh4(hl_arr[i+k5].id,name[i],img[i],hl_arr[i+k5].post_id,hl_arr[i+k5].ct);  
                    }    
                  } 
                  $('.loader_p5').remove();    
                }    
              });          
          }  
        }else{
        }      
      }    
    } 
  });    
});