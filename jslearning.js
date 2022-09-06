////////////////Const, blocked scope, varialable declaration////////////////
// const a = 10;
// {
//   const function1 = 12;
//   const a = 15;

// const { useDebugValue } = require("react")

//   console.log(a);
// }
// console.log(a);

////////////////function scope, parametrized function, function trigger////////////////
// const factorial=()=> {
// //   var fact = 1;
// //   if (x == 0) {
// //     return 1;
// //   } else {
// //     for (var i = 1; i <= x; i++) {
// //       fact = fact * i;
// //       console.log("!" + i + " = " + fact);
// //     }
// //   }
// return "Goutam";
// }
// // factorial(10);
// console.log (factorial());
/*anything

///////Types of comment/////////////
//Goutam// (//single line comment)
Srishti*/ ////(Multiline comment)/////
/**descriptive comments
 * "Here you can document the details"
*/

/////////Variable declaration using Let////////////
// Variables defined with let cannot be Redeclared.
// Variables defined with let must be Declared before use.
// Variables defined with let have Block Scope.
// {
// let a =10;
//     a =20;
//     console.log(a);
// }
// // Question: what is the outcome of below?//
// let a=10;
// // let a=b=20;
// // console.log(a);
// // console.log(b); ////////Answer is "error" as its going against from 1st statement////////
// // --------------------------------------
// /////Day 2- Data types/////
// ///strings, array, object, function, number, undefined, null, boolean///
// let a =20; ///Number///
// let b= "Goutam"///Strings///
// let c= [1, 2, 3]; ///array///
// let d= {name:"Goutam", id: 1}; ///object///
// let e ; ///undefined///
// let f= null; ///null: Datatype of Null is an object///
// let g = true; ///boolean///
// let h= false;  ///boolean///

// console.log(typeof(a));
// console.log(typeof(b));
// console.log(typeof(c));
// console.log(typeof(d));
// console.log(typeof(e));
// console.log(typeof(f));
// console.log(typeof(g));
// console.log(typeof(h));
// console.log(i);

// ///// Practice//////
// const a= 10;
// a=20;
// console.log(a);
// // const a = true;
// // a= false;
// // console.log(a);

//////////Operators///////////
//Arithmetic Operator//
// Operator	Description
// +	Addition
// -	Subtraction
// *	Multiplication
// **	Exponentiation (ES2016)
// /	Division
// %	Modulus (Remainder)
// ++	Increment 
// // let a = 0;
// //     a++;
// //     console.log(a);
// // --	Decrement
// // let a = 2;
// //     a--;
// //     console.log(a);
// // Assignment Operator//
// // Assignment operators assign values to JavaScript variables.
// // Operator	Example	Same As
// // =	x = y	x = y
// // +=	x += y	x = x + y
// // -=	x -= y	x = x - y
// // *=	x *= y	x = x * y
// // /=	x /= y	x = x / y
// // %=	x %= y	x = x % y
// // **=	x **= y	x = x ** y

// /// String Operators///
// // let a = "Goutam" + " " +2;
// // console.log(a);

// ///JavaScript Comparison Operators///

// Operator	Description
// ==	equal to
// ===	equal value and equal type
// !=	not equal
// !==	not equal value or not equal type
// >	greater than
// <	less than
// >=	greater than or equal to
// <=	less than or equal to
// ?	ternary operator

// Examle://
// let a = "3";
// let b = 2;
// console.log(a==b);
// console.log(a===b); ///It will match the type! hence it will fail as 1st is string///

//Ternary Operator example// 
// let a = "20";
// let b = 20;
// a===b? console.log("match"):console.log("not a match");

//Logical Operator Example//
// let a = "20";
// let b = 20;
// a==b || a>b? console.log("match"):console.log("not a match");

/////////////FUNCTIONS///////////////
////NON PARAMETARIZED FUNCTION////
// const multiply = ()=>{
//     const value = 2*3;
//     return value ;
// }
// // console.log(multiply());  (OPTION ONE)
// const finalvalue = multiply(); (OPTION TWO)
// console.log(finalvalue);

////PARAMETARIZED FUNCTION////
// const multiply = (x,y)=>{
//     const value = x*y;
//     return value ;
// }
// console.log(multiply(3,4));
// const multiply = (x,y)=> x*y;///// (Type of return via arrow function)
        //    console.log(multiply(3,4));
/////////////OBJECTS//////////////
// const person = {
//     firstname : "Goutam", lastname : "Singh", Age : 28, Company : "Eli Lilly", fullname : function() {return this.firstname+ " " + this.lastname} 

// }
// console.log(person.fullname());

//////////////////Array/////////////////

// const car = ["Car2", "Car3", "Car1"] ; ///array declaration form///
// // console.log(car[1]);
// console.log(car.length);
// console.log(car.sort());
// car.push("Goutam");
// car.push("Srishti");
// console.log(car.length);
// console.log(car);
// car.pop("Car3");
// console.log(car);

// eslint-disable-next-line no-array-constructor
// const cars = new Array("Car1", "Car2", "Car3");
// console.log(cars[2]);

/////ARRAY ITERATION/////
// const car= [5,4,3];
// car.forEach((item,index)=>{console.log(item,index)})

// const cars= [5,4,3];
// cars.map((item,index)=>{    //////its a function for which return is required////
//         console.log(item,index)
// return item;
// })

// const cars1= [5,4,3];
// console.log(cars1.indexOf(4));
// const filterdvalue = cars1.filter((item,index)=>{    //////its a function for which return is required////
//         console.log(item,index)
// return item>4;
// })
// console.log(filterdvalue);

//................................................................//
//////////////LOOPING///////////////
//ifelsecondition//
// if (20>30) {
//         console.log(true)
// } else {
//         console.log(false)     
// }

////////////Nested ifelse//////////

// const time = new Date().getHours();
// console.log(time);
// let greeting;
// if (time < 10) {
//         greeting = "Good morning";
//       } else if (time < 20) {
//         greeting = "Good day";
//       } else {
//         greeting = "Good evening";
//       }
// console.log(greeting);

///////FORLOOP//////////

// for (let i = 0; i <= 5; i++) {
//         console.log("The number is " + i + "\n");
//       }

// for (let i = 10; i >= 5; i--) {
//         console.log("The number is " + i + "\n");
//       }

/////////FOR IN///////////
// const person = {fname:"John", lname:"Doe", age:25};
// for (let x in person) {
// console.log(person[x] );
// }

// ////////FOR OF///////////- Preffered for Arrays

// const cars = ["BMW", "Volvo", "Mini"];
// for (let x of cars) {
//   console.log(x);
// }
