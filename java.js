let btn = document.getElementById("barre_menu"),
    menu = document.getElementById("menu");

btn.addEventListener("click",function () {
    menu.classList.toggle("show");
    btn.classList.toggle("ferme")
})