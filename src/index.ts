interface Human  {
    name:string,
    age:number,
    gender:string

}

const person ={
    name :"ChoiInSeok",
    age:45,
    gender :"Male"
    

}
const sayHi = (persion:Human):string => {
    //console.log(`Hello ${name} , you are ${age}, your are a ${gender}`);
    return `Hello ${person.name} , you are ${person.age}, your are a ${person.gender}`;

}    
console.log(`debug : `,sayHi(person));

export{}    