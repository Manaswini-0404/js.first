const name="Manaswini"
const repoCount=50


console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName=new String('manu')

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(1));

console.log(gameName.indexOf('n'));


const newString=gameName.substring(0,2)
console.log(newString);

const anotherString=gameName.slice(-4,2);
console.log(anotherString);

const newString1="   manaswini  "
console.log(newString1);
console.log(newString1.trim());


const url="https://manu.com/manaswini%04padhi"
console.log(url.replace('%04','-'));

console.log(url.includes('manaswini'));
console.log(url.includes('twinkle'));
