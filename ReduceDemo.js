const arr=[5,6,7,8,9];


//sum demo 

function findSUm(arr)
{
    let sum=0;
    for(var i=0;i<arr.length;i++)
    {
        sum+=arr[i];
    }
    return sum;
}
console.log(findSUm(arr));

//first parameter is a function; second param is a initial value to acc/firstparam i.e for eg:0
const output = arr.reduce(function(acc,curr)
{
     acc+=curr;
     return acc;
}, 0);

console.log(output);

console.log("****************************************************");

//max demo

const maxnumber = arr.reduce(function(acc,curr)
{
     if(curr>acc)
     {
          acc=curr; 
     }
     return acc;
}, 0);

console.log(maxnumber);