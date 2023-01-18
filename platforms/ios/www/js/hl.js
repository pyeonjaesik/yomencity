var hl1 = function(id2){
  var data ={}; 
  data._id1 = window.localStorage['_id'];
  data.id2 = id2;  //상대꺼
  $.ajax({
    type:'POST',
    data: JSON.stringify(data),
    contentType: 'application/json',
    url: url+'/hl1',
    success: function(output){
        //return;
    }  
  });    
};
var hl2 = function(id2,post_id){
  var data ={}; 
  data._id1 = window.localStorage['_id'];
  data.id2 = id2;  //상대꺼
  data.post_id=post_id;
  $.ajax({
    type:'POST',
    data: JSON.stringify(data),
    contentType: 'application/json',
    url: url+'/hl2',
    success: function(output){
        //return;
    }  
  });    
};
var hl3 = function(id2,post_id,comment_id){
  var data ={}; 
  data._id1 = window.localStorage['_id'];
  data.id2 = id2;  //상대꺼
  data.post_id=post_id;
  data.comment_id=comment_id;    
  $.ajax({
    type:'POST',
    data: JSON.stringify(data),
    contentType: 'application/json',
    url: url+'/hl3',
    success: function(output){
        //return;
    }  
  });    
};
var hl4 = function(id2,post_id){
  var data ={}; 
  data._id1 = window.localStorage['_id'];
  data.id2 = id2;  //상대꺼
  data.post_id=post_id;  
  $.ajax({
    type:'POST',
    data: JSON.stringify(data),
    contentType: 'application/json',
    url: url+'/hl4',
    success: function(output){
        //return;
    }  
  });    
};