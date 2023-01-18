$(function(){
    $('#signupPg_header1_c').touchend(function(e){
        toast_t6('중복 확인을 하는중 입니다.');
        e.preventDefault();
        var data = {};
        data.id = $('#signupPg_id').val();
        var str = $('#signupPg_id').val();
        var err = 0; 
        for (var i=0; i<str.length; i++)  {
            var chk = str.substring(i,i+1); 
            if(!chk.match(/[0-9]|[a-z]|[A-Z]/)) { 
              err = err + 1; 
            } 
        } 
        if (err > 0) { 
            toast_t3("숫자 및 영문만 입력 가능합니다."); 
            return;
        }
        if(data.id.length==0){
          toast_t3('아이디를 입력해 주세요.');
          return;    
        }else if(data.id.length>13){
          toast_t3('아이디는 13자리 이하여야 합니다.');
          return;    
        }
        $.ajax({
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json',
            url: url+'/cert',
            success: function(output){
                if(output.status == 1){
                    $("#signupPg_header1_rightarrow").show();
                    $("#signupPg_header1_rightarrow_g").hide();
                    $("#signupPg_header1_xo").attr('src','img/check.png');
                    signup_id = data.id;
                  toast_t3('사용 가능한 아이디 입니다.')    
                }else if(output.status == 2){
                  toast_t3('이미 다른 사용자가 이 계정을 사용 중 입니다.');
                }else if(output.status==700){
                  toast_t3('ID에 script란 글자를 포함할 수 없습니다.');    
                }else{
                  toast_t3('서버 오류');
                }

            }
        });
    });
});