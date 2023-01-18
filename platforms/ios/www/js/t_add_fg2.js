var t_add_fg2 = function(id,name,img){
    var div = $('<div></div>');
    div.css({'position':'relative','height':'90px','background':'white','overflow':'hidden'});
    div.addClass('t_add_fg2');
    var id = id;
    var name = name;
    if(img =='1'){
      var img_s = 'img/man2.png';
    }else if(img =='2'){
      var img_s = 'img/woman2.png';       
    }else{
      var img_s = img;    
    }
    var img_c = $('<div></div>');
    img_c.css({'position':'absolute','bottom':'3px','left':'0','width':'87px','height':'87px','overflow':'hidden'});
    
    var img = $('<img>');
    img.attr('src',img_s);
    img.each(function(){
        img.load(function(){
            var nh = this.naturalHeight;
            var nw = this.naturalWidth;
            var gr = nh/nw;
            img.css({'position':'absolute'});
            if(gr>=1){
                img.css({'width':'88px','height':(87*gr)+'px','top':(-1)*(87*gr-87)/2+'px','left':'0'});
            }else{
                img.css({'width':87/gr+'px','height':87+'px','left':(-1)*(87/gr-87)/2,'top':'0'});
            }

        });
        img_c.append(img);
        div.append(img_c);
    });
    var name_c = $('<span></span>');
    name_c.text(name);
    name_c.css({'position':'absolute','top':'16px','left':'120px','font-size':'20px','color':'rgb(30,38,49)','text-align':'left','height':'25px','line-height':'25px','text-shadow':'0px 0px 0px white'});
    div.append(name_c);
    
    var id_c = $('<span></span>');
    id_c.text(id);
    id_c.css({'position':'absolute','top':'46px','left':'130px','font-size':'15px','color':'rgb(40,48,59)','text-align':'left','height':'25px','line-height':'25px'});
    div.append(id_c);
    var d_c=$('<div></div>');
    d_c.css({'position':'absolute','top':'0','left':'0','height':'90px','width':w_w+'px'});
    div.append(d_c);
    d_c.click(function(){
      t_g_pf(1,id);    
    });    
    $t_info2.append(div);
    post_t2_scroll_h2-=10000;
    post_t2_scroll_h2+=90;
};