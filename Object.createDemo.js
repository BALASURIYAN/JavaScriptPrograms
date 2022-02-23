var student={
    name:'',
    stream:'',
    greet:function(){
        console.log("Good Morning Principal and all");
    }
}

var john=Object.create(student);
john.name='Balasuriyan';
john.stream='EEE';


var jane=Object.create(student);
jane.name='Balaji';
jane.stream='EEE';

console.log(john.name+' studying '+john.stream+' ');
john.greet();

console.log(jane.name+' studying '+jane.stream+' ');
jane.greet();


//this is a best example of inheritance, there are number of ways inheritance in JS, this is one among that