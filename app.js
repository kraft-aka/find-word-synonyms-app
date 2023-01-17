const dataMuseUrl = "https://api.datamuse.com/words?";
const queryParams = "rel_syn="; //'rel_jja=';
const queryParams2 = 'rel_jjb=';
//https://api.datamuse.com/words?rel_syn=forgetful

const inputEl = document.querySelector(".input-field");
const btnEl = document.querySelector(".submit-btn");
const outputEl = document.querySelector(".output");

const fetchData = async () => {
  const wordQuery = inputEl.value;
  const url = `${dataMuseUrl}${queryParams2}${wordQuery}`;

  try {
    const response = await fetch(url);
    if (response.ok) {
      const responseJson = await response.json();
      console.log(responseJson);
      //displayRawData(responseJson);
      displayData(responseJson);
    }
  } catch (error) {
    console.log(error);
  }
};

// displays row data response
const displayRawData = (res) => {
  const trimRes = res.slice(0,5)
  outputEl.innerHTML = `<text>${JSON.stringify(trimRes)}</text>`;
};

// diplay data
const displayData = (res) => {
  if(!res) {
    outputEl.innerHTML = 'Failed!'
  }
  if(!res.length) {
    outputEl.innerHTML = 'Please, enter a  word to search!'
  }

  const list = [];
  let words;
  for(let i = 0; i < 5; i++) {
    list.push(`<li>${res[i].word}</li>`);
  }

  words = list.join('');
  outputEl.innerHTML = words
}

btnEl.addEventListener("click", (e) => {
  e.preventDefault();
  fetchData();
});
