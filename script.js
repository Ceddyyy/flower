const navToggle = document.getElementById('nav-toggle');
const sideNav = document.querySelector('.side-nav');
const searchInput = document.getElementById('search-bar');
const soundIcon = document.getElementById('sound-icon');
const searchButton = document.getElementById('search-button');
const dictionaryResults = document.getElementById('dictionary-results');

navToggle.addEventListener('click', toggleNav);
searchInput.addEventListener('input', searchDictionary);
soundIcon.addEventListener('click', playSound);
searchButton.addEventListener('click', searchDictionary);

function toggleNav() {
    sideNav.classList.toggle('folded');
}

function searchDictionary() {
   
}

function playSound() {
    
}