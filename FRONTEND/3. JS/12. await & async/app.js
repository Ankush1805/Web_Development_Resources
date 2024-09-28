/** async -> keyword is used to define asynchronous functions
 * ============================================================================================================================================
 * This means that the function will always return a promise, and other code can continue executing while the asynchronous function is running
 */

// resolved state
async function greet() {
    return "hello!";
}

// rejected state
async function greet() {
    throw("404 page not found");
    return "hello!";
}

greet()
    .then( (result) => {
        console.log("promise was resolved");
        console.log("result: ", result)
    } )
    .catch( (error) => {
        console.log("promise was rejected");
        console.log("error: ", error)
    } );

// async with arrow function
let arrowFunc = async () => {
    return "async with arrow function";
};


/** await -> keyword can only be used inside an async function
 * ============================================================================================================================================
 * pauses the execution of the async function and waits for the promise to resolve or reject
 * When the promise is resolved, the await expression returns the resolved value. 
 * If the promise is rejected, the await expression throws the rejected value
 */

let h1 = document.querySelector("h1");

function changeColorWithPromise(color, delay) {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            console.log(`color changed to ${color}!`)
            resolve("color changed!")
        }, delay);
    } );
    
}

// changeColorWithPromise("red", 1000)
//     .then((result) => {
//         console.log("result-", result);
//         return changeColorWithPromise("yellow", 1000)
//     })
//     .then((result) => {
//         console.log("result-", result);
//         return changeColorWithPromise("green", 1000)
//     })
//     .then((result) => {
//         console.log("result-", result);
//         return changeColorWithPromise("blue", 1000)
//     })
//     .catch((error) => {
//         console.log("error-", error);
//     })


// Refracting above code
async function demo() {
    await changeColorWithPromise("red", 1000);
    await changeColorWithPromise("yellow", 1000);
    await changeColorWithPromise("green", 1000);
    await changeColorWithPromise("blue", 1000);
}
demo();
