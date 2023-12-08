// @ts-nocheck

// @ts-nocheck
const navItemList = document.querySelector(".sidebar .sidebar-nav");

console.log([navItemList.children], "navItemList");
let clicking = false;
for (let child of navItemList.children) {
  
  // child.addEventListener("click", () => {

  //   for (let child of navItemList.children)
  //     if (child.classList.contains("nav-item__active")) {
        
  //       let itemName = child.getAttribute("id");
  //       const imageChild = child.children[0].children[0];
  //       console.log(itemName, "falsjdkf");
  //       imageChild.setAttribute("src", `../../img/${itemName}.svg`);
  //       child.classList.remove("nav-item__active");
  //     }
  //   clicking=true;
  //   let itemName = child.getAttribute("id");
  //   const imageChild = child.children[0].children[0];
  //   console.log(itemName, "falsjdkf");
  //   imageChild.setAttribute("src", `../../img/${itemName}_click.svg`);

  //   child.classList.add("nav-item__active");
  // });
  child.addEventListener("mouseenter", () => {
    let itemName = child.getAttribute("id");
    const imageChild = child.querySelector(".icon_nav");
    if(child.classList.contains("nav-item__active"))
    {
      imageChild.setAttribute("src", `../../img/${itemName}.svg`);
    }
    else{
      imageChild.setAttribute("src", `../../img/hover/${itemName}_hover.svg`);
    }
  });
  child.addEventListener("mouseleave", () => {
    let itemName = child.getAttribute("id");
    const imageChild = child.querySelector(".icon_nav");
    if(child.classList.contains("nav-item__active"))
    {
      imageChild.setAttribute("src", `../../img/${itemName}_click.svg`);
    }
    else{
      imageChild.setAttribute("src", `../../img/${itemName}.svg`);
    }
  });

}

function showLogoutConfirmation() {

  var confirmation = confirm("Are you sure you want to log out?");


  if (confirmation) {

      window.location.href = "../../login.html";
  } else {

      console.log("Log out canceled");
  }
}