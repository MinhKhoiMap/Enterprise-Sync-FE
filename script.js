// @ts-nocheck
var currentPage = 1;

function validateAndContinue(nextPage) {

    var email = document.getElementById("exampleFormControlInput1").value;
    var password = document.getElementById("exampleFormControlInput2").value;
    var confirmPassword = document.getElementById("exampleFormControlInput3").value;

    var isValid = true;

    if (!isValidEmail(email)) {
        document.getElementById("emailError").innerHTML = "Vui lòng nhập một địa chỉ email hợp lệ.";
        isValid = false;
    } else {
        document.getElementById("emailError").innerHTML = "";
    }

    if (!isValidPassword(password)) {
        document.getElementById("passwordError").innerHTML = "Mật khẩu phải có ít nhất 6 ký tự.";
        isValid = false;
    } else {
        document.getElementById("passwordError").innerHTML = "";
    }

    if (password !== confirmPassword) {
        document.getElementById("confirmPasswordError").innerHTML = "Mật khẩu xác nhận không khớp.";
        isValid = false;
    } else {
        document.getElementById("confirmPasswordError").innerHTML = "";
    }



    if (isValid) {
        currentPage = nextPage;
        activateButton(document.querySelector('.circle[data-frame="' + nextPage + '"]'));
        showCurrentPage();
    } else {
        console.log("Kiểm tra không thành công. Không chuyển trang.");
    }
}
function validateAndContinue2(nextPage) {

    var businessName = document.getElementById("exampleFormControlInput4").value;
    var shopeeEmail1 = document.getElementById("exampleFormControlInput5").value;
    var shopeePassword1 = document.getElementById("exampleFormControlInput6").value;
    var shopeeEmail2 = document.getElementById("exampleFormControlInput7").value;
    var shopeePassword2 = document.getElementById("exampleFormControlInput8").value;


    var isValid = true;

    if (businessName.trim() === '') {
        document.getElementById("bussinessError").innerHTML = "Vui lòng nhập tên doanh nghiệp.";
        isValid = false;
    } else {
        document.getElementById("bussinessError").innerHTML = "";
    }


    if (shopeeEmail2.trim() === '' && shopeePassword2.trim() === '') {

        if (!isValidEmail(shopeeEmail1)) {
            document.getElementById("shopeeEmailError1").innerHTML = "Vui lòng nhập một địa chỉ email hợp lệ.";
            isValid = false;
        } else {
            document.getElementById("shopeeEmailError1").innerHTML = "";
        }


        if (!isValidPassword(shopeePassword1)) {
            document.getElementById("shopeePasswordError1").innerHTML = "Mật khẩu Shopee phải có ít nhất 6 ký tự.";
            isValid = false;
        } else {
            document.getElementById("shopeePasswordError1").innerHTML = "";
        }
    } else {

        document.getElementById("shopeeEmailError2").innerHTML = "";
        document.getElementById("shopeePasswordError2").innerHTML = "";
    }


    if (shopeeEmail1.trim() === '' && shopeePassword1.trim() === '') {
        // Kiểm tra email Shopee input 2
        if (!isValidEmail(shopeeEmail2)) {
            document.getElementById("shopeeEmailError2").innerHTML = "Vui lòng nhập một địa chỉ email hợp lệ.";
            isValid = false;
        } else {
            document.getElementById("shopeeEmailError2").innerHTML = "";
        }


        if (!isValidPassword(shopeePassword2)) {
            document.getElementById("shopeePasswordError2").innerHTML = "Mật khẩu Shopee phải có ít nhất 6 ký tự.";
            isValid = false;
        } else {
            document.getElementById("shopeePasswordError2").innerHTML = "";
        }
    } else {

        document.getElementById("shopeeEmailError1").innerHTML = "";
        document.getElementById("shopeePasswordError1").innerHTML = "";
    }


    if (isValid) {
        currentPage = nextPage;
        activateButton(document.querySelector('.circle[data-frame="' + nextPage + '"]'));
        showCurrentPage();
    } else {
        console.log("Kiểm tra không thành công. Không chuyển trang.");
    }
}

function showCurrentPage() {

    document.querySelectorAll('.frame_login').forEach(function (frame) {
        frame.style.display = 'none';
    });


    document.getElementById('frame_login' + currentPage).style.display = 'block';
}

function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPassword(password) {
    return password.length >= 6;
}


showCurrentPage();


const navListBtn = document.querySelectorAll(".nav_list_btn button");
const frameList = document.querySelectorAll(".frame_login");
const navigate = (page) => {
    frameList.forEach((frame, index) => {
        if (index == page) {
            frame.style.display = "block";
        } else {
            frame.style.display = "none";
        }
    });
};

navListBtn.forEach((button, index) => {
    button.addEventListener("click", () => {
        navigate(index);
    });
});


function activateButton(button) {

    var buttons = document.querySelectorAll('.circle');
    buttons.forEach(function (btn) {
        btn.classList.remove('active');
    });


    button.classList.add('active');
}

const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    toastTrigger.addEventListener('click', () => {
        toastBootstrap.show()
    })
}


function togglePasswordVisibility(inputId) {
    var passwordInput = document.getElementById(inputId);

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    
    } else {
        passwordInput.type = "password";
    }
}