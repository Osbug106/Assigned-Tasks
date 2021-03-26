// let arr = [1, 500, 0, 1, 50, 2, 3, 10, 10, 1];

// arr.forEach((item) => {
//   setTimeout(() => console.log(item));
// });

// console.log("first");
// setTimeout(() => {
//     console.log("second");
// }, 0);
// console.log("third");

// var arrowFun = () => console.log(this);
// arrowFun();

// var promise = new Promise((resolve, reject) => {
//     var bool = false;
//     if(bool)
//     {
//         resolve("I am resolved");
//     }
//     else
//     {
//         reject("I am rejected");
//     }
// });

// promise.then(
//     (value) => {console.log(value)},
//     (error) => {console.log("Ooops..! "+error)}
// );

// var obj = {prop1: 'prop1Value', prop2: 'prop2Value', child: {childProp1: 'childProp1Value'}};
// console.log("Object:", obj);

// var obj1 = {
//     id : 1,
//     fun : function () {console.log(this.id)},
//     // funA : () => console.log(this.id)
// };

// var obj2 ={
//     id2 : 3
// };

// var newBind = obj1.fun.bind({id : obj2.id2});
// newBind();

// var ary = ["asd", "fgh", "qwe"];
// var newAry = ary.map((val)=>{
//     val[0] = "0";
//     console.log(val[0]);
//     return val;
// });
// console.log(newAry);