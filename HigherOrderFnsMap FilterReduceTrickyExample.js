const users=[

    {firstname:"bala", lastname:"suriyan", age:22},
    {firstname:"balaji",lastname:"s",age:23},
    {firstname:"Jayakar",lastname:"victor",age:24}
];

//list of fullnames

const output=users.map((x)=>x.firstname+" "+x.lastname);

console.log(output);

//how many users have particular age

const agewise=users.filter(x=>x.age===22);

console.log(agewise);

//how many users have particular age

const agewise2=users.reduce(function(acc,curr){
    if(acc[curr.age])
    {
       acc[curr.age]= ++acc[curr.age];
    }
    else{
        acc[curr.age]=1;
    }
    return acc;
},{});

console.log(agewise2);


//filter age less than 30

const agelessthan30=users.filter(x=>x.age<30).map(x=>x.firstname);

console.log(agelessthan30);



