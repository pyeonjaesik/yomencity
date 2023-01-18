function insert(str, index, value) {
    return str.substr(0, index) + value + str.substr(index);
}
var phonecall = function ( phonenumber ) {
    var call = "tel:" + phonenumber;
    document.location.href = call;
}
var add_ph = function(id,name,img,ph){
    var div = $('<div></div>');
    div.css({'position':'relative','height':'75px','background':'white','overflow':'hidden'});
    div.addClass('add_ph');
    var id = id;
    var name = name;
    var ph='0'+ph.replace(/[^0-9]/g,'').substring(2);
    var call=$('<img>');
    call.attr('src','img/call.png');
    call.css({'position':'absolute','top':'16px','right':'20px','width':'30px','height':'30px'});
    div.append(call);
    call.touchstart(function(){
      call.attr('src','img/call2.png');    
    });
    call.click(function(){
      call.attr('src','img/call.png');    
      phonecall(ph);    
    });    
    ph=insert(ph, 3, " ");
    ph=insert(ph, 8, " ");
    if(img =='1'){
      var img_s = 'img/man.png';
    }else if(img=='2'){
      var img_s = 'img/woman.png';  
    }else{
      var img_s = img;    
    }
    var img_c = $('<div></div>');
    img_c.css({'position':'absolute','top':'7.5px','left':'5px','width':'50','height':'50px','overflow':'hidden','border-radius':'50%','border':'1px solid rgba(100,100,100,0.15)'});
    div.append(img_c);
    var img = $('<img>');
    img.attr('src',img_s);
    img.each(function(){
        img.load(function(){
            var nh = this.naturalHeight;
            var nw = this.naturalWidth;
            var gr = nh/nw;
            img.css({'position':'absolute'});
            if(gr>=1){
                img.css({'width':'50px','height':(50*gr)+'px','top':(-1)*(50*gr-50)/2+'px','left':'0'});
            }else{
                img.css({'width':50/gr+'px','height':50+'px','left':(-1)*(50/gr-50)/2,'top':'0'});
            }
            img_c.css({'border':'0px solid rgb(255,255,255,0)'});
            img_c.append(img);
            img.click(function(){
              t_g_pf(1,id);  
            });
        });
    });
    var name_c = $('<span></span>');
    name_c.text(name);
    name_c.css({'position':'absolute','top':'13px','left':'80px','font-size':'17px','color':'rgb(30,38,49)','text-align':'left','height':'25px','line-height':'25px','text-shadow':'0px 0px 0px white','font-weight':'600'});
    div.append(name_c);
    
    var ph_c = $('<span></span>');
    ph_c.text(ph);
    ph_c.css({'position':'absolute','top':'38px','left':'90px','font-size':'12px','color':'rgba(40,48,59,0.8)','text-align':'left','height':'25px','line-height':'25px','text-shadow':'600'});
    div.append(ph_c);    
    $postarea6.append(div);
};
var add_phi=function(q,i){
  var div=$('<div></div>');
  div.addClass('add_ph');
  if(i==0){
    div.css({'position':'relative','width':(w_w-20)+'px','padding-left':'20px','height':'30px','font-size':'14px','line-height':'40px','background':'white','font-weight':'700'});   
  }else{
    div.css({'position':'relative','width':(w_w-20)+'px','padding-left':'20px','height':'20px','font-size':'14px','line-height':'13px','background':'white','font-weight':'700'});  
  }    
  if(q==1){
    div.text('새로운 친구');  
  }else if(q==2){
    div.text('새로 가입한 친구');  
  }else{
    div.text('친구')  
  }    
  $('#postarea6').append(div);
};
function removeDuplicates(originalArray, prop) {
     var newArray = [];
     var lookupObject  = {};

     for(var i in originalArray) {
        lookupObject[originalArray[i][prop]] = originalArray[i];
     }

     for(i in lookupObject) {
         newArray.push(lookupObject[i]);
     }
      return newArray;
}
var post6=function(i){
  $('.add_ph').remove();
  p6_arr=[];
  if(i==0){
    loader_6();  
  }    
  var data={};
  data._id=window.localStorage['_id'];
  $.ajax({
    type:'POST',
    data:JSON.stringify(data),
    contentType: 'application/json',
    url: url+'/getpb',
    success:function(output){
      if(output.status==100){
        p6_arr=[];  
        output.p=removeDuplicates(output.p, "i").sort(function(a, b) {
          return a.n < b.n ? -1 : a.n > b.n ? 1 : 0;
        });;
        var pl=output.p.length;
        var nl=output.n.length;
        var cl=output.c.length;
        for(var j=0;j<nl;j++){
          if(j==0){
            p6_arr.push({i:output.n[j].i,n:output.n[j].n,p:output.n[j].p,q:1});  
          }else{
            p6_arr.push({i:output.n[j].i,n:output.n[j].n,p:output.n[j].p,q:0});  
          }    
        }
        for(var j=0;j<cl;j++){
          if(j==0){
            p6_arr.push({i:output.c[j].i,n:output.c[j].n,p:output.c[j].p,q:2});  
          }else{
            p6_arr.push({i:output.c[j].i,n:output.c[j].n,p:output.c[j].p,q:0});  
          }    
        }
        for(var j=0;j<pl;j++){
          if(j==0){
            p6_arr.push({i:output.p[j].i,n:output.p[j].n,p:output.p[j].p,q:3});  
          }else{
            p6_arr.push({i:output.p[j].i,n:output.p[j].n,p:output.p[j].p,q:0});  
          }    
        }
        var datam={};
        datam.id=[];
        var p6l=p6_arr.length;
        $('#Pg6_s').text('연락처 '+p6l)  
        for(var e=0;e<p6l;e++){
          datam.id.push(p6_arr[e].i);    
        }
        $.ajax({
          type:'POST',
          data:JSON.stringify(datam),
          contentType: 'application/json',
          url: url+'/getparr',
          success:function(output){
            if(output.status==100){
              $('.loader_6').remove();
              $('.add_ph').remove();    
              for(var i=0;i<p6l;i++){
                if(p6_arr[i].q==1){
                  add_phi(1,i);    
                }else if(p6_arr[i].q==2){
                  add_phi(2,i);    
                }else if(p6_arr[i].q==3){
                  add_phi(3,i);    
                }  
                add_ph(p6_arr[i].i,p6_arr[i].n,output.img[i],p6_arr[i].p);  
              }      
            }else{
              $('.loader_6').remove();
              alert('getph err');
              console.log('getparr err');    
            }  
          }    
        });
      }else if(output.status==102){
        $('.loader_6').remove();  
        nopost6();  
      }else{
        $('.loader_6').remove();  
      }  
    }  
  });    
};
$(function(){
  $('#footdiv3').touchend(function(){
    if(post6_index==0){
      post6_index=1;    
      post6(0);  
    }else if(post6_index==1){
      $('#postarea6').scrollTop('0');
      post6_index=1;    
    }else{
      post6_index=1;    
    }  
      
  });
  $('#Pg6_reload').touchstart(function(){
    $(this).attr('src','img/reload2.png');  
  });
  $('#Pg6_reload').touchend(function(){
    $(this).attr('src','img/reload.png');
    p_check3();  
  });    
});