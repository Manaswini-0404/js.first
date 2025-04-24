//object literals

const mySymbol=Symbol("key1")

const JsUser={
    name:"Manaswini",
    "full name":"Manaswini Padhi",
    [mySymbol]:"mykey1",
    age:18,
    location:"Rayagada",
    email:"manaswini44@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Tuesday"]

}

//console.log(JsUser.email); 
//console.log(JsUser["email"]);
//console.log(JsUser["full name"]);
//console.log(JsUser[mySymbol]);

JsUser.email="manaswini33@gmail.com" // #overwrites

//Object.freeze(JsUser)
JsUser.email="manu0404@gmail.com"
//console.log(JsUser);

JsUser.greeting=function(){
    //console.log("Hello JS User");
}
JsUser.greetingTwo=function(){
  //  console.log(`Hello JS User,${this.name}`);
}
//console.log(JsUser.greeting());
//console.log(JsUser.greetingTwo());

//singleton

//const tinderUser=new Object()

const tinderUser={}
tinderUser.id="123abc"
tinderUser.name="Manu"
tinderUser.isLoggedIn=false

//console.log(tinderUser);

const regularUser={
    email:"manaswini@gmail.com",
    fullname:{
        userfullname:{
            firstname:"manaswini",
            lastname:"padhi"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj4={5:"a",6:"b"}
//const obj3={obj1,obj2}
//const obj3=Object.assign({},obj1,obj2,obj4)

const obj3={...obj1,...obj2}
//console.log(obj3);


const users=[
    {
        id:1,
        email:"manaswini@gmail.com"
    },
    {        
    },
    {

    },
    {

    }
]
users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

