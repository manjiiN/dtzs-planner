
// JavaScript for DTZS Planner

// Dark mode functionality
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

function toggleDarkMode() {
    body.classList.toggle('dark');
    const isDark = body.classList.contains('dark');
    localStorage.setItem('darkMode', isDark);
    darkModeToggle.textContent = isDark ? '☀️' : '🌙';
}

function loadDarkModePreference() {
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'true') {
        body.classList.add('dark');
        darkModeToggle.textContent = '☀️';
    } else {
        darkModeToggle.textContent = '🌙';
    }
}

// TODO: Initialize the planner application
// - Load existing data from localStorage or a data file
// - Set up event listeners for user interactions

// Placeholder functions
document.addEventListener('DOMContentLoaded', function() {
    // Load dark mode preference
    loadDarkModePreference();

    // Set up dark mode toggle
    darkModeToggle.addEventListener('click', toggleDarkMode);

    // Set up logo title
    const logoTitle = document.getElementById('logo-title');
    logoTitle.addEventListener('click', function() {
        location.reload(); // Reload page to go to home
    });
    const dashboardBtn = document.getElementById('dashboard-btn');
    const tasksBtn = document.getElementById('tasks-btn');
    const notesBtn = document.getElementById('notes-btn');
    const plannerContainer = document.getElementById('planner-container');

    function showCalendar() {
        plannerContainer.innerHTML = '<h2>Dashboard</h2><p>Dashboard view will be implemented here.</p>';
    }

    function showTasks() {
        plannerContainer.innerHTML = '<h2>Tasks</h2><p>Task management interface will go here.</p>';
    }

    function showNotes() {
        plannerContainer.innerHTML = '<h2>Notes</h2><p>Notes interface will go here.</p>';
    }

    dashboardBtn.addEventListener('click', showCalendar);
    tasksBtn.addEventListener('click', showTasks);
    notesBtn.addEventListener('click', showNotes);

    // Show calendar by default
    showCalendar();

    // TODO: Call initialization function here
    console.log('Planner loaded');
});
