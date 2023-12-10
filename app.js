console.log("COOKIE CLICKER");
let counter = 0; 
const sold = document.getElementById("sold");
const classic= document.getElementById("classic");



function addOne() {
    counter++;
    sold.textContent = counter;
    localStorage.setItem("counter", counter);
}
function reset(){
  localStorage.setItem("reset",0);
}
classic.addEventListener("click",reset);
classic.addEventListener("click",addOne);
function getLocalStorage() {
    const localCounter = localStorage.getItem("counter");

 counter = localCounter;

 sold.textContent = counter;
}
getLocalStorage();








