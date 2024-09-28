let btn = document.querySelector("button");

btn.addEventListener("click", function() {
    let randomColor = generateandomColor();

    let h3 = document.querySelector("h3");
    h3.innerText = randomColor; // innerText is a property of a DOM  used to set or get the text content inside an HTML element

    let div = document.querySelector("div");
    div.style.backgroundColor = randomColor;

    console.log("Color updated");
});

function generateandomColor() {
    let red = Math.floor( Math.random() * 255 ); // no need for '+ 1' as we are including '0' integer as well
    let green = Math.floor( Math.random() * 255 );
    let blue = Math.floor( Math.random() * 255 );

    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}

