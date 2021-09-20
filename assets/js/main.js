const mobileBar = document.querySelector('.mobile-bar');
const navBar = document.querySelector('.navbar');
const height = navBar.clientHeight;

mobileBar.onclick = function(e) {
    var isClick = navBar.clientHeight === height;
    if (isClick) {
        navBar.style.height = 'auto';
        navBar.style.overflow = 'visible';
    } else {
        navBar.style.height = null;
        navBar.style.overflow = 'hidden';
    }
}

//auto close menu when click item
const lstItems = document.querySelectorAll('.navbar-nav li a[href*="#"]');
for (let i = 0; i < lstItems.length; i++) {
    var item = lstItems[i];
    item.onclick = function(e) {
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('dropdown-menu');
        if (isParentMenu) {
            e.preventDefault();
        } else {
            navBar.style.height = null;
            navBar.style.overflow = 'hidden';
        }
    }
}

// buy tickets
const buyBtns = document.querySelectorAll('.buy-ticket-btn');
const modalTicket = document.querySelector('.modal-ticket');
const modalForm = document.querySelector('.ticket-form');
const closeIcon = document.querySelector('.close-icon')

function show() {
    modalTicket.style.display = 'flex';
}

function hide() {
    modalTicket.style.display = 'none';
}
for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', show);
}
closeIcon.addEventListener('click', hide);
modalTicket.addEventListener('click', hide);
modalForm.addEventListener('click', function(e) {
    e.stopPropagation();
})