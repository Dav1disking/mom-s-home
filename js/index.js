const menubar = document.getElementById('menubar')
const navItems = document.getElementById('nav')
const home = document.getElementById('Home')
const healthwellness = document.getElementById('Health & Wellness')
const toolsfeatures = document.getElementById('Tools & features')
const marketplace = document.getElementById('Marketplace')
const community = document.getElementById('Community')

let clicked = 1

menubar.addEventListener("click", () => {
    navItems.classList.toggle("hidden")
    menubar.src = 'assets/menubar.png';
    clicked += 1;
    
    if (clicked >= 2) {
        menubar.src = 'assets/close.png';
        clicked = 0;
    }

})

home.addEventListener("click", () => {
   home.style.color = "black";
   healthwellness.style.color = "white";
   toolsfeatures.style.color = "white";
   marketplace.style.color = "white";
   community.style.color = "white";
})

healthwellness.addEventListener("click", () => {
    home.style.color = "white";
    healthwellness.style.color = "black";
    toolsfeatures.style.color = "white";
    marketplace.style.color = "white";
    community.style.color = "white";
 })

toolsfeatures.addEventListener("click", () => {
    home.style.color = "white";
   healthwellness.style.color = "white";
   toolsfeatures.style.color = "black";
   marketplace.style.color = "white";
   community.style.color = "white";
 })

marketplace.addEventListener("click", () => {
    home.style.color = "white";
    healthwellness.style.color = "white";
    toolsfeatures.style.color = "white";
    marketplace.style.color = "black";
    community.style.color = "white";
 })

community.addEventListener("click", () => {
    home.style.color = "white";
    healthwellness.style.color = "white";
    toolsfeatures.style.color = "white";
    marketplace.style.color = "white";
    community.style.color = "black";
 })