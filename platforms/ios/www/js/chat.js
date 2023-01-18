var postc1_id=[];
var postc2_id=[];
var postc1_cont;
var postc2_cont;
var postc1_cont_cp=1;
var postc2_cont_cp=1;
var chat_s = function(){
    $('.add_c1').remove();
    loader_ch1();
    var data ={};
    data.id = window.localStorage['id'];
    $.ajax({
      type: 'POST',
      data: JSON.stringify(data),
      contentType: 'application/json',
      url: url+'/getfgid',    
      success:function(output){
        if(output.status ==100){
          postc1_id = output.userid;    
          var data ={};
          data.userid=[];    
          for(var o=0;o<20;o++){
            data.userid.push(postc1_id[o]);  
          }
          $.ajax({
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json',
            url: url+'/getf',
            success:function(output){
              c_scroll_h=200000;    
              c_cont = parseInt(postc1_id.length/20);    
              c_cont_cp=1;
              kc=0;
              $('.add_c1').remove();    
              if(output.status=100){
                for(var k=0;k<20;k++){
                  add_c1(postc1_id[k],output.name[k],output.img[k]);
                } 
              }else{
              }
              $('.loader_ch1').remove();    
            }  
          });  
        }else if(output.status ==101){
          postc1_id = output.userid;
          var u_leng = postc1_id.length;
          var data ={};
          data.userid = postc1_id;
          c_cont=1;
          $.ajax({
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json',
            url: url+'/getf',
            success:function(output){
              c_scroll_h=200000;    
              c_cont_cp=1;
              c_cont=0;    
              $('.add_c1').remove();
              if(output.status=100){
                for(var k=0;k<u_leng;k++){
                  add_c1(postc1_id[k],output.name[k],output.img[k]);
                } 
              }else{
              }
              $('.loader_ch1').remove();    
            }  
          });    
        }else if(output.status ==102){
          $('.loader_ch1').remove();    
          nopost_ch1();  
        }else{
          $('.loader_ch1').remove();    
        }
      }     
    });     
};
var chat_r=function(){
  $('.add_cr').remove();
  loader_ch2();    
  var data={};
  data._id=window.localStorage['_id'];
  $.ajax({
    type: 'POST',
    data: JSON.stringify(data),
    contentType: 'application/json',
    url: url+'/getcr',    
    success:function(output){
      if(output.status==100){
        ch_arr=output.ch;
        var ida=[];  
        for(var i=0;i<20;i++){
          ida.push(ch_arr[i].id);    
        }
        var data={};
        data.id=[];
        data.id=ida;  
        $.ajax({
          type: 'POST',
          data: JSON.stringify(data),
          contentType: 'application/json',
          url: url+'/getpnarr',
          success:function(output){
            $('.add_cr').remove();
            kc2=0;
            c_cont_cp2=1;
            c_cont2 = parseInt(ch_arr.length/20);
            c_scroll_h2=200000;  
            if(output.status==100){
              for(var i=0;i<20;i++){
                add_cr(ch_arr[i].id,output.name[i],output.img[i],ch_arr[i].b2,1);  
              }    
            }else{
              alert('chat_r: getpnarr err');    
            }
            $('.loader_ch2').remove();  
          }    
        });   
      }else if(output.status==101){
        ch_arr=output.ch;
        var c_leng=ch_arr.length;
        var ida=[];  
        for(var i=0;i<c_leng;i++){
          ida.push(ch_arr[i].id);    
        }
        var data={};
        data.id=[];
        data.id=ida;  
        $.ajax({
          type: 'POST',
          data: JSON.stringify(data),
          contentType: 'application/json',
          url: url+'/getpnarr',
          success:function(output){
            $('.add_cr').remove();
            c_cont_cp2=1;
            c_cont2=0;
            c_scroll_h2=200000;  
            if(output.status==100){
              for(var i=0;i<c_leng;i++){
                add_cr(ch_arr[i].id,output.name[i],output.img[i],ch_arr[i].b2,1);  
              }    
            }else{
              alert('chat_r: getpnarr err');    
            }
            $('.loader_ch2').remove();  
          }    
        });  
      }else if(output.status==102){
        $('.loader_ch2').remove();  
        nopost_ch2();       
      }else{
        $('.loader_ch2').remove();  
        alert('getcr: err');
      }    
    }     
  });
      
};
var chat_gr=function(){
  var data={};
  data._id=window.localStorage['_id'];
  $.ajax({
    type: 'POST',
    data: JSON.stringify(data),
    contentType: 'application/json',
    url: url+'/getcr',    
    success:function(output){
      if(output.status==100||output.status==101){
        ch_arr=output.ch;
        var chl= ch_arr.length;
        var bn=0;  
        for(var i=0;i<chl;i++){
          bn+=ch_arr[i].b2;    
        }
        if(bn>0){
          toast_t5(bn+'개의 안읽은 메시지가 있습니다.');
          $('#postarea1_h_img').attr('src','img/letter_r.png')    
        }  
      }else if(output.status==102){
      }else{
      }    
    }     
  });
      
};