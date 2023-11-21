function chuyenFrameLogin() {
    // Ẩn frame_login hiện tại
    var frameLogin1 = document.getElementById("frame_login1");
    frameLogin1.style.display = "none";

    // Hiện frame_login mới
    var frameLogin2 = document.getElementById("frame_login2");
    frameLogin2.style.display = "block";
}



function checkValidate() {
    var emailInput = document.getElementById("exampleFormControlInput1").value;
    var passwordInput = document.getElementById("exampleFormControlInput2").value;
    var confirmpasswordInput = document.getElementById("exampleFormControlInput3").value;



    if (!isValidEmail(emailInput)) {
        alert("Please enter a valid email");
    }
    else if (!isValidPassword(passwordInput)) {
        alert("Please enter enough length password");
    }
    else if (!checkConfirmPassword(passwordInput, confirmpasswordInput)) {
        alert("Please enter right password");
    }
    else {
        chuyenFrameLogin();
    }
}

function checkValidate2() {
    var bussinessname = document.getElementById("exampleFormControlInput4").value;
    var emailInput = document.getElementById("exampleFormControlInput5").value;
    var passwordInput = document.getElementById("exampleFormControlInput6").value;


    if(bussinessname ==" "){
        alert("Please enter your bussiness name");
    }
    else if (!isValidEmail(emailInput)) {
        alert("Please enter a valid email");
    }
    else if (!isValidPassword(passwordInput)) {
        alert("Please enter enough length password");
    }
    
}

function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
function isValidPassword(password) {
    return password.length >= 6;
}
function checkConfirmPassword(password, confirm) {
    return password == confirm;
}