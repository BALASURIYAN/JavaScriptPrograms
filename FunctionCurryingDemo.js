
//function currying is the process of copying a function, making more functions out of a function,
// presetting some parameters

// there are 2 ways - through bind() and Closures

let multiply=function (x,y)
{
    console.log(x*y);
}

let multiplyBy2=multiply.bind(this,2);
multiplyBy2(5);

let multiplyBy3=multiply.bind(this,3);
multiplyBy3(4);

//using closure


let multiplication=function (x){
    return function(y){
        console.log(x*y);
    }
}

let multiplyBy2new=multiplication(5);
multiplyBy2new(5);

let multiplyBy3new=multiplication(7);
multiplyBy3new(7);