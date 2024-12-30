// Dark/Light mode toggle function
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');

    // Toggle the icon on the button
    const modeToggleButton = document.querySelector('.mode-toggle');
    if (document.body.classList.contains('dark-mode')) {
        modeToggleButton.textContent = '🌙';
    } else {
        modeToggleButton.textContent = '☀️';
    }
}