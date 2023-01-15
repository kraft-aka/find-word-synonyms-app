const dataMuseUrl = "https://api.datamuse.com/words?";
const queryParams = "rel_syn="; //'rel_jja=';
//https://api.datamuse.com/words?rel_syn=forgetful

const inputEl = document.querySelector(".input-field");
const btnEl = document.querySelector(".submit-btn");
const outputEl = document.querySelector(".output");

const fetchData = async () => {
  const wordQuery = inputEl.value;
  const url = `${dataMuseUrl}${queryParams}${wordQuery}`;

  try {
    const response = await fetch(url);
    if (response.ok) {
      const responseJson = response.json();
      console.log(responseJson);  
      outputEl.innerHTML = responseJson
    }
  } catch (error) {
    console.log(error);
  }
};

btnEl.addEventListener("click", (e) => {
  e.preventDefault();
  fetchData();
});
