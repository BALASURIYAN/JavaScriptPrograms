//A function that takes function as an argument or returns function is called Higher Order Function 
//or First Class Function or First Class Citizen

//call back function

function x()
{
    console.log("Namaste JS");
}

//Higher Order Function

function y(x)
{
    x();
}

const radius=[3,4,5,6];

function claculateArea(radius)
{
    const area=[];
    for(var i=0;i<radius.length;i++)
    {
        area.push(Math.PI*radius[i]*radius[i]);
    }
    return area;
}

console.log(claculateArea(radius));

console.log("******************************************************************************");

const radii=[3,4,5,6];

const area= function(r)
{
    return Math.PI*r*r;
}
const circumference=function(r)
{
    return 2*Math.PI*r;
}
const diameter=function(r)
{
    return 2*r;
}

for(var i=0;i<radii.length;i++)
{
    console.log(area(radii[i]));
    console.log(area(circumference(radii[i])));
    console.log(area(diameter(radii[i])));
    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")
}


