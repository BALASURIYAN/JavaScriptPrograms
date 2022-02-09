function demo()
{
    for(var i=0;i<5;i++)
    {
         setTimeout(function (){
               console.log(i);
          },i*1000);

          console.log("Great will print first");
    } 
}
    
demo();


let date=new Date();
let date1=new Date().getTime();
console.log(date);
console.log(date1);