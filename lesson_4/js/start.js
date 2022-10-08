// Get-Date

const d = new Date();
const  year = d.getFullYear();
const lastmod = document.querySelector("#lastmod");
lastmod.textContent = `Last updated at ${document.lastModified}`;
document.getElementById("current_year").innerHTML = year;
const fulldateUK = new Intl.DateTimeFormat("en-UK",{dateStyle: "full"}).format(d);
document.querySelector(".currentdate").textContent = fulldateUK;

function toggleMenu(){
	document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerbttn").classList.toggle("open")
}
// Hamburger-Button

const x  = document.getElementById("hamburgerbttn")
    x.onclick = toggleMenu;


let dayNumber =  d.getDay();

let element = document.getElementById("message");
if (dayNumber == 1 || dayNumber == 2){
    element.classList.add("showme");
} else {
    element.classList.add("hideme");
}


