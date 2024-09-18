const cardsContainer = document.querySelector('.cards-container');
let currentIndex = 0;

document.getElementById('next').addEventListener('click', function () {
    if (currentIndex < 5) { // We have 6 cards, so index ranges from 0 to 5
        currentIndex++;
        cardsContainer.style.transform = `translateX(-${currentIndex * 16.66}%)`;
    }
});

document.getElementById('prev').addEventListener('click', function () {
    if (currentIndex > 0) {
        currentIndex--;
        cardsContainer.style.transform = `translateX(-${currentIndex * 16.66}%)`;
    }
});


const themeButton = document.getElementById('themeButton');
themeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeButton.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});
