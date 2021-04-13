var texts="0";
$("#display").val(texts);

$("button.number").click(function(){
    if(texts==0)
    texts=$(this).text();
    else
    texts=texts+$(this).text();
    $("#display").val(texts);
});

$("button.symbol").click(function(){
    if(jQuery.inArray(texts[texts.length-1],$("button.symbol").text())>-1){
    texts=texts.slice(0,texts.length-1) + $(this).text() ;
    }
    else
    texts=texts+($(this).text());
    $("#display").val(texts);
});

$("#clear").click(()=>{
    texts=0;
    $("#display").val(texts);
})

$("#equal").click(()=>{
    var total=eval(texts);
    $("#display").val(total);
})

$("#backspace").click(()=>{
    texts=texts.slice(0,texts.length-1);
    $("#display").val(texts);
})
