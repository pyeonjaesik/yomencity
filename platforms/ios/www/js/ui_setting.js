$(function(){
  $('#Pg5_profile_setting_btn').touchstart(function(){
    $('#Pg5_profile_setting').attr('src','img/setting2.png');  
  });    
  $('#Pg5_profile_setting_btn').touchend(function(){
    $('#Pg5_profile_setting').attr('src','img/setting.png');  
    $('#Pg5_setting').show();
    if(window.localStorage['i1']==0){
      $('#Pg5_setting_main_i1').html('팔로우 푸시 알람 ON'); 
    }else{
      $('#Pg5_setting_main_i1').html('팔로우 푸시 알람 OFF');  
    }
    if(window.localStorage['i2']==0){
      $('#Pg5_setting_main_i2').html('댓글 푸시 알람 ON');    
    }else{
      $('#Pg5_setting_main_i2').html('댓글 푸시 알람 OFF');  
    }
    if(window.localStorage['i3']==0){
      $('#Pg5_setting_main_i3').html('답글 푸시 알람 ON');    
    }else{
      $('#Pg5_setting_main_i3').html('답글 푸시 알람 OFF');  
    }
    if(window.localStorage['i4']==0){
      $('#Pg5_setting_main_i4').html('좋아요 푸시 알람 ON');    
    }else{
      $('#Pg5_setting_main_i4').html('좋아요 푸시 알람 OFF');  
    }
    if(window.localStorage['i11']==0){
      $('#Pg5_setting_main_i11').html('플래그 댓글 푸시 알람 ON');    
    }else{
      $('#Pg5_setting_main_i11').html('플래그 댓글 푸시 알람 OFF');  
    }
    if(window.localStorage['i12']==0){
      $('#Pg5_setting_main_i12').html('플래그 답글 푸시 알람 ON');    
    }else{
      $('#Pg5_setting_main_i12').html('플래그 답글 푸시 알람 OFF');  
    }      
  });
  $('#Pg5_setting_xbtn').touchend(function(){
    $('#Pg5_setting').hide();
  });
  $('#Pg5_setting_main_i1').touchstart(function(){
    $(this).css({'background':'rgb(22,23,27)','color':'white'});
  });
  $('#Pg5_setting_main_i1').touchend(function(){
    $(this).css({'background':'white','color':'rgb(22,23,27)'});  
    var data={};
    data._id=window.localStorage['_id'];
    data.i=window.localStorage['i1'];
    if(data.i==0){
      window.localStorage['i1']=1;
      $(this).html('팔로우 푸시 알람 OFF');    
    }else{
      window.localStorage['i1']=0;
      $(this).html('팔로우 푸시 알람 ON');    
    }
    $.ajax({
      type: 'POST',
      data: JSON.stringify(data),
      contentType: 'application/json',
      url: url+'/pci1',
      success: function(output){
        
      }
    });      
  });
  $('#Pg5_setting_main_i2').touchstart(function(){
    $(this).css({'background':'rgb(22,23,27)','color':'white'});
  });
  $('#Pg5_setting_main_i2').touchend(function(){
    $(this).css({'background':'white','color':'rgb(22,23,27)'});  
    var data={};
    data._id=window.localStorage['_id'];
    data.i=window.localStorage['i2'];
    if(data.i==0){
      window.localStorage['i2']=1;
      $(this).html('댓글 푸시 알람 OFF');    
    }else{
      window.localStorage['i2']=0;
      $(this).html('댓글 푸시 알람 ON');    
    }
    $.ajax({
      type: 'POST',
      data: JSON.stringify(data),
      contentType: 'application/json',
      url: url+'/pci2',
      success: function(output){
        
      }
    });      
  });
  $('#Pg5_setting_main_i3').touchstart(function(){
    $(this).css({'background':'rgb(22,23,27)','color':'white'});
  });
  $('#Pg5_setting_main_i3').touchend(function(){
    $(this).css({'background':'white','color':'rgb(22,23,27)'});  
    var data={};
    data._id=window.localStorage['_id'];
    data.i=window.localStorage['i3'];
    if(data.i==0){
      window.localStorage['i3']=1;
      $(this).html('답글 푸시 알람 OFF');    
    }else{
      window.localStorage['i3']=0;
      $(this).html('답글 푸시 알람 ON');    
    }
    $.ajax({
      type: 'POST',
      data: JSON.stringify(data),
      contentType: 'application/json',
      url: url+'/pci3',
      success: function(output){
        
      }
    });      
  });
  $('#Pg5_setting_main_i4').touchstart(function(){
    $(this).css({'background':'rgb(22,23,27)','color':'white'});
  });
  $('#Pg5_setting_main_i4').touchend(function(){
    $(this).css({'background':'white','color':'rgb(22,23,27)'});  
    var data={};
    data._id=window.localStorage['_id'];
    data.i=window.localStorage['i4'];
    if(data.i==0){
      window.localStorage['i4']=1;
      $(this).html('좋아요 푸시 알람 OFF');    
    }else{
      window.localStorage['i4']=0;
      $(this).html('좋아요 푸시 알람 ON');    
    }
    $.ajax({
      type: 'POST',
      data: JSON.stringify(data),
      contentType: 'application/json',
      url: url+'/pci4',
      success: function(output){
        
      }
    });      
  });
  $('#Pg5_setting_main_i11').touchstart(function(){
    $(this).css({'background':'rgb(22,23,27)','color':'white'});
  });
  $('#Pg5_setting_main_i11').touchend(function(){
    $(this).css({'background':'white','color':'rgb(22,23,27)'});  
    var data={};
    data._id=window.localStorage['_id'];
    data.i=window.localStorage['i11'];
    if(data.i==0){
      window.localStorage['i11']=1;
      $(this).html('플래그 댓글 푸시 알람 OFF');    
    }else{
      window.localStorage['i11']=0;
      $(this).html('플래그 답글 푸시 알람 ON');    
    }
    $.ajax({
      type: 'POST',
      data: JSON.stringify(data),
      contentType: 'application/json',
      url: url+'/pci11',
      success: function(output){
        
      }
    });      
  });
  $('#Pg5_setting_main_i12').touchstart(function(){
    $(this).css({'background':'rgb(22,23,27)','color':'white'});
  });
  $('#Pg5_setting_main_i12').touchend(function(){
    $(this).css({'background':'white','color':'rgb(22,23,27)'});  
    var data={};
    data._id=window.localStorage['_id'];
    data.i=window.localStorage['i12'];
    if(data.i==0){
      window.localStorage['i12']=1;
      $(this).html('플래그 답글 푸시 알람 OFF');    
    }else{
      window.localStorage['i12']=0;
      $(this).html('플래그 답글 푸시 알람 ON');    
    }
    $.ajax({
      type: 'POST',
      data: JSON.stringify(data),
      contentType: 'application/json',
      url: url+'/pci12',
      success: function(output){
        
      }
    });      
  });    
});