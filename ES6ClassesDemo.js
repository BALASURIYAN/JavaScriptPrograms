//Syntactic Sugar
//A Feature that only changes how you type something, but nothing changes under the 
//class is a syntatctical sugar in java script


'use strict';

class Person{

    constructor(firstname,lastname)
    {
        this.firstname=firstname;
        this.lastname=lastname;
    }

    greet()
    {
        console.log(this.firstname);
    }
}


var john=new Person('Bala','Suriyan');

john.greet();

console.log(john.__proto__);