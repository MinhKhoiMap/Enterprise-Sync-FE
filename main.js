// @ts-nocheck
const toggler = document.querySelector(".btn");
// @ts-ignore
toggler.addEventListener("click",function(){
    document.querySelector("#sidebar")?.classList.toggle("collapsed");
});

function changeImage(itemId, newSrc) {
    var item = document.getElementById(itemId);
    var image = item.querySelector('.icon_nav');
    image.src = newSrc;
}
function selectNavItem(navItemId, selectedImageSrc) {

    var allNavItems = document.getElementsByClassName('nav-item');
    for (var i = 0; i < allNavItems.length; i++) {
        var imgElement = allNavItems[i].getElementsByTagName('img')[0];
        imgElement.src = imgElement.src;
    }

    
    var selectedNavItem = document.getElementById(navItemId);
    var selectedImgElement = selectedNavItem.getElementsByTagName('img')[0];
    selectedImgElement.src = selectedImageSrc;
}
