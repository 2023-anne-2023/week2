console.log("COOKIE CLICKER");
let counter = 0; 
const sold = document.getElementById("sold");
const classic= document.getElementById("classic");
const grandma= document.getElementById("buygrandma");

grandma.addEventListener("click",change);
function change()
{

}

setInterval(addOne,1000);
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

if(counter>10)
{
  document.getElementById('table.buygrandma').style.backgroundColor="#FF0000";
  document.increment=counter+1;
  addOne();
  document.credit=1;
}

if(counter>100)
{
  document.getElementById('table.buyoven').style.backgroundColor="#FF0000";
  document.increment=counter+10;
  addOne();
  document.credit=1;
}

if(counter>1000)
{
  document.getElementById('table.buyfactory').style.backgroundColor="#FF0000";
  document.increment=counter+100;
  addOne();
  document.credit=1;
}

if(counter>10000)
{
  document.getElementById('table.buymine').style.backgroundColor="#FF0000";
  document.increment=counter+1000;
  addOne();
  document.credit=1;
}

if(counter>10000)
{
  document.getElementById('table.buybank').style.backgroundColor="#FF0000";
  document.increment=counter+100;
  addOne();
  document.credit=1;
}

