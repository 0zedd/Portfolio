const menuim = document.querySelector(".menuim");
const navexpand = document.querySelector(".nav_expand");
const iconx = document.querySelector(".iconx");
const expand = document.querySelector("#ims");

menuim.addEventListener("click",() => {
    menuim.classList.toggle("active");
    navexpand.classList.toggle("active");
});

iconx.addEventListener("click",() => {
    navexpand.classList.toggle("active");
});
