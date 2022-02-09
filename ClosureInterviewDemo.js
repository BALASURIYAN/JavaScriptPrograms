
function external(str)
{
    var str1=str;
    function outer(str1)
    {
        let a=100;

        function inner()
        {
           console.log(a,str);
        }

        // var a=1000;

        return inner;
    }
    outer()();
}
external("Ramkumar");
//var interediate=outer("bala");

//console.log(interediate);

//interediate("balasuriyan");

//outer("SPB")();