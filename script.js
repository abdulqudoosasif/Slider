const images = document.querySelectorAll('.slider img');
const slider = document.querySelector('.slider');
const mainHeading = document.querySelector('.main-heading');
const subHeading = document.querySelector('.sub-heading');

// Headings for each image
const headings = [
    { main: "", sub: "" },
    { main: "", sub: "" },
    { main: "URUS", sub: "DARE TO LIVE MORE" },
    { main: "HURACÁN", sub: "BEYOND THE CONCRETE" },
    { main: "TEMERARIO", sub: "YOU CAN'T HIDE WHO YOU ARE" },
    { main: "REVUELTO", sub: "FROM NOW ON" },
    { main: "URUS", sub: "DARE TO LIVE MORE" },
    { main: "HURACÁN", sub: "BEYOND THE CONCRETE" },
    { main: "TEMERARIO", sub: "YOU CAN'T HIDE WHO YOU ARE" },
    { main: "REVUELTO", sub: "FROM NOW ON" },
    { main: "URUS", sub: "DARE TO LIVE MORE" },
    { main: "HURACÁN", sub: "BEYOND THE CONCRETE" },
    { main: "TEMERARIO", sub: "YOU CAN'T HIDE WHO YOU ARE" },
    { main: "REVUELTO", sub: "FROM NOW ON" },
    { main: "URUS", sub: "DARE TO LIVE MORE" },
    { main: "HURACÁN", sub: "BEYOND THE CONCRETE" },
];

let currentIndex = 2;

function updateSlider() {
    images.forEach((img, index) => {
        img.classList.remove('active');
        if (index === currentIndex) {
            img.classList.add('active');
        }
    });

    slider.style.transform = `translateX(-${(currentIndex - 2) * 24.9}%)`;

    gsap.fromTo(
        mainHeading,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1 }
    );
    gsap.fromTo(
        subHeading,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1 }
    );
    mainHeading.textContent = headings[currentIndex].main;
    subHeading.textContent = headings[currentIndex].sub;
}

function showNextImage() {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    updateSlider();
}

function showPrevImage() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    updateSlider();
}

document.querySelector('.next').addEventListener('click', showNextImage);
document.querySelector('.prev').addEventListener('click', showPrevImage);

updateSlider();
