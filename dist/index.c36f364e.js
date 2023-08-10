function ShowCartbox(event) {
    const cartBox = document.getElementById("cart-box");
    const cartIcon = document.querySelector(".Cart");
    if (cartIcon.contains(event.target)) {
        cartBox.style.visibility = "visible";
        cartBox.style.right = "0";
    } else if (!cartBox.contains(event.target)) {
        cartBox.style.visibility = "hidden";
        cartBox.style.right = "0";
    }
}
document.addEventListener("click", ShowCartbox);
function loginwebsitefun() {
    window.location.href = "./Login/index.html";
}
function homepage() {
    window.location.href = "./index.html";
}
function Fashiontrendspage() {
    window.location.href = "./Fashiontrendpage/index.html";
}
function Constructiontoolspage() {
    window.location.href = "./Constructiontoolspage/index.html";
}
function Fitnesspage() {
    window.location.href = "./Fitness/index.html";
}
function Homeandkitchenpage() {
    window.location.href = "./Homeandkitchenpage/index.html";
}
function Healthcarepage() {
    window.location.href = "./HealthCarepage/index.html";
}
function kidspage() {
    window.location.href = "./kidsbox/index.html";
}
function salepage() {
    window.location.href = "./Salebox/index.html";
}

//# sourceMappingURL=index.c36f364e.js.map
