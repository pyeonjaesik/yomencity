var isc=0;
var imgdata_arr = function(){
    isc=0;
    imgData_arr =[];
    if(imgData !=3){imgData_arr.push(imgData);}
    if(imgData2 !=3){imgData_arr.push(imgData2);}
    if(imgData3 !=3){imgData_arr.push(imgData3);}
    if(imgData4 !=3){imgData_arr.push(imgData4);}
    idal = imgData_arr.length;
    $("#pg5_header_top_profile_id").text(idal+'');
    setTimeout(function(){isc=1},1000)
};