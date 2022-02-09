let arr=["Akshay","Bala"];

let object={
    name:"Bala",
    age:22,
    getIntro: function()
    {
        console.log(this.name+" "+this.age);
    }
}

object.getIntro();
console.log(object.name);


console.log(arr._proto_);

let object2={
    name:"Adithya"
}

object2._proto_=object;

console.log("/////////////////////////////////////");
console.log(object2.__proto__);

object3=object;

console.log(object3);

console.log(object2.name);

object2.getIntro();

