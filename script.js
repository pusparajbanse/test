// challenges 1
//  let myAge = 20;
//  let doubleAge = myAge * 2;
//  console.log(doubleAge)

// challenges 2
// let quote = "I'm learning JavaScript!"
// console.log(quote)

// challenges-3
// function calculateOperations(num1,num2, operator){
//     switch(operator){
//         case "+":
//             return num1+num2;
//             break
//             case "*":
//                 return num1*num2
//                 break
//                 case "/":
//                     return num1/num2
//                     break
//                     case "-":
//                     return num1-num2
//                     break
//                     case "%":
//                     return num1%num2
//                          default:
//                             return "invailed grade"

//     } 
// }
//  console.log(calculateOperations(10,2,"+"));
//  console.log(calculateOperations(10,2,"*"));
//  console.log(calculateOperations(10,2,"/"));
//  console.log(calculateOperations(10,2,"-"));
//  console.log(calculateOperations(10,3,"%"));

//  function calculateOperations(num1, num2){
//     let sum = num1+num2;
//     let difference = num1-num2;
//     let product = num1*num2;
//     let quotient = num1 / num2;
//     return [sum, difference, product, quotient]
//  }
//  console.log(calculateOperations(10, 2))

//  #string length & Indexing

// function getLastChar(str){
//    return str[str.length -1]
// }
//  console.log(getLastChar("Hellow"))

//   # Array Munipulation

//   let fruits = ["Apple", "Banana", "Orange"];
//    fruits.push("Mango")
//   console.log(fruits)

//   let Fruits = ["Apple", "Banana", "Orange"];
//   Fruits.shift()
//  console.log(Fruits)

// # Function & Return 
// function multiplyByThree(num){
//    return num *3
// }
//  console.log(multiplyByThree(6))

//  # Boolean & Conditional operator
// function isEven(num){
//    if(num % 2 ==0) {
//       return num % 2;
//    }else{
//       return false;
//    }
// }
// console.log(isEven(6))
// # logical operator

// Write a function canDrive that takes two arguments: 
// age and hasLicense. Return true if age is 18 or older AND the person has a license.
// console.log(canDrive(20, true));  // true

// function canDrive(a,str){
//    if(a>=18 && str=="true"){
//       console.log("canDrive")
//    }
//    else{
//       console.log("can't drive")
//    }

// }
// canDrive(10, "true")

// # if else statements
// function getGrade(num){
//    if(num>90 && num<=100){
//       return "A";
//    } 
//    else if(num>80 && num<=90){
//       return "B"
//    }
//    else if(num>60 && num<=69){
//       return "c"
//    }  
//    else{
//       return "F"
//    }
// }
// console.log(getGrade(61))

// Write a function nextInLine that takes an array arr and a number num. 
// It should add num to the end of arr, remove the first element, and return 
// the removed element.
// let queue = [1, 2, 3, 4, 5];
// console.log(nextInLine(queue, 6)); // 1

// function nextInLine( arr, num){
//  arr.push(num);
//  return arr.shift();
// }
// let number = [1,2,3,4]
// console.log(nextInLine(number, 5))
// console.log(number)





// challenges 1
//let myName ="puspa"
// console.log(myName)

// let city ="Kathmandu"
// console.log(city);
// city="Biratnagar";
// console.log(city)


//  let fruit = "Apple";
//  console.log(fruit)
//  Fruit = "orange";
//  console.log(Fruit)


// const number = (10 + 5) * 2 / 5;
// console.log(number)

// function getRemainder(num1,num2){
//     return num1 % num2; 
// }
// console.log(getRemainder(20,3));

// var count = 10;
// count++;
// console.log(count)
// count--;
// console.log(count)
// count--;
// console.log(count)

// let firstName ="puspa"
// let lastName ="Rajbanshi"
// let fullName = firstName +" "+ lastName;
// console.log(fullName)



// function getLength(b){
//     return b.length;
// }

// console.log(getLength("puspa"))
//  // 5
//  console.log(getLength("bandhana"));
//  // 8

