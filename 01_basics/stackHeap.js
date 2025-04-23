// Stack(Primitive)
// Heap(Non-primitive)

let myName="Manaswini"

let anotherName=myName

anotherName="Twinkle"
console.log(myName); //Manaswini
console.log(anotherName); //Twinkle

let user={
    email:"user@google.com",
    upi:"user@ybl"
}

let user1=user

user1.email="manaswini@google.com"

console.log(user.email);
console.log(user1.email);
