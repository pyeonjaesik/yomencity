$(document).ready(function(){
  $sc_area.scroll(function(e){
      if($sc_area.scrollTop()>sc_scroll_h-w_h){
        if(sc_cont_cp<sc_cont){
          sc_cont_cp++;
          loader_sc();    
          var data={};
          data.userid=[];    
          for(var i=(20+k_sc);i<(40+k_sc);i++){
            data.userid.push(sc_id[i]);  
          }
          k_sc+=20;
          sc_scroll_h+=200000;
          e.preventDefault();
          $.ajax({
            type: 'POST',
            data: JSON.stringify(data),
            contentType:'application/json',
            url:url+'/getf',
            success:function(output){
              if(output.status=100){
                for(var k=0;k<20;k++){
                  add_sc(sc_id[k+k_sc],output.name[k],output.img[k]);
                } 
              }else{
              }
              $('.loader_sc').remove();    
            }              
          });    
        }else if(sc_cont_cp==sc_cont){
          sc_cont_cp++;
          var pil = sc_id.length;
          if(pil>20*sc_cont){
            loader_sc();  
            var sc_plus_arr=[];
            for(var i=20*sc_cont;i<pil;i++){
              sc_plus_arr.push(sc_id[i]);    
            }
            k_sc+=20;
            var pml = sc_plus_arr.length;
            var datam={};
            datam.userid=[];
            datam.userid= sc_plus_arr;
            $.ajax({
              type: 'POST',
              data: JSON.stringify(datam),
              contentType: 'application/json',
              url:url+'/getf',
              success:function(output){
                if(output.status=100){
                  for(var k=0;k<pml;k++){
                    add_sc(sc_id[k+k_sc],output.name[k],output.img[k]);
                  } 
                }else{
                }
                $('.loader_sc').remove();  
              }    
            });  
          }  
        }else{
        }      
      }      
  });    
});