

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
        },
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
        }
           
        },
    submitHandler: function(form) {
      form.submit();
    }
   });

function storeData(){
    console.log("inside function")
    var fname, lname, email, age, country, phone, course, userInfo;


 fname = document.getElementById("fname").value;
 lname = document.getElementById("lname").value;
 email = document.getElementById("email").value;
 age = document.getElementById("age").value;
 country = document.getElementById("country").value;
 phone = document.getElementById("phone").value;
 course = document.getElementById("course").value;

userInfo = JSON.parse(localStorage.getItem("userInfo"));


    var user =JSON.stringify({
        fname: fname,
        lname: lname,
        email: email,
        age: age,
        country: country,
        phone: phone,
        course: course

    });
    if(userInfo == null){
        userInfo =[];
    }
    userInfo.push(user)



    console.log(user)
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
};