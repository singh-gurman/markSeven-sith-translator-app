const inputBox = document.querySelector("#input-box");
const translateBtn = document.querySelector("#btn-translate");
const outputBox = document.querySelector("#output-box");

const serverUrl =
  "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

function completeUrl(text) {
  return serverUrl + "?" + "text=" + text;
}

function jsonParse(response) {
  return (response = response.json());
}

function showOutput(json) {
  return (outputBox.innerText = json.contents.translated);
}

function clickHandler() {
  const inputText = inputBox.value;
  fetch(completeUrl(inputText)).then(jsonParse).then(showOutput);
}

translateBtn.addEventListener("click", clickHandler);
