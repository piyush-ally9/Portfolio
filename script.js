// Toggle light/dark mode
const themeButton = document.getElementById('themeButton');
themeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeButton.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});
