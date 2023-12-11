document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('toggleBtn');
    const html = document.documentElement;

    // On page load or when changing themes, check local storage and set the theme
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        html.classList.add('dark');
    } else {
        html.classList.remove('dark');
    }

    // Toggle between dark and light mode
    toggleBtn.addEventListener('click', function () {
        html.classList.toggle('dark');
        const isDarkModeNow = html.classList.contains('dark');

        // Save user's preference to local storage
        localStorage.theme = isDarkModeNow ? 'dark' : 'light';
    });
});
