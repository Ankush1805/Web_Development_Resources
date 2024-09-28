/** Accessing JSOn data ->
 * ============================================================================================================================================
 * JSON.parse(data) -> to parse a string data into JS object
 * 
 * JSON.stringify(json) -> to parse JS object into JSON
 */

let jsonResponse = 
`{"fact":"Cats that live together sometimes rub each others heads to show that they have no intention of fighting. Young cats do this more often, especially when they are excited.","length":169}`;

let validResponse = JSON.parse(jsonResponse);
console.log(validResponse);
console.log(validResponse.fact);
console.log(validResponse.length);



/** AJAX -> Asynchronous JavaScript and XML
 * ============================================================================================================================================
 * a technique used to create fast and dynamic web pages by allowing web pages to be updated asynchronously by exchanging small amounts of data 
 * with the server behind the scenes.
 * This means that it is possible to update parts of a web page, without reloading the whole page.
 */



/** First Request using fetch() ->
 * ============================================================================================================================================
 */

let url = "https://catfact.ninja/fact"; // correct url
// url = "https://catfact.ninja/factttt"; // incorrect url

// fetch() -> returns a promise. So we can use then() & catch()
fetch(url)
    .then((response) => {
        // console.log(response);
        // The fetch API returns a Response object, and to read the JSON body of the response, you need to call the json method of the Response object. 
        return response.json(); // This method returns a promise that resolves with the result of parsing the body text as JSON.
    })
    .then((data1) => {
        console.log("data1 - ", data1.fact);
        return fetch(url);
    })
    .then((response) => {
        return response.json();
    })
    .then((data2) => {
        console.log("data2 - ", data2.fact);
    })
    .catch((error) => {
        console.log("ERROR - ", error);
    });


/** Using fetch() with async-await ->
 * ============================================================================================================================================ 
 */    

async function getFacts(){
    try{
        let response1 = await fetch(url);
        let data1 = await response1.json();
        console.log("data1 with async-await - ", data1.fact);

        let response2 = await fetch(url);
        let data2 = await response2.json();
        console.log("data2 with async-await - ", data2.fact);

    } catch(e){
        console.log("Error - ", e);
    }
}

getFacts();


/** Axios ->
 * ============================================================================================================================================
 * JavaScript library used to make HTTP requests from Node.js or XMLHttpRequests from the browser.
 * It supports promises and is often used to handle asynchronous operations.
 * With fetch, you need to manually convert the response to JSON. With Axios, this is done automatically
 */

async function getFactsUsingAxios(){
    try{
        let response1 = await axios.get(url);
        console.log(response1);

        let response2 = await axios.get(url);
        console.log(response2);

    } catch(e){
        console.log("Error - ", e);
    }
}

getFactsUsingAxios();


// Sending headers with API request
// ============================================================================================================================================

const dadJokeurl = "https://icanhazdadjoke.com/"

// data in HTML format
async function getJokes() {
    try {
        let res = await axios.get(dadJokeurl);
        console.log(res.data); // data is in HTML format
        return res;
    } catch(error) {
        console.log("Error - ", error);
    }
}

// data in JSON format
async function getJokes() {
    try {
        const config = { headers: {Accept: "application/json"} }; // Step-1
        let res = await axios.get(dadJokeurl, config);       // Step-2
        console.log(res.data); // data is in HTML format
        return res;
    } catch(error) {
        console.log("Error - ", error);
    }
}


getJokes();







