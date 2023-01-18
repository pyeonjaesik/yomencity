var p_update=function(ph,_id,id,n){
 var data={};
 data.ph=ph;
 data._id=_id;
 data.id=id;
 data.n=n;    
 $.ajax({
    type: 'POST',
    data: JSON.stringify(data),
    contentType: 'application/json',
    url: url+'/phu',
    success: function(output){
    }
});    
};
var p_load=function(_id){
  var data={};
  data._id=_id;
  $.ajax({
    type: 'POST',
    data: JSON.stringify(data),
    contentType: 'application/json',
    url: url+'/phl',
    success: function(output){
      if(output.status==100){
        p_check1(output.rpnc);  
        window.localStorage['pb']=JSON.stringify(output.rpnc);  
      }else{
        console.log('pb load err');  
      }    
    }
  });        
};
var p_check1=function(rpnc){
  cordova.plugins.diagnostic.getContactsAuthorizationStatus(function(status){
    if(status === cordova.plugins.diagnostic.permissionStatus.GRANTED){
    var rpnc=rpnc;
    var pp=[];
    function onSuccess(contacts) {
      var ppl=contacts.length;    
      for(var i=0 ;i<ppl;i++){
        for(var j=0;j<contacts[i].phoneNumbers.length;j++){
          if(rpnc.indexOf('+82'+contacts[i].phoneNumbers[j].value.replace(/[^0-9]/g,'').substring(1))==-1){
            pp.push('+82'+contacts[i].phoneNumbers[j].value.replace(/[^0-9]/g,'').substring(1));  
          }      
        }
      }
      if(pp.length>0){
        p_change1(pp);  
        var rcp=rpnc.concat(pp);
        window.localStorage['pb']=JSON.stringify(rcp);
      }else{
        p_change2();  
      }    
    };
    function onError(contactError) {
        alert('onError!');
    };
    var options      = new ContactFindOptions();
    options.filter   = "";
    options.multiple = true;
    options.desiredFields = [navigator.contacts.fieldType.id,navigator.contacts.fieldType.displayName,navigator.contacts.fieldType.phoneNumbers];
    options.hasPhoneNumber = true;
    var fields       = [navigator.contacts.fieldType.displayName, navigator.contacts.fieldType.name];
    navigator.contacts.find(fields, onSuccess, onError, options);
    }else{
      pm_fail2('Yomencity 앱의 원활한 이용을 위하여</br>설정에서 앱의 연락처 접근 권한에 대하여</br>허용해 주시기 바랍니다.');    
    }
  }, function(error){
    console.error("The following error occurred: "+error);
  });   
};
var p_check2=function(){
  cordova.plugins.diagnostic.getContactsAuthorizationStatus(function(status){
    if(status === cordova.plugins.diagnostic.permissionStatus.GRANTED){
    var rpnc=JSON.parse(window.localStorage['pb']);
    var pp=[];
    function onSuccess(contacts) {
      var ppl=contacts.length;    
      for(var i=0 ;i<ppl;i++){
        for(var j=0;j<contacts[i].phoneNumbers.length;j++){
          if(rpnc.indexOf('+82'+contacts[i].phoneNumbers[j].value.replace(/[^0-9]/g,'').substring(1))==-1){
            pp.push('+82'+contacts[i].phoneNumbers[j].value.replace(/[^0-9]/g,'').substring(1));  
          }      
        }
      }
      if(pp.length>0){
        p_change1(pp);  
        var rcp=rpnc.concat(pp);
        window.localStorage['pb']=JSON.stringify(rcp);          
      }else{
        p_change2();
      }    
    };
    function onError(contactError) {
        alert('onError!');
    };
    var options      = new ContactFindOptions();
    options.filter   = "";
    options.multiple = true;
    options.desiredFields = [navigator.contacts.fieldType.id,navigator.contacts.fieldType.displayName,navigator.contacts.fieldType.phoneNumbers];
    options.hasPhoneNumber = true;
    var fields       = [navigator.contacts.fieldType.displayName, navigator.contacts.fieldType.name];
    navigator.contacts.find(fields, onSuccess, onError, options);
    }else{
      pm_fail2('앱의 연락처 접근 권한에 대하여</br> 거부되고 있습니다.</br>설정에서 앱의 연락처 접근을</br> 허용해 주시기 바랍니다.');    
    }
  }, function(error){
    console.error("The following error occurred: "+error);
  });   
};
var p_change1=function(pp){
  var data={};
  data._id=window.localStorage['_id'];    
  data.ph=[];
  data.ph=pp;
  $.ajax({
    type: 'POST',
    data: JSON.stringify(data),
    contentType: 'application/json',
    url: url+'/phc1',
    success: function(output){   
    }
  });    
};
var p_change2=function(){
  var data={};
  data._id=window.localStorage['_id'];
  $.ajax({
    type: 'POST',
    data: JSON.stringify(data),
    contentType: 'application/json',
    url: url+'/phc2',
    success: function(output){   
    }
  });    
};
var p_change11=function(pp){
  var data={};
  data._id=window.localStorage['_id'];    
  data.ph=[];
  data.ph=pp;
  $.ajax({
    type: 'POST',
    data: JSON.stringify(data),
    contentType: 'application/json',
    url: url+'/phc1',
    success: function(output){
      if(output.status==100){
        post6(1);  
      }else{
          
      }    
    }
  });    
};
var p_change22=function(){
  var data={};
  data._id=window.localStorage['_id'];
  $.ajax({
    type: 'POST',
    data: JSON.stringify(data),
    contentType: 'application/json',
    url: url+'/phc2',
    success: function(output){
      if(output.status==100){
        post6(1);  
      }else{
          
      }        
    }
  });    
};
var p_check3=function(){
  $('.pm_fail2').remove();    
  cordova.plugins.diagnostic.getContactsAuthorizationStatus(function(status){
    if(status === cordova.plugins.diagnostic.permissionStatus.GRANTED){
    $('.add_ph').remove();    
    loader_6();
    var rpnc=JSON.parse(window.localStorage['pb']);
    var pp=[];
    function onSuccess(contacts) {
      var ppl=contacts.length;    
      for(var i=0 ;i<ppl;i++){
        for(var j=0;j<contacts[i].phoneNumbers.length;j++){
          if(rpnc.indexOf('+82'+contacts[i].phoneNumbers[j].value.replace(/[^0-9]/g,'').substring(1))==-1){
            pp.push('+82'+contacts[i].phoneNumbers[j].value.replace(/[^0-9]/g,'').substring(1));  
          }      
        }
      }
      if(pp.length>0){
        p_change11(pp);  
        var rcp=rpnc.concat(pp);
        window.localStorage['pb']=JSON.stringify(rcp);          
      }else{
        p_change22();  
      }    
    };
    function onError(contactError) {
        alert('onError!');
    };
    var options      = new ContactFindOptions();
    options.filter   = "";
    options.multiple = true;
    options.desiredFields = [navigator.contacts.fieldType.id,navigator.contacts.fieldType.displayName,navigator.contacts.fieldType.phoneNumbers];
    options.hasPhoneNumber = true;
    var fields       = [navigator.contacts.fieldType.displayName, navigator.contacts.fieldType.name];
    navigator.contacts.find(fields, onSuccess, onError, options);
    }else{
      pm_fail2('설정에서 앱의 연락처 접근을 허용 후</br>다시 시도해 주세요.');  
    }
  }, function(error){
    console.error("The following error occurred: "+error);
  });       
};
var pm_fail2= function(txt){
    $('.pm_fail2').remove();
    var div_c=$('<div></div>');
    div_c.css({'position':'absolute','top':'0','left':'0','width':'100%','height':'100%','background':'rgba(100,100,100,0.2)'});
    div_c.addClass('pm_fail2');  
    var div=$('<div></div>');
    div.css({'position':'absolute','width':'85%','height':'250px','left':'7.5%','top':(window.innerHeight-250)/2+'px','background':'white','border-radius':'1.5px'});
    div_i=$('<img>');
    div_i.attr('src','img/logo_green1.png');
    div_i.css({'position':'absolute','width':'50px','height':'50px','top':'13px','left':(window.innerWidth*0.85-50)/2+'px','border-radius':'2px'});
    div_s=$('<span>'+txt+'</span>');
    div_s.css({'position':'absolute','width':'100%','text-align':'center','height':'81px','line-height':'27px','font-size':'17px','color':'rgb(22,23,27)','left':'0','top':'90px'});
    div.append(div_i);
    div.append(div_s);
    var cok = $('<div>확인</div>');
    cok.css({'position':'absolute','bottom':'0','right':'0','width':'90px','height':'50px','color':'white','text-shadow':'0px 0px 0px rgba(255,255,255,0)','text-align':'center','background':'rgb(22,23,27)','line-height':'50px'});
    div.append(cok);
    cok.touchstart(function(){
      cok.css({'background':'green'});    
    });
    cok.touchend(function(){
      cok.css({'background':'rgb(22,23,27)'});
      div_c.remove();    
    });
    div_c.append(div);
    $("#parent").append(div_c); 
};
