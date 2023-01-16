//import dictionary probably
import dictionary from "./dictionaryArray.js";
import panagrams from "./panagrams.js";

let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export default function test(letters) {
  let badLetters = alphabet.filter(letter => !letters.includes(letter));
  let answers = dictionary.filter(word => panagrams(word, letters, badLetters));

  answers = answers.sort();

  let answerArea = document.getElementById("answers");
  answerArea.innerHTML = "";

  if (answers.length) {
    answers.forEach(
      (answer) => {
        let answerNode = document.createElement("p");
        answerNode.innerText = answer;
        answerArea.appendChild(answerNode);
      }
    );
  } else {
    let answerNode = document.createElement("p");
    answerNode.innerText = "No possible panagrams!";
    answerArea.appendChild(answerNode);
  }


}