//  console.log(getLength("Ashim")); 
// let a = "puspa"
// console.log(a.length)


// let word = "HELLO"
// console.log(word[0])
// console.log(word[3])



// let Fruit = ["Apple", "Mangoo","orange"]
// Fruit.push("Bananana")
// console.log(Fruit)

// let number = [1,2,3,4]
// number.push(5)
// console.log(number)

//  let nam = [1,2,3,4];
//  nam.pop();
//  console.log(nam)
// 12
// let Arr = ["Red","yello","Blue"];
// Arr.shift("Green");
// console.log(Arr);
// 13
// let arr = ["Yellow", "Green", "Darkblue"];
// arr.unshift("Maroon");
// console.log(arr);

// 14
// function doubleNumber(num){
//     return num * 2;
// } 
// console.log(doubleNumber(16))
// # Swap & variables   >>replace
// let a = 10;
// let b = 30;

// let num = a;
// a = b;
// b = num;
// console.log(a,b)
// # swap variable using third variable
// let a = 2; b = 3;
// let



// find the Reminder
// function findRemainder(num1, num2 ){
//     return num1%num2;
// } 

// console.log(findRemainder(50, 5))


// Challenge 4: Find the Maximum of Three Numbers
// Task:
// Write a function maxOfThree that returns the largest of three numbers.


// function maxOfThree(num1,num2,num3){
//     return Math.max(num1, num2, num3) ;
// }
//  console.log(maxOfThree(10 , 6, 50))


// Challenge 5: Check even or odd
// Task:
// Write a function checkEvenOdd that take a number and return whether the number 
// is even or odd.

// function checkEvenOdd(Number){
//     if(Number%2 === 0){
//         return "even";
//     }else{
//         return "odd";
//     }
// }
// console.log(checkEvenOdd(7))



// 10    Create a function testSize and Write chained if/else if 
//       statements to fulfill the following conditions
// 11
// 12    num < 5 - return "Tiny"
// 13    num < 10 - return "Small"
// 14    num < 15 - return "Medium"
// 15    num < 20 - return "Large"
// 16    num >= 20 - return "Huge"
// 17    */

// function testSize(Num){
//     if(Num < 5){
//         return "Tiny";
//     }else if(Num < 10){
//         return "Small";
//     }else if(Num < 15){
//         return "Medium"
//     }
//     else if(Num < 20){
//         return "Large"
//     }else {
//         return "Huge"
//     }
// }

// console.log(testSize(5))



// Challenge 1: Grade Evaluator
// Write a function getGrade(letter) that takes a letter grade
//  (A, B, C, D, or F) and returns the corresponding performance description using a switch statement.

// "A" → "Excellent"

// "B" → "Good"

// "C" → "Average"

// "D" → "Below Average"

// "F" → "Fail"
// If an invalid grade is given, return "Invalid Grade".

// console.log(getGrade("A")); // Output: Excellent
// console.log(getGrade("C")); // Output: Average
// console.log(getGrade("X")); // Output: Invalid Grade

// function getGrade(letter){
//     switch(letter){
//         case "A":
//             return "Excellent"
//             break
//             case "B":
//                 return "Good"
//                 break
//                 case "C":
//                     return "Average"
//                     default:
//                     return "invailed grade"

//     }
// }
// console.log(getGrade("A"));
// console.log(getGrade("x"));
// console.log(getGrade("B"));
// console.log(getGrade("c"));



// Challenge: Simple Calculator

// Create a function calculate(num1, num2, operator) 
// that performs basic arithmetic operations (+, -, *, /) using a 
// switch statement.

// "+" → Addition

// "-" → Subtraction

// "*" → Multiplication

// "/" → Division (Return "Cannot divide by zero" if num2 is 0).

