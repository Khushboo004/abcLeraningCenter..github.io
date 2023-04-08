$("#formValidation").validate({
    rules:{
        firstname:{
            minlength: 2
        },
        lastname :{
            minlength:2
        }, email:{
            email:true
        },
        phone:{
            number:true,
            minlength:9,
            maxlength:14
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
        },
            email:"Please Enter Your Email",
            phone:"Please Enter Your Phone Number",
            message:"Please Enter Your Message",
        },
    submitHandler: function(form) {
      form.submit();
    }
   })