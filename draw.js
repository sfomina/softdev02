var canvas = document.getElementById("slate");
var context = canvas.getContext("2d");
var cl = document.getElementById("b1");
var stop = document.getElementById("b2");
var grow = true;

var clear = function(){
    first = true
    context.clearRect(0,0,500,500);
    
}

var requestID = 0 


var animate = function() {
    var r = 0;
    grow = true;
    window.cancelAnimationFrame(requestID);
    var draw = function(){
	clear();
	context.beginPath();
	context.arc(250, 250, r , 0, 2 * Math.PI);
	context.fill();
	if (2*r == canvas.width) {
	    grow = false
	    console.log("shrink");
	}
	if (r == 0){
	    grow = true;
	}
	if (grow){
	    r++;
	}
	else {
	    console.log("working");
	    r--;
	}
	requestID = window.requestAnimationFrame(draw);
	
    }
    draw();
    
} 

var stopit = function(){
    window.cancelAnimationFrame(requestID);
}

canvas.addEventListener("click", animate);
cl.addEventListener("click", clear);
stop.addEventListener("click", stopit);
