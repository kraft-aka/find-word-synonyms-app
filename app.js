const dataMuseUrl = "https://api.datamuse.com/words?";
const queryParams = ["rel_syn=", 'rel_jjb=']; //'rel_jja=';
//const queryParams2 = 'rel_jjb=';
//https://api.datamuse.com/words?rel_syn=forgetful

const inputEl = document.querySelector(".input-field");
const btnEl = document.querySelector(".submit-btn");
const outputEl = document.querySelector(".output");
const choiceBtnEl = document.getElementsByClassName('query-options').value


const fetchData = async () => {
  const wordQuery = inputEl.value;
  const url = `${dataMuseUrl}${queryParams[0]}${wordQuery}`;

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
  const trimRes = res.slice(0,7);
  outputEl.innerHTML = `<text>${JSON.stringify(trimRes)}</text>`;
};

// diplay data
const displayData = (res) => {
  if(!res) {
    outputEl.innerHTML = 'Failed!'
  }
  if(!res.length) {
    outputEl.innerHTML = 'Please, try again!'
  }

  const list = [];
  let words;
  for(let i = 0; i < (Math.min(res.length, 7)); i++) {
    list.push(`<li>${res[i].word}</li>`);
  }

  words = list.join('');
  outputEl.innerHTML = words
}

btnEl.addEventListener("click", (e) => {
  e.preventDefault();
  fetchData();
});

inputEl.addEventListener('focus', (e)=> {
  e.target.value = ''
});

// const getIndex = choiceBtnEl.forEach(btn => {
//   if(btn.value == 0) {
//     return 0
//   } 
//   if(btn.value == 1) {
//     return 1
//   }
// })