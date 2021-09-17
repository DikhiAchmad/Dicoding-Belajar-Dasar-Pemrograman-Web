 // navbar 
 window.addEventListener('scroll', function () {
    const nav = document.getElementById('navbar');
    if (document.documentElement.scrollTop || document.body.scrollTop > window.innerHeight) {
        nav.classList.add('navbar-scroll');
        nav.classList.remove('navbar-transparent');
    } else {
        nav.classList.add('navbar-transparent');
        nav.classList.remove('navbar-scroll');
    }
});
// carousel 
let index = 1;
Cetak(index);
setInterval(function () {
    Swipe(1);
}, 5000);

function Swipe(nilai) {
    Cetak(index += nilai);
}

function Cetak(nilai) {
    let i;
    const item = document.getElementsByClassName("carousel-item");
    if (nilai > item.length) {
        index = 1;
    } else if (nilai < 1) {
        index = item.length;
    }
    for (i = 0; i < item.length; i++) {
        item[i].style.display = "none";
    }
    item[index - 1].style.display = "block";
}