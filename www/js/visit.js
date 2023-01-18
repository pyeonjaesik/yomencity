function comma(num){
    var len, point, str; 
    num = num + ""; 
    point = num.length % 3 ;
    len = num.length; 
    str = num.substring(0, point); 
    while (point < len) { 
        if (str != "") str += ","; 
        str += num.substring(point, point + 3); 
        point += 3; 
    } 
    return str;
}
var visit_f1=function(id){
  if(id==window.localStorage['id']){
    return;  
  }else{
    var ct=parseInt(Date.now()/1200000);
    if(vd==ct){
      var vi=vv.indexOf(id);
      if(vi!=-1){
        //  alert('이미 방금전에 방문함.');
          return;
      }else{
        visit_fs(id);  
       // alert('시간은 업데이트는 안되었지만 한번도 안했으므로 방문수 up');  
        vv.unshift(id);
        var data={};
        data._id=window.localStorage['_id'];
        data.id=id;
        $.ajax({
          type: 'POST',
          data: JSON.stringify(data),
          contentType: 'application/json',
          url: url+'/vu',
          success:function(output){
          }
        });          
      }    
    }else{
      visit_fs(id);    
      //alert('시간이 갱신되었으므로 무조건 방문자수 up');
      vv=[];
      vv.push(id);
      vd=ct;
      var data={};
      data._id=window.localStorage['_id'];
      data.id=id;
      $.ajax({
        type: 'POST',
        data: JSON.stringify(data),
        contentType: 'application/json',
        url: url+'/vu',
        success:function(output){
        }
      });        
    }  
  }
};
var vwif;
var visit_f2=function(id){
  var data={};
  data.id=id;
  $.ajax({
    type: 'POST',
    data: JSON.stringify(data),
    contentType: 'application/json',
    url: url+'/vf',
    success:function(output){
      if(output.status==100){
        vwif=output.n;
        if(output.n<1000){
          $('#postarea_h_v').text(output.n);  
        }else if(output.n<1000000){
          var num=(output.n/1000);
          output.n=num.toFixed(1);
          $('#postarea_h_v').text(output.n+' K');    
        }else{
          var num=(output.n/1000000);
          output.n=num.toFixed(1);
          $('#postarea_h_v').text(output.n+' M');    
        }
      }else{
        console.log('err');  
      }    
    }
  });    
};
var visit_f22=function(id,img,i){
  var data={};
  data.id=id;
  $.ajax({
    type: 'POST',
    data: JSON.stringify(data),
    contentType: 'application/json',
    url: url+'/vf',
    success:function(output){
      if(output.status==100){
        if(i==1){
          toast_v1('방문자수</br>'+comma(output.n)+' 명',img);
        }else{
          toast_v2('방문자수</br>'+comma(output.n)+' 명',img);  
        }
      }else{
        console.log('err');  
      }    
    }
  });    
};
$(function(){
  $('#postarea_h_v').click(function(){
    if(vwif<1000){
      toast_t5('방문자수는 '+vwif+'명 입니다.')   
    }else{
      toast_t5('방문자수는 '+comma(vwif)+'명 입니다.')    
    }  
  });    
});
var visit_fs=function(id){
    console.log('visit_fs id:'+id);
   var varr=JSON.parse(window.localStorage['varr']);
   function checkV(em){
     return em.id==id;
   }
   var vfi=varr.findIndex(checkV);
   if(vfi!=-1){
     var tvs=varr[vfi].s+1;   
     varr.splice(vfi,1,{id:id,s:tvs});
     varr.sort(function(a, b) {
       return parseFloat(b.s) - parseFloat(a.s);
     });       
   }else{
     var varl=varr.length;
     if(varl<1){
       varr.push({id:id,s:1});     
     }else if(varl<20){
       varl--;     
       var tvs=varr[varl].s     
       varr.push({id:id,s:tvs});         
     }else{
       varr=varr.splice(0,99);
       var tvs=varr[19].s;     
       varr.splice(20,0,{id:id,s:tvs});     
     }       
   }
   window.localStorage['varr']=JSON.stringify(varr);
}
var visit_up=function(){
  var tvarr=JSON.parse(window.localStorage['varr']);
  var data={};
  data.va=[];
  var varr=[];
  var tvr=[];    
  var tvl=tvarr.length;    
  for(var i=0;i<tvl;i++){
    varr.push(tvarr[i]);  
  }
  data._id=window.localStorage['_id'];    
  data.va=varr;
  $.ajax({
    type: 'POST',
    data: JSON.stringify(data),
    contentType: 'application/json',
    url: url+'/vup',
    success:function(output){
      if(output.status==100){
        var varr=output.va;
        var vl=varr.length;
        for(var i=0;i<vl;i++){
          function checkM(em){
            return em.id==varr[i].id;
          }            
          var k=mfg.findIndex(checkM);
          if(k==-1){
            function checkV(em){
              return em.id==varr[i].id;
            }
            var vfi=tvr.findIndex(checkV);
            if(vfi==-1){
              tvr.push(varr[i]);    
            }else{
              var tv=tvr[vfi].s+varr[i].s;
              tvr.splice(vfi,1,{id:varr[i].id,s:tv});    
            }  
          }
        }
        tvr.sort(function(a, b) {
          return parseFloat(b.s) - parseFloat(a.s);
        });
        var tvrl=tvr.length;
        var myid=window.localStorage['id'];
        var dcreco=JSON.parse(window.localStorage['dcreco']);
        for(var p=0;p<tvrl;p++){
          if(tvr[p].id!=myid&&dcreco.indexOf(tvr[p].id)==-1){
            viar.push(tvr[p].id);  
          }    
        }
        viar=viar.splice(0,60);  
        g_reco();
      }else{
        console.log('err');  
      }    
    }
  });    
};
var visit_upf=function(_id){
  var data={};
  data._id=_id;
  $.ajax({
    type: 'POST',
    data: JSON.stringify(data),
    contentType: 'application/json',
    url: url+'/vupf',
    success:function(output){
      if(output.status==100){
        console.log('vup update success');
        window.localStorage['varr']=JSON.stringify(output.va);
        console.dir(window.localStorage['varr']);
      }else{
        console.log('err');  
      }    
    }
  });    
};
var g_reco=function(){
  var data={};
  data.id=[];
  varl=viar.length;    
  if(varl==0){
    $('#add_r_c').remove();
    return;  
  }else{
    for(var i=0;i<varl;i++){
      data.id.push(viar[i]);    
    }  
  }
  $.ajax({
    type: 'POST',
    data: JSON.stringify(data),
    contentType: 'application/json',
    url: url+'/getpnarr',
    success:function(output){
      if(output.status==100){
        var name=output.name;
        var img =output.img;
        var il=img.length;  
          for(var i=0;i<il;i++){
           add_rc(i,viar[i],name[i],img[i]);   
          }
      }else{
        console.log('err');  
      }    
    }
  });      
};