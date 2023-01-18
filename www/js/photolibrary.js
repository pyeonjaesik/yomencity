var upload_library = function(){
document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
        navigator.camera.getPicture(
            cameraCallback,
            function(message) {
            },
            {
                quality         : 50,
                destinationType : navigator.camera.DestinationType.DATA_URL,
                sourceType      : navigator.camera.PictureSourceType.SAVEDPHOTOALBUM,
                allowEdit       : true

            }
        );
    }
    function cameraCallback(imageData) {
        $("#Pg5_post").show();                
        var image = document.getElementById('Pg5_post_img');
        image.src = "data:image/jpeg;base64," + imageData;
        $("#foot").hide();
        imgData = imageData;
    }
};
var p_upload_library = function(){
document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
        navigator.camera.getPicture(
            cameraCallback,
            function(message) {
                $('.loader_ch').remove();
                $("#Pg5_ch_profile_library_s").hide();
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
        var m_w = w_w-70;
        var img_c = $('<div></div>');
       img_c.addClass('ch_img'); img_c.css({'position':'absolute','top':'0','left':'0','width':m_w+'px','height':m_w+'px','background':'green'});
        var img = $('<img></img>');
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

        });
        img_c.append(img);
      var element = $('#Pg5_ch_profile_img_c');
        //element.css({'background':'blue'});
      element.append(img_c);
        p_imgData = imageData;
        $('.loader_ch').remove();
        $("#Pg5_ch_profile_library_s").hide();
        ch_f =1;
    }
};
var p_qual =60;
var upload_library1 = function(){
document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
        navigator.camera.getPicture(
            cameraCallback,
            function(message) {
                $('.loader_p1').remove();
            },
            {
                quality         : p_qual,
                destinationType : navigator.camera.DestinationType.DATA_URL,
                sourceType      : navigator.camera.PictureSourceType.SAVEDPHOTOALBUM,
                allowEdit       : true
            }
        );
    }
    function cameraCallback(imageData) {
        var _div = $("#Pg5_post_img_div1");
        var _li = $("#Pg5_post_img_li1");
        var img_d = $("<img></img>");
        img_d.css({'position':'absolute','right':'5px','top':'5px','width':'30px'});
        img_d.attr('src','img/img_minus.png');
        var img_c = $("<div></div>");
        img_c.css({'width':(w_w-22)+'px','height':(w_w-22)+'px','position':'absolute','top':'0','left':'0','background':'white'});        
        var img = $("<img></img>");
        img.attr('src','data:image/jpeg;base64,' + imageData);
        img.load(function(){
            var nh = this.naturalHeight;
            var nw = this.naturalWidth;
            var gr = nh/nw;
            img.css({'position':'absolute'});
            if(gr>=2){
                var m_w = (w_w-22)/(gr/2);
                img.css({'width':(m_w)+'px','top':'0','left':(w_w-m_w)/2+'px'});                    
                _div.css({'height':(m_w*gr)+'px','border':'1px solid white'});
                _li.css({'height':((m_w*gr)+22)+'px'});

            }else{
                img.css({'width':(w_w-22)+'px','height':((w_w-22)*gr)+'px','left':'0','top':'0'});
                _div.css({'height':((w_w-22)*gr)+'px','border':'1px solid white'});
                _li.css({'height':((w_w-22)*gr+22)+'px'});
            }
          imgData = imageData;
          $('.loader_p1').remove();
          p1_ne1=100;
          toast_t2('이미지 처리중 입니다.');    
          setTimeout(function(){p1_ne1=1;},1000);
        });
        img_c.append(img);
        _div.append(img_c);
        _div.append(img_d);
        img_c.addClass('img_c_d');
        img_d.addClass('img_c_d');            
        img_d.click(function(){
            p1_ne1=0;
            $(this).remove();
            img_c.remove();
            _div.css({'height':(w_w-22)+'px','border':'1px solid rgba(180,180,180,0.8)'});
            _li.css({'height':(w_w)+'px'});
            imgData = 3;
        });
    }
};
var upload_library2 = function(){
document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
        navigator.camera.getPicture(
            cameraCallback,
            function(message) {
                $('.loader_p1').remove();
            },
            {
                quality         : p_qual,
                destinationType : navigator.camera.DestinationType.DATA_URL,
                sourceType      : navigator.camera.PictureSourceType.SAVEDPHOTOALBUM,
                allowEdit       : true
            }
        );
    }
    function cameraCallback(imageData) {
        var _div = $("#Pg5_post_img_div2");
        var _li = $("#Pg5_post_img_li2");
        var img_d = $("<img></img>");
        img_d.css({'position':'absolute','right':'5px','top':'5px','width':'30px'});
        img_d.attr('src','img/img_minus.png');
        var img_c = $("<div></div>");
        img_c.css({'width':(w_w-22)+'px','height':(w_w-22)+'px','position':'absolute','top':'0','left':'0','background':'white'});        
        var img = $("<img></img>");
        img.attr('src','data:image/jpeg;base64,' + imageData);
        img.load(function(){
            var nh = this.naturalHeight;
            var nw = this.naturalWidth;
            var gr = nh/nw;
            img.css({'position':'absolute'});
            if(gr>=2){
                var m_w = (w_w-22)/(gr/2);
                img.css({'width':(m_w)+'px','top':'0','left':(w_w-m_w)/2+'px'});                    
                _div.css({'height':(m_w*gr)+'px','border':'1px solid white'});
                _li.css({'height':((m_w*gr)+22)+'px'});
            }else{
                img.css({'width':(w_w-22)+'px','height':((w_w-22)*gr)+'px','left':'0','top':'0'});
                _div.css({'height':((w_w-22)*gr)+'px','border':'1px solid white'});
                _li.css({'height':((w_w-22)*gr+22)+'px'});
            }
            imgData2 = imageData;
            p1_ne2=100;
            $('.loader_p1').remove();
            toast_t2('이미지 처리중 입니다.');
            setTimeout(function(){p1_ne2=1;},1000);
        });
        img_c.append(img);
        _div.append(img_c);
        _div.append(img_d);
        img_c.addClass('img_c_d');
        img_d.addClass('img_c_d');                
        img_d.click(function(){
            $(this).remove();
            img_c.remove();
            _div.css({'height':(w_w-22)+'px','border':'1px solid rgba(180,180,180,0.8)'});
            _li.css({'height':(w_w)+'px'});
            imgData2 = 3;
            p1_ne2=0;
        });
    }
};
var upload_library3 = function(){
document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
        navigator.camera.getPicture(
            cameraCallback,
            function(message) {
                $('.loader_p1').remove();
            },
            {
                quality         : p_qual,
                destinationType : navigator.camera.DestinationType.DATA_URL,
                sourceType      : navigator.camera.PictureSourceType.SAVEDPHOTOALBUM,
                allowEdit       : true
            }
        );
    }
    function cameraCallback(imageData) {
        var _div = $("#Pg5_post_img_div3");
        var _li = $("#Pg5_post_img_li3");
        var img_d = $("<img></img>");
        img_d.css({'position':'absolute','right':'5px','top':'5px','width':'30px'});
        img_d.attr('src','img/img_minus.png');
        var img_c = $("<div></div>");
        img_c.css({'width':(w_w-22)+'px','height':(w_w-22)+'px','position':'absolute','top':'0','left':'0','background':'white'});        
        var img = $("<img></img>");
        img.attr('src','data:image/jpeg;base64,' + imageData);
        img.load(function(){
            var nh = this.naturalHeight;
            var nw = this.naturalWidth;
            var gr = nh/nw;
            img.css({'position':'absolute'});
            if(gr>=2){
                var m_w = (w_w-22)/(gr/2);
                img.css({'width':(m_w)+'px','top':'0','left':(w_w-m_w)/2+'px'});                    
                _div.css({'height':(m_w*gr)+'px','border':'1px solid white'});
                _li.css({'height':((m_w*gr)+22)+'px'});
            }else{
                img.css({'width':(w_w-22)+'px','height':((w_w-22)*gr)+'px','left':'0','top':'0'});
                _div.css({'height':((w_w-22)*gr)+'px','border':'1px solid white'});
                _li.css({'height':((w_w-22)*gr+22)+'px'});
            }
            imgData3 = imageData;
            p1_ne3=100;
            $('.loader_p1').remove();
            toast_t2('이미지 처리중 입니다.');
            setTimeout(function(){p1_ne3=1;},1000);                
        });
        img_c.append(img);
        _div.append(img_c);
        _div.append(img_d);
        img_c.addClass('img_c_d');
        img_d.addClass('img_c_d');                
        img_d.click(function(){
            $(this).remove();
            img_c.remove();
            _div.css({'height':(w_w-22)+'px','border':'1px solid rgba(180,180,180,0.8)'});
            _li.css({'height':(w_w)+'px'});
            imgData3 = 3;
            p1_ne3=0;
        });
    }
};
var upload_library4 = function(){
document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
        navigator.camera.getPicture(
            cameraCallback,
            function(message) {
                $('.loader_p1').remove();
            },
            {
                quality         : p_qual,
                destinationType : navigator.camera.DestinationType.DATA_URL,
                sourceType      : navigator.camera.PictureSourceType.SAVEDPHOTOALBUM,
                allowEdit       : true
            }
        );
    }
    function cameraCallback(imageData) {
        var _div = $("#Pg5_post_img_div4");
        var _li = $("#Pg5_post_img_li4");
        var img_d = $("<img></img>");
        img_d.css({'position':'absolute','right':'5px','top':'5px','width':'30px'});
        img_d.attr('src','img/img_minus.png');
        var img_c = $("<div></div>");
        img_c.css({'width':(w_w-22)+'px','height':(w_w-22)+'px','position':'absolute','top':'0','left':'0','background':'white'});        
        var img = $("<img></img>");
        img.attr('src','data:image/jpeg;base64,' + imageData);
        img.load(function(){
            var nh = this.naturalHeight;
            var nw = this.naturalWidth;
            var gr = nh/nw;
            img.css({'position':'absolute'});
            if(gr>=2){
                var m_w = (w_w-22)/(gr/2);
                img.css({'width':(m_w)+'px','top':'0','left':(w_w-m_w)/2+'px'});                    
                _div.css({'height':(m_w*gr)+'px','border':'1px solid white'});
                _li.css({'height':((m_w*gr)+22)+'px'});
            }else{
                img.css({'width':(w_w-22)+'px','height':((w_w-22)*gr)+'px','left':'0','top':'0'});
                _div.css({'height':((w_w-22)*gr)+'px','border':'1px solid white'});
                _li.css({'height':((w_w-22)*gr+22)+'px'});
            }
            imgData4 = imageData;
            p1_ne4=100;
            $('.loader_p1').remove();
            toast_t2('이미지 처리중 입니다.');
            setTimeout(function(){p1_ne4=1;},1000);    
        });
        img_c.append(img);
        _div.append(img_c);
        _div.append(img_d);
        img_c.addClass('img_c_d');
        img_d.addClass('img_c_d');                
        img_d.click(function(){
            $(this).remove();
            img_c.remove();
            _div.css({'height':(w_w-22)+'px','border':'1px solid rgba(180,180,180,0.8)'});
            _li.css({'height':(w_w)+'px'});
            imgData4 = 3;
            p1_ne4=0;
        });
    }
};