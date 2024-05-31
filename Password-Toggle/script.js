let eyeicon = document.getElementById("eye");
let password = document.getElementById("password");

eyeicon.onclick = function () {
    if (password.type === "password") {
        password.type = "text";
        eyeicon.src = "img/show.png";
    } else {
        password.type = "password";
        eyeicon.src = "img/hide.png";
    }
}