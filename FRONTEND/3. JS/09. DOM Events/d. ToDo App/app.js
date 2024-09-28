let btn = document.querySelector("button");
let input = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click", function() {
    let tasks = document.createElement("li");
    tasks.innerText = input.value;
    
    // <button class="delete">Delete</button>
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.classList.add("delete");

    tasks.appendChild(deleteBtn);
    ul.appendChild(tasks);

    input.value = ""; // reset the value after adding the task
});

// Below delete function will not work for new taks added (new tasks added will not be deleted)
// let deleteBtns = document.querySelectorAll(".delete");
// for(deleteBtn of deleteBtns) {
//     deleteBtn.addEventListener("click", function() {
//         let parent = this.parentElement;
//         parent.remove();
//     });
// }




/** Event Delegation ->
 * ============================================================================================================================================
 * a technique in JavaScript where a single event listener is added to a parent element to manage events for its child elements
 * This approach uses event bubbling to efficiently handle events, especially when dealing with many child elements
 */

// adding event listener to parent elements i.e <li> or <ul>
ul.addEventListener("click", function(event) {
    // The `event.target` property refers to the element that was the actual target of the event (i.e., the element that was clicked)
    console.log(event.target);

    // The `nodeName` property of this target element provides the tag name of the element in uppercase (e.g., LI for list items).
    console.log(event.target.nodeName);

    if(event.target.nodeName == "BUTTON") {
        let tasksList = event.target.parentElement;
        tasksList.remove();
    }
})
