var pg2_index=1;    
var pg2_index1=0;
var pg2_index2=0;
$(function(){    
  $('#Pg2_a_i').touchend(function(){
    $('#Pg2_a').show();
    if(pg2_index==1){
      $('#Pg2_a_o1').css({'font-size':'22px','color':'rgb(22,23,27)'});
      $('#Pg2_a_o2').css({'font-size':'18px','color':'rgba(22,23,27,0.3)'});    
      $('#postarea2_3').show();  
      $('#postarea2_4').hide();
      if(pg2_index1==0){
        getcolh_f();  
      }    
      pg2_index1=1;
    }else{
      $('#Pg2_a_o1').css({'font-size':'18px','color':'rgba(22,23,27,0.3)'});
      $('#Pg2_a_o2').css({'font-size':'22px','color':'rgb(22,23,27)'});
      $('#postarea2_3').hide();  
      $('#postarea2_4').show();
      if(pg2_index2==0){
        getmylh_f();  
      }      
      pg2_index2=1;        
    }
  });
  $('#Pg2_a_o1').touchstart(function(){
    $(this).css({'font-size':'22px','color':'rgb(22,23,27)'});  
  });
  $('#Pg2_a_o1').touchend(function(){
    pg2_index=1;  
    $('#Pg2_a_o2').css({'font-size':'18px','color':'rgba(22,23,27,0.3)'});
    $('#postarea2_3').show();  
    $('#postarea2_4').hide();
    if(pg2_index1==0){
      getcolh_f();
      pg2_index1==1;    
    }  
  });
  $('#Pg2_a_o2').touchstart(function(){
    $(this).css({'font-size':'22px','color':'rgb(22,23,27)'});  
  });
  $('#Pg2_a_o2').touchend(function(){
    pg2_index=2;
    $('#Pg2_a_o1').css({'font-size':'18px','color':'rgba(22,23,27,0.3)'});
    $('#postarea2_3').hide();  
    $('#postarea2_4').show();
    if(pg2_index2==0){
      getmylh_f();  
    }      
    pg2_index2=1;
  });
  $('#Pg2_x').click(function(e){
    e.stopPropagation();
    $('#Pg2_a').hide();  
  });    
});
var getmylh_f=function(){
  loader2_4();    
  var data={};
  data._id=window.localStorage['_id'];
  $.ajax({
    type:'POST',
    data: JSON.stringify(data),
    contentType: 'application/json',  
    url:url+'/getmylh',
    success:function(output){
      if(output.status==100){
        var m=output.pl;
        var ml=m.length;
        $('.add_al2_4').remove();
        $('.loader2_4').remove();
        if(ml==0){
          nopost_mypl(); 
        }else{
          for(var i=0;i<ml;i++){
            add_al2(m[i]._id,m[i].s,m[i].t,m[i].l,m[i].r,m[i].ln,m[i].cn,m[i].nn,4)    
          }            
        }    
      }else{
          
      }
    }  
  });      
};
var getcolh_f=function(){
  loader2_3();
  var data={};
  data._id=window.localStorage['_id'];
  $.ajax({
    type:'POST',
    data: JSON.stringify(data),
    contentType: 'application/json',  
    url:url+'/getcolh',
    success:function(output){
      if(output.status==100){
        var m=output.pl;
        var ml=m.length;
        $('.add_al2_3').remove();
        $('.loader2_3').remove();  
        if(ml==0){
          nopost_copl(); 
        }else{
          for(var i=0;i<ml;i++){
            add_al2(m[i]._id,m[i].s,m[i].t,m[i].l,m[i].r,m[i].ln,m[i].cn,m[i].nn,3)    
          }        
        }  
      }else{
          
      }
    }  
  });      
};