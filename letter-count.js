function LetterCount(str) { 
  let words = str.split(' ');
  let result = [];
  for (word of words) {
    result.push(numberOfRepeatedLetters(word));
  }
  return getTheKeyOfTheHighestValue(result);
}

function numberOfRepeatedLetters (word) {
  let mySet = new Set(word);
  let n = word.length - mySet.size;
  mySet.clear();
  return [word, n];
}

function getTheKeyOfTheHighestValue (arr) {
  let maxValue = 0;
  let maxKey = '';
  for (let tuple of arr){
      if (tuple[1] > maxValue) {
        maxValue = tuple[1];
        maxKey = tuple[0];
      }
  }
  return maxValue === 0 ? -1 : maxKey;
}
