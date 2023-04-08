

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
        },mygender : {
            required : "Enter Your gender"
        },message:{
            required : "Enter your Message"
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