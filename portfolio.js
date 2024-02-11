// function changeBackground()
// {
//     document.querySelector("body").classList.toggle("darkmode");
//     document.querySelector("#about").classList.toggle("darkmode");
//     var Button = document.querySelector("button");
//     if (Button.textContent === "Dark Mode")
//     Button.textContent = "Light Mode";
// else
//         Button.textContent = "Dark Mode";
    
//     document.querySelector("header").classList.toggle("darkmode-header");
//     document.querySelector(".about-content").classList.toggle("darkmode-header");
   

// }
const modeToggle = document.getElementById('mode-toggle');
const sunIcon = document.querySelector('.toggle-icon.sun');
const moonIcon = document.querySelector('.toggle-icon.moon');

modeToggle.addEventListener('change', function() {
  if (this.checked) {
    // Dark mode
    sunIcon.style.display = 'none';
    moonIcon.style.display = 'inline';
    // Add class to HTML to apply dark mode styles
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    // Light mode
    sunIcon.style.display = 'inline';
    moonIcon.style.display = 'none';
    // Remove class to HTML to apply light mode styles
    document.documentElement.setAttribute('data-theme', 'light');
  }
});

// Check the user's system preferences for dark mode and set the initial mode accordingly
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  modeToggle.checked = true;
  sunIcon.style.display = 'none';
  moonIcon.style.display = 'inline';
  document.documentElement.setAttribute('data-theme', 'dark');
}
