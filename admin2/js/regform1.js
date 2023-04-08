

$("#formValidation").validate({
    rules:{
        firstname:{
            minlength: 2
        },
        lastname :{
            minlength:2
        }, email:{
            email:true,
            regex :/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/
        }
    },
    messages:{
       firstname:{
            required : "Please Enter Your First Name",
            minlength:"Name at least 2 chareacters"
        },
        lastname:{
            required : "Please Enter Your Last Name",
            minlength:"Name at least 2 chareacters"
        },email:{
            required:"Please Enter Your Email Address",
            regax: "Please Enter Valid Number"

        },age :{
            required :"Please Enter your age"
        },course:{
            required : "select Your Course"
        }
        ,phone:{
            required : "Please Enter Your Phone Number"
        },country:{
            required:"Select Your Country"
        }
           
        },
    submitHandler: function(form) {
      form.submit();
    }
   });



var fnameInput = document.getElementById("fname");
var lnameInput = document.getElementById("lname");
var emailInput = document.getElementById("email");
var ageInput = document.getElementById("age");
var countryInput = document.getElementById("country");
var phoneInput = document.getElementById("phone");
var courseInput = document.getElementById("course");

var userInfo = JSON.parse(localStorage.getItem("userInfo"));


if (userInfo) {
    fnameInput.value = userInfo.fname;
    lnameInput.value = userInfo.lname;
    emailInput.value = userInfo.email;
    ageInput.value = userInfo.age;
    countryInput.value = userInfo.age;
    phoneInput.value = userInfo.phone;
    courseInput.value = userInfo.phone;
}


document.getElementById("formValidation").addEventListener("submit", function (event) {

    event.preventDefault();

    //get values from the inputs
    var fname = fnameInput.value.trim();
    var lname = lnameInput.value.trim();
    var email = emailInput.value.trim();
    var country = countryInput.value.trim();
    var age = ageInput.value.trim();
    var phone = phoneInput.value.trim();
    var course = courseInput.value.trim();
    //if values are valid

    if (!fname || !lname || !email || !country || !phone || !age || !course) {
        return;
    }

    //save thrm in a local object
    var userInfo = {
        fname: fname,
        lname: lname,
        email: email,
        age: age,
        country: country,
        phone: phone,
        course: course

    };


    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    userData();
});



// data table

function onformsubmit(){
    var formData = readFormData();

}

function readFormData(){
    var formData = {}
    formData["fname"] = fname;
    formData["lname"] = lname;
    formData["email"] = email;
    formData["age"] = age;
    formData["country"] = country;
    formData["phone"] = phone;
    formData["course"] = course;
}

function inserNewRecord(data){
    var table = document.getElementById("dataTable").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow

}


$(document).ready(function () {
    $('#navbar').load("./navbar.html")
    let studentInformation = JSON.parse(localStorage.getItem("userInfo"))


    if (studentInformation) {
        let leadsData = document.querySelector('tbody');
        leadsData.innerHTML = "";
        studentInformation.forEach((data, index) => {
            leadsData.innerHTML += `<tr id=row${index}>
            <td>${index}</td>
            <td>${data.fname}</td>
            <td>${data.lname}</td>
            <td>${data.email}</td>
            <td>${data.age}</td>
            <td>${data.country}</td>
            <td>${data.phone}</td>
            <td>${data.course}</td>
            <td>
                <button id=edit${index} class="edit"><a href='edit.html?fname=${data.fname}&lname=${data.lname}&email=${data.email}&age=${data.age}&country=${data.country}&phone=${data.phone}&course=${data.course}&index=${index}'>Edit</a></button>
                <button id=remove${index} class="remove">Remove</button>
            </td>
                </tr>`

            $('[id^=remove]').click(function () {
                let value = ($(this).attr("id")).replace(/[^0-9]/ig, "")
                $(`#row${value}`).hide()
                studentInformation.splice(value, 1)
                localStorage.setItem("student", JSON.stringify(studentInformation))
            })
        });
    }


})
