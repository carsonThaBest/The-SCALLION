const toggleButton = document.getElementById('theme-toggle');

// Check for saved user preference in localStorage
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.body.classList.add(currentTheme);
}

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    // Save user preference
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark-mode');
    } else {
        localStorage.removeItem('theme');
    }
});
