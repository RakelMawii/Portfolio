// JavaScript to handle text deletion on page load
document.addEventListener('DOMContentLoaded', () => {
    const heroText = document.querySelector('.hero h1');
    setTimeout(() => {
        heroText.textContent = '';
    }, 3000); // Text will disappear after 3 seconds

    // Toggle navigation menu for small screens
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.querySelector('.nav-menu');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
});
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}