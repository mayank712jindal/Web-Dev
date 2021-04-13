$("#add-item").click(()=>{
    var text= $("#listText").val();
    if(text.length===0)
    alert("Please enter some data!");
    else{
        $("#list-items").append("<p>"+text+"<span><img src=\"https://img.icons8.com/ios/50/000000/delete-forever--v1.png\"  class=\"delete\"/></span></p>");
    }
});

$("#remove-item").click(()=>{
        $("#list-items").empty();
});

$("#list-items").on("click",".delete",function(){
    $(this).parentsUntil("#list-items").remove();
});

$("#list-items").on("click","p",function(){
    $(this).toggleClass("marked");
})
