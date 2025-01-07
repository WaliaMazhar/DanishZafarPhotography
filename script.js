const mobNav = document.querySelector("#mob-nav");

const menuIcon = document.querySelector(".menu-icon")


// console.log(mobNav)

menuIcon.addEventListener("click" , () => {
    mobNav.classList.toggle("show")
})


// menuIcon.addEventListener("click" , () => {
    // mobNav.classList.remove("show")
// })