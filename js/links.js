document.addEventListener('DOMContentLoaded', function() {
    const backToHomeButton = document.getElementById('backToHome');
    
        backToHomeButton.addEventListener('click', function() {
        // Redirect to homepage
        window.location.href = '/index.html';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const schedlarCase = document.getElementById('schedlar');
    schedlarCase.addEventListener('click', function() {
    // Redirect to another page
    window.location.href = 'work/schedlar.html';
});
});
