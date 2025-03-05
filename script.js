// W3school js//

// Arithmetic Operators Example//
//addition//
// let a,b,c;
// a=3
// b=3
// c=a+b;
// console.log(c);
// document.getElementById("jsp").innerHTML=c;
// //  subtriction

// let number1 ,number2,sub;
// number1=100;
// number2=50;
// sub=number1-number2;
// console.log(`Sub of 100 - 50 = ${sub}`);
// // multipication
// let num1,num2,mul;
// num1=20;
// num2=20;
// mul=num1*num2;
// console.log(`mul of 20 * 20 = ${mul}`)


// class work

// console.log(2*2-2+4/2%4); 
//             //  4-2+2%4
//             //  4-2+2
//             //  2+2=4
// let a=2;
// console.log(a++ + ++a - --a + a++ + ++a)
            //  2  + 4   -  3  + 3   + 5
// let firstNum=+prompt("Enter first number");

// let secontNum=+prompt("Enter send number");

// console.log(firstNum+secontNum);

// let firstNum=prompt("Enter first number" );
// let secontNum=prompt("Enter send number");
// console.log(typeof(firstNum+secontNum ))

// let wether= prompt("barash")
// if (wether=="barsh"){
//    console.log("umbrala lekar jana")
// }
// else{
//     console.log("Musan tak hian umbarla leny ki zarorat nh hia") 
// }


// if else statmant

// let marks=prompt("enter your marks");

// if(marks>=90 && marks<=100){
//     console.log("your marks is A1 grad");
// }
// else if(marks>=80 && marks<90){
//     console.log("your marks is A grad");
// }
// else if(marks>=70 && marks<80){
//     console.log("your marks is B grad");
// }
// else if(marks>=60  && marks<70){
//     console.log("your marks is C+ grad");
// }
// else if(marks>=50  && marks<60){
//     console.log("your marks is C grad");
// }
//  else if( marks>100 || marks<0){
//     console.log("please enter your correct marks");
// }

// else{
//     console.log("sorry your fail");
// }

//nested if else statmant

// arry 
// let cities=[];
// cities[0]="peshawar";
// cities[1]=`karachi`;
// cities[2]=`lahoor`;
// cities[3]=`islamabad`;
// cities[4]=`charsadda`;
// cities[5]=`newshera`;

// console.log(cities);

// console.log(cities[3])


// activity

// let cities=[];
//  let A=prompt("enter your city");
//  cities.push(A);
//  let B=prompt("enter your city");
//  cities.push(B);
//  let C=prompt("enter your city");
//  cities.push(C);
//  let D=prompt("enter your city");
//  cities.push(D);
//  let E=prompt("enter your city");
//  cities.push(E);
//  let DElat=prompt("you want to delat last elemen")
//  if(DElat=="yas"){
//   yass=cities.pop();
//   console.log( yass)
//   console.log(cities);
//  }
//  else{
//  console.log(cities);
// }
// arry methods >>  posh , pop, unshift ,shift , slice , splice,
// arry methods

// let arry=[1,2,3,4,5,6,7,8,9,10];
// arry.unshift("kamran")
// console.log(arry);
// arry.shift();
// console.log(arry);
// newaryy=arry.slice(0,5);
// console.log(newaryy);

// Splice=arry.splice(5,4);
// console.log( "deletet values " + Splice);
// arry.splice(4,0 ,"kamran");
// console.log( arry);

// arry.splice(1,1,`khaN`);
// console.log(arry);

// forloop
// for(let i=0; i<7; i++){
//     console.log("ali");
// }

// let arry=["kamran","khan","ali","sami","abdullah"];
// console.log(arry.length);

// console.log(arry[0]);
// console.log(arry[1]);
// console.log(arry[2]);
// console.log(arry[3]);
// console.log(arry[4]);
// for(i=0; i<5; i++) {
    
//     console.log(arry[i]);
    
// }

// break statment
// for(let i=0; i<10; i++){
//     console.log(i);
//     if(i==5){
//         break;
//     };
    
// };













// Assignment 
// Q1: Write a program that asks the user for their first and last name.
// - Combine both names and display "Your full name is: [Full Name]".
 
// let firstName,lastName;
//    firstName =prompt("Enter your first Name  " );

//    lastName=prompt( "  Enter your first Name " );

//    console.log( "you are full is " + firstName +" "+ lastName );
   

//    Q2: Write a program that asks the user for their first name, last name, and age.
//    - Display a message like: "Hello [first name] [last name], you are [age] years old!"
    
//  let fname, lname,age;
//  fname=prompt("Enter your first Name ");
//  lname=prompt("Enter your Last Name ");
//  age=prompt("Enter your age");
// console.log("Hello " + fname + " " + lname + " Your are " + age + " yerars old " );

// Q3: Consider the following math expression:
// let result = 5 + 2 * 3;
// - Predict what the result will be and write it down.
// - Modify the expression by using parentheses to change the order of operations so that addition happens first.
// - Display both results in the console.

// let result = 5 + 2 * 3;
// let correctResult=(5+2)*3;
// console.log("waitout parentheses = "+ result);
// console.log("wait parentheses = "+ correctResult);


// Q4: Given the expression below:
// let result = 10 / 2 + 4 * 3 - 5;
// - Predict the result.
// - Modify it using parentheses to change the order of operations.
// - Display both results in the console.

// let result = 10 / 2 + 4 * 3 - 5;

// // i want to add and sub first 

// let changeRerult= 10/ (2+4) * (3-5);
// console.log(result);
// console.log(changeRerult);


