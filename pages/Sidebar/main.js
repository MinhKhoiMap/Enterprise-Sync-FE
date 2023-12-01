const navItemList = document.querySelector("#sidebar .sidebar-nav");

console.log([navItemList.children], "navItemList");

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

    let itemName = child.getAttribute("id");
    const imageChild = child.children[0].children[0];
    console.log(itemName, "falsjdkf");
    imageChild.setAttribute("src", `../../img/${itemName}_click.svg`);

    child.classList.add("nav-item__active");
  });
}
