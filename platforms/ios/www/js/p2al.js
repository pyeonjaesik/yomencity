var p2al1 =function(){
  var data={};
  data.post_id=h_arr[0].post_id;
  data._id=window.localStorage['_id'];
  data.nn=window.localStorage['nn'];
  $.ajax({
    type: 'POST',
    data: JSON.stringify(data),
    contentType: 'application/json',
    url: url+'/p2al1',
    success:function(output){    
    }
  });    
};
var p2al2 =function(txt){
  var data={};
  data.post_id=h_arr[0].post_id;
  data._id=window.localStorage['_id'];
  data.nn=window.localStorage['nn'];
  data.ni=h_arr[0].nn;
  data.ti=h_arr[0].t;
  data.pnn=h_arr[0].pnn;
  data.txt=h_arr[0].txt;    
  $.ajax({
    type: 'POST',
    data: JSON.stringify(data),
    contentType: 'application/json',
    url: url+'/p2al2',
    success:function(output){    
    }
  });    
};