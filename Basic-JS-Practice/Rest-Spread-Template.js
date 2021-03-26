///Practice and Revision///
/*
Rest Operator
Spread Operator
Temporal Literals
Higher Order Functions
ES2016-19
Hoisting in JS
Fat Arrow Functions
*/
//Rest Operator//

//Example 1
function restOp(a, b, ...rest)
{
    console.log(`a = ${a}, b = ${b}, rest = ${rest}`);
}
//restOp(1, 2, 3, 4, 5);

//Example 2
function mul(a, ...rest)
{
    return rest.map((x) => x * a);
}
//console.log(mul(2, 1, 2, 3, 4, 5));

//Example 3
let obj1 = { foo: 'bar', x: 42 };
let obj2 = { foo: 'baz', y: 13 };
const merge = ( ...objects ) => ( { ...objects } );
// console.log(merge(obj1, obj2));

//-----------------------------//

//Spread Operator//
//Example 1
function spreadOp(a, b, c)
{
    console.log(a, b, c);
}
var array = [1, 2, 3]
//spreadOp(...array);

//Example 2
let object1 = { foo: 'bar', x: 42 };
let object2 = { foo: 'baz', y: 13 };

let clonedObj = { ...object1 };
let mergedObj = { ...object1, ...object2 };
//console.log(`${clonedObj.foo}, ${clonedObj.x}\n${mergedObj.foo}, ${mergedObj.x}, ${mergedObj.y}`)


//-----------------------------//

//Template Literals//
//Example 1
var ab = 2;
//console.log(`Value to ab is ${ab}.`);

//Example 2
//Tagged templates
function tag(strings)
{
    console.log(strings.raw[1]);
}
  //tag`string text line 1 ${2+3} string text line 2`;

 //-----------------------------//

//Higher Order Functions//
/*
Functions that take another function as an argument or returns any function.
map(), filter(), sort()...
()=> {return fun()}
*/
