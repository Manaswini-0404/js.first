const myDate=new Date()
console.log(myDate);

console.log(myDate.toString());

console.log(myDate.toDateString());

console.log(myDate.toLocaleString());

console.log(myDate.toTimeString());
console.log(typeof myDate);


let myCreatedDate=new Date(2004,4,44)
console.log(myCreatedDate.toDateString());

let myTimeStamp=Date.now()
console.log(myTimeStamp);

console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate=new Date()
console.log(newDate);
console.log(newDate.getMonth());

