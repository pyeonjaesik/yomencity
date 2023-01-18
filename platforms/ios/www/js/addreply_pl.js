var addreply_pl = function(nn,text,time,cn,index,pnn){
    var reply = $("<div></div>");
    reply.addClass('myreply');
    var nn = nn;
    var replytext = text;
    var time = time;
    var cn = cn||0;
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
    var reply_nt =$('<div></div>');
    if(index==1){
      reply_nt.text(t_fun1(time));    
    }else{
      reply_nt.text('방금');    
    }
    reply_nt.css({'position':'absolute',"left":'80px','bottom':'5px','color':'rgba(100,100,100,0.5)','font-size':'12px','height':'15px','line-height':'15px','padding-right':'110px'});
    var reply_s = $("<div></div>");
    reply_s.css({"position":"absolute","top":"0px",'right':'0px','width':'100px',"color":"green","font-size":"12px",'height':'15px','line-height':'15px'});
    if(cn==0){
      reply_s.text('답글 달기');  
    }else{
      reply_s.text('답글 '+cn+'개 보기');  
    }
    reply_nt.append(reply_s);
    var rs=time+nn;
    reply_s.addClass(rs);
    reply.append(reply_nt);
    $reply_p_main_c.scrollTop('1000000');
    if(index==1){
      $reply_p_main_c.prepend(reply);    
    }else{
      $reply_p_main_c.append(reply);    
      reply.css({'background':'rgba(150,150,150,0.1)'});
    }    
    reply_s.click(function(){
      $('#reply_p').hide();
      l_r_s_g(1,h_arr[0].post_id,time,nn,replytext,pnn);
    });  
};