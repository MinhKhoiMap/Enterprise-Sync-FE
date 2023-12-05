// @ts-nocheck
const navItemList = document.querySelector("#sidebar .sidebar-nav");

console.log([navItemList.children], "navItemList");
let clicking = false;
for (let child of navItemList.children) {
  
  child.addEventListener("click", () => {

    for (let child of navItemList.children)
      if (child.classList.contains("nav-item__active")) {
        
        let itemName = child.getAttribute("id");
        const imageChild = child.children[0].children[0];
        console.log(itemName, "falsjdkf");
        imageChild.setAttribute("src", `../../img/${itemName}.svg`);
        child.classList.remove("nav-item__active");
      }
    clicking=true;
    let itemName = child.getAttribute("id");
    const imageChild = child.children[0].children[0];
    console.log(itemName, "falsjdkf");
    imageChild.setAttribute("src", `../../img/${itemName}_click.svg`);

    child.classList.add("nav-item__active");
  });
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



function loadContent(page) {
  // Sử dụng XMLHttpRequest hoặc Fetch API để tải nội dung trang
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      // Sử dụng classList để thêm nội dung vào main-content
      document.querySelector(".main-content").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", page, true);
  xhttp.send();
}
