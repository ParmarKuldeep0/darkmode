debugger
const body = document.body;
const darkModeToggle = document.getElementById('toggleSwitch');

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    darkModeToggle.classList.toggle('dark-mode');
});