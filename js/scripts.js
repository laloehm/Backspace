var icon = document.querySelector("#hamburguer-icon");

icon.addEventListener("click", toggleClass);

function toggleClass() {
    icon.classList.toggle("active");
}