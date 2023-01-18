var kc=0;
var kc2=0;
var $chat_main;
var $chat_main2;
$(function(){
  $chat_main=$("#chat_main");
  $chat_main2=$("#chat_main2");    
});
$(document).ready(function(){
  $chat_main.scroll(function(e){
      if($chat_main.scrollTop()>c_scroll_h-w_h){
        if(c_cont_cp<c_cont){
          c_cont_cp++;
          loader_ch1();    
          var data={};
          data.userid=[];    
          for(var i=(20+kc);i<(40+kc);i++){
            data.userid.push(postc1_id[i]);  
          }
          kc+=20;
          c_scroll_h+=200000;
          e.preventDefault();
          $.ajax({
            type: 'POST',
            data: JSON.stringify(data),
            contentType:'application/json',
            url:url+'/getf',
            success:function(output){
              if(output.status=100){
                for(var k=0;k<20;k++){
                  add_c1(postc1_id[k+kc],output.name[k],output.img[k]);    
                } 
              }else{
              }
              $('.loader_ch1').remove();    
            }              
          });    
        }else if(c_cont_cp==c_cont){
          c_cont_cp++;
          var pil = postc1_id.length;
          if(pil>20*c_cont){
            loader_ch1();  
            var postc_plus_arr=[];
            for(var i=20*c_cont;i<pil;i++){
              postc_plus_arr.push(postc1_id[i]);    
            }
            kc+=20;
            var pml = postc_plus_arr.length;
            var datam={};
            datam.userid=[];
            datam.userid= postc_plus_arr;
            $.ajax({
              type: 'POST',
              data: JSON.stringify(datam),
              contentType: 'application/json',
              url:url+'/getf',
              success:function(output){
                if(output.status=100){
                  for(var k=0;k<pml;k++){
                    add_c1(postc1_id[k+kc],output.name[k],output.img[k]);  
                  } 
                }else{
                }
                $('.loader_ch1').remove();  
              }    
            });  
          }  
        }else{
        }      
      }    
  });
  $chat_main2.scroll(function(e){     
      if($chat_main2.scrollTop()>c_scroll_h2-w_h){
        if(c_cont_cp2<c_cont2){
          c_cont_cp2++;
          loader_ch2();    
          var data={};
          data.id=[];    
          for(var i=(20+kc2);i<(40+kc2);i++){
            data.id.push(ch_arr[i].id);  
          }
          kc2+=20;
          c_scroll_h2+=200000;
          e.preventDefault();
          $.ajax({
            type: 'POST',
            data: JSON.stringify(data),
            contentType:'application/json',
            url:url+'/getpnarr',
            success:function(output){
            if(output.status==100){
              for(var i=0;i<20;i++){
                add_cr(ch_arr[i+kc2].id,output.name[i],output.img[i],ch_arr[i+kc2].b2,1);  
              }    
            }else{
              alert('chat_r: getpnarr err');    
            }
            $('.loader_ch2').remove();    
            }              
          });    
        }else if(c_cont_cp2==c_cont2){
          c_cont_cp2++;
          var pil = ch_arr.length;
          if(pil>20*c_cont2){
            loader_ch2();  
            var c_plus_arr=[];
            for(var i=20*c_cont2;i<pil;i++){
              c_plus_arr.push(ch_arr[i].id);    
            }
            kc2+=20;
            var pml = c_plus_arr.length;
            var datam={};
            datam.id=[];
            datam.id= c_plus_arr;
            $.ajax({
              type: 'POST',
              data: JSON.stringify(datam),
              contentType: 'application/json',
              url:url+'/getpnarr',
              success:function(output){
                if(output.status==100){
                  for(var i=0;i<pml;i++){
                    add_cr(ch_arr[i+kc2].id,output.name[i],output.img[i],ch_arr[i+kc2].b2,1);  
                  }    
                }else{
                  alert('chat_r: getpnarr err');    
                }
                $('.loader_ch2').remove();  
              }    
            });  
          }  
        }else{
        }      
      }    
  });    
});