var g_p4=function(){
  $('.addp4').remove();
  loader_4();    
  var data={};
  data._id=window.localStorage['_id'];    
  $.ajax({
    type:'POST',
    data: JSON.stringify(data),  
    contentType:'application/json',
    url: url+'/getal',
    success:function(output){
      if(output.status==100){
        al_arr=output.al;
        p_a_cont=parseInt(al_arr.length/20);  
        var data2={};
        data2.id=[];
        for(var i=0;i<20;i++){
          data2.id[i]=al_arr[i].id;    
        }
        aln=0;  
        for(var i=0;i<al_arr.length;i++){
          if(al_arr[i].d==1){
            aln++;  
          }     
        }
        if(aln==0){
          $('#Pg4_header').html('새로운 소식이 없습니다.');   
        }else{
          $('#Pg4_header').html(aln+'개의 새로운 소식');    
        }
        $.ajax({
          type:'POST',
          data: JSON.stringify(data2),
          contentType:'application/json',
          url: url+'/getparr',
          success:function(output){
            var img=output.img;
            $('.addp4').remove();
            $('#postarea4').scrollTop('0');
            p_a_cont_cp=1;
            post_a_scroll_h=200000;
            k_a=0;
            p4_index=1;              
            for(var i=0;i<20;i++){  
              if(al_arr[i].type==1){
                addp41(al_arr[i].id,al_arr[i].name,img[i],al_arr[i].ct,al_arr[i].d);  
              }else if(al_arr[i].type==2){
                addp42(al_arr[i].id,al_arr[i].name,img[i],al_arr[i].post_id,al_arr[i].cn,al_arr[i].ct,al_arr[i].d); 
              }else if(al_arr[i].type==3){
                addp43(al_arr[i].id,al_arr[i].name,img[i],al_arr[i].post_id,al_arr[i].comment_id,al_arr[i].cn,al_arr[i].ct,al_arr[i].d);  
              }else{
                addp44(al_arr[i].id,al_arr[i].name,img[i],al_arr[i].post_id,al_arr[i].ln,al_arr[i].ct,al_arr[i].d);  
              }    
            }
            $('.loader_4').remove();  
          }    
        });  
      }else if(output.status==101){
        al_arr=output.al;
        var a_leng=al_arr.length;  
        var data2={};
        data2.id=[];
        for(var i=0;i<a_leng;i++){
          data2.id[i]=al_arr[i].id;    
        }
        aln=0;  
        for(var i=0;i<al_arr.length;i++){
          if(al_arr[i].d==1){
            aln++;  
          }     
        }          
        if(aln==0){
          $('#Pg4_header').html('새로운 소식이 없습니다.');   
        }else{
          $('#Pg4_header').html(aln+'개의 새로운 소식');    
        } 
        $.ajax({
          type:'POST',
          data: JSON.stringify(data2),
          contentType:'application/json',
          url: url+'/getparr',
          success:function(output){
            var img=output.img;
            var i_leng=img.length;
            $('.addp4').remove();
            $('#postarea4').scrollTop('0');
            p_a_cont=0;
            p_a_cont_cp=1;
            post_a_scroll_h=200000;
            k_a=0;
            p4_index=1;              
            for(var i=0;i<i_leng;i++){  
              if(al_arr[i].type==1){
                addp41(al_arr[i].id,al_arr[i].name,img[i],al_arr[i].ct,al_arr[i].d);  
              }else if(al_arr[i].type==2){
                addp42(al_arr[i].id,al_arr[i].name,img[i],al_arr[i].post_id,al_arr[i].cn,al_arr[i].ct,al_arr[i].d); 
              }else if(al_arr[i].type==3){
                addp43(al_arr[i].id,al_arr[i].name,img[i],al_arr[i].post_id,al_arr[i].comment_id,al_arr[i].cn,al_arr[i].ct,al_arr[i].d);  
              }else{
                addp44(al_arr[i].id,al_arr[i].name,img[i],al_arr[i].post_id,al_arr[i].ln,al_arr[i].ct,al_arr[i].d);  
              }    
            }
            $('.loader_4').remove();  
          }    
        });
      }else if(output.status=102){
        nopost4();
        $('.loader_4').remove();
        $('#Pg4_header').html('새로운 소식이 없습니다.');  
      }else{
        $('.loader_4').remove();  
      } 
    }  
  });    
};

$(function(){
  $('#footdiv4').touchend(function(){
    if(p4_index==0){
      p_a_cont=0;
      p_a_cont_cp=1;
      post_a_scroll_h=200000;
      k_a=0;
      p4_index=1;    
      g_p4();    
    }else{
      if(al_arr.length<1 || $('#postarea4').scrollTop()<150){
        p_a_cont=0;
        p_a_cont_cp=1;
        post_a_scroll_h=200000;
        k_a=0;   
        g_p4();  
      }else{
        if(al_arr.length==0){
           g_p4(); 
        }  
        $('#postarea4').scrollTop('0');
        p4_index=0;           
      } 
    }     
  });    
});