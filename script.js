// This runs when the page loads
console.log("Hello from JavaScript!");

// Create a function
function greetUser() {
    let name = prompt("What's your name?");
    alert("Welcome, " + name + "!");
    console.log("User name:", name);
}

// Add a counter
let visitCount = 0;
function countVisit() {
    visitCount = visitCount + 1;
    console.log("You've clicked " + visitCount + " times");
    document.getElementById("counter").innerText = visitCount;
}