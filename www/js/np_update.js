var np_update=function(id2,li){
  var data={};
  data._id=window.localStorage['_id'];
  data.id=id2;
  data.li=li;    
  $.ajax({
    type:'POST',
    data: JSON.stringify(data),
    contentType:'application/json',
    url: url+'/npup',
    success:function(output){   
    } 
  });     
};