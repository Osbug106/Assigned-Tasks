function swaping()
{
    var x = 10, y = 5;
    console.log("Before: ","x = ", x, ", y = ", y);
    
    //Method: 1
    x += y;
    y = x - y;
    x -= y;

    //Method: 2
    //[x, y] = [y, x];

    console.log("After: ","x = ", x, ", y = ", y);
}

function reversing()
{
    var ary = [1,8, 9, 4];
    console.log("Before: ","Array = ", ary);

    ary = ary.reverse();
    console.log("After: ","Array = ", ary);
}

function concat()
{
    var ary1 = [1,4,6];
    var ary2 = [2,3,5];
    var Carray = [];

    console.log("Array1: ", ary1);
    console.log("Array2: ", ary2);

    //if arrays are already sorted
    Carray = ary1.concat(ary2).sort((x, y) => x - y);

    //if arrays are not sorted
    // ary1.sort((x, y) => x - y);
    // ary2.sort((x, y) => x - y);
    // Carray = ary1.concat(ary2).sort((x, y) => x - y);

    console.log("Sorted Concatenated Array: \n", Carray);
}

function addProperty()
{
    var array = [{id: 1, name: 'Ali', dob: '02/02/1990'},
    {id: 1, name: 'Ali', dob: '02/02/1990'},
    {id: 2, name: 'Usman', dob: '02/01/1991'},
    {id: 3, name: 'Saad', dob: '12/23/1990'}];
    console.trace("Array of objects:\n", array);

    for(let i = 0; i < array.length; i ++)
    {
        Object.defineProperty(array[i], "isActive", {value: true});
    }
    console.log("Array of objects after adding 'isActive' property:\n", array);
}

function indexof()
{
    var array = [{id: 1, name: 'Ali', dob: '02/02/1990'},
    {id: 1, name: 'Ali', dob: '02/02/1990'},
    {id: 2, name: 'Usman', dob: '02/01/1991'},
    {id: 3, name: 'Saad', dob: '12/23/1990'}];

    var v = document.getElementById("val").value;
    var a = array.map(function(e){return e.id});
    var b = a.indexOf(Number(v));
    console.log(a);
    console.log(b);
}

function findindex()
{
    var array = [{id: 1, name: 'Ali', dob: '02/02/1990'},
    {id: 1, name: 'Ali', dob: '02/02/1990'},
    {id: 2, name: 'Usman', dob: '02/01/1991'},
    {id: 3, name: 'Saad', dob: '12/23/1990'}];

    var v = document.getElementById("val").value;
    var a = array.findIndex((x) => x.id == v);
    console.log(a);
}

function arrayUsingApply()
{
    var ary = Array.apply(null, {length:50}).map(Number.call, Number);
    // var even = ary.filter((a) => {return a % 2 == 0;});
    // var odd = ary.filter((a) => {return a % 2 != 0;});

    var even = [];
    var odd = [];
    ary.forEach((a) => {(a % 2 == 0)? even.push(a) : odd.push(a)});

    console.log("Even numbers: ", even);
    console.log("Odd numbers: ", odd);
}

function sumOfArray()
{
    var ary = Array.apply(null, {length:50}).map((element, index) => {return index + 1});
    var sum = ary.reduce((Sum, value) => {return Sum + value});
    console.log(sum);
}

function reverseSort()
{
    var ary = Array.apply(null, {length:50}).map(Number.call, Number);
    var even = [];
    var odd = [];
    ary.forEach((a) => {(a % 2 == 0)? even.unshift(a) : odd.unshift(a)});
    console.log("Even numbers (reverse sorted): ", even);
    console.log("Odd numbers (reverse sorted): ", odd);
}



//////////////////////////////////
/////////Form Validation/////////

function validation()
{
    var form = document.forms["f1"];
    var fname = form.elements.fname.value;
    var email = form.elements.email.value;
    var pass = form.elements.pass.value;
    var repass = form.elements.repass.value;
    var phone = form.elements.phone.value;

    var nre = /^[a-zA-Z ]{3,20}$/;
    var ere = /^[a-zA-Z0-9_]{3,}@[a-zA-Z]{3,}\.[a-zA-Z]{2,}$/;
    var pre = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    var phre = /^(03|\+923)[0-4][0-9]{8}$/;

    var flag = true;

    if(!nre.test(fname))
    {
        document.getElementById("w1").innerHTML = "*invalid or empty.. !";
        flag = false;
    }
    else
    {
        document.getElementById("w1").innerHTML = "";
    }
    if(!ere.test(email))
    {
        document.getElementById("w2").innerHTML = "*invalid or empty.. !";
        flag = false;
    }
    else
    {
        document.getElementById("w2").innerHTML = "";
    }
    if(!pre.test(pass))
    {
        document.getElementById("w3").innerHTML = "*invalid or empty.. !";
        flag = false;
    }
    else
    {
        document.getElementById("w3").innerHTML = "";
    }
    if(!pre.test(repass) || pass != repass)
    {
        document.getElementById("w4").innerHTML = "*invalid or empty.. !";
        flag = false;
    }
    else
    {
        document.getElementById("w4").innerHTML = "";
    }
    if(!phre.test(phone))
    {
        document.getElementById("w5").innerHTML = "*invalid or empty.. !";
        flag = false;
    }
    else
    {
        document.getElementById("w5").innerHTML = "";
    }

    if(flag == false)
    {
        return false;
    }
    else
    {
       alert("Submitted.");
    }
}
//////////////////////////////////



function findCommon()
{
    var array = [[1, 1, 9, 1, 0, 0, 2, 2],[23, 2, 2, 1, 100],[2, 7, 9, 1, 2, 3],[2, 9, 10, 1, 2], [2, 6, 2], [2, 2, 2, 2, 2]];
    var com = [];
    var temp = [];
    var len = array[0].length;
    var flag = false;
    for(let i = 0; i < len; i++)
    {
        if(i != 0 && ((array[0].slice(0, i)).indexOf(array[0][i])) != -1) 
        {
            i++;
        }
        temp.push(array[0][i]);
        flag = false;
        for(let j = 1; j < array.length; j++)
        {
            flag = false;
            for(let k = 0; k < array[j].length; k++)
            {
               if(array[0][i] == array[j][k])
               {
                   flag = true;
                   break;
               }
            }
            if(flag == false)
            {
                temp.pop();
                break;
            }
        }
        if(flag == true)
        {
            com.push(temp.pop());
        }
    }
    console.log(com);
}