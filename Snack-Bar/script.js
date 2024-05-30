let snackbar = document.getElementById("snackbar");
let successMsg = "<i class='fa-solid fa-circle-check'></i> Succesfully added!";
let errorMsg = "<i class='fa-solid fa-circle-xmark'></i> Please fill all the fields!";
let warningMsg = "<i class='fa-solid fa-circle-exclamation'></i> Invalid input!";

function showSnackbar(msg) {
    let toast = document.createElement("div");
    toast.classList.add("toast");
    toast.innerHTML = msg;
    snackbar.appendChild(toast);

    if (msg.includes("fill")) {
        toast.classList.add("error");
    }
    if (msg.includes("Invalid")) {
        toast.classList.add("invalid");
    }

    setTimeout(() => {
        toast.remove();
    }, 3000);
}