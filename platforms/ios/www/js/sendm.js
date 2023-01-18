$(function(){
    $("#c_main_h_sendbtn").touchend(function(e){
        var ctext = $("#c_main_h_textarea");
        var c_v = ctext.val();
        if(c_v.length<1){
          return;
        }
        if(s_h==0){
          if(c_arr.length>0){
            var d=parseInt(Date.now());
            var dd=new Date(d);
            var dd2=new Date(c_arr[0].ct);    
            var cmc1=d-c_arr[0].ct;
            if(dd.getDate()!=dd2.getDate()||cmc1>86400000){
              add_cn2(d);
            }   
          }else{
            add_cn2(parseInt(Date.now()));  
          }            
        }
        s_i=1;
        e.preventDefault();
        var data = {};
        c_v=filterXSS(c_v);
        c_v = c_v.replace(/(\n|\r\n)/g, '<br>');
        data.txt = c_v;
        add_cm(c_v);
        s_h=1;
        ctext.val('');
        $("#c_main_h_textarea").css({'height':'50px'});
        data._id1 = window.localStorage['_id'];
        data.id1=window.localStorage['id'];
        data.id2 = h_arr[0].id;
        $.ajax({
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json',
            url: url+'/sendm',
            success: function(output){
                if(output.status == 100){
                }else if(output.status ==101){
                }else{
                  console.log('sendm err');    
                }
            }
        });
         var _cnc='.'+h_arr[0].id+'cr';
         $(_cnc).remove();
         var img = h_arr[0].img;
         if(img =='1'){
           img = 'img/man2.png';
         }else if(img=='2'){
           img='img/woman2.png'         
         }            
         add_cr(h_arr[0].id,h_arr[0].name,img,0,0);
    });
});