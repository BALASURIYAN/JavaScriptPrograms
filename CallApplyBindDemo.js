
//case 1

let name={
    firstname:"Balasuriyan",
    lastname:"S P",
    printFullName: function(){
        console.log(this.firstname+" "+this.lastname);
    }

}

name.printFullName();

let name2={

    firstname:"Akshay",
    lastname:"Saini"
}


//function borrowing using call()
name.printFullName.call(name2);

//case 2

let student={
    name:"Balaji",
    stream:"EEE"
}

let printStudentDetails=function()
{
    console.log(this.name+" is studying "+this.stream);
}

printStudentDetails.call(student);

//case 3 with function parameter

let trainer={
    name:"Raffic",
    technology:"Java"
}

let printTrainerDetails=function (yearofexperienxe){
    console.log(this.name+" is a "+this.technology+" trainer with "+yearofexperienxe+" years of exeperience");
}

//first argument is a reference and then 2nd argument onwards is the parameters of the function 

printTrainerDetails.call(trainer,15);


//apply method demo
// the only diff b/w call() and apply() is , the parameters of the function will be passed as the list as a second argument

let professors={
    name:"Naresh Kumar",
    subject:"PSA"
}

let printProfessorDetails=function(experience,paperspublished,salary)
{
   console.log(this.name+" is a professor handling "+this.subject+" for "+experience+" years with "+paperspublished+" papers published in the relevant stream, receiving "+salary+" as salary");
}

printProfessorDetails.apply(professors,[25,10,50000]);


//bind() demo

let anotherProfessor=printProfessorDetails.bind(professors,17,5,30000);

console.log(anotherProfessor);
anotherProfessor();
