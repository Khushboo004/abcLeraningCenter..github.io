


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