// @ts-nocheck
$(document).ready(function () {
  $("#eye").click(function () {
    $(this).toggleClass("show");
    $(this).children("i").toggleClass("fa-eye-slash fa-eye");
    if ($(this).hasClass("show")) {
      $(this).prev().attr("type", "text");
    } else {
      $(this).prev().attr("type", "password");
    }
  });
});

function validateAndContinue() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var passwordBorder = document.querySelector(".password_border");
  var usernameBorder = document.getElementById("username");

  var isValid = true;
  if (username.trim() === "") {
    document.getElementById("usernameError").innerHTML =
      "Please enter username";
    usernameBorder.style.borderColor = "#DC3535";
    isValid = false;
  } else {
    document.getElementById("usernameError").innerHTML = "";
    usernameBorder.removeAttribute("style");
  }

  if (password.trim() === "") {
    document.getElementById("passwordError").innerHTML =
      "Please enter password";
    passwordBorder.classList.add("password_border--error");
    isValid = false;
  } else {
    document.getElementById("passwordError").innerHTML = "";
    passwordBorder.classList.remove("password_border--error");
  }

  return isValid;
}
