/**
 * Step-1
 * ============================================================================================================================================
 */

let gameSequence = [];
let userSequence = [];

let h2 = document.querySelector("h2");

let btns = ["red", "yellow", "green", "purple"];

let gameStarted = false;
let level = 0;

let h3 = document.querySelector("h3");
let highestScore = 0;

document.addEventListener("click", function() {
    if(gameStarted === false) {
        console.log("Game Started");
        gameStarted = true;

        levelUp();
    }
});


/**
 * Step-2 -> Flash button & Level Up
 * ============================================================================================================================================
 */

function gameFlash(btn) {
    // adding class=flash for element, which has styling set in css file
    btn.classList.add("flash");

    // removing class=flash for element
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn) {
    // adding class=flash for element, which has styling set in css file
    btn.classList.add("userFlash");

    // removing class=flash for element
    setTimeout(function() {
        btn.classList.remove("userFlash");
    }, 250);
}

function levelUp() {
    userSequence = []; // setting userSequence to empty value when level up
    level++;
    h2.innerText = `Level ${level}`;

    let randomIndex = Math.floor(Math.random() * 3);
    let randomColor = btns[randomIndex];
    // selectiong random button
    let randomBtn = document.querySelector(`.${randomColor}`);

    gameSequence.push(randomColor);
    // console.log(`Game sequence: ${gameSequence}`); // converts the array gameSequence into a comma-separated string representation of its elements
    console.log("Game sequence:", gameSequence);

    gameFlash(randomBtn);
}


/**
 * Step-3 -> Button Event Listeners
 * ============================================================================================================================================
 */

function checkAns(index) {
    // console.log(`Current Level: ${level}`);
    // let index = level-1;

    if(userSequence[index] === gameSequence[index]) {
        // console.log("same value");
        if(userSequence.length === gameSequence.length) {
            setTimeout(levelUp, 1000);
        }
    }else {
        // Update highest score if current level is greater
        if(level > highestScore) {
            highestScore = level;
            h3.innerText = `Highest Score: Level ${highestScore}`;
        }

        // h2.innerText = `Game Over!Press any box to start`;
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br>Press any box to start`;

        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);

        setTimeout(reset, 2000);
    }


}

function btnPress() {
    // console.log(this); // `this` button was pressed
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    // console.log(`User pressed ${userColor} box`);
    userSequence.push(userColor);
    // console.log(`User sequence: ${gameSequence}`); // converts the array gameSequence into a comma-separated string representation of its elements
    console.log(`User sequence: ${userSequence}`);

    checkAns(userSequence.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns) {
    btn.addEventListener("click", btnPress);
}



/**
 * Step-4 -> Matching the sequence
 * ============================================================================================================================================
 */

// function levelUp() {
//     level++;
//     let h2 = document.querySelector("h2");
//     h2.innerText = `Level ${level}`;

//     let randomIndex = Math.floor(Math.random() * 3);
//     let randomColor = btns[randomIndex];
//     // selectiong random button
//     let randomBtn = document.querySelector(`.${randomColor}`);

//     gameSequence.push(randomColor);
//     console.log(gameSequence);

//     gameFlash(randomBtn);
// }

// function btnPress() {
//     console.log(this); // `this` button was pressed
//     let btn = this;
//     userFlash(btn);

//     let userColor = btn.getAttribute("id");
//     console.log(`User pressed ${userColor} box`);
//     userSequence.push(userColor);

//     checkAns();
// }

// function checkAns() {
//     console.log(`Current Level: ${level}`)
//     let index = level-1;

//     if(userSequence[index] === gameSequence[index]) {
//         console.log("same value");
//     }else {
//         h2.innerText = "Game Over!!! Press any box to start";
//     }
// }


/**
 * Step-5 -> Reset
 * ============================================================================================================================================
 */

function reset() {
    gameStarted = false;
    gameSequence = [];
    userSequence = [];
    level = 0;
}



