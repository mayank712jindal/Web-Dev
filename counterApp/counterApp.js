var value=$("#count").text();
function view(value){
    if(value%2==0)
    {
     $("body").css("background-color","skyblue");
     $("#count").css("color","white");
        }
    else
    {
     $("body").css("background-color","grey");
     $("#count").css("color","red");
        }

        if(value==10)
        $("#add").prop("disabled", true);
        else
        $("#add").prop("disabled", false);
        if(value==0)
        $("#minus").prop("disabled", true);
        else
        $("#minus").prop("disabled", false);
}
$("#add").click(()=>{
    value++;
    view(value);

    if(value>=10)
    $("#add").prop("disabled", true);
    else
    $("#add").prop("disabled", false);
    $("#count").text(value);
});
$("#minus").click(()=>{
    value--;
    view(value);
    $("#count").text(value);
});
$("#reset").click(()=>{
    value=0;
    view(value);
    $("#count").text(value);
});