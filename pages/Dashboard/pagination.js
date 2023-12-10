const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const page3 = document.getElementById("page3");
const previous = document.getElementById("previous");
const next = document.getElementById("next");
const first = document.getElementById("first");
const last = document.getElementById("last");

let currentButton = 0;

page1.addEventListener("click", () => changePage(page1));
page2.addEventListener("click", () => changePage(page2));
page3.addEventListener("click", () => changePage(page3));
previous.addEventListener("click", previousPage);
next.addEventListener("click", nextPage);
first.addEventListener("click", () => changePage(page1));
last.addEventListener("click", () => changePage(page3));

function changePage(selectedPage) {
  document.querySelector(".pagination .active").classList.remove("active");
  selectedPage.classList.add("active");
}

function controllNavigateButton() {
  if (currentPage > 1) {
    first.removeAttribute("disabled");
    previous.removeAttribute("disabled");
  }
  if (currentPage === totalPage) {
    next.removeAttribute("disabled");
    last.removeAttribute("disabled");
  }
}

async function previousPage() {
  console.log(currentPage);
  const activePage = document.querySelector(".pagination .active");
  if (currentPage === 1) {
    first.setAttribute("disabled", true);
    previous.setAttribute("disabled", true);
  } else {
    currentPage--;
    first.removeAttribute("disabled");
    previous.removeAttribute("disabled");
  }

  await handleRenderOrder();

  if (currentButton == 2 && currentPage >= 3) {
    page1.innerText = currentPage - 2;
    page2.innerText = currentPage - 1;
    page3.innerText = currentPage;

    page1.setAttribute("data-set", currentPage - 2);
    page2.setAttribute("data-set", currentPage - 1);
    page3.setAttribute("data-set", currentPage);
  } else {
    currentButton--;
    changePage(activePage.previousElementSibling);
  }
}

async function nextPage() {
  const activePage = document.querySelector(".pagination .active");
  if (currentPage === totalPage) {
    next.setAttribute("disabled", true);
    last.setAttribute("disabled", true);
  } else {
    currentPage++;
    next.removeAttribute("disabled");
    last.removeAttribute("disabled");
  }

  await handleRenderOrder();

  if (currentPage < totalPage - 2 && currentPage < 3) {
  }

  if (currentPage < totalPage - 2) {
    page1.innerText = currentPage - 2;
    page2.innerText = currentPage - 1;
    page3.innerText = currentPage;

    page1.setAttribute("data-set", currentPage - 2);
    page2.setAttribute("data-set", currentPage - 1);
    page3.setAttribute("data-set", currentPage);
  }

  if (currentPage === totalPage - 2) {
    changePage(activePage.previousElementSibling);
  } else {
    if (currentButton < 2) {
      currentButton++;
      changePage(activePage.nextElementSibling);
    }
  }
  controllNavigateButton();
}
