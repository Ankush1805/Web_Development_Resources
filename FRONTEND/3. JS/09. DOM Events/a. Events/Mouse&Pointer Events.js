/**  DOM (Document Object Model) ->
 * ============================================================================================================================================
 * 
 * - document is an object that represents the entire HTML document
 * - querySelector is a method that returns the first element within the document that matches the specified selector (in this case, the button selector)
 * - document.querySelector method is used to select the first element that matches the specified CSS selector
 * 
 * - console.dir displays an interactive list of the properties of the specified JavaScript object
 * 
 * - onclick property is a DOM event handler that executes a specified function when the element is clicked.
 * - onmouseenter property is a DOM event handler that executes a specified function when the mouse pointer enters the element
 */
let btn = document.querySelector("button"); // This line selects the first <button> element in the HTML document and assigns it to the variable btn.

console.dir(btn); // This line logs the btn object to the console

btn.onclick = function () {
    console.log("button clicked");
}

let btns = document.querySelectorAll("button"); // This line of the code selects all <button> elements in the document

for (btn of btns) {
    btn.onmouseenter = function () { // This will log the message to the console every time the mouse pointer enters the button.
        console.log("You entered a button");
    }
    
    btn.onclick = function () {
        alert("button clicked");
    }
};


/** Event Listener ->
 * ============================================================================================================================================
 */
function sayHello() {
    alert("Hello");
};

function sayName() {
    alert("Ankush");
};

// first assignment (sayHello) will be overwritten by the second assignment (sayName). 
// As a result, only sayName will be called when a button is clicked
for (btn of btns) {
    // btn.onclick = sayHello;
    // btn.onclick = sayName;
};

// To ensure both sayHello and sayName are called on button clicks, you can use an event listener.
// This code uses addEventListener to attach both functions to the click event, ensuring both are executed when the button is clicked.
for (btn of btns) {
    // btn.addEventListener("click", sayHello);
    // btn.addEventListener("click", sayName);
};


/** Event Listener's for Elements
 * ============================================================================================================================================
 */
let p = document.querySelector("p");
p.addEventListener("click", function() {
    console.log("Paragraph was clicked");
});

let box = document.querySelector(".box");
box.addEventListener("mouseenter", function() {
    console.log("Mouse hovered inside box");
});



/** 'this' in event listener ->
 * ============================================================================================================================================
 * when 'this' is used in callback of event handler of something, it refers to that something
 * 
 * Within the function, this refers to the element that triggered the event. 
 * If the paragraph (p) is clicked, this will refer to the paragraph element. 
 * If the box element is clicked, this will refer to the box element.
 */
function changeColor() {
    console.dir(this.innerText);
    this.style.backgroundColor = "blue";
}

p.addEventListener("click", changeColor);
box.addEventListener("click", changeColor);


/** Keyborad Events ->
 * ============================================================================================================================================
 * 
 * 'event' object provides various properties and methods that allow you to interact with and retrieve information about the event
 */
let input = document.querySelector("input");

input.addEventListener("keydown", function(event) { // 'event'-> object that contains information about the event that occurred
    // console.log(event);
    console.log(`key: ${event.key}`);
    console.log(`key: ${event.code}`);
    console.log("Key was pressed");
});

input.addEventListener("keyup", function(event) {
    // console.log(event);
    // console.log(`key: ${event.key}`);
    // console.log(`key: ${event.code}`);
    // console.log("Key was pressed hold & released");
});


/** Form Events ->
 * ============================================================================================================================================
 */
let form = document.querySelector("form");

// After the alert is shown, the form will submit normally, which typically involves sending the form data to the server and reloading the page.
form.addEventListener("submit", function() {
    // alert("Form Submitted");
});

// After the alert is shown, the form will not submit, meaning the page will not reload, and the form data will not be sent to the server.
form.addEventListener("submit", function(event) {
    event.preventDefault(); // method used to prevent the default action (form submission) that belongs to the event from being executed.
    alert("Form Submitted");
});


/** Extracting Form Data
 * ============================================================================================================================================
 */
form.addEventListener("submit", function(event) {
    event.preventDefault(); 
    let username = document.querySelector("#username");
    let password = document.querySelector("#password");
    console.log(username.value);
    console.log(password.value);
});

// OR

form.addEventListener("submit", function(event) {
    event.preventDefault(); 
    let username = this.elements[0];
    let password = this.elements[1];
    console.log(username.value);
    console.log(password.value);
});



/** change Events -> 
 * ============================================================================================================================================
 * the change event occurs when the value of an element has been changed
 * only works on - <input>, <textarea>, <select> elements
 */
form.addEventListener("submit", function(event) {
    event.preventDefault(); 
});

let user = document.querySelector("#username");
user.addEventListener("change", function() {
    console.log("changed event");
    console.log(this.value);
});



/** input events ->
 * ============================================================================================================================================
 * the input event fires when value of an <input>, <textarea>, <select> elements has been changed
 * non-character key do'nt trigger input events (arrow keys, shift key, ctrl key)
 */
form.addEventListener("submit", function(event) {
    event.preventDefault(); 
});

user.addEventListener("input", function() {
    console.log("input event");
    console.log(this.value);
});



/** Event bubbling -> allows an event triggered on a child element to propagate up to its parent elements
 * ============================================================================================================================================
 * When you click on any <li> element, the click event is first handled by the <li>'s event listener,
 * The event then bubbles up to the <ul>, triggering the <ul>'s event listener
 * Finally, the event bubbles up to the <div>, triggering the <div>'s event listener
 */
let eventBubbling = document.querySelector(".event-bubbling");
let ul = document.querySelector("ul");
let li = document.querySelector("li");

eventBubbling.addEventListener("click", function(event) {
    event.stopPropagation(); // Prevents the event from bubbling up
    console.log("div was clicked");
});

ul.addEventListener("click", function(event) {
    event.stopPropagation(); // Prevents the event from bubbling up
    console.log("ul was clicked");
});

li.addEventListener("click", function(event) {
    event.stopPropagation(); // Prevents the event from bubbling up
    console.log("li was clicked");
});








