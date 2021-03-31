var value=$("#count").text();
// if(value>10)
// $("#add").attr("disabled", true);

console.log(value)

$("#add").click(()=>{
    value++;
    $("#count").text(value);
});
$("#minus").click(()=>{
    value--;
    $("#count").text(value);
});
$("#reset").click(()=>{
    value=0;
    $("#count").text(value);
});