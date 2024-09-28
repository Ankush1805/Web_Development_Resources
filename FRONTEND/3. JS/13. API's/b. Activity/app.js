/** Get Cat Facts
 * ============================================================================================================================================
 */

let button1 = document.querySelector("#btn-1");

button1.addEventListener("click", async () => {
    let fact = await getFacts();
    console.log(fact);

    let p = document.querySelector("#cat-fact");
    p.innerText = fact;
});

let catFacturl= "https://catfact.ninja/fact";

async function getFacts() {
    try{
        let response = await axios.get(catFacturl);
        return response.data.fact;
    } catch(error) {
        console.log('Error - ', error);
        return "No fact found";
    }
}


/** Get Dog Images ->
 * ============================================================================================================================================
 */

let button2 = document.querySelector("#btn-2");

button2.addEventListener("click", async () => {
    let imageLink = await getDogImage();
     console.log(imageLink);

     let img = document.querySelector("#dog-images");
     img.setAttribute("src", imageLink);
});

let dogImageUrl = "https://dog.ceo/api/breeds/image/random";

async function getDogImage() {
    try{
        let response = await axios.get(dogImageUrl);
        return response.data.message;
    } catch(error) {
        console.log('Error - ', error);
        return "No Image found";
    }
}


/** Query Strings ->
 * ============================================================================================================================================
 */

// Step-1
let reqresURL = "https://reqres.in/api/users?page=";
async function getUsersInfo(pageNo) {
    try {
        let res = await axios.get(reqresURL + pageNo);
        return res.data.data; // Access the 'data' property of the response
    } catch(error) {
        console.log("Error - ", error);
        return []; // return empty array
    }
}

// Step-2
let btn3 = document.querySelector("#btn-3");
btn3.addEventListener("click", async () => {
   let pageNo = document.querySelector("input").value;
   console.log(`Page No-`, pageNo);

  let usersArray = await getUsersInfo(pageNo);

   show(usersArray);

});

// Step-3
function show(usersArray) {
    let list = document.querySelector("#users-list");
    list.innerText = ""; // making list empty everybtimw when new pagNo is entered
    for(user of usersArray) {
        console.log(user.first_name);

        let li = document.createElement("li");
        li.innerText = user.first_name;
        list.appendChild(li);
    }
}



