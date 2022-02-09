
setTimeout(function(){
    console.log("timer");
},5000);


function x(y)
{
    console.log("x, it has access to y");
    y();

}

x(function y(){console.log("This is Y");});