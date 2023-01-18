var addreply_shl = function(nn,text,time){
    $('.myreply_sh').remove();
    var reply = $("<div></div>");
    reply.addClass('myreply_sh');    
    var nn = nn;
    var replytext = text;
    var time = t_fun1(time);
    reply.css({"position":'relative',"width":"100%","background":"white","min-height":"50px","padding-left":"80px","padding-top":"30px","padding-bottom":"50px","padding-right":"30px","box-sizing":'border-box',"font-size":"15px",'word-break':'break-all'});
    replytext=filterXSS(replytext);
    reply.html('<b>'+nn+' </b>'+replytext);
    if(nn.length==1){
      var pimg=$('<div>'+nn[0]+'</div>');    
    }else{
      var pimg=$('<div>'+nn[0]+nn[1]+'</div>');  
    }
    pimg.css({'position':'absolute','top':'32px','left':'8px','width':'45px','height':'45px','border-radius':'2px','overflow':'hidden','font-size':'16px','line-height':'45px','font-weight':'700','color':'white','text-shadow':'0px 0px 0px rgba(22,23,27,0)','background':'rgb(22,23,27)','text-align':'center'});
    reply.append(pimg);    
    var reply_nt =$('<span><span>');
    reply_nt.text(time);
    reply_nt.css({'position':'absolute',"left":'80px','bottom':'5px','color':'rgba(100,100,100,0.5)','font-size':'11px'});
    reply.append(reply_nt);
    $reply_s_main_c.prepend(reply);   
};
var addreply_sl = function(nn,text,time,index){
    var reply = $("<div></div>");
    reply.addClass('myreply_s');
    var nn = nn;
    var replytext = text;   
    var time = time;
    reply.css({"position":'relative',"width":"100%","background":"white","min-height":"50px","padding-left":"80px","padding-top":"30px","padding-bottom":"50px","padding-right":"30px","box-sizing":'border-box',"font-size":"15px",'word-break':'break-all'});
    replytext=filterXSS(replytext);
    reply.html('<b>'+nn+' </b>'+replytext);
    if(nn.length==1){
      var pimg=$('<div>'+nn[0]+'</div>');    
    }else{
      var pimg=$('<div>'+nn[0]+nn[1]+'</div>');  
    }
    pimg.css({'position':'absolute','top':'32px','left':'16px','width':'37px','height':'37px','border-radius':'50%','overflow':'hidden','font-size':'12px','line-height':'37px','font-weight':'600','color':'white','text-shadow':'0px 0px 0px rgba(22,23,27,0)','background':'rgb(22,23,27)','text-align':'center'});
    reply.append(pimg);    
    var reply_nt =$('<span><span>');
    reply_nt.css({'position':'absolute',"left":'80px','bottom':'5px','color':'rgba(100,100,100,0.5)','font-size':'11px'});
    reply.append(reply_nt);   
    var pimg_c = $('<div></div>');
    pimg_c.css({'position':'absolute','top':'32px','left':'16px','width':'37px','height':'37px',"border-radius":"50%",'overflow':'hidden'});
    if(index==1){
      reply_nt.text(t_fun1(time));    
      $reply_s_main_c.prepend(reply);   
    }else{
      reply_nt.text('방금');    
      $reply_s_main_c.append(reply);
      reply.css({'background':'rgba(150,150,150,0.1)'});    
    } 
};