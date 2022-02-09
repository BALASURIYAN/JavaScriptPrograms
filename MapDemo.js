const arr=[5,6,7,8];

function double(x)
{
    return 2*x;
}

function triple(x)
{
    return 3*x;
}
const arrdoubled=arr.map(double);

console.log(arrdoubled);

console.log(arr.map(triple));

function binary(x)
{
    return x.toString(2);
}

console.log(arr.map(binary));

const binaryarr=arr.map((x) => x.toString(2));

console.log(binaryarr);

