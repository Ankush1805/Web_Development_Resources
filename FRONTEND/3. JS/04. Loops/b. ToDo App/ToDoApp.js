
let todo = [];
let req = prompt("Please enter your request (list / add / delete / quit).");

while(true) {
    if(req == "quit") {
        console.log("Quitting App");
        break;
    }

    if(req == "list") {
        console.log("----------------");
        for(let i=0; i < todo.length; i++) {
            console.log(i, todo[i]);
        }
        console.log("----------------");

    } else if(req == "add") {
        let task = (prompt("Please enter your task."));
        todo.push(task);
        console.log(`Task added : ${task}`);
    } else if(req == "delete") {
        let index = prompt("Please enter index of task you want to delete.");
        todo.splice(index, 1);
        console.log(`Task deleted`);
    }
    req = prompt("Please enter your request (list / add / delete / quit).");
}
