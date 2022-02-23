var arr=[];

arr.push(1);
arr.push('Balasuriyan');
arr.push(function wish(){console.log("Happy weekend");});

for(var i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}

arr.forEach(function(item)
{
    console.log(item);
})