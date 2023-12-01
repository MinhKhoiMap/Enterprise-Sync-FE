// @ts-nocheck
const toggler = document.querySelector(".btn");
// @ts-ignore
toggler.addEventListener("click",function(){
    document.querySelector("#sidebar")?.classList.toggle("collapsed");
});
