`use strict`

let darthVader = new Object();
darthVader["allegiance"] = "empire";
darthVader["weapon"] = `lightsabre`;
darthVader["sith"] = true;

console.log(darthVader);

console.log(`Darthvader's allegniance is to the ${darthVader.allegiance}`);
console.log(`Darth Vader's weapon of choice is a ${darthVader.weapon}`);
console.log(`Darth Vader is a sith? ${darthVader.sith}`);
console.log(`Darth Vader is a Jedi? ${ !darthVader.sith}`);

let myArray = [`Hello`, `Everyone`];

console.log(myArray.length);
myArray.push(`Nice Day`);

console.log(myArray);
myArray.shift(`Everyone`);
console.log(myArray);


for(let i = 0 ; i<myArray.length; i++)
{
    console.log(myArray[i])
}