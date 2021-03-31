function Add(){
    var text= document.getElementById("listText").value;
    console.log(text)
    var node=document.createElement("li");
    var textnode= document.createTextNode(text);
    node.appendChild(textnode);
    document.getElementById("list").appendChild(node);
}