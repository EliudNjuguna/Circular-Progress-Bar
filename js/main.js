$(document).ready(function(){
    
var counter = document.getElementById('counter').getContext('2d');
var no = 0;//Starting Point
var pointToFill = 4.72; //Point from where you want to feel the circle
var cw = counter.canvas.width; //Return Canvas width
var ch = counter.canvas.height; //Return canvas height
var diff; //fint the difference btw current value(no) and trageted value(100);


function fillCounter(){
    diff = ((no/100)* Math.PI*2*10);
    
    counter.clearRect(0,0,cw,ch); //Clear canvas every time when the function is called
    
    counter.lineWidth = 15; //size of the stroke
    
    counter.fillStyle = '#fff' //color of the fill
    
    counter.strokeStyle = '#F5E0A9'; //stroke color
    
    counter.textAlign= 'center';
    
    counter.font = "25px monospace"; //font size and font-family
    
    counter.fillText(no+'%',100,110); //filltext(text,x,y)
    
    counter.beginPath();
    counter.arc(100,100,90,pointToFill,diff/10+pointToFill); //arc(x,y,radius,start,stop)
    
    counter.stroke(); //to fill stroke
    
    //Conditions
    
    if(no>=80){
        clearTimeout(fill);  //fill a variable that call the function fillCounter()
    }
    no++;
}
//Calling the function
    var fill = setInterval(fillCounter,50); //Call the fillCounter functiona after every 50ms

});

