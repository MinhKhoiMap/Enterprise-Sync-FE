// @ts-nocheck
$(document).ready(function(){
    $('#eye').click(function(){
        $(this).toggleClass('show');
        $(this).children('i').toggleClass('fa-eye-slash fa-eye');
        if($(this).hasClass('show')){
            $(this).prev().attr('type','text');
        }
        else{
            $(this).prev().attr('type','password');
        }
    });
})

function validateAndContinue(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    
    var isValid = true;
    if ( username.trim() === ''){
        document.getElementById("usernameError").innerHTML = "Vui lòng nhập tên người dùng "
        isValid = false;
    }
    else{
        document.getElementById("usernameError").innerHTML ="";
    }
    
    if ( password.trim() === ''){
        document.getElementById("passwordError").innerHTML ="Vui lòng nhập mật khẩu"
        isValid =false;
    }
    else{
        document.getElementById("passwordError").innerHTML ="";
    }
}