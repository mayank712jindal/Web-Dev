$(document).ready(function(){
    $(".color-pallete").click(function(){
        var link=$(this).attr("alt");
        $("img").attr("src",link);
    });

    clockUpdate();
    setInterval(clockUpdate,1000);

    function clockUpdate(){
        var time=new Date();
        var h=time.getHours();
        var m=time.getMinutes();
        var s=time.getSeconds();

    
    }
});