var mylhup =function(post_id){
  var data={};
  data.post_id=post_id;
  data._id=window.localStorage['_id'];    
  $.ajax({
    type: 'POST',
    data: JSON.stringify(data),
    contentType: 'application/json',
    url: url+'/mylh',
    success:function(output){    
    }
  });    
};
var colhup =function(post_id){
  var data={};
  data.post_id=post_id;
  data._id=window.localStorage['_id'];    
  $.ajax({
    type: 'POST',
    data: JSON.stringify(data),
    contentType: 'application/json',
    url: url+'/colh',
    success:function(output){    
    }
  });    
};