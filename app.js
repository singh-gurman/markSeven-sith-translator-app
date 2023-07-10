const inputBox = document.querySelector("#input-box");
const translateBtn = document.querySelector("#btn-translate");
const outputBox = document.querySelector("#output-box");

const serverUrl = "https://api.funtranslations.com/translate/sith.json";

function completeUrl(text) {
  return serverUrl + "?" + "text=" + text;
}

function jsonParse(response) {
  return (response = response.json());
}

function showOutput(json) {
  return (outputBox.innerText = json.contents.translated);
}

function errorHandler(error) {
  console.log("Error occured: " + error);
  alert("The Server is not responding, please try again later!");
}

function outputStyle() {
  outputBox.style.background = "#050f23";
  outputBox.style.border = " 0.2rem solid #e9257b";
}

function clickHandler() {
  const inputText = inputBox.value;
  fetch(completeUrl(inputText))
    .then(jsonParse)
    .then(showOutput)
    .catch(errorHandler);
  outputStyle();
}

translateBtn.addEventListener("click", clickHandler);
