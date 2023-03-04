const input = document.getElementById("wordIpt");
const contentDiv = document.getElementById("content");
const wordHeader = document.getElementById("word");
const phoneticsText = document.getElementById("phonetics-text");
const phoneticsAudio = document.querySelector("#phonetics-audio");
const apiUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/";

document.getElementById("findWord").addEventListener("click", () => {
    console.log("click")
    const word = input.value;
    getData(word)
})

function getData(word){
    const resourceUrl = apiUrl + word;
    fetch(resourceUrl)
        .then(res => res.json())
        .then(data => processData(data[0]))
        .catch(err => console.log(err))
}

function processData(data){
    wordHeader.innerHTML = data.word;
    console.log(data)
    phoneticsAudio.setAttribute("src", `${data.phonetics[2].audio}`);
    phoneticsText.innerHTML = data.phonetics[2].text;
}