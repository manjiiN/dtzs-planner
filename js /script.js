
// JavaScript for DTZS Planner

// Dark mode functionality
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

function toggleDarkMode() {
    body.classList.toggle('dark');
    const isDark = body.classList.contains('dark');
    localStorage.setItem('darkMode', isDark);
    darkModeToggle.textContent = isDark ? 'Light' : 'Dark';
}

function loadDarkModePreference() {
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'true') {
        body.classList.add('dark');
        darkModeToggle.textContent = 'Light';
    } else {
        darkModeToggle.textContent = 'Dark';
    }
}

// TODO: Initialize the planner application
// - Load existing data from localStorage or a data file
// - Set up event listeners for user interactions

// Placeholder functions
document.addEventListener('DOMContentLoaded', function () {
    // Load dark mode preference
    loadDarkModePreference();

    // Set up dark mode toggle
    darkModeToggle.addEventListener('click', toggleDarkMode);

    // TODO: Call initialization function here
    console.log('Planner loaded');
});
