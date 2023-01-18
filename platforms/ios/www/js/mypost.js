var n_p_id;
var n_p_img;
var n_p_ing=0;
var g_tk=function(){
  var token;    
  window.FirebasePlugin.getToken(function(token) {
    token=token;

  }, function(error) {
    token='failed';
  });
  return token;    
};
$(function(){
  var mxlimit=210;    
  var input = document.getElementById("Pg5_post2_textarea");
    input.addEventListener("keyup", function(event) {
      event.preventDefault();
    var lc = this.value.length;              
    if (lc > mxlimit) {
        this.value = this.value.substring(0, mxlimit);
        var cl = mxlimit - lc + 1;
    }else {                   
      var cl = mxlimit - lc;                
    } 
    if(cl<0){cl=0};    
      $Pg5_left.text(cl);    
      var tl=this.value.length*w_w/210;
      if(tl>w_w){tl=w_w};    
      $Pg5_count.css({'width':tl+'px'});
  });    
    var postnumber;
     $("#Pg5_post2_next_btn").touchend(function(e){
         if(isc==0){
           toast_t2('잠시 후 다시 시도해 주세요.');
           return;     
         }
         n_p_ing=1;
         toast_t3('게시물을 업로드 하는중 입니다.');
         loader_pn();
         post1_id =[];
        $("#Pg5_post2").hide();
         $("#Pg5_post").hide();
         $("#foot").show();
        e.preventDefault();
        var datam = {};
        datam._id = window.localStorage['_id'];
        
        function uploadPhoto(imageData,post_id,h_index) {
            var post_id=post_id;
            var h_index=h_index;
            var imageData=imageData;
          window.FirebasePlugin.getToken(function(token) {
            var options = new FileUploadOptions();
            options.fileKey="file";
            options.fileName=imageData.substr(imageData.lastIndexOf('/')+1);
            options.mimeType="image/jpeg";
            var ft = new FileTransfer();
            var params = {};
            params.post_id = post_id;
            params.tk=token;
            params.ni=1;
            n_p_id=post_id;
            n_p_img="data:image/jpeg;base64," + imageData;  
            if(h_index ==1){
              params.li=1;
              options.params = params;
              ft.upload("data:image/jpeg;base64," + imageData, encodeURI(url2+"/uploads3"), win, fail, options);
            }else{  
              params.li=0;
              options.params = params;    
              ft.upload("data:image/jpeg;base64," + imageData, encodeURI(url2+"/uploads3"), win2, fail, options);                   
            }
          }, function(error) {
                 console.error(error);
          });
        }
        function uploadPhoto2(imageData,post_id,h_index) {
            var post_id=post_id;
            var h_index=h_index;
            var imageData=imageData;
          window.FirebasePlugin.getToken(function(token) {
            var options = new FileUploadOptions();
            options.fileKey="file";
            options.fileName=imageData.substr(imageData.lastIndexOf('/')+1);
            options.mimeType="image/jpeg";
            var ft = new FileTransfer();
            var params = {};
            params.post_id = post_id;
            params.tk=token;
            params.ni=2;
            if(h_index ==2){
              params.li=1;
              options.params = params;    
              ft.upload("data:image/jpeg;base64," + imageData, encodeURI(url2+"/uploads3"), win, fail, options);             
            }else{  
              params.li=0;
              options.params = params;    
              ft.upload("data:image/jpeg;base64," + imageData, encodeURI(url2+"/uploads3"), win3, fail, options);                   
            }
          }, function(error) {
                 console.error(error);
          });
        }         
        function uploadPhoto3(imageData,post_id,h_index) {
            var post_id=post_id;
            var h_index=h_index;
            var imageData=imageData;
          window.FirebasePlugin.getToken(function(token) {
            var options = new FileUploadOptions();
            options.fileKey="file";
            options.fileName=imageData.substr(imageData.lastIndexOf('/')+1);
            options.mimeType="image/jpeg";
            var ft = new FileTransfer();
            var params = {};
            params.post_id = post_id;
            params.tk=token;
            params.ni=3;
            if(h_index ==3){
              params.li=1;
              options.params = params;    
              ft.upload("data:image/jpeg;base64," + imageData, encodeURI(url2+"/uploads3"), win, fail, options);             
            }else{  
              params.li=0;
              options.params = params;    
              ft.upload("data:image/jpeg;base64," + imageData, encodeURI(url2+"/uploads3"), win4, fail, options);                   
            }
          }, function(error) {
                 console.error(error);
          });
        }         
        function uploadPhoto4(imageData,post_id) {
            var post_id=post_id;
            var imageData=imageData;
          window.FirebasePlugin.getToken(function(token) {
            var options = new FileUploadOptions();
            options.fileKey="file";
            options.fileName=imageData.substr(imageData.lastIndexOf('/')+1);
            options.mimeType="image/jpeg";
            var ft = new FileTransfer();
            var params = {};
            params.post_id = post_id;
            params.tk=token;
            params.ni=4;
            params.li=1;
            options.params = params;    
            ft.upload("data:image/jpeg;base64," + imageData, encodeURI(url2+"/uploads3"), win, fail, options);             
          }, function(error) {
                 console.error(error);
          });
        }         
        function win(r) {
            $('.loader_pn').remove();
            n_post(n_p_img,n_p_id)
            var data ={};
            data.post_id=img_post_id;
            data.user_id=window.localStorage['_id'];
            data.userid=window.localStorage['id'];
            $.ajax({
                type: 'POST',
                data: JSON.stringify(data),
                contentType: 'application/json',
                url: url+'/pbox',
                success: function(output){
                  n_p_ing=0;    
                  if(output.status==100){
                    post1_index = 0;  
                  }else{
                    toast_t2('pbox failed');
                  }
                }
            });
        //    window.FirebasePlugin.unregister(chtk);
        }
        function win2(r) {
            uploadPhoto2(imgData_arr[1],img_post_id,idal);
        }         
        function win3(r) {
            uploadPhoto3(imgData_arr[2],img_post_id,idal);
        }         
        function win4(r) {
            uploadPhoto4(imgData_arr[3],img_post_id);

        }         

        function fail(error) {
            n_p_ing=0;
            $('.loader_pn').remove();
           alert("An error has occurred: Code = " + error.code);
        }
        window.FirebasePlugin.getToken(function(token) {
          var data = {};
          data.user_id = window.localStorage['_id'];
          data.username = window.localStorage['name'];
          data.userid = window.localStorage['id'];
          data.tk=token;    
          data.text = $("#Pg5_post2_textarea").val()||' ';
          $("#Pg5_post2_textarea").val('');
          $Pg5_left.text('210');
          $Pg5_count.css({'width':'0'});    
          e.preventDefault();
          $.ajax({
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json',
            url: url+'/mypost',
            success: function(output){
                if(output.status == 1){
                    img_post_id = output.post_id;
                    uploadPhoto(imgData_arr[0],img_post_id,idal);
                }else if(output.status==600){
                  alert('token changed or ddos attak detected');  
                  $('.loader_pn').remove();    
                }else if(output.status==102){
                  toast_t2('하루 업로드 횟수 초과.');
                  $('.loader_pn').remove();    
                }else{
                  $('.loader_pn').remove();    
                }
            }
          });
        }, function(error) {
          token='failed';
          toast_t2('토큰을 가져오는데 실패하였습니다.-> 삭제 후 재설치');    
        });         
        $('.img_c_d').remove();
        $(".Pg5_post_img_div").css({'height':(w_w-22)+'px','border':'1px solid rgba(180,180,180,0.8)'});
        $(".Pg5_post_img_li").css({'height':(w_w)+'px'});          
    });
});

