// Selectors
const themeToggleBtn = document.querySelector('.theme-toggle');

// State
const theme = localStorage.getItem('theme');

// on mount
theme && document.body.classList.add(theme);

// handlers
handleThemeToggle = () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark-mode');
    } else {
        localStorage.removeItem('theme');
    } 
};

// events
themeToggleBtn.addEventListener('click', handleThemeToggle);


//language preferred message
const userText = document.getElementById("comments");
const submitBtn = document.getElementById("commentSubmitBtn");

function displayMessage() {
    const comment = document.getElementById("commentMessage");    
    comment.innerHTML = "There's no wrong answer!!";  
}

submitBtn.addEventListener("click", displayMessage);


//Day counter
const startDate = new Date('2024-02-20');
const date = new Date();
date.getDate();


function getDaysCoding() {
    let currentDate = new Date(date);
    const differenceInMillis = currentDate - startDate;
    const differenceInDays = Math.floor(differenceInMillis / (1000 * 60 * 60 * 24));
    document.getElementById("displayDays").innerHTML = differenceInDays;
}   
getDaysCoding();