const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');
const carouselSlide = document.querySelector('.carousel-slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let counter = 0;

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}

function updateCarousel() {
    const slideWidth = carouselSlide.children[0].clientWidth;
    carouselSlide.style.transform = `translateX(-${counter * slideWidth}px)`;
}

nextBtn.addEventListener('click', () => {
    counter = (counter + 1) % carouselSlide.children.length;
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    counter = (counter - 1 + carouselSlide.children.length) % carouselSlide.children.length;
    updateCarousel();
});



setInterval(() => {
    counter = (counter + 1) % carouselSlide.children.length;
    updateCarousel();
}, 5000);