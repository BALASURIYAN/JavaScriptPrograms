function x()
{
    var a=10,b=20;
    function y()
    {
        console.log(a,b);
    }
    return y;
}

var z=x();
console.log(z);
z();