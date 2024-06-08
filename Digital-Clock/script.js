var hours = document.getElementById('hours');
var minutes = document.getElementById('minutes');
var seconds = document.getElementById('seconds');
setInterval(() => {
    var today = new Date();
    var h = (today.getHours() < 10 ? "0" : "") + today.getHours();
    var m = (today.getMinutes() < 10 ? "0" : "") + today.getMinutes();
    var s = (today.getSeconds() < 10 ? "0" : "") + today.getSeconds();
    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
}, 1000)