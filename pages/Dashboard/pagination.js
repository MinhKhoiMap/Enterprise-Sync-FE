// @ts-nocheck
const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const page3 = document.getElementById('page3');
const previous = document.getElementById('previous');
const next = document.getElementById('next');
const first = document.getElementById('first');
const last = document.getElementById('last');

page1.addEventListener('click', () => changePage(page1));
page2.addEventListener('click', () => changePage(page2));
page3.addEventListener('click', () => changePage(page3));
previous.addEventListener('click', previousPage);
next.addEventListener('click', nextPage);
first.addEventListener('click', () => changePage(page1));
last.addEventListener('click', () => changePage(page3));

function changePage(selectedPage) {
    document.querySelector('.pagination .active').classList.remove('active');
    selectedPage.classList.add('active');

    if (selectedPage === page1) {
        previous.disabled = true;
        next.disabled = false;
        first.disabled = true;
        last.disabled = false;
    } else if (selectedPage === page3) {
        previous.disabled = false;
        next.disabled = true;
        first.disabled = false;
        last.disabled = true;
    } else {
        previous.disabled = false;
        next.disabled = false;
        first.disabled = false;
        last.disabled = false;
    }
}

function previousPage() {
    const activePage = document.querySelector('.pagination .active');
    if (activePage.previousElementSibling) {
        changePage(activePage.previousElementSibling);
    }
}

function nextPage() {
    const activePage = document.querySelector('.pagination .active');
    if (activePage.nextElementSibling) {
        changePage(activePage.nextElementSibling);
    }
}