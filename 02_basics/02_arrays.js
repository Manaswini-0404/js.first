const marvel_heros=["Thor","Ironman","Spiderman"]
const dc_heros=["Superman","Flash","Batman"]

//marvel_heros.push(dc_heros)
//console.log(marvel_heros);      #[ 'Thor', 'Ironman', 'Spiderman', [ 'Superman', 'Flash', 'Batman' ] ]
//console.log(marvel_heros[3][1]); #Flash

//const allHeros=marvel_heros.concat(dc_heros)
//console.log(allHeros);

const newHeros=[...marvel_heros,...dc_heros]
//console.log(newHeros);

const anotherArray=[1,2,3,[4,5,6],[7,8,9,[4,7]]]
const realArray=anotherArray.flat(Infinity)
//console.log(realArray);

//console.log(Array.isArray("Manaswini")); #returns boolean value
//console.log(Array.from("Manaswini"));  #converts to array

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));
