const DOMAIN_SERVICE = "http://localhost:5000";

function handleLogin(e) {
  e.preventDefault();
  const { target } = e;
  var passwordBorder = document.querySelector(".password_border");
  var usernameBorder = document.getElementById("username");
  var message = document.querySelector(".message-login-wrong");

  if (!validateAndContinue()) {
    return;
  }

  let formLogin = new FormData(target);

  let account = {
    username: formLogin.get("username"),
    password: formLogin.get("password"),
  };

  axios
    .post(`${DOMAIN_SERVICE}/api/login`, account)
    .then((res) => res.data)
    .then((data) => {
      console.log(data);
      localStorage.setItem("user_token", data.userToken);
      window.location = "/pages/Dashboard/content.html";
    })
    .catch((err) => {
      console.log(err);
      usernameBorder.style.borderColor = "#DC3535";
      passwordBorder.classList.add("password_border--error");
      message.classList.replace("d-none", "d-block");
    });
}

//
