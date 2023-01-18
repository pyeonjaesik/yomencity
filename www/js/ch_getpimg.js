var ch_getp_img = function(_id){
  var _id = _id;
  var data= {};
  data._id = _id;
  $.ajax({
    type:'POST',
    data: JSON.stringify(data),
    contentType: 'application/json',
    url:url+'/getpimg',
    success:function(output){
      if(output.status ==100){
        if(output.img =='1'){
          $('#Pg5_ch_profile_img').attr('src','img/man3.png');    
        }else if(output.img =='2'){
          $('#Pg5_ch_profile_img').attr('src','img/woman3.png');         
        }else{
            var m_w = w_w-70;
            var img_c = $('<div></div>');
           img_c.addClass('ch_img'); img_c.css({'position':'absolute','top':'0','left':'0','width':m_w+'px','height':m_w+'px','background':'green'});
            var img = $('<img>');
            img.attr('src',output.img);
            img.each(function(){
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
            });           
        }          
        
      }else{
      }    
    }
  });
};