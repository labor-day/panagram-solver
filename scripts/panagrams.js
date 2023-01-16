export default function panagrams(word, letters, badLetters) {

  //check for good letters
  for (let i = 0; i < letters.length; i++) {
    if (!word.includes(letters[i])) { return false }
  }

  //check for bad letters
  for (let i = 0; i < badLetters.length; i++) {
    if (word.includes(badLetters[i])) { return false }
  }

  return true;
}
