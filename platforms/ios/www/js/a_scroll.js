var k_a=0;
$(document).ready(function(){
  $postarea4.scroll(function(e){
    if($postarea4.scrollTop()>post_a_scroll_h-w_h){
        if(p_a_cont_cp<p_a_cont){
          post_a_scroll_h+=200000;  
          p_a_cont_cp++;    
          k_a+=20;
          loader_4();    
          var k_a2=20+k_a;   
            var data2={};
            data2.id=[];
            for(var i=0;i<20;i++){
              data2.id[i]=al_arr[i+k_a].id;    
            }  
            $.ajax({
              type:'POST',
              data: JSON.stringify(data2),
              contentType:'application/json',
              url: url+'/getparr',
              success:function(output){
                var img=output.img; 
                for(var i=k_a;i<k_a2;i++){  
                  if(al_arr[i].type==1){
                    addp41(al_arr[i].id,al_arr[i].name,img[i-k_a],al_arr[i].ct,al_arr[i].d);  
                  }else if(al_arr[i].type==2){
                    addp42(al_arr[i].id,al_arr[i].name,img[i-k_a],al_arr[i].post_id,al_arr[i].cn,al_arr[i].ct,al_arr[i].d); 
                  }else if(al_arr[i].type==3){
                    addp43(al_arr[i].id,al_arr[i].name,img[i-k_a],al_arr[i].post_id,al_arr[i].comment_id,al_arr[i].cn,al_arr[i].ct,al_arr[i].d);  
                  }else{
                    addp44(al_arr[i].id,al_arr[i].name,img[i-k_a],al_arr[i].post_id,al_arr[i].ln,al_arr[i].ct,al_arr[i].d);  
                  }    
                }
                $('.loader_4').remove();  
              }    
            });   
        }else if(p_a_cont_cp==p_a_cont){
          var pil = al_arr.length;
          if(pil>20*p_a_cont){
            post_a_scroll_h+=200000;  
            p_a_cont_cp++;
            k_a+=20;
            loader_4();  
            var data2={};
            data2.id=[];
            var pka=pil-k_a;
            for(var i=0;i<pka;i++){
              data2.id[i]=al_arr[i+k_a].id;    
            }  
            $.ajax({
              type:'POST',
              data: JSON.stringify(data2),
              contentType:'application/json',
              url: url+'/getparr',
              success:function(output){
                var img=output.img;
                var i_leng=img.length;
                for(var i=k_a;i<pil;i++){  
                  if(al_arr[i].type==1){
                    addp41(al_arr[i].id,al_arr[i].name,img[i-k_a],al_arr[i].ct,al_arr[i].d);  
                  }else if(al_arr[i].type==2){
                    addp42(al_arr[i].id,al_arr[i].name,img[i-k_a],al_arr[i].post_id,al_arr[i].cn,al_arr[i].ct,al_arr[i].d); 
                  }else if(al_arr[i].type==3){
                    addp43(al_arr[i].id,al_arr[i].name,img[i-k_a],al_arr[i].post_id,al_arr[i].comment_id,al_arr[i].cn,al_arr[i].ct,al_arr[i].d);  
                  }else{
                    addp44(al_arr[i].id,al_arr[i].name,img[i-k_a],al_arr[i].post_id,al_arr[i].ln,al_arr[i].ct,al_arr[i].d);  
                  }    
                }
                $('.loader_4').remove();  
              }    
            }); 
          }else{
            p_a_cont_cp++;  
          }   
        }else{
        }
    }      
  });    
});