// @ts-nocheck
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
  child.addEventListener("mouseenter", () => {
    // Lấy tên của mục
    let itemName = child.getAttribute("id");

    // Lấy thẻ hình ảnh con của mục
    const imageChild = child.querySelector(".icon_nav");

    // Đổi hình ảnh khi hover
    imageChild.setAttribute("src", `../../img/hover/${itemName}_hover.svg`);
  });

  child.addEventListener("mouseleave", () => {
    // Lấy tên của mục
    let itemName = child.getAttribute("id");

    // Lấy thẻ hình ảnh con của mục
    const imageChild = child.querySelector(".icon_nav");

    // Đổi lại hình ảnh khi rời khỏi
    imageChild.setAttribute("src", `../../img/${itemName}_click.svg`);
  });

}
