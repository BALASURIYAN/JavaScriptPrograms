let name={
    firstname:"Bala",
    lastname:"Suriyan"
}

let printName=function (){
    console.log(this.firstname+" "+this.lastname);
}

let printMyName=printName.bind(name);

printMyName();

//we need to simulate bind() exactly

Function.prototype.myBind=function (...args)
{
    let obj=this;
    return function ()
    {
           obj.call(args[0]);
    }

}

let printMyNameNew=printName.myBind(name);
printMyNameNew();

//Let us consider a scenario of parameters


let student={
    name:"Balasuriyan",
    stream:"EEE"
}



let printStudentDetails=function(hometown)
{
    console.log(this.name+" , stream of "+this.stream+" living in "+hometown);
}

let printStudent1=printStudentDetails.bind(student,"Tuticorin");
printStudent1();

//let us do the same using myBind()

Function.prototype.myStudentBind=function (...args)
{
    let obj=this,params=args.slice(1);
    return function()
    {
        obj.apply(args[0], params)
    }

}


let printStudent1New=printStudentDetails.myStudentBind(student,"Tuticorin");
printStudent1New();


//let us consider another scenario

let trainer={
    name:"Raffic",
    technology:"Java"
}

let printTrainerDetails=function (experience,age)
{
    console.log(this.name+" "+this.technology+" Experience: "+experience+" age: "+age);
}

let printTrainer1=printTrainerDetails.bind(trainer,25);
printTrainer1(53);


Function.prototype.myTrainerBind=function (...args)
{
    let obj=this,params=args.slice(1);
   return function(...args2)
   {
        obj.apply(args[0],[...params,...args2]);
   }
}

let printTrainer1New=printTrainerDetails.myTrainerBind(trainer,25);
printTrainer1New(53);