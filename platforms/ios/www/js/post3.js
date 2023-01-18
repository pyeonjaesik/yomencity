$(function(){
  var input = document.getElementById("search_p");
    input.addEventListener("keyup", function(event) {
      event.preventDefault();
      if (event.keyCode === 13) {
        var str= $('#search_p').val(); 
        if(str.length<1){
          $('#search_p').blur();
          return;  
        }
        var err=0;  
        for (var i=0; i<str.length; i++)  {
            var chk = str.substring(i,i+1); 
            if(!chk.match(/[가-힣]|[a-z]|[A-Z]|[0-9]/)) { 
              err = err + 1; 
            } 
        } 
        if (err > 0) {
            var err2=0;
            for (var i=0; i<str.length; i++)  {
              var chk2 = str.substring(i,i+1);    
                if(chk2.match(/[ㄱ-ㅎ|ㅏ-ㅣ]/)) { 
                  err2++; 
                } 
            }
            if(err2>0) { 
              toast_t5('한글을 제대로 입력 해주세요.');
              return;    
            }else{
              toast_t5('숫자,영문 그리고 한글만 입력해 주세요.');
              return;    
            }
        }          
        $('#search_p').blur();
        if(post3_o_index == 1){
          $('.add_p').remove();
          loader_3();            
          var data = {};
          data.k_word = $('#search_p').val();    
          tmp_sp = data.k_word;
          $('#search_p').val('');
          $.ajax({
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json',
            url: url+'/getsearchid',
            success:function(output){
              $('.add_p').remove();    
              if(output.status ==100){
                post3_s_index =1;
                p3_arr=output.p;
                function removeDuplicates(originalArray, prop) {
                     var newArray = [];
                     var lookupObject  = {};

                     for(var i in originalArray) {
                        lookupObject[originalArray[i][prop]] = originalArray[i];
                     }

                     for(i in lookupObject) {
                         newArray.push(lookupObject[i]);
                     }
                      return newArray;
                 }
                p3_arr = removeDuplicates(p3_arr, "id");
                var pl = p3_arr.length;
                p3_cont=parseInt(pl/30);
                p3_cont_cp=1;
                p3_scroll_h=300000;
                pk3=0;  
                if(p3_cont<1){
                  for(var i=0;i<pl;i++){
                    add_p(p3_arr[i].id,p3_arr[i].n,p3_arr[i].i);
                  }    
                }else{
                  for(var i=0;i<30;i++){
                    add_p(p3_arr[i].id,p3_arr[i].n,p3_arr[i].i);  
                  }    
                }
              }else if(output.status == 120){
                nopost3(tmp_sp);
              }else{
                toast_t3('서버 오류 발생');  
              }
              $('.loader_3').remove();    
            }
          });
        }else if(post3_o_index == 2){
          if(lat==0){
            checkAvailability_s(0);  
          }else{
            if((parseInt(Date.now())-lupt)<300000){
              getls(0);   
            }else{
              checkAvailability_s(0);  
            }              
          }    
        }
      }
  });
});
var getls= function(v_i){
  $('.add_pl').remove();
  loader_32();    
  var data={};
  data._id=window.localStorage['_id'];
  data.lat=lat;
  data.long=long;
  if(v_i ==0){
    tmp_sp = $('#search_p').val();    
  }    
  data.k_word = tmp_sp;
  $('#search_p').val('');                    
  $.ajax({
    type:'POST',
    data: JSON.stringify(data),
    contentType: 'application/json',
    url:url+'/getlss',
    success:function(output){
      $('.add_pl').remove();
      post3_s_index =1;        
      if(output.status==100){
        p3_arr2=output.p;
        p3_cont2=parseInt(p3_arr2.length/30);
        p3_cont_cp2=1;
        p3_scroll_h2=300000;
        pk32=0;
        var pl= p3_arr2.length;
        if(pl>30){
          for(var i=0;i<30;i++){
            add_p_l(p3_arr2[i].id,p3_arr2[i].n,p3_arr2[i].i);
          }                            
        }else if(pl>0){
          for(var i=0;i<pl;i++){
            add_p_l(p3_arr2[i].id,p3_arr2[i].n,p3_arr2[i].i);  
          }                             
        }else{
          nopost32(tmp_sp);                            
        }
        $('.loader_32').remove();  
      }else{
        $('.loader_32').remove();  
        console.log('getls error');
      }    
    }    
  });    
};