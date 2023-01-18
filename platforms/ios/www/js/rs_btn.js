var rs_btn = function(){
  var div= $('<div></div>');
  div.addClass('rs_btn');    
  div.css({'position':'relative','top':'0','left':'0','width':w_w+'px','height':'60px','background':'white','color':'rgb(30,38,49)','font-size':'20px','line-height':'60px','overflow':'hidden','text-align':'center','text-shadow':'0px 0px 0px white','border-bottom':'1px solid rgba(100,100,100,0.2)'});
  var img = $('<img>');
  img.attr('src','img/top.svg');
  img.css({'position':'absolute','top':'0px','width':'60px','height':'60px','left':(w_w-60)/2+'px'});
  div.append(img);    
  var element = $("#reply_s_main_c");
  element.prepend(div);
  div.touchend(function(){
    loader_rs(); 
    if(rs_cont_cp<rs_cont){
      var data={};
      data.rs_id=[];
      var rs15 = 15*rs_cont_cp;
      var rs15_1 = (15*rs_cont_cp)+15;        
      for(var i=rs15;i<rs15_1;i++){
        data.rs_id.push(rs_id[i]);      
      }
      rs_cont_cp++;    
      $.ajax({
        type: 'POST',
        data: JSON.stringify(data),
        contentType: 'application/json',
        url: url+'/getsreply',
        success: function(output){
          if(output.status==100){
            $('.rs_btn').remove();  
            element.scrollTop('1');  
            for(var i=0;i<15;i++){
              addreply_s(output.username[i],output.text[i],output.created_time[i],output.img[i],1,output.id[i],rs_id[i+rs15]);    
            }
            if(rs_id.length!=(15*rs_cont_cp)){
              rs_btn();    
              addreply_sh(rsh.n,rsh.txt,rsh.t,rsh.i,rsh.id);        
            }else{
              addreply_sh(rsh.n,rsh.txt,rsh.t,rsh.i,rsh.id);   
            }  
            var rs_temp_scroll=element.scrollTop()-61;
            element.scrollTop(rs_temp_scroll);  
          }else{
          }    
        }  
      });           
    }else if(rs_cont_cp==rs_cont){
      var rs_plus_arr = rs_id.splice(15*rs_cont_cp,rs_id.length);
      var data={};
      data.rs_id=rs_plus_arr;  
      var r_leng = rs_plus_arr.length;   
      $.ajax({
        type: 'POST',
        data: JSON.stringify(data),
        contentType: 'application/json',
        url: url+'/getsreply',
        success: function(output){
          if(output.status==100){
              $('.rs_btn').remove();
              element.scrollTop('1');
            for(var i=0;i<r_leng;i++){
              addreply_s(output.username[i],output.text[i],output.created_time[i],output.img[i],1,output.id[i],rs_id[i+rs_cont_cp]);    
            }
            addreply_sh(rsh.n,rsh.txt,rsh.t,rsh.i,rsh.id);  
            var rs_temp_scroll=element.scrollTop()-61;
            element.scrollTop(rs_temp_scroll);               
          }else{
          }    
        }  
      });         
    } 
  });    
};