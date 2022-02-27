console.log("hello");

function toggleDarkMode() {
    var bodyElement = document.getElementById("main-background")
    var darkModeBtnElement = document.getElementById("dark-mode-btn")
    console.log(darkModeBtnElement);
    // if it's in dark mode, change it to light mode
    // what does dark mode look like here?
    // dark mode looks like a black background and the button will say Change to Light Mode
    if (bodyElement.style.backgroundColor == "grey") {
        bodyElement.style.backgroundColor = "black"
        darkModeBtnElement.innerHTML="Change to Light Mode"
   // if it's in light mode, change it to dark mode
    // what does light mode look like here?
    // light mode looks like a tan background and the button will say Change to Dark Mode
    } else {
        bodyElement.style.backgroundColor = "grey"
        darkModeBtnElement.innerHTML="Change to Dark Mode"
    }
}
