console.log("Cookie Clicker");
let data = {
    classic: 0,
    christmas: 0,
  };

const classic = document.getElementById("classic");
console.log(classic);
const christmas = document.getElementById("christmas");

let data{
    classic=0;
    christmas=0;
}

function addOne(type) {
    if (type === "classic") {
       data.classic++;
       classic.textContent = data.classic;
    } else if (type === "christmas") {
       data.christmas++;
      christmas.textContent = data.christmas;
    }

    const stringifiedData= JSON.stringify(data);
    localStorage.setItem("data",stringifiedData);
}

function getLocalStoarage(){
    const localData=localStorage.getItem("data");
    data=JSON.parse(localData);
    classic.textContent=data.classic;
    christmas.textContent=data.christmas;
}
getLocalStoarage();
classic.addEventListener("click",function()
{
    addOne("classic");
})
christmas.addEventListener("click",function()
{
    addOne("christmas");
})