// Q5: Write a program that asks the user to enter a number.
// - If the number is greater than 0, display "Positive Number".
// - If the number is less than 0, display "Negative Number".
// - If the number is 0, display "Zero".

// let num1;
// num1=prompt("Enter your numer");
// if(num1>0){
//     console.log(" your number is Positive Number");
// }
// else if(num1<0){
//     console.log(" your number is Nagative Number");
// }
// else {
//     console.log("that is zero")
// }

// Q6: Write a program that asks the user to enter their age.
// - If the age is below 13, display "You are a child." 
// - If the age is between 13 and 19, display "You are a teenager." 
// - If the age is 20 or above, display "You are an adult."

// let age;
// age=prompt("Enter your age");
// if(age<=13&& age>0){
//     console.log("You are a child");
    
// }
// else if(age>13&& age<=19){
//     console.log("You are a teenager.");
    
// }

// else if(age>=20){
//     console.log(`your are an adult`);
    
// }
// else{
//     console.log("something wrong");
// }

// Q7: Write a program that asks the user to enter a number.
// - If the number is even, display "The number is even." 
// - If the number is odd, display "The number is odd."

// let number;
// number=prompt("enter your number");
// if(number%2==0){
//     console.log("your number is even");
// }
// else{
//     console.log("your number is old");
// }

// Q8: Write a program that asks the user to enter a number.
// - If the number is divisible by both 3 and 5, display "Divisible by both 3 and 5". 
// - If the number is only divisible by 3, display "Divisible by 3". 
// - If the number is only divisible by 5, display "Divisible by 5". 
// - If the number is divisible by neither, display "Divisible by neither".

// let num1;
// num1=prompt("enter number");
// if(num1%3==0 && num1%5==0){
//     console.log("Divisible by both 3 and 5")
// }
// else if(num1%3==0){
//     console.log("Divisible by both 3")
// }

// else if(num1%5==0){
//     console.log("Divisible by both 5")
// }
// else{
//     console.log("Divisible by neither")
// }


//  assignmet no 2


// let fruits = ['apple', 'banana', 'cherry']; 
// // 1. Write a JavaScript program to remove the last element from an array. 
// fruits.pop();
// console.log(fruits);
// // 2. What is the difference between the shift() and unshift() methods in JavaScript? 
// //   unshift uesed for add same element is start of Array
// fruits.unshift(`mango`);
// console.log(fruits);
// // shift uesed for romoving or delating element form instar of arry
// fruits.shift();
// console.log(fruits);

// // 3. Write a JavaScript program to create a new array that includes a subset of elements from an existing 
// // array using the slice() method. 
// let fruits2 = ['apple', 'banana', 'cherry']; 
// console.log("Oraginal Array");
// console.log(fruits2);
// newarray=fruits.slice(0,2);
// console.log("AFter new array");
// console.log(newarray);
// // 4.Add a fruit after apple using splice. 
// fruits2.splice(1,0,"orange")
// console.log("AFter apple Add orange ");
// console.log(fruits2);
// // 5.Update cherry to Mango using splice.
//  console.log("AFter replace cherry to mango ");
//  fruits2.splice(3,1,"mango");
//  console.log(fruits2);
// // 6. Write a JavaScript program to concatenate two arrays.

// let array=["kamran","ali","hamid",`abdullah`,"sami"];
// console.log(array);
// let Number=[1,2,3,4,5,6,7,8,9,10];
// console.log(Number);
// console.log("affter conatenate 2 array");

// nuwarayy=array.concat(Number);
// console.log(nuwarayy);
// // 7. Write a JavaScript program to convert an array to a string. 
// let array2=["kamran","ali","hamid",`abdullah`,"sami"];
// console.log("Before");
// console.log(array2);
// console.log("convert an array to a string");
// array2=array2.toString();
// console.log(array2);


// // 8. Write a JavaScript program to check if an array includes a specific value. 
// let Number2=[1,2,3,4,5,6,7,8,9,10];
// chekingnumber=Number2.includes(10);
// console.log(chekingnumber);
// console.log("Before");
// console.log(Number2);

// // 9.Write a JavaScript program to reverse the order of elements in an array.
// console.log("after reverse order");
//  reversorder=Number2.reverse();
//  console.log(reversorder);
 
// // 10.Write a JavaScript program to use a for loop to iterate over the elements of an array and print each 
// // element to the console. 
// let array3=["kamran","ali","hamid",`abdullah`,"sami"];

// for(let i=0; i<5;i++){
//     console.log(i+"." + array3[i]);
    
// }



// 11. Write a JavaScript program to use a for loop with a break statement to exit the loop when a specific 
// condition is met.
// let Number3=[1,2,3,4,5,6,7,8,9,10];
// for(i=0; i<10; i++){
//     if(i==5){
//         break;
       
//     }
//     else{
//         console.log(Number3[i]);
//     }
    
// }
// console.log("TAbles");

let table;
table=prompt("rnter no");
for(let i=0; i<=10; i++){
    console.log(table +` * `+i+ ` = `+ table*i);
    
}


let colar=[ `red`,`yallow`,`black`];
let obj=[`car`, `bike`,`bus`]
let firstName=[];
for(let i=0; i<colar.length;i++){
    for (let j = 0; j<obj.length; j++) {
        
       firstName.push(colar[i] + obj[j]);
        
    }
   
    
}
console.log(firstName);


let tex=prompt("enter text");

console.log(tex.toLowerCase());

let fruits2 = ['apple', 'banana', 'cherry']; 
console.log(fruits2.length)


let newarray= fruits2.slice(0,2);
console.log(newarray);
