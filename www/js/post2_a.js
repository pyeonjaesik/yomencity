var $Pg2_b_i;
var $Pg2_b_x;
$(function(){
  $Pg2_b_i=$('#Pg2_b_i');
  $Pg2_b_x=$('#Pg2_b_x');    
  $Pg2_b_i.touchstart(function(){
    $Pg2_b_i.attr('src','img/p2ap.png');
  });
  $Pg2_b_i.touchend(function(){
    $Pg2_b_i.attr('src','img/p2a.png');  
  });    
  $Pg2_b_i.touchend(function(){
    $('#Pg2_b').show();
    getpg2a();  
  });
  $Pg2_b_x.touchstart(function(){
    $Pg2_b_x.attr('src','img/x_b2.png');  
  });
  $Pg2_b_x.touchend(function(){
    $Pg2_b_x.attr('src','img/x_b.png');
  });    
  $Pg2_b_x.click(function(){
    $('#Pg2_b').hide();  
  });    
});
var getpg2a=function(){
  loader2_5();
  $('.addp2a').remove();    
  var data={};
  data._id=window.localStorage['_id'];
  $.ajax({
    type:'POST',
    data: JSON.stringify(data),
    contentType: 'application/json',  
    url:url+'/getpg2a',
    success:function(output){
      if(output.status==100){
        $('.addp2a').remove();  
        var p=output.pl;
        var pl=p.length;
        $('#Pg2_b_logo').text('알림 '+pl);
        if(pl==0){
          nopost_p2a();
          $('#Pg2_b_logo').text('알림');    
        }else{
          $('#Pg2_b_logo').text('알림 '+pl);  
        }          
        $('.loader2_5').remove();  
        for(var i=0;i<pl;i++){
          if(p[i].type==1){
            addp2a1(p[i]._id,p[i].n,p[i].nn,p[i].ct,p[i].pnn);  
          }else{
            addp2a2(p[i]._id,p[i].n,p[i].nn,p[i].ct,p[i].pnn,p[i].txt,p[i].ni,p[i].ti);  
          }    
        }  
      }else{
          
      }
    }  
  });    
};