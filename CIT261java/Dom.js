document.body.onload = addElement;

function addElement(){
    // create a new div element
    var newDiv = document.createElement("div");
    // give it some content
    var newContent = document.createTextNode("Hello, Its nice to meet you!");
    // add the text node to the newly created div
    newDiv.appendChild(newContent);

    // add the newly created element and its content into the DOM
    var currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv);
}


function myFunction(){
    var node = document.createElement("LI");
    var textnode = document.createTextNode("Water");
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);
}

function myFunction2(){
    var list = document.getElementById("myList");
    list.removeChild(list.childNodes[0]);
}