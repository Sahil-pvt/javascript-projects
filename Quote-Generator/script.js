const apiUrl = 'https://api.quotable.io/random';
const quote = document.getElementById('quote');
const author = document.getElementById('author');
const newQuote = document.getElementById('get-quote');


async function getQuote(url){
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    quote.innerText = data.content;
    author.innerText = data.author;
}

getQuote(apiUrl);

function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + " ---- by " + author.innerHTML, "Tweet window", "width=600, height=300")
}


