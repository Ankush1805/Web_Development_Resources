/**
 * Qs-3. enter a user’s name so it should only input letters from a-z, A-Z and space (all other characters should not be detected)
 * ============================================================================================================================================
 */
let input = document.querySelector("input");

input.addEventListener("input", function(event) {
    // Regular expression to match only allowed characters (a-z, A-Z, space)
    const allowedCharacters = /^[a-zA-Z ]*$/; // ensures that the input field (input.value) contains only characters from a-z, A-Z, and spaces ( )
    
    // '^' asserts the start of the string.
    // '[a-zA-Z ]' defines a character set that includes lowercase letters (a-z), uppercase letters (A-Z), and the space character ( ).
    // '*' allows zero or more occurrences of the characters in the set
    // '$' asserts the end of the string
    if (!allowedCharacters.test(input.value)) {
        input.value = input.value.replace(/[^a-zA-Z ]/g, '');
    }
});

input.addEventListener("change", function() {
    console.log(input.value)

    let h2 = document.querySelector("h2");
    h2.innerText = input.value;
});



/**
 * Qs-2. change the button’s color to green when it is clicked
 * ============================================================================================================================================
 */

let button = document.querySelector("button");

button.addEventListener("click", function() {
    button.style.backgroundColor = "green";
});



/**
 * Qs-1. Try out the following events (mouseout, keypress, Scroll, load)
 * ============================================================================================================================================
 */
input.addEventListener("mouseout", function() {
    console.log("mouseout");
});

input.addEventListener("keypress", function() {
    console.log("keypress");
});

let div = document.querySelector("div");

// window is used because the scroll event in JavaScript is fired on the window object when the user scrolls the page vertically or horizontally
window.addEventListener("scroll", function() {
    // window.scrollY represents the vertical scroll position of the window.
    if (window.scrollY > 50) {
        div.style.backgroundColor = "orange";
    } else {
        div.style.backgroundColor = "lightblue";
    }
});

