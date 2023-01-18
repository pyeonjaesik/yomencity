var ch_s_index=0;
var p_start_upload_library = function(){
document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
        navigator.camera.getPicture(
            cameraCallback,
            function(message) {
                ch_s_index=0;
            },
            {
                quality         : 30,
                destinationType : navigator.camera.DestinationType.DATA_URL,
                sourceType      : navigator.camera.PictureSourceType.SAVEDPHOTOALBUM,
                allowEdit       : true

            }
        );
    }
    function cameraCallback(imageData) {
        var m_w = 120;
        var img = $('.ch_start_img');
        img.attr('src','data:image/jpeg;base64,' + imageData);
        img.load(function(){
            var nh = this.naturalHeight;
            var nw = this.naturalWidth;
            var gr = nh/nw;
            img.css({'position':'absolute'});
      if(gr>=1){
        img.css({'width':(m_w)+'px','height':(m_w*gr)+'px','top':(-1)*(m_w*gr-m_w)/2+'px','left':'0'});
      }else{
        img.css({'width':m_w/gr+'px','height':m_w+'px','left':(-1)*(m_w/gr-m_w)/2,'top':'0'});
      }
        ch_s_index=0;
        p_imgData=imageData;    
        });
    }
};
    function ps_uploadPhoto(imageData) {
        window.FirebasePlugin.getToken(function(token) {
          var options = new FileUploadOptions();
          options.fileKey="file";
          options.fileName=imageData.substr(imageData.lastIndexOf('/')+1);
          options.mimeType="image/jpeg";
          var params = {};
          params.tk = token;
          options.params = params;
          var ft = new FileTransfer();            
          ft.upload("data:image/jpeg;base64," + imageData, encodeURI(url2+"/ppupload"), win_ps, fail_ps, options);
        }, function(error) {
            console.error(error);
            alert('get token failed');
        });
    };
    function win_ps(r) {
      getp_img(window.localStorage['_id']);
      $('.ch_start_divc').remove();
      $('.loader_sign2').remove();    
    }  
    function fail_ps(error) {
       $('.ch_start_divc').remove();    
       alert("An error has occurred: Code = " + error.code);
       $('.loader_sign2').remove();    
    }
var ch_start=function(){
  var div_c=$('<div></div>');
  div_c.addClass('ch_start_divc');    
  div_c.css({'position':'fixed','top':'0','left':'0','width':w_w+'px','height':w_h+'px','background':'white'});
  var ch_span=$('<span>프로필 이미지 등록</span>');
  ch_span.css({'position':'absolute','top':'0','left':'0','width':w_w+'px','height':'60px','line-height':'60px','text-shadow':'0px 0px 0px rgba(255,255,255,0)','text-align':'center','font-size':'19px'});
  var ch_finish=$('<div>완료</div>');
  ch_finish.css({'position':'absolute','top':(w_h+290)/2+'px','right':'20px','width':'80px','height':'50px','line-height':'50px','background':'rgb(22,23,27)','color':'white','text-shadow':'0px 0px 0px rgba(255,255,255,0)','text-align':'center','border-radius':'2px'});
  div_c.append(ch_span);
  div_c.append(ch_finish);
  var img_c=$('<div></div>');
  img_c.css({'position':'absolute','width':'120px','height':'120px','overflow':'hidden','border-radius':'5px','top':(w_h-200)/2+'px','left':(w_w-120)/2+'px'});
  var nn=window.localStorage['name']||'';    
  var name=$('<span>'+nn+'</span>');
  name.css({'position':'absolute','top':((w_h+120)/2)+'px','left':'0','width':'100%','height':'30px','font-size':'22px','color':'rgb(22,23,27)','text-align':'center'});
  div_c.append(name);  
  var img=$('<img>');
  img.addClass('ch_start_img');    
  var img_s='img/unisex.png';    
  img.attr('src',img_s);    
  img.css({'position':'absolute','top':'0','left':'0','width':'120px','height':'120px'});
  img_c.append(img);
  var img_p=$('<img></img>');
  img_p.css({'position':'absolute','width':'35px','height':'35px','top':(w_h-225)/2+'px','right':(w_w-145)/2+'px'});
  img_p.attr('src','img/ch_plus.png');    
  div_c.append(img_c);
  div_c.append(img_p);
  var ch_button=$('<div></div>');
  ch_button.css({'position':'absolute','width':'140px','height':'140px','top':(w_h-220)/2+'px','left':(w_w-140)/2+'px'});
  div_c.append(ch_button);    
  ch_button.touchend(function(){
    if(ch_s_index==1){
      return;    
    }  
     ch_s_index=1;
     p_start_upload_library(); 
  });    
  ch_finish.touchstart(function(){
    ch_finish.css({'background':'green'});  
  });
  ch_finish.touchend(function(){
    ch_finish.css({'background':'rgb(22,23,27)'});
    if(p_imgData=='0'){
      toast_t5('프로필 이미지를 등록해 주시기 바랍니다.');    
    }else{
      loader_sign2();    
      ps_uploadPhoto(p_imgData);      
    }  
  });    
  $parent.append(div_c);    
};