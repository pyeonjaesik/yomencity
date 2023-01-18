var addpost = function(username,img,text,i,_id){
    var post = $("<div></div>");
    var user_img ='img/city2.png';
    var main_img =url+'/'+img;
    var username = username;
    var post_text = text;
    var _id = _id;
    post.css({"position":"relative","width":"100%","min-height":"300px","background":"white"});
    
    var header = $('<div></div>');
    header.css({"position":"relative","width":"100%","height":"50px","background":"white"});
    
    var profile_img = $("<img></img>");
    profile_img.css({"position":"absolute","top":"6px","left":"10px","width":"36px","height":"36px","border-radius":"100%"});
    profile_img.attr('src',user_img);
    header.append(profile_img);
    
    var follow = $("<div>팔로우</div>");
    follow.css({"position":"absolute","top":"10px","right":"10px","fontSize":"15px","color":"white","background":"rgb(1,188,55)","border-radius":"3px","text-align":"center","line-height":"30px","height":"30px","width":"70px","text-shadow":"0px 0px rgb(1,188,55)"});
    header.append(follow);    
    post.append(header);
    
    var profile_name =$("<span></span>");
    profile_name.css({"position":"absolute","top":"10px","left":"60px","height":"30px","line-height":"30px","font-size":"20px","color":"rgba(50,0,0,0.5)","text-shadow":"0px 0px 0px white"});
    
    profile_name.text(username);
    
    header.append(profile_name);  
    
    var mainimg = $('<img></img>');
    mainimg.attr('src',main_img);
    mainimg.css({position:'relative',top:'0',left:'0',width:'100%'});
    
    var post_span = $('<span></span>');
    post_span.text(post_text);
    post_span.css({position: 'absolute',bottom: '68px',height: '20px',lineHeight:'20px',width:'90%',left: '5%',fontSize: '15px',textShadow: '0px 0px 0px rgba(0,0,0,0.5)',color: 'white',textAlign: 'center',background:'rgba(0,0,0,0.5)'});
    
    var post_foot = $('<div></div>');
    post_foot.css({position:'relative',left:'0',height:'45px',width:'100%',background:'white'});
    
    var post_foot_space = $('<div></div>');
    post_foot_space.css({position:'relative',left:'0',height:'10px',background:'rgba(240,240,240,0.8)'});
    post.append(mainimg);
    post.append(post_span);
    post.append(post_foot);
    post.append(post_foot_space);
//    /////////////////////footer와 header 없애자.
//    post.html('<img src="'+main_img+'" alt="" id="Pg3_post_img"><span id="Pg3_post_text">'+post_text+'</span><div id="Pg3_post_footspace"></div>');

    var heart = $("<img></img>");
    heart.attr("src","img/heart.png"); heart.css({"position":"absolute","bottom":"20.5px","right":"3.2%","width":"7.5%"});
    post.append(heart);
    
    mainimg.each(function() {
 
 
    mainimg.load(function(){
            var gr = this.naturalHeight/this.naturalWidth;
            post3_scroll_h +=(gr*window.innerWidth)+18;
            if(i == 5){  
                post3_scroll_h -= 50000;
            }
            
         });
        
    });    
    
    var reply = $("<div></div>");
    reply.css({"position":"absolute","bottom":"16px","left":"5%","width":"80%","height":"35px","border-bottom":"1px solid rgba(150,150,150,0.8)","padding-left":"30px","box-sizing":"border-box","line-height":"35px","font-size":"15px","color":"rgba(150,150,150,0.8)","text-shadow":"1px 1px 1px white"});
    post.append(reply);
    
    reply.text('댓글 달기');
    var element = $("#postarea3");
    post.addClass('post3');
    element.append(post);
    
    follow.click(function(e){
        var data = {};
        data.followed_id=_id;
        data.following_id= window.localStorage['_id'];
        e.preventDefault();
        follow.hide();
        $.ajax({
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json',
            url: url+'/follow',
            success:function(output){
                
            }
        });
    });

}