var rp_btn = function(){
  var div= $('<div></div>');
  div.addClass('rp_btn');    
  div.css({'position':'relative','top':'0','left':'0','width':w_w+'px','height':'60px','background':'white','color':'rgb(30,38,49)','font-size':'20px','line-height':'60px','overflow':'hidden','text-align':'center','text-shadow':'0px 0px 0px white','border-bottom':'1px solid rgba(100,100,100,0.2)'});
  var img = $('<img>');
  img.attr('src','img/top.svg');
  img.css({'position':'absolute','top':'0px','width':'60px','height':'60px','left':(w_w-60)/2+'px'});
  div.append(img);    
  var element = $("#reply_p_main_c");
  element.prepend(div); 
  div.touchend(function(){
    loader_rp(); 
    if(rp_cont_cp<rp_cont){
      var data={};
      data.rp_id=[];
      var rp15 = 15*rp_cont_cp;
      var rp15_1 = (15*rp_cont_cp)+15;        
      for(var i=rp15;i<rp15_1;i++){
        data.rp_id.push(rp_id[i]);      
      }
      rp_cont_cp++;    
      $.ajax({
        type: 'POST',
        data: JSON.stringify(data),
        contentType: 'application/json',
        url: url+'/getreply',
        success: function(output){
          if(output.status==100){
            $('.rp_btn').remove();  
            element.scrollTop('1');  
            for(var i=0;i<15;i++){
              addreply(output.username[i],output.text[i],output.created_time[i],output.comment_id[i],output.img[i],1,output.cn[i],output.id[i]);    
            }
            if(rp_id.length!=(15*rp_cont_cp)){
              rp_btn();    
            }
            var rp_temp_scroll=element.scrollTop()-61;
            element.scrollTop(rp_temp_scroll);  
          }else{
          }    
        }  
      });           
    }else if(rp_cont_cp==rp_cont){
      var rp_plus_arr = rp_id.splice(15*rp_cont_cp,rp_id.length);
      var data={};
      data.rp_id=rp_plus_arr;  
      var r_leng = rp_plus_arr.length;   
      $.ajax({
        type: 'POST',
        data: JSON.stringify(data),
        contentType: 'application/json',
        url: url+'/getreply',
        success: function(output){
          if(output.status==100){
              $('.rp_btn').remove();
              element.scrollTop('1');
            for(var i=0;i<r_leng;i++){
              addreply(output.username[i],output.text[i],output.created_time[i],output.comment_id[i],output.img[i],1,output.cn[i],output.id[i]);    
            }
            var rp_temp_scroll=element.scrollTop()-61;
            element.scrollTop(rp_temp_scroll);               
          }else{
          }    
        }  
      });         
    } 
  });    
};