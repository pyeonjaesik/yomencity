var pk3=0;
var pk32=0;
$(document).ready(function(){
  $search_main.scroll(function(e){
   if($search_main.scrollTop()> p3_scroll_h - w_h){
        if(p3_cont_cp < p3_cont){
           p3_scroll_h+=300000;
           p3_cont_cp++;            
           pk3+=30;
           var p1 =pk3;
           var p2 =(pk3+30)    
           for(var i=p1;i<p2;i++){
             add_p(p3_arr[i].id,p3_arr[i].n,p3_arr[i].i);  
           }
        }else if(p3_cont_cp == p3_cont){
           p3_scroll_h+=300000;
           p3_cont_cp++;            
          var pil = p3_arr.length;
          if(pil>30*p3_cont){
            var pil2=30*p3_cont;
            for(var i=pil2;i<pil;i++){
              add_p(p3_arr[i].id,p3_arr[i].n,p3_arr[i].i);
            } 
          }
        }else{
        }
    }
  });
  $search_main2.scroll(function(e){
      if($search_main2.scrollTop()> p3_scroll_h2 - w_h){
        if(p3_cont_cp2 < p3_cont2){
           p3_scroll_h2+=300000;
           p3_cont_cp2++;
           var data={};
           data.id=[];
           pk32+=30;
           var p21 =(pk32+30);             
           for(var i=pk32;i<p21;i++){
             add_p_l(p3_arr2[i].id,p3_arr2[i].n,p3_arr2[i].i);
           }
        }else if(p3_cont_cp2 == p3_cont2){
           p3_scroll_h2+=300000;
           p3_cont_cp2++;            
          var pil = p3_arr2.length;
          if(pil>30*p3_cont2){
           var data={};
           data.id=[];
           pk32+=30;
           for(var i=pk32;i<pil;i++){
             add_p_l(p3_arr2[i].id,p3_arr2[i].n,p3_arr2[i].i);
           }
          }
        }else{
        }
    }
  });    
});