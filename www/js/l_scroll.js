var k_l=0;
var l_area
$(document).ready(function(){
  $l_area.scroll(function(e){
    if($l_area.scrollTop()>post_l_scroll_h-w_h-100){
        if(p_l_cont_cp<p_l_cont){
          p_l_cont_cp++;
          loader_lv();    
          var data={};
          data.userid=[];
          for(var i=(20+k_l);i<(40+k_l);i++){
            data.userid.push(luid[i]);  
          }
          k_l+=20;
          post_l_scroll_h+=200000;
          e.preventDefault();
          $.ajax({
            type: 'POST',
            data: JSON.stringify(data),
            contentType:'application/json',
            url:url+'/getf',
            success:function(output){
              if(output.status=100){
                for(var k=0;k<20;k++){
                  add_lv(luid[k+k_l],output.name[k],output.img[k]);
                } 
              }else{
              }
              $('.loader_lv').remove();    
            }              
          });    
        }else if(p_l_cont_cp==p_l_cont){
          var pil = luid.length;
          if(pil>20*p_l_cont){
            p_l_cont_cp++;
            loader_lv();  
            var post_l_plus_arr=[];
            for(var i=20*p_l_cont;i<pil;i++){
              post_l_plus_arr.push(luid[i]);    
            }
            k_l+=20;
            var pml = post_l_plus_arr.length;
            var datam={};
            datam.userid=[];
            datam.userid= post_l_plus_arr;
            $.ajax({
              type: 'POST',
              data: JSON.stringify(datam),
              contentType: 'application/json',
              url:url+'/getf',
              success:function(output){
                if(output.status=100){
                  for(var k=0;k<pml;k++){
                    add_lv(luid[k+k_l],output.name[k],output.img[k]);
                  } 
                }else{
                }
                $('.loader_lv').remove();  
              }    
            });  
          }else{
            p_l_cont_cp++;  
          }   
        }else{
        }
    }      
  });    
});