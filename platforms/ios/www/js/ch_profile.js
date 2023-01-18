$(function(){
    function p_uploadPhoto(imageData,user_id) {
        window.FirebasePlugin.getToken(function(token) {
          var options = new FileUploadOptions();
          options.fileKey="file";
          options.fileName=imageData.substr(imageData.lastIndexOf('/')+1);
          options.mimeType="image/jpeg";
          var params = {};
          params.tk = token;
          options.params = params;
          var ft = new FileTransfer();            
          ft.upload("data:image/jpeg;base64," + imageData, encodeURI(url2+"/ppupload"), win, fail, options);
        }, function(error) {
            console.error(error);
            alert('get token failed');
        });
    };
    function win(r) {
        console.log("Code = " + r.responseCode);
        console.log("Response = " + r.response);
        console.log("Sent = " + r.bytesSent);
        $('#Pg5_ch_profile').hide();
        $('.loader_ch').remove();
        $("#Pg5_ch_profile_finish_s").hide();
        $('#foot').show();
        getp_img(window.localStorage['_id']);
        window.FirebasePlugin.unregister(chtk);
    }  
    function fail(error) {
       alert("An error has occurred: Code = " + error.code);
        console.log("upload error source " + error.source);
        console.log("upload error target " + error.target);
        $('.loader_ch').remove();
        $("#Pg5_ch_profile_finish_s").hide();
        $('#foot').show();
    }    
        
  $('#Pg5_ch_profile_finish').touchstart(function(){});
  $('#Pg5_ch_profile_finish').touchend(function(){
    if(ch_f ==0){
      toast_t2('먼저 프로필 이미지를 변경하세요.')      
    }else{    
      loader_ch_f();
      window.FirebasePlugin.getToken(function(token) {
        var data={};  
        data._id=window.localStorage['_id'];
        data.tk=token;
        $.ajax({
          type:'POST',
          data:JSON.stringify(data),
          contentType:'application/json',
          url:url+'/atk',
          success:function(output){
            post1_index = 0;  
            if(output.status==100){
              p_uploadPhoto(p_imgData,window.localStorage['_id']);    
            }else if(output.status==102){
              toast_t2('프로필 변경 수정 하루 허용량을</n>을 초과 하였습니다.');
              $('.loader_ch').remove();
              $("#Pg5_ch_profile_finish_s").hide();
              $('#foot').show();
              $('#Pg5_ch_profile').hide();    
            }else if(output.status==600){
              toast_t2('앱을 끄고 다시 시작해 주세요.');
              $('.loader_ch').remove();
              $("#Pg5_ch_profile_finish_s").hide();
              $('#foot').show();                
            }else{
              toast_t2('atk err');
              $('.loader_ch').remove();
              $("#Pg5_ch_profile_finish_s").hide();
              $('#foot').show();                
            }
          }    
        });  
      }, function(error) {
        console.error(error);
        alert('get token failed');
      });      
    }

  });
});