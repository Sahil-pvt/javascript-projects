let userInput = document.getElementById("dob");
userInput.max = new Date().toISOString().split("T")[0];
let result = document.getElementById("res");

let dialog = document.getElementById("myDialog");
let dialogText = document.getElementById("dialog-text");

function calculateAge() {
    const dob = new Date(userInput.value);

    let d1 = dob.getDate();
    let m1 = dob.getMonth() + 1;
    let y1 = dob.getFullYear();

    let today = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    let d3, m3, y3;

    y3 = y2 - y1;

    if (m2 >= m1) {
        m3 = m2 - m1;
    } else {
        y3--;
        m3 = 12 + m2 - m1;
    }

    if (d2 >= d1) {
        d3 = d2 - d1;
    } else {
        m3--;
        let days = getDaysInMonth(m1, y1);
        d3 = days + d2 - d1;
    }

    if (m3 < 0) {
        m3 = 11;
        y3--;
    }

    dialog.showModal();

    dialogText.innerHTML = "You are <span id='age'>" + y3 + "</span> Years, <span>" + m3 + "</span> Months and <span>" + d3 + "</span> Days old.";

    // result.innerHTML = "You are <span>" + y3 + "</span> Years, <span>" + m3 + "</span> Months and <span>" + d3 + "</span> Days old.";

}

function getDaysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

function closeDialog() {
    dialog.close();
}