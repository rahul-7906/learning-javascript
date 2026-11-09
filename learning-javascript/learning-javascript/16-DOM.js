//Document object model (DOM)

//To make a change
console.log(document.body.style.background = "pink");

//Selecting by id
let id = document.getElementById("heading");
console.dir(id);
console.log(id);

//Selecting by class
let class123 = document.getElementsByClassName("subHeading");
console.log(class123);

//Selecting with tag
let tag = document.getElementsByTagName("p");
console.log(tag);

//Selecting with query selector
//Automatically identify if it is a class, id or tag
document.querySelector("p");
document.querySelector("#heading");






