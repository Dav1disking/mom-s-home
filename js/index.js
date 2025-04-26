const menubar = document.getElementById('menubar')
const navItems = document.getElementById('nav')

menubar.addEventListener("click", () => {
    navItems.classList.toggle("hidden")
})

