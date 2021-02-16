canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "blue";

ctx.beginPath(); 
    
ctx.strokeStyle = color;
ctx.lineWidth = 5;
ctx.arc(400, 300, 40, 0, 2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown", mdown);

function mdown(e){
    color = document.getElementById("clr").value;
    console.log(color);

    mousex = e.clientX - canvas.offsetLeft;
    mousey = e.clientY - canvas.offsetTop;
    console.log("x = " + mousex + ", y = " + mousey ); 

    circle(mousex, mousey);

    
}

function circle(mousex, mousey){
ctx.beginPath(); 
    
ctx.strokeStyle = color;
ctx.lineWidth = 5;
ctx.arc(mousex, mousey, 40, 0, 2*Math.PI);
ctx.stroke();


}

function clearArea(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

