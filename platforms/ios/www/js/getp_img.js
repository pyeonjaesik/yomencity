var getp_img = function(_id){
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
          $('#Pg5_profile_img').attr('src','img/man.png');
          $('#postarea1_post_img').attr('src','img/man.png');    
        }else if(output.img=='2'){
          $('#Pg5_profile_img').attr('src','img/woman.png');
          $('#postarea1_post_img').attr('src','img/woman.png');    
        }else{
          var div = $('#Pg5_profile_img_container');
          var img = $('#Pg5_profile_img');
          img.attr('src',output.img);
          img.each(function(){
            img.load(function(){
              var nh = this.naturalHeight;
              var nw = this.naturalWidth;
              var gr = nh/nw;
              var m_w = 50;
                if(gr>=1){
                  img.css({'width':(m_w)+'px','height':(m_w*gr)+'px','top':(-1)*(m_w*gr-m_w)/2+'px','left':'0'});
                }else{
                  img.css({'width':m_w/gr+'px','height':m_w+'px','left':(-1)*(m_w/gr-m_w)/2,'top':'0'});
                }
            
            });
          });
            
          var img2 = $('#postarea1_post_img');
          img2.attr('src',output.img);
          img2.each(function(){
            img.load(function(){
              var nh = this.naturalHeight;
              var nw = this.naturalWidth;
              var gr = nh/nw;
              var m_w = 50;
                if(gr>=1){
                  img2.css({'width':(m_w)+'px','height':(m_w*gr)+'px','top':(-1)*(m_w*gr-m_w)/2+'px','left':'0'});
                }else{
                  img2.css({'width':m_w/gr+'px','height':m_w+'px','left':(-1)*(m_w/gr-m_w)/2,'top':'0'});
                }
            
            });
          });            
        }          
        
      }else{
      }    
    }
  });
};