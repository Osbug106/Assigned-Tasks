//Task 1
// var array1 = { id: 1, name: "Test", isActive: false };
// var array2 = [1, 2, 4, 0];
// console.log(Array.isArray(array1));
// console.log(Array.isArray(array2));

//Task 2
// var array = [7, 9, 0, -2];

// function fun (arr, n)
// {
//     if (arr == [])
//     {
//         return [];
//     }
//     if (n == null) 
//     {
//         return arr[0];
//     }
//     if (n < 0)
//     {
//         return [];
//     }
//   return arr.slice(0, n);
// };

// console.log(fun(array, 3));

//Task 3
// var myColor = ["Red", "Green", "White", "Black"];
// console.log(myColor.join(""));
// console.log(myColor.join(","));
// console.log(myColor.join("+"));

//Task 4
// var testArray = [
//     {id: 7, name: "Test1", joiningDate: "2021-03-16T01:23:30.487Z"},
//     {id: 3, name: "Test2", joiningDate: "2021-03-01T09:55:30.487Z"},
//     {id: 2, name: "Test31", joiningDate: "2021-01-15T02:15:30.487Z"},
//     {id: 5, name: "Test81", joiningDate: "2021-06-14T19:51:30.487Z"},
//     {id: 6, name: "Test18", joiningDate: "2021-04-16T12:43:30.487Z"},
//     {id: 9, name: "Test14", joiningDate: "2021-03-16T12:50:30.487Z"},
//     {id: 8, name: "Test21", joiningDate: "2021-02-26T19:50:30.487Z"},
//     {id: 1, name: "Test11", joiningDate: "2021-01-09T19:50:30.487Z"},
//     ];
// var newArray = testArray.sort((a,b) => new Date(a.joiningDate) - new Date(b.joiningDate));
/*
Can also be done using Number() method, but date contain alphbets
thats why I used new Date
*/
// console.log(newArray);

//Task 5
// var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
// let len = a.length;
// for(let i = 0; i < len; i++)
// {
//     let len2 = a[i].length;
//     for(let j = 0; j < len2; j++)
//     {
//         console.log(a[i][j]);
//     }
// }

// Task 7
// var obj1 = {id: 4, name: "Test1", joiningDate: "2021-01-09T19:50:30.487Z"};
// var obj2 = {};
// Object.assign(obj2, obj1);

// console.log(obj1, obj2);

//Task 8
// var array = [1, 2, 3, 4, 5, 6];
// var Sum = array.reduce((val, newval) => val + newval);
// var Product = array.reduce((val, newval) => val * newval);
// console.log(Sum);
// console.log(Product);

//Task 9
// function add(a, b)
// {
//     debugger;
//     var arr = [];
//     var len = 0;
//     if(a.length > b.length)
//     {
//         len = a.length
//         for(let i = 0; i < len; i++)
//         {
//             if(isNaN(b[i]))
//             {
//                 arr.push(a[i]);
//             }
//             else{
//                 arr.push(a[i] + b[i]);
//             }
//         }
//     }
//     else
//     {
//         len = b.length;
//         for(let i = 0; i < len; i++)
//         {
//             if(isNaN(a[i]))
//             {
//                 arr.push(b[i]);
//             }
//             else{
//                 arr.push(a[i] + b[i]);
//             }
//         }
//     }
//     return arr;
// }
// var array1 = [1,0,2,3,4];
// var array2 = [3,5,6,7,8,13];
// console.log(add(array1, array2));

//Task 10
// var array11 = [1, 2, 3];
// var array12 = [100, 2, 1, 10];
// var array21 = [1, 2, 3, 4, 5];
// var array22 = [1, [2], [3, [[4]],[5,6]]];
// var array31 = [1, 2, 3];
// var array32 = [100, 2, 1, 10];

// function check(a, b)
// {
//     a = a.flat(Infinity);
//     b = b.flat(Infinity);
//     let notIn = [];
//     notIn = a.filter((val) => !b.includes(val));
//     notIn = notIn.concat(b.filter((val) => !a.includes(val) && !notIn.includes(val)));
//     return notIn;
// }

// console.log(check(array31, array32));

//Task 11
// 11. What is the difference between JavaScript function and JavaScript fat arrow function? Explain with example.
// Ans:
// •	The major difference is this operator.
// In normal functions this represents the scope in which the function is written while in arrow functions this represents the global scope (window.)
// •	Like normal functions we can not use arrow functions as constructors.
// •	One of the biggest differences is arguments keyword which is not accessible in () => {}

//Task 12
// 12. What is hoisting in JavaScript? Explain with example.
// Ans: Hoisting means initializing a variable before declaring it.
// e.g.
// value = 3;
// var value;
// In JS variables and functions support hoisting.
// In “strict mode” hoisting is not applicable.

//Task 13
// 13. What is difference between synchronous and asynchronous functions? Explain with example.
// Ans: In synchronous every line of code waits for the previous line to execute.
// e.g.
// console.log(“1”);
// console.log(“2”);
// console.log(“3”);

// Output:
// 1
// 2
// 3

// In asynchronous parallel execution is supported using Stack, Web API and Callback Stack.
// No line of code has to wait for the previous line to complete execution.
// e.g.
// console.log(“1”);
// setTimeout(() => console.log(“2”), 2000);
// console.log(“3”);

// Output:
// 1
// 3
// 2
