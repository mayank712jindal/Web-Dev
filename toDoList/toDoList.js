// $("#add-item").click(()=>{
//     var text= $("#listText").val();
//     if(text.length===0)
//     alert("Please enter some data!");
//     else{
//         $("#list-items").append("<p>"+text+"<span><img src=\"https://img.icons8.com/ios/50/000000/delete-forever--v1.png\"  class=\"delete\"/></span></p>");
//     }
// });

// $("#remove-item").click(()=>{
//         $("#list-items").empty();
// });

// $("#list-items").on("click",".delete",function(){
//     $(this).parentsUntil("#list-items").remove();
// });

// $("#list-items").on("click","p",function(){
//     $(this).toggleClass("marked");
// })

var list= document.getElementById("list-items");
var addBtn= document.getElementById("add-item");
var removeBtn=  document.getElementById("remove-item");
var dynamicBtn= document.getElementById("dynamic-item");
var deleteBtn= document.getElementsByClassName("delete");

// add button to add list item
addBtn.addEventListener('click',function(){
    var text= document.getElementById("listText").value;
    addListItem(text);
});

//dynammic button to fetch list from api
dynamicBtn.addEventListener("click",function(){
    getTODOlist();
})

//function that add list item 
function addListItem(text){
    var newListELement = document.createElement('li');
    var spanTag=document.createElement('span');
    var deleteImg=document.createElement('img');
    deleteImg.src="https://img.icons8.com/ios/50/000000/delete-forever--v1.png";
    deleteImg.className="delete";
    spanTag.appendChild(deleteImg);
    newListELement.appendChild(document.createTextNode(text));
    newListELement.appendChild(spanTag);
    list.appendChild(newListELement);
}

//the clear all list button
removeBtn.addEventListener("click",function(){
    while(list.firstChild)
    list.removeChild(list.lastChild);
});

//to particularly delete a list item
document.addEventListener("click",function(e){
    if(e.target && e.target.className== 'delete'){
        var li= e.target;
        var p1=li.parentNode;
        var p2=p1.parentNode;
        p2.parentNode.removeChild(p2);
    }
});

//function to dynamically fetch list items
function getTODOlist(){
    var http =new XMLHttpRequest();
    http.onreadystatechange = function(){
        if(this.readyState===4 && this.status===200){
            var response= JSON.parse(this.responseText);
             for(x in response){
                 addListItem(response[x].title);
             }
        }
    }
    http.open('GET','https://jsonplaceholder.typicode.com/todos',false);
    http.send();
}

function listSearch(event){
    console.log(event.target);
}