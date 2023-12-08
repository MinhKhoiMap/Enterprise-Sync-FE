const DOMAIN_SERVICE = "https://9bf9-14-161-27-27.ngrok-free.app";

function handleLogin(e) {
  e.preventDefault();
  const { target } = e;

  let formLogin = new FormData(target);

  let account = {
    username: formLogin.get("username"),
    password: formLogin.get("password"),
  };

  axios
    .post(`${DOMAIN_SERVICE}/api/login`, account)
    .then((res) => res.data)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}
