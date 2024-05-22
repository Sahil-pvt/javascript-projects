const passwordBox = document.getElementById("password");
const length = 8;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

const generateBtn = document.getElementById("generate");
const copyBtn = document.getElementById("copy");

function generatePassword() {
    let password = "";
    for (let i = 0; i < length; i++) {
        const random = Math.floor(Math.random() * 4);
        if (random == 0) {
            password += upperCase.charAt(Math.floor(Math.random() * upperCase.length));
        } else if (random == 1) {
            password += lowerCase.charAt(Math.floor(Math.random() * lowerCase.length));
        } else if (random == 2) {
            password += numbers.charAt(Math.floor(Math.random() * numbers.length));
        } else {
            password += symbols.charAt(Math.floor(Math.random() * symbols.length));
        }
    }
    passwordBox.value = password;
}

generateBtn.addEventListener("click", generatePassword);
copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(passwordBox.value);
})