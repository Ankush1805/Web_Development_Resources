/**
 * 1. Call Stack
 * 2. Breakpoints
 */

function one() {
    return 1;
}

function two() {
    return one() + one();
}

function three() {
    let ans = two() + one();
    console.log(ans);
}

// three();



/** 3. Callback hell -> callback nesting
 * ============================================================================================================================================
 * a situation in programming, especially in JavaScript, where multiple nested callbacks are used in an asynchronous function sequence, 
 * resulting in code that is difficult to read and maintain
 */

// Example-1
let h1 = document.querySelector("h1");

function changeColor(color, delay, nextColorChange) {
    setTimeout(() => {
        h1.style.color = color;
        if(nextColorChange) {
            nextColorChange();
        }
    }, delay);
}

changeColor("red", 1000, () => {
    changeColor("yellow", 1000, () => {
        changeColor("green", 1000, () => {
            changeColor("blue", 1000);
        });
    });
});


// Example-2
function saveToDB(data, success, failure) {
    let internetSpeed = Math.floor( Math.random() * 10) + 1;
    if(internetSpeed > 4) {
        success();
    }else {
        failure();
    }
}

// saveToDB(
//     "firstName",
//     () => {
//         console.log("success: your data was saved");
//         saveToDB(
//             "middleName",
//             () => {
//                 console.log("success: your data was saved");
//                 saveToDB(
//                     "lastName",
//                     () => {
//                         console.log("success: your data was saved");
//                     },
//                     () => {
//                         console.log("failure: weak connection. data not saved");
//                     }
//                 );
//             },
//             () => {
//                 console.log("failure: weak connection. data not saved");
//             }
//         );
//     },
//     () => {
//         console.log("failure: weak connection. data not saved");
//     }
// );



/** 4. Promises (Object) -> resolve & reject
 * ============================================================================================================================================
 * provide a way to write asynchronous code in a more manageable way by chaining `.then()` methods.
 */


// Example-2 -> using promises and async/await syntax to avoid "callback hell" to make your code more readable and maintainable
//=============================================================================================================================================

function saveToDBWithPromise(data) {
    return new Promise( (success, failure) => {
        let internetSpeed = Math.floor( Math.random() * 10) + 1;
    if(internetSpeed > 4) {
        success("success: data was saved");
    }else {
        failure("failure: weak connection. data not saved");
    }
    });
}

// Promise Chaining-> improved version
//=============================================================================================================================================

// saveToDBWithPromise("data1")
//     .then( () => {
//         console.log("data1 saved");
//         return saveToDBWithPromise("data2");
//     } )
//     .then( () => {
//         console.log("data2 saved");
//         return saveToDBWithPromise("data3")
//     } )
//     .then( () => {
//         console.log("data3 saved");
//     } )
//     .catch( () => {
//         console.log("promise was rejected");
//     } );


// Results & Error in Promises ->
//=============================================================================================================================================
// saveToDBWithPromise("data1")
//     .then( (result) => {
//         console.log("data1 saved");
//         console.log("result-", result);
//         return saveToDBWithPromise("data2");
//     } )
//     .then( (result) => {
//         console.log("data2 saved");
//         console.log("result-", result);
//         return saveToDBWithPromise("data3")
//     } )
//     .then( (result) => {
//         console.log("data3 saved");
//         console.log("result-", result);
//     } )
//     .catch( (error) => {
//         console.log("promise was rejected");
//         console.log("error-", error);
//     } );





// Example-1 -> Refractoring old code
//=============================================================================================================================================

function changeColorWithPromise(color, delay) {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve("color changed!")
        }, delay);
    } );
    
}

changeColorWithPromise("red", 1000)
    .then((result) => {
        console.log("result-", result);
        return changeColorWithPromise("yellow", 1000)
    })
    .then((result) => {
        console.log("result-", result);
        return changeColorWithPromise("green", 1000)
    })
    .then((result) => {
        console.log("result-", result);
        return changeColorWithPromise("blue", 1000)
    })
    .catch((error) => {
        console.log("error-", error);
    })


