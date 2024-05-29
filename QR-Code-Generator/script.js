let imgBox = document.getElementById("imgBox");
let qrImg = document.getElementById("qr");
let input = document.getElementById("i1");

function generateQR() {
    if (input.value.length > 0) {
        qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + input.value;
        imgBox.classList.add("show-img");
    } else {
        input.classList.add("error");
        setTimeout(() => {
            input.classList.remove("error");
        }, 1000);
    }
}