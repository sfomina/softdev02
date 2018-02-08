var canvas = document.getElementById("slate")
var context = canvas.getContext("2d")
var b1 = document.getElementById("b1")
var b2 = document.getElementById("b2")
//var t = 0;
var clear = function(e){
    first = true
    context.clearRect(0,0,500,500);
    
}

var draw = function(e){
    var x = e.offsetX;
    var y = e.offsetY;
    //console.log(x);
    //console.log(y);
    context.fillStyle= "black";

    if (first){
	console.log("first");
	context.beginPath();
	context.arc(x,y,10, 0 , 2*Math.PI);
	context.fill();
	context.moveTo(x,y);
	first = false;	
	
    }
    else {
	context.lineTo(x,y);
	context.moveTo(x,y);
	context.stroke();
	context.arc(x,y,10, 0 , 2*Math.PI);
	context.fill();
	context.moveTo(x,y);
	
    }


    
    
}

/*
var draw = function(e){
    var x = e.clientX;
    var y = e.clientY;
    console.log(x);
    console.log(y);
    context.fillStyle= "black";
    if (t == 0){
	context.fillRect(x,y, 20, 20);
    }
    else {
	context.beginPath();
	context.arc(x,y,10, 0 , 2*Math.PI);
	context.stroke();
	context.fill();
    }
    
}


var toggle = function(e){
    if (t== 0) {
	t = 1;
    }
    else {
	t = 0;
    }
    console.log(t);
}

*/

var circle = function(e) {
    context.beginPath()
    context.arc(250, 250, 10, 0 , 2*Math.PI);
    context.stroke();
    context.fill();
}
canvas.addEventListener("click", draw);
b1.addEventListener("click", clear);
//b2.addEventListener("click", toggle);
