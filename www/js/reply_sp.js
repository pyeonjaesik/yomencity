var reply_p_sp = function(){
    var reply_space = $("<div></div>");
    reply_space.addClass('reply_p_sp'); reply_space.css({'position':'relative','width':'100%','height':'100px','background':'white'});
    reply_space.addClass('myreply');
    var element = $("#reply_p_main_c");
    element.append(reply_space);
};
var reply_s_sp = function(){
    var reply_space = $("<div></div>");
    reply_space.addClass('reply_s_sp'); reply_space.css({'position':'relative','width':'100%','height':'100px','background':'white'});
    reply_space.addClass('myreply_s');
    var element = $("#reply_s_main_c");
    element.append(reply_space);
};
