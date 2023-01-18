var kf=0;
$(document).ready(function(){
  $s_area.scroll(function(e){
      if($s_area.scrollTop()>fs_scroll_h-w_h){
        if(fs_cont_cp<fs_cont){
          fs_cont_cp++;
          loader_s();    
          var data={};
          data.userid=[];
          var kf11=(kf+20);
          var kf12=(kf+40);    
          for(var i=kf11;i<kf12;i++){
            data.userid.push(fs_id[i]);  
          }
          kf+=20;
          var kf10=kf;    
          fs_scroll_h+=200000;
          e.preventDefault();
          $.ajax({
            type: 'POST',
            data: JSON.stringify(data),
            contentType:'application/json',
            url:url+'/getf',
            success:function(output){
              if(output.status=100){
                for(var k=0;k<20;k++){
                  add_fgs(fs_id[k+kf10],output.name[k],output.img[k]);
                } 
              }else{
              }
              $('.loader_s').remove();    
            }              
          });    
        }else if(fs_cont_cp==fs_cont){
          fs_cont_cp++;
          var pil = fs_id.length;
          if(pil>20*fs_cont){
            loader_s();  
            var fs_plus_arr=[];
            for(var i=20*fs_cont;i<pil;i++){
              fs_plus_arr.push(fs_id[i]);    
            }
            kf+=20;
            var kf20=kf;
            var pml = fs_plus_arr.length;
            var datam={};
            datam.userid=[];
            datam.userid= fs_plus_arr;
            $.ajax({
              type: 'POST',
              data: JSON.stringify(datam),
              contentType: 'application/json',
              url:url+'/getf',
              success:function(output){
                if(output.status=100){
                  for(var k=0;k<pml;k++){
                    add_fgs(fs_id[k+kf20],output.name[k],output.img[k]);
                  } 
                }else{
                }
                $('.loader_s').remove();  
              }    
            });  
          }  
        }else{
        }      
      }      
  });    
});