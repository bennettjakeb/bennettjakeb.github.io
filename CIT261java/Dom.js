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
    var node = document.createElement("LI"); // creates a <li> node
    var textnode = document.createTextNode("Water"); // creates a text node
    node.appendChild(textnode); // append text to the li
    document.getElementById("myList").appendChild(node); // append li to ul
}

function myFunction2(){
    var list = document.getElementById("myList"); // obtain the <ul> element with id="myList"
    list.removeChild(list.childNodes[0]); // remove <ul>'s first child node
}

function removeKid(){
    var list = document.getElementById("myList"); // obtain the ul element
    list.removeChild(list.lastChild) // remove <ul>'s last child node
}


