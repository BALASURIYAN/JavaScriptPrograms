function ConstructorDemo()
{
    this.initializer= function()
    {
        return 100;
    }
}

var init=new ConstructorDemo();
var num=init.initializer();
console.log(num);