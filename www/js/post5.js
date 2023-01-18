$(function(){    
  $('#footdiv5').touchend(function(e){
    e.preventDefault();
    if(post5_index==0){    
      $('.add_i').remove();
      $('.add_fg').remove();
      $('.add_h').remove();
      $('.s_sp5').remove();    
      loader_p5();
      post5_index =1;
      $('.Pg5_profile_follow').css({'border-bottom':'2px solid white'});
      $('#Pg5_profile_follow1').css({'border-bottom':'2px solid rgb(30,38,49)'});
      var data = {};
      data.userid = window.localStorage['id'];
      $.ajax({
        type: 'POST',
        data: JSON.stringify(data),
        contentType: 'application/json',
        url: url+'/getinfoid',
        success:function(output){
          if(output.status ==100){
            post51_id=output.post_id;
            var pml = post51_id.length;
            post5_cont = parseInt(pml/21);
            var data ={};
            data.post_id =[];
            for(var i=0;i<21;i++){
              data.post_id.push(post51_id[i]);    
            }  
            $.ajax({
              type: 'POST',
              data: JSON.stringify(data),
              contentType: 'application/json',
              url: url+'/getinfoimg',
              success: function(output){
                $('.add_i').remove();
                $('.add_fg').remove();
                $('.add_h').remove();
                $('.s_sp5').remove();
                $('.loader_p5').remove(); 
                if(output.status==100){
                  for(var i=0;i<21;i+=3){
                     addinfo3(output.img[i],output.img[i+1],output.img[i+2],post51_id[i],post51_id[i+1],post51_id[i+2]);
                  }                      
                }else{
                /// output.status가 뭔지에 따라 err상황 처리해줄 것.
                }    
              }  
          });    
          }else if(output.status ==101){
            post51_id=output.post_id;
            var pml = post51_id.length;
            var p3 = pml%3;
            var data = {};
            data.post_id = [];    
            data.post_id = post51_id;
            post5_cont=1;  
            $.ajax({
              type: 'POST',
              data: JSON.stringify(data),
              contentType: 'application/json',
              url: url+'/getinfoimg',
              success: function(output){
                $('.add_i').remove();
                $('.add_fg').remove();
                $('.add_h').remove();
                $('.s_sp5').remove();
                $('.loader_p5').remove();  
                if(output.status==100){
                  var pp = pml-p3;
                  for(var i=0;i<pp;i+=3){
                    addinfo3(output.img[i],output.img[i+1],output.img[i+2],post51_id[i],post51_id[i+1],post51_id[i+2]);    
                  }    
                  if(p3==2){
                    addinfo2(output.img[i],output.img[i+1],post51_id[i],post51_id[i+1]);    
                  }else if(p3 ==1){
                    addinfo1(output.img[i],post51_id[i]);    
                  }
                    
                }else{
                  /// output.status가 뭔지에 따라 err상황 처리해줄 것.
                } 
              }
            });    
          }else if(output.status ==102){             
             $('.loader_p5').remove();  
             nopost5(1);
          }
        }    
      });
        //
    }else if(post5_index==1){
        $('.infoarea').scrollTop('0');
    }else if(post5_index==2){
        post5_index=1;
    }
  });
  $('#Pg5_profile_follow1').touchend(function(e){
    e.preventDefault();
    $('.add_i').remove();
    $('.add_fg').remove();
    $('.add_h').remove();
    $('.s_sp5').remove();
    loader_p5();
    $('.Pg5_profile_follow').css({'border-bottom':'2px solid white'});
    $('#Pg5_profile_follow1').css({'border-bottom':'2px solid rgb(30,38,49)'});
    var data = {};
    data.userid = window.localStorage['id'];
    $.ajax({
      type: 'POST',
      data: JSON.stringify(data),
      contentType: 'application/json',
      url: url+'/getinfoid',
      success:function(output){
          post5_cont_cp=1;
        if(output.status ==100){
            post51_id=output.post_id;
            var pml = post51_id.length;
            post5_cont = parseInt(pml/21);
            var data ={};
            data.post_id =[];
            for(var i=0;i<21;i++){
              data.post_id.push(post51_id[i]);    
            }  
            $.ajax({
              type: 'POST',
              data: JSON.stringify(data),
              contentType: 'application/json',
              url: url+'/getinfoimg',
              success: function(output){
                $('.add_i').remove();
                $('.add_fg').remove();
                $('.add_h').remove();
                $('.s_sp5').remove();
                $('.loader_p5').remove();  
                if(output.status==100){
                  for(var i=0;i<21;i+=3){
                    addinfo3(output.img[i],output.img[i+1],output.img[i+2],post51_id[i],post51_id[i+1],post51_id[i+2]);    
                  }
                }else{
                /// output.status가 뭔지에 따라 err상황 처리해줄 것.
                }    
              }  
          });  
        }else if(output.status ==101){
          post51_id=output.post_id;
          var pml = post51_id.length;
          var p3 = pml%3;
          var data = {};
          data.post_id = [];    
          data.post_id = post51_id;
          post5_cont=1;    
          $.ajax({
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json',
            url: url+'/getinfoimg',
            success: function(output){
              $('.add_i').remove();
              $('.add_fg').remove();
              $('.add_h').remove();
              $('.s_sp5').remove();
              $('.loader_p5').remove();    
              if(output.status==100){
                var pp = pml-p3;
                for(var i=0;i<pp;i+=3){
                  addinfo3(output.img[i],output.img[i+1],output.img[i+2],post51_id[i],post51_id[i+1],post51_id[i+2]);    
                }
                if(p3==2){
                  addinfo2(output.img[i],output.img[i+1],post51_id[i],post51_id[i+1]);    
                }else if(p3 ==1){
                  addinfo1(output.img[i],post51_id[i]);    
                }  

              }else{
              /// output.status가 뭔지에 따라 err상황 처리해줄 것.
              } 
            }
          });    
        }else if(output.status ==102){           
          $('.loader_p5').remove();    
          nopost5(1);
        }
      }    
    });      
  });
  $('#Pg5_profile_follow2').touchend(function(e){
    $('.add_i').remove();
    $('.add_fg').remove();
    $('.add_h').remove();
    $('.s_sp5').remove();
    loader_p5();
    e.preventDefault();
    var data ={};
    data.id = window.localStorage['id'];
    $.ajax({
      type: 'POST',
      data: JSON.stringify(data),
      contentType: 'application/json',
      url: url+'/getfgid',    
      success:function(output){
        if(output.status ==100){
          post52_id = output.userid;
          var data ={};
          data.userid=[];    
          for(var w=0;w<20;w++){
            data.userid.push(post52_id[w]);  
          }
          post5_cont = parseInt(post52_id.length/20);
          $.ajax({
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json',
            url: url+'/getf',
            success:function(output){
                $('.add_i').remove();
                $('.add_fg').remove();
                $('.add_h').remove();
                $('.s_sp5').remove();
                $('.loader_p5').remove();
                s_sp5(window.localStorage['id'],post52_id.length,1);
                post5_cont_cp=1;
              if(output.status=100){
                for(var k=0;k<20;k++){
                  add_fg(post52_id[k],output.name[k],output.img[k]);
                } 
              }else{
              }    
            }  
          });  
        }else if(output.status ==101){
          post52_id = output.userid;
          var u_leng = post52_id.length;
          var data ={};
          data.userid = post52_id;
          post5_cont=1;    
          $.ajax({
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json',
            url: url+'/getf',
            success:function(output){
                $('.add_i').remove();
                $('.add_fg').remove();
                $('.add_h').remove();
                $('.s_sp5').remove();
                $('.loader_p5').remove();
                s_sp5(window.localStorage['id'],u_leng,1);
                post5_cont_cp=1;
              if(output.status=100){
                for(var k=0;k<u_leng;k++){
                  add_fg(post52_id[k],output.name[k],output.img[k]);
                } 
              }else{
              }    
            }  
          });    
        }else if(output.status ==102){
          $('.loader_p5').remove();            
          nopost5(2);  
        }else{
        }
      }     
    });  
  });
  $('#Pg5_profile_follow3').touchend(function(e){
    $('.add_i').remove();
    $('.add_fg').remove();
    $('.add_h').remove();
    $('.s_sp5').remove();
    loader_p5();  
    e.preventDefault();
    var data ={};
    data.id = window.localStorage['id'];
    $.ajax({
      type: 'POST',
      data: JSON.stringify(data),
      contentType: 'application/json',
      url: url+'/getfdid',    
      success:function(output){
        if(output.status ==100){
          post52_id = output.userid;
          var data ={};
          data.userid=[];    
          for(var w=0;w<20;w++){
            data.userid.push(post52_id[w]);  
          }
          post5_cont = parseInt(post52_id.length/20);    
          $.ajax({
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json',
            url: url+'/getf',
            success:function(output){
                $('.add_i').remove();
                $('.add_fg').remove();
                $('.add_h').remove();
                $('.s_sp5').remove();
                $('.loader_p5').remove();
                s_sp5(window.localStorage['id'],post52_id.length,2);
                post5_cont_cp=1;
              if(output.status=100){
                for(var k=0;k<20;k++){
                  add_fd(post52_id[k],output.name[k],output.img[k]);
                } 
              }else{
              }    
            }  
          }); 
        }else if(output.status ==101){
          post52_id = output.userid;
          var u_leng = post52_id.length;
          var data ={};
          data.userid = post52_id;
          post5_cont=1;    
          $.ajax({
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json',
            url: url+'/getf',
            success:function(output){
                $('.add_i').remove();
                $('.add_fg').remove();
                $('.add_h').remove();
                $('.s_sp5').remove();
                $('.loader_p5').remove();
                s_sp5(window.localStorage['id'],u_leng,2);
                post5_cont_cp=1;
              if(output.status=100){
                for(var k=0;k<u_leng;k++){
                  add_fd(post52_id[k],output.name[k],output.img[k]);
                } 
              }else{
              }    
            }  
          });    
        }else if(output.status ==102){
          $('.loader_p5').remove();            
          nopost5(3);  
        }else{
        }
      }     
    });  
  });
  $('#Pg5_profile_follow4').touchend(function(e){
    $('.add_i').remove();
    $('.add_fg').remove();
    $('.add_h').remove();
    $('.s_sp5').remove();
    loader_p5();  
    e.preventDefault();
    var data ={};
    data.id = window.localStorage['id'];
    $.ajax({
      type: 'POST',
      data: JSON.stringify(data),
      contentType: 'application/json',
      url: url+'/gethl',    
      success:function(output){
        if(output.status==100){
          hl_arr=output.hl;
          post5_cont = parseInt(hl_arr.length/20);    
          var data2={};
          data2.id=[];
          for(var i=0;i<20;i++){
           data2.id[i]=hl_arr[i].id;    
          }
          $.ajax({
            type:'POST',
            data: JSON.stringify(data2),
            contentType:'application/json',
            url: url+'/getpnarr',
            success:function(output){
              post5_cont_cp=1;    
              var img=output.img;
              var name=output.name;    
             $('.add_i').remove();
             $('.add_fg').remove();
             $('.add_h').remove();
             $('.s_sp5').remove();
             $('.loader_p5').remove();    
              $('.infoarea').scrollTop('0');
              for(var i=0;i<20;i++){  
                if(hl_arr[i].type==1){
                  addh1(hl_arr[i].id,name[i],img[i],hl_arr[i].ct);  
                }else if(hl_arr[i].type==2){
                  addh2(hl_arr[i].id,name[i],img[i],hl_arr[i].post_id,hl_arr[i].ct); 
                }else if(hl_arr[i].type==3){
                  addh3(hl_arr[i].id,name[i],img[i],hl_arr[i].post_id,hl_arr[i].comment_id,hl_arr[i].ct);  
                }else{
                  addh4(hl_arr[i].id,name[i],img[i],hl_arr[i].post_id,hl_arr[i].ct);  
                }    
              }  
            }    
          });           
        }else if(output.status==101){
          hl_arr=output.hl;
          var h_leng=hl_arr.length;  
          var data2={};
          data2.id=[];
          for(var i=0;i<h_leng;i++){
           data2.id[i]=hl_arr[i].id;    
          }
          post5_cont=1;
          $.ajax({
            type:'POST',
            data: JSON.stringify(data2),
            contentType:'application/json',
            url: url+'/getpnarr',
            success:function(output){
              post5_cont_cp=1;    
              $('.add_i').remove();
              $('.add_fg').remove();
              $('.add_h').remove();
              $('.s_sp5').remove();
              $('.loader_p5').remove();    
              var img=output.img;
              var name=output.name;    
              var i_leng=img.length;
              $('.infoarea').scrollTop('0');
              for(var i=0;i<i_leng;i++){  
                if(hl_arr[i].type==1){
                  addh1(hl_arr[i].id,name[i],img[i],hl_arr[i].ct);  
                }else if(hl_arr[i].type==2){
                  addh2(hl_arr[i].id,name[i],img[i],hl_arr[i].post_id,hl_arr[i].ct); 
                }else if(hl_arr[i].type==3){
                  addh3(hl_arr[i].id,name[i],img[i],hl_arr[i].post_id,hl_arr[i].comment_id,hl_arr[i].ct);  
                }else{
                  addh4(hl_arr[i].id,name[i],img[i],hl_arr[i].post_id,hl_arr[i].ct);  
                }    
              }  
            }    
          });            
        }else if(output.status==102){
          $('.loader_p5').remove();            
          nopost5(4);    
        }else{
        }
      }     
    });  
  });    
});