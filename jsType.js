'use strict';

// let a;
// let b = "12345";
// let c = 12344;
// let d = true;
// let e = {a:"JavaScript"};

// typeof(a);
// typeof(b);
// typeof(c);
// typeof(d);
// typeof(e);
// console.log(c);

// let totalMoney = 4000;
// let moneyPaidSoFar = 2348;
// let totalLeftToPay = totalMoney - moneyPaidSoFar;

// console.log(`The total bill is £ ${totalMoney} the remaining amount of money to be paid is £ ${totalLeftToPay}`)

// for(let i = 0; i<10;i++){
//     console.log(`i = ${i}`);

// }

// let condition = true;
// let i = 0;

// while(condition==true){

//     console.log(`increment me!`)
//     i++;

//     if (i >= 122){
//         condition = false;
//     }
// }

// let a = false;

// do {
//     console.log(`Run Forest Run`);
// }while(a == true)

// //Task 1
// for(let A = 100; A < 200; A++){
//     console.log(A)
// }
// //Task 2
// let A = 100;
// while(A<=200){
    
//     if(A%2==0){
//         console.log(`*`)
//     }
//     else(console.log(`-`))
//     A++
// }
// //Task 3
// let num = 0;
// while(num <=10)  {  
//     for(let A = 1; A <= 10; A++){
//         console.log(A);
//     }
//     num++;
// }
// //Task 4
// for(let A = 100;A <=200;A++)
// {
//     if(A%2==0)
//     {
//         console.log(`*`)
//     }
//     else{
//         console.log(`-`)
//     }
    
// }
// //Task 5

// let now = new Date(); 
// let day = now.getDay();
// console.log(day);
// switch(day)
// {
//     case 1:
//         console.log("Today is Monday");
//         break;
//     case 2:
//         console.log("Today is Tuesday"); 
//         break;
//     case 3:
//         console.log("Today is Wednesday");
//         break;
//     case 4:
//         console.log("Today is Thursday"); 
//         break;
//     case 5:
//         console.log("Today is Friday"); 
//     break;
//     case 6:
//         console.log("Today is Saturday");
//     case 7:
//         console.log("Today is Sunday"); 
    
//     default:
//         console.log(`You have not selected a day of the week.`)
// }

//Conditionals with Truthy / Falsey

// let strictA = true;
// let strictB = 1;

// console.log(strictA == strictB);
// console.log(strictA === strictB);
// console.log(strictA != strictB);
// console.log(strictA !== strictB);

let age = 46;

if(age >= 18 && age <=65){
     console.log(`You're age is ${age} which is in range`)
} else if (age < 18 )
{
    console.log(`Sorry you are underage`)
}

// if(age > 50){
//     console.log(`You exceed our range`)
// }

let a = age > 50 ? console.log(`You exceed our range`):console.log(`You're age is ${age} which is in range`)