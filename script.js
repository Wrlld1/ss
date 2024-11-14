// Function to display a fun fact about FC Barcelona
document.getElementById('fact-button').addEventListener('click', function() {
    alert('Did you know? FC Barcelona has won the UEFA Champions League 5 times!');
});

// Function to set the current year in the footer
function setCurrentYear() {
    const year = new Date().getFullYear();
    console.log('Current year:', year); // Проверка года
    document.getElementById('current-year').textContent = year;
}

// Call setCurrentYear on page load
document.addEventListener("DOMContentLoaded", function() {
    setCurrentYear(); // Устанавливаем текущий год в footer
});


// Smooth scrolling function
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        // Adding smooth scrolling behavior
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Анимация появления текста в #home
document.addEventListener("DOMContentLoaded", function() {
    const homeText = document.querySelector('#home P, #home p');
    homeText.classList.add('fade-in');

    // Даем немного времени для отработки CSS анимации
    setTimeout(() => {
        homeText.classList.add('fade-in-visible');
    }, 100); // Задержка в миллисекундах перед началом появления текста
});
document.addEventListener("DOMContentLoaded", function() {
    const homeText = document.querySelector('#home h2, #home p');
    homeText.classList.add('fade-in');

    // Даем немного времени для отработки CSS анимации
    setTimeout(() => {
        homeText.classList.add('fade-in-visible');
    }, 100); // Задержка в миллисекундах перед началом появления текста
});