// If the operator is invalid, return "Invalid Operator".
// console.log(calculate(10, 5, "+")); // Output: 15
// console.log(calculate(10, 5, "-")); // Output: 5
// console.log(calculate(10, 5, "*")); // Output: 50
// console.log(calculate(10, 5, "/")); // Output: 2
// console.log(calculate(10, 0, "/")); // Output: Cannot divide by zero
// console.log(calculate(10, 5, "%")); // Output: Invalid Operator


// function calculate(num1, num2, operator){
//     switch(num1, num2, operator){
//         case "+":
//         return "Addition"
//         break
//         case "/":
//             return "Divide"
//             break
//             case "%":
//                 return "Modulas"
//                 default:
//                 return "invalid operator"

//     }
// }
//  console.log(calculate(10,4, "+"))
//  console.log(calculate(10,4, "%"))
//  console.log(calculate(10,4, "-"))
//  console.log(calculate(10,4, "/"))

// console.log(parseInt("wer"))
// console.log(parseInt(1234))
// console.log(parseInt("wer"))




// Challenge : Phonebook Lookup
// Create a function findContact(phonebook, name) that takes:

// An object phonebook where keys are names and values are phone numbers.

// A name to look up in the phonebook.

// The function should return:

// The phone number if the name exists.

// "Contact not found" if the name is not in the phonebook.

// function findContact(phonebook, name) {
//     return phonebook[name] || "contact not found" ;
// }
// const phonebook = {
//     "banadhana": "123567809",
//     "Pustam": "9876540987",
//     "Riya": "4567098456",
// };

// console.log(findContact(phonebook, "Pustam"))
// console.log(findContact(phonebook, "puspa"))


// ###### LOOP practice

// ## for loop

// for(let i = 1; i <=10; i++){
//     console.log("hello world")
// }

// ## while loop
// let i = 0;
// while(i <=6){
//     console.log(i);i++;
// }

// ## DO while loop
 
// let i = 1;
//  do{
//     console.log(i);
//     i++;
//  } while(i <= 5)



// ## 
// for(let i = 0; i <= 9; i++){
//     console.log(i)
//     console.log("HELLO WORLD")
//     console.log("Rajbanshi")
// }


// ##
// Change the value of name property 
// and age property with your original name and age
// const obj = {
//     name:"Araya",
//     age: 20
// }
// obj.name = "Riya", age = 20;
// obj["name"] = "Ram", obj["age"] = 33;
// obj.name = "Rama", obj.age = 40
// Object.assign(obj,{["name"]:"Anju", ["age"]:15})
// console.log(obj)


// ## add to numbers
// function twoNumbers(nam1,nam2){
//     return nam1 + nam2
// }
// console.log(twoNumbers(22,2))

// Challenge : Phonebook Lookup
// Create a function findContact(phonebook, name) that takes:
// function findContact(phonebook, name){
//     return phonebook[name] || "contact not found";

// }
// const phonebook = {
//     "Raju":12345678990,
//     "Priya":5678094567,
//     "tisha":98098766543,
// }
// console.log(findContact(phonebook, "Raju"))
// console.log(findContact(phonebook, "Ram"))




// Challenge 4
// An object phonebook where keys are names and values are phone numbers.

// A name to look up in the phonebook.

// The function should return:

// The phone number if the name exists.

// "Contact not found" if the name is not in the phonebook.

// const phonebook = {
//     "ashim": 29492834,
//     "raman": 29348209834,
//     "rai": 920340923
// }

// 1. Print Numbers from 1 to 10
// for(let i = 1; i<=10; i++){
//     console.log(i)
// }


// 2. Print Even Numbers from 1 to 20
// Write a loop that prints only even numbers from 1 to 20.
// for(let i = 2; i<=20; i += 2){




//     console.log(i)
// }



// 3. Sum of First 10 Natural Numbers
// Calculate and print the sum of numbers from 1 to 10.

// let sum = 0;
// for(let i = 0; i<=30; i++){
//     sum += i

// }
// console.log("sum", sum)


// 4. Reverse Counting from 10 to 1
// Print numbers from 10 to 1 in descending order.

// for(let i = 10; i>=1; i--){
//     console.log(i)
// }