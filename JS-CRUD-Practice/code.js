const list = [
    {
        "id" : "1",
        "name" : "Sheikh Muhammad Umar",
        "email" : "sheikhomer98@gmail.com",
        "phone" : "03200499426"
    },
    {
        "id" : "2",
        "name" : "Talha Rizwan",
        "email" : "talha@gmail.com",
        "phone" : "03210499658"
    },
    {
        "id" : "3",
        "name" : "Hamna Merab",
        "email" : "hamna10@gmail.com",
        "phone" : "03223355884"
    }
];

function addRecord(formURL)
{   
    var left = (screen.width - 525) / 2;
    var top = (screen.height - 300) / 4;
    var myWindow = window.open(formURL, "web", 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' + 525 + ', height=' + 300 + ', top=' + top + ', left=' + left);
    
}

function display() {
    const table = document.getElementById("table1");
    var data = [...list];
    console.log(table);
}

function validation(form)
{
    var form = document.forms[form];
    var fname = form.elements.fname.value;
    var email = form.elements.email.value;
    var phone = form.elements.phone.value;

    var nre = /^[a-zA-Z ]{3,20}$/;
    var ere = /^[a-zA-Z0-9_]{3,}@[a-zA-Z]{3,}\.[a-zA-Z]{2,}$/;
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
        return true;
    }
}

function insertRecord()
{
    if(validation("form1"))
    {
        let form = document.getElementById("form1");
        var fname = form.elements.fname.value;
        var email = form.elements.email.value;
        var phone = form.elements.phone.value;
        
        $("#table1 tbody").append(
            "<tr>" +
                "<td>" + fname + "</td>" +
                "<td>" + email + "</td>" +
                "<td>" + phone + "</td>" +
                "<td>" + '<button style="background-color:limegreen;" type="button" onclick="edit(this)">Edit</button>' + '<button style="background-color:red;" type="button" onclick="deleteRecord(this)">Delete</button>'
                + "</td>" +
            "</tr>");
            form.reset();
    }
}

function deleteRecord(id)
{
    var i = id.parentNode.parentNode.rowIndex;
    document.getElementById("table1").deleteRow(i);
}
var id1;
function edit(id)
{
    id1 = id;
    var add = document.getElementById("form1");
    add.style.display = "none";
    var edit = document.getElementById("form2");
    edit.style.display = "block";

    var fname = id.parentNode.parentNode.children[0].innerHTML;
    var email = id.parentNode.parentNode.children[1].innerHTML;
    var phone = id.parentNode.parentNode.children[2].innerHTML;

    let form = document.getElementById("form2");
    form.elements.fname.value = fname;
    form.elements.email.value = email;
    form.elements.phone.value = phone;
}

function editRecord()
{
    if(validation("form2"))
    {
        let form = document.getElementById("form2");
        var fname = form.elements.fname.value;
        var email = form.elements.email.value;
        var phone = form.elements.phone.value;
        id1.parentNode.parentNode.innerHTML = "<tr>" + 
        "<td>" + fname + "</td>" +
        "<td>" + email + "</td>" +
        "<td>" + phone + "</td>" +
        "<td>" + '<button style="background-color:limegreen;" type="button" onclick="edit(this)">Edit</button>' + '<button style="background-color:red;" type="button" onclick="deleteRecord(this)">Delete</button>'
        + "</td>"
        "</tr>";
        form.reset();


        var add = document.getElementById("form1");
        add.style.display = "block";
        var edit = document.getElementById("form2");
        edit.style.display = "none";
    }
}
