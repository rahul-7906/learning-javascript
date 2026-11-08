let btn = document.querySelector("button");

btn.addEventListener("click",function(){
  let h1 = document.querySelector("h1");
  randomColor = getrandomColor();
  h1.innerText = randomColor;
  
  let div = document.querySelector("div");
div.style.backgroundColor = randomColor;
});

function getrandomColor(){
red = Math.floor(Math.random()*255);
green = Math.floor(Math.random()*255);
blue = Math.floor(Math.random()*255);


let color = `RGB(${red},${green},${blue})`;
return color;
}
