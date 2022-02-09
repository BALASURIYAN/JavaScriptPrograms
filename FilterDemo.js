const arr=[5,6,7,8,9];

//filter out odd values

function isOdd(x)
{
    return x%2;
}




const odd=arr.filter(isOdd)

console.log(odd);

const oddarr=arr.filter((x)=>x%2);

console.log(oddarr);

const Greaterthan7arr=arr.filter((x)=>x>7);

console.log(Greaterthan7arr);