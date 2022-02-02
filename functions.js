`use strict`

function addition (a,b)
{
    return a+b;
}

console.log(addition(5,6));

function wellcome(name, age, gender)
{
    console.log(`My name is ${name}, I am ${age} years old and of gender ${gender}`)
}

wellcome(`Jesse Kamau`, 28, `Male`);

// function powerUp (n1,n2)
// {
//     return n1**n2;
// }
// console.log(powerUp(3,3))

powerUp = (n1,n2) => n1**n2;
console.log(powerUp(3,3));