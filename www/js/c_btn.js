var c_btn = function(){
  var div= $('<div></div>');
  div.addClass('c_btn');    
  div.css({'position':'relative','top':'0','left':'0','width':w_w+'px','height':'60px','background':'white','overflow':'hidden','border-bottom':'1px solid rgba(100,100,100,0.2)','box-sizing':'border-box'});
  var img = $('<img>');
  img.attr('src','img/top.svg');
  img.css({'position':'absolute','top':'0px','width':'60px','height':'60px','left':(w_w-60)/2+'px'});
  div.append(img);    
  var element = $("#c_main_c");
  element.prepend(div);
  div.touchend(function(){
    $('.c_btn').remove();
    if(cg_cont_cp<cg_cont){
        kcg+=30;
        element.scrollTop('1');
        for(var i=kcg;i<30+kcg;i++){
          if(i<cgb){
            b_i=1;
          }else{
            b_i=0;  
          }
          add_c2(c_arr[i],b_i);
          if(i<(c_arr.length-1)){
            var d = new Date(c_arr[i].ct);
            var d2 = new Date(c_arr[i+1].ct);
            var cmc1=c_arr[i].ct-c_arr[i+1].ct;  
            if(d.getDate()!=d2.getDate()||cmc1>86400000){
              add_cn(c_arr[i].ct);    
            }  
          }else{
            add_cn(c_arr[i].ct);          
          }            
        }
        cg_cont_cp++;
        element.scrollTop(element.scrollTop()-60);
        c_btn();
    }else if(cg_cont_cp==cg_cont){
        kcg+=30;
        element.scrollTop('1');
        var cgl=c_arr.length;
        for(var i=kcg;i<cgl;i++){
          if(i<cgb){
            b_i=1;
          }else{
            b_i=0;  
          }
          add_c2(c_arr[i],b_i);
          if(i<(c_arr.length-1)){
            var d = new Date(c_arr[i].ct);
            var d2 = new Date(c_arr[i+1].ct);
            var cmc1=c_arr[i].ct-c_arr[i+1].ct;  
            if(d.getDate()!=d2.getDate()||cmc1>86400000){
              add_cn(c_arr[i].ct);    
            } 
          }else{
            add_cn(c_arr[i].ct);          
          }            
        }
        element.scrollTop(element.scrollTop()-60);
    } 
  });    
};