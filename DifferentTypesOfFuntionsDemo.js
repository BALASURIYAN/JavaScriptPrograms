// funcion statement
//function statement is also called as Function Declaration

//hoisting in fn stmt and expression demo
//a();
//b();


function a()
{
    console.log("a called");
}
a();

//function expression
var b=function ()
{
    console.log("b called");
}
b();

// the main difference b/w function statement and function expression is hoisting
//function statement can be called b/f definition but function xpression cannot

//anonymous function - function without name or identity - it will throw an eeror in js
/*function ()
{
    console.log("anonymous function");
}*/

//Named function expression
 var c= function xyz()
 {
     console.log("named function expression");
 }

 c();
// xyz(); - this will throw an error

//parameter and argument difference
function d(name)// here name is a parameter, which is not of global scope
{
    console.log("Hi "+name);
}
d("Bala"); // here "Bala" is an argument

//First Class Function
//Funcion is a First Class Citizen in JavaScript
//It is the ability of JS to pass function as a value, argument, return function from a function

function e(x)
{
  
  console.log(x);
}
e(function f(){});

