$(document).ready(function(){
    $(".color-pallete").click(function(){
        var link=$(this).attr("alt");
        $("img").attr("src",link);
    });

     clockUpdate();
    var timer= setInterval(clockUpdate,1000);

    function clockUpdate(){
        var time=new Date();
        var h=time.getHours();
        var m=time.getMinutes();
        var s=time.getSeconds();
        $(".watch-face").text(h+":"+m+":"+s);
    }
    $(".time").click(function(){
        clockUpdate();
        var timer= setInterval(clockUpdate,1000);
    });
    $(".heartRate").click(function(){
        $(".watch-face").text("78");
        clearInterval(timer);
    });
    // 
    var height=$("img").height();
    var width=$("img").width();

    $(".watch").css("height",height);
    $(".watch").css("width",width);
});